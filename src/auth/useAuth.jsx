// useAuth.js
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Implementa tu lógica de autenticación aquí y devuelve una promesa
    return new Promise((resolve, reject) => {
      // Ejemplo de lógica de autenticación simulada
      if (email === "test@example.com" && password === "password") {
        setUser({ email });
        resolve();
      } else {
        reject(new Error("Email o contraseña incorrectos"));
      }
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
