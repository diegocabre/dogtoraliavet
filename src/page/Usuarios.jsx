import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Usuarios = () => {
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Suponiendo que el token se almacena en localStorage

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get("http://localhost:3000/api/usuarios/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUsuario(response.data);
      })
      .catch((error) => {
        setError("No se pudo obtener los datos del usuario.");
        console.error("Error al obtener los datos del usuario:", error);
      });
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!usuario) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>
        Bienvenido, {usuario.nombre} {usuario.apellidos}
      </h1>
      <button onClick={handleLogout}>Logout</button>
      <h2>Información de la Mascota</h2>
      {/* Aquí podrías agregar más funcionalidad para reservar horas y agregar mascotas */}
      <footer>{/* Aquí puedes agregar el contenido del footer */}</footer>
    </div>
  );
};

