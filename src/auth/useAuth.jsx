import { createContext, useState, useEffect } from "react";

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
    const response = await fetch("http://localhost:3000/api/login", {
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
    nombre,
    apellidos,
    rut
  ) => {
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, nombre, apellidos, rut }),
    });

    const data = await response.json();

    return data;
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ token, loginEmailPassword, registerWithEmailPassword, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UseAuth;
