import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Login from "./auth/Login";
import Menu from "./components/Menu";
import Contacto from "./components/Contacto";
import PuenteAlto from "./components/PuenteAlto";
import Centro from "./components/Centro";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Menu />
        <>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/staff" element={<Login />} />
            <Route path="/reservarhora" element={<Login />} />
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
