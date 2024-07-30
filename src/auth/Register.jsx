import { useState, useContext } from "react";
import { AuthContext } from "../auth/useAuth";
import "../assets/css/App.css";

export const Register = () => {
  const { registerWithEmailPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rut, setRut] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [error, setError] = useState(""); // Añadir estado para manejar errores

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await registerWithEmailPassword(email, password, rut, nombre, apellidos);
      // Aquí podrías redirigir al usuario o mostrar un mensaje de éxito
    } catch (error) {
      console.error(error);
      setError("Error al registrar el usuario. Inténtalo de nuevo."); // Manejar el error
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h1 className="register-title">Registrar</h1>
        <label htmlFor="rut">Rut</label>
        <input
          className="register-input"
          type="text"
          id="rut"
          value={rut}
          onChange={(e) => setRut(e.target.value)}
        />
        <label htmlFor="nombre">Nombre</label>
        <input
          className="register-input"
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label htmlFor="apellidos">Apellidos</label>
        <input
          className="register-input"
          type="text"
          id="apellidos"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          className="register-input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          className="register-input"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register-button" type="submit">
          Registrar
        </button>
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Mostrar mensaje de error */}
      </form>
    </div>
  );
};
