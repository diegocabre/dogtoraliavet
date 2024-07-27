import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "../assets/css/Menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/contacto">Contacto</NavLink>
        </li>
        <li>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Tiendas
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/puentealto">Puente Alto</Dropdown.Item>
              <Dropdown.Item href="/centro">Centro</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
    </div>
  );
}
