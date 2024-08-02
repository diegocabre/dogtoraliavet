import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Importa PropTypes
import { Navigate } from "react-router-dom";

// Crea y exporta el contexto
export const AuthContext = createContext();
const initialStateToken = localStorage.getItem("token") || null;

const UseAuth = ({ children }) => {
  const [token, setToken] = useState(initialStateToken);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const loginEmailPassword = async (email, password) => {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    setToken(data.token || null);

    return data;
  };

  const registerWithEmailPassword = async (
    email,
    password,
    rut,
    nombre,
    apellidos
  ) => {
    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, rut, nombre, apellidos }),
    });

    const data = await response.json();

    return data;
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    Navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ token, loginEmailPassword, registerWithEmailPassword, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Define la validación de props usando PropTypes
UseAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UseAuth;
