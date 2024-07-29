import { NavLink } from "react-router-dom";
import logo from "../../public/imgs/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../assets/css/App.css";

export const Header = () => {
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
            <Nav.Link href="/login" className="nav-link">
              <button className="nav-button iniciarsesion">
                Iniciar Sesión
              </button>
            </Nav.Link>
            <Nav.Link href="/reservarhora" className="nav-link">
              <button className="nav-button reservarhora">Reservar Hora</button>
            </Nav.Link>
            <Nav.Link href="/staff" className="nav-link">
              <button className="nav-button staff">Staff</button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
