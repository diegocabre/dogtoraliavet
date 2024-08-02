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

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  const validateRut = (rut) => {
    const re = /^\d{1,2}\.\d{3}\.\d{3}-[\dKk]$/;
    return re.test(rut);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!email || !password || !rut || !nombre || !apellidos) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    if (!validateEmail(email)) {
      setError("El email no tiene un formato válido.");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (!validateRut(rut)) {
      setError("El RUT no tiene un formato válido.");
      return;
    }

    try {
      await registerWithEmailPassword(email, password, rut, nombre, apellidos);
      setEmail("");
      setPassword("");
      setRut("");
      setNombre("");
      setApellidos("");
      setError("");
      alert("Usuario registrado correctamente");
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
