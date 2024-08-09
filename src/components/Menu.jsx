import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../auth/useAuth";
import "../assets/css/App.css";

export const Menu = () => {
  const { token } = useContext(AuthContext);

  return (
    <div className="custom-menu">
      <NavLink className="custom-navlink" to="/">
        Inicio
      </NavLink>
      <NavLink className="custom-navlink" to="/contacto">
        Contacto
      </NavLink>
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className="custom-dropdown-toggle"
        >
          Tiendas
        </Dropdown.Toggle>
        <Dropdown.Menu className="custom-dropdown-menu">
          <Dropdown.Item className="custom-dropdown-item" href="/puentealto">
            Puente Alto
          </Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/centro">
            Centro
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {token && (
        <NavLink className="custom-navlink" to="/usuarios">
          Mi Perfil
        </NavLink>
      )}
    </div>
  );
};
