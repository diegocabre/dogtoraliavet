import { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../public/imgs/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../auth/useAuth"; // Importa el AuthContext
import "../assets/css/App.css";

export const Header = () => {
  const { token, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo-img" />
        </NavLink>
      </div>

      <Navbar expand="lg" className="navbar">
        <Container className="navbar-container">
          <Nav className="nav-buttons">
            {!token ? (
              <>
                <Nav.Link href="/login" className="nav-link">
                  <button className="nav-button iniciarsesion">
                    Iniciar Sesión
                  </button>
                </Nav.Link>
                <Nav.Link href="/login" className="nav-link">
                  <button className="nav-button reservarhora">
                    Reservar Hora
                  </button>
                </Nav.Link>
                <Nav.Link href="/login" className="nav-link">
                  <button className="nav-button staff">Staff</button>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/reservar" className="nav-link">
                  <button className="nav-button reservarhora">
                    Reservar Hora
                  </button>
                </Nav.Link>
                <Nav.Link href="/" className="nav-link" onClick={logout}>
                  <button className="nav-button logout">Logout</button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
