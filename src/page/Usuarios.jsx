import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Usuarios = () => {
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState(null);
  const [mensajeExito, setMensajeExito] = useState("");
  const [mostrarFormularioMascota, setMostrarFormularioMascota] =
    useState(false);
  const [nombreMascota, setNombreMascota] = useState("");
  const [tipoMascota, setTipoMascota] = useState("");
  const [edadMascota, setEdadMascota] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

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
        const errorMessage =
          error.response?.data?.message ||
          "No se pudo obtener los datos del usuario.";
        setError(
          `${errorMessage} (Código de estado: ${error.response?.status})`
        );
        console.error("Error al obtener los datos del usuario:", error);
      });
  }, [token, navigate]);

  const handleAddMascota = async (event) => {
    event.preventDefault();

    try {
      await axios.post(
        "http://localhost:3000/api/mascotas",
        {
          nombre: nombreMascota,
          especie: tipoMascota,
          edad: edadMascota,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMensajeExito("Mascota agregada correctamente.");
      setMostrarFormularioMascota(false);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "No se pudo agregar la mascota.";
      setError(`${errorMessage} (Código de estado: ${error.response?.status})`);
      console.error("Error al agregar la mascota:", error);
    }
  };

  const handleProfilePicChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("foto_perfil", file);

      try {
        await axios.post(
          "http://localhost:3000/api/usuarios/me/foto",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        alert("Foto de perfil actualizada.");
      } catch (error) {
        console.error("Error al actualizar la foto de perfil:", error);
        setError("Error al actualizar la foto de perfil.");
      }
    }
  };

  const handleRegisterHour = async (event) => {
    event.preventDefault();
    // Implementa el registro de hora aquí
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

      <h2>Editar Foto de Perfil</h2>
      <div>
        <img
          src="/ruta/a/imagen/por/defecto.jpg"
          alt="Foto de Perfil"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <input type="file" accept="image/*" onChange={handleProfilePicChange} />
        <button onClick={handleProfilePicChange}>Editar Foto de Perfil</button>
      </div>

      <h2>Agregar Mascota</h2>
      <button onClick={() => setMostrarFormularioMascota(true)}>
        Agregar Mascota
      </button>

      {mostrarFormularioMascota && (
        <form onSubmit={handleAddMascota}>
          <label htmlFor="nombreMascota">Nombre de la mascota</label>
          <input
            id="nombreMascota"
            type="text"
            value={nombreMascota}
            onChange={(e) => setNombreMascota(e.target.value)}
            required
          />

          <label htmlFor="tipoMascota">Tipo de mascota</label>
          <input
            id="tipoMascota"
            type="text"
            value={tipoMascota}
            onChange={(e) => setTipoMascota(e.target.value)}
            required
          />

          <label htmlFor="edadMascota">Edad de la mascota</label>
          <input
            id="edadMascota"
            type="number"
            value={edadMascota}
            onChange={(e) => setEdadMascota(e.target.value)}
            required
          />

          <button type="submit">Guardar Mascota</button>
        </form>
      )}

      {mensajeExito && <p>{mensajeExito}</p>}

      <h2>Registrar Hora</h2>
      <form onSubmit={handleRegisterHour}>
        {/* Agrega campos para registrar la hora aquí */}
        <button type="submit">Registrar Hora</button>
      </form>
    </div>
  );
};
