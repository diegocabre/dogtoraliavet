import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Inicio } from "./components/Inicio";
import { Login } from "./auth/Login";
import { Menu } from "./components/Menu";
import { Contacto } from "./components/Contacto";
import { PuenteAlto } from "./components/PuenteAlto";
import { Centro } from "./components/Centro";
import { RedesSociales } from "./components/RedesSociales";
import { Register } from "./auth/Register";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RedesSociales />
        <Menu />
        <>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/staff" element={<Login />} />
            <Route path="/reservarhora" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/puentealto" element={<PuenteAlto />} />
            <Route path="/centro" element={<Centro />} />
            <Route path="*" element={<Inicio />} />
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}
