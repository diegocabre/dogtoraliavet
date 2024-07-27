import { NavLink } from "react-router-dom";
import logo from "../assets/imgs/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../assets/css/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo-img" />
        </NavLink>
      </div>

      <div className="nav">
        <Navbar expand="lg" className="navbar">
          <Container className="navbar-container">
            <Nav className="me-auto">
              <Nav.Link href="/login">
                <button className="nav-button iniciarsesion">
                  Iniciar Sesion
                </button>
              </Nav.Link>
              <Nav.Link href="/reservarhora">
                <button className="nav-button reservarhora">
                  Reservar Hora
                </button>
              </Nav.Link>
              <Nav.Link href="/staff">
                <button className="nav-button staff">Staff</button>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}
