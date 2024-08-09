import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
const initialStateToken = localStorage.getItem("token") || null;

const UseAuth = ({ children }) => {
  const [token, setToken] = useState(initialStateToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const loginEmailPassword = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Error en la autenticación");
      }

      const data = await response.json();
      setToken(data.token || null);

      // Navigate after successful login
      navigate("/dashboard");

      return data;
    } catch (error) {
      console.error("Login error:", error);
      return { message: "Error al iniciar sesión. Inténtalo de nuevo." };
    }
  };

  const registerWithEmailPassword = async (
    email,
    password,
    rut,
    nombre,
    apellidos
  ) => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, rut, nombre, apellidos }),
      });

      if (!response.ok) {
        throw new Error("Error en el registro");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Register error:", error);
      return { message: "Error al registrar el usuario. Inténtalo de nuevo." };
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token,
        loginEmailPassword,
        registerWithEmailPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

UseAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UseAuth;
