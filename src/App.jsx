import { useContext } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Inicio } from "./components/Inicio";
import { Login } from "./auth/Login";
import { Menu } from "./components/Menu";
import { Contacto } from "./components/Contacto";
import { PuenteAlto } from "./components/PuenteAlto";
import { Centro } from "./components/Centro";
import { RedesSociales } from "./components/RedesSociales";
import { Register } from "./auth/Register";
import { Usuarios } from "./page/Usuarios";
import { ReservarHora } from "./auth/ReservarHora";

import { AuthContext } from "./auth/useAuth";

export const App = () => {
  const { token } = useContext(AuthContext);

  return (
    <>
      <Header />
      <RedesSociales />
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/login"
          element={token ? <Navigate to="/usuarios" /> : <Login />}
        />
        <Route path="/reservar" element={<ReservarHora />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/usuarios"
          element={token ? <Usuarios /> : <Navigate to="/login" />}
        />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/puentealto" element={<PuenteAlto />} />
        <Route path="/centro" element={<Centro />} />
        <Route path="*" element={<Inicio />} />
      </Routes>
    </>
  );
};
