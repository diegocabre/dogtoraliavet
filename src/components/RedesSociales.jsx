import "../assets/css/App.css";
import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export const RedesSociales = () => {
  return (
    <nav className="redessociales">
      <div className="container-fluid menu">
        <ul className="menu-ul">
          <li className="icon icon-instagram">
            <NavLink
              className="nav-link-instagram"
              to="https://www.instagram.com/dogtoralia/"
              target="_blank"
            >
              <i className="bi bi-instagram"></i>
              <span className="iconName">Instagram</span>
            </NavLink>
          </li>
          <li className="icon icon-facebook">
            <NavLink
              className="nav-link-facebook"
              to="https://www.facebook.com/dogtoralia/"
              target="_blank"
            >
              <i className="bi bi-facebook"></i>
              <span className="iconName">Facebook</span>
            </NavLink>
          </li>
          <li className="icon icon-whatsapp">
            <NavLink
              className="nav-link-whatsapp"
              to="https://wa.me/5491153028118"
              target="_blank"
            >
              <i className="bi bi-whatsapp"></i>
              <span className="iconName">Whatsapp</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
