import { useState, useContext } from "react";
import { AuthContext } from "../auth/useAuth";
import "../assets/css/App.css";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const { registerWithEmailPassword } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rut: "",
    nombre: "",
    apellidos: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
  const validateRut = (rut) => /^\d{1,2}\.\d{3}\.\d{3}-[\dKk]$/.test(rut);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const { email, password, rut, nombre, apellidos } = formData;

    if (!email || !password || !rut || !nombre || !apellidos) {
      setError("Todos los campos son obligatorios.");
      setSuccess("");
      return;
    }

    if (!validateEmail(email)) {
      setError("El email no tiene un formato válido.");
      setSuccess("");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      setSuccess("");
      return;
    }

    if (!validateRut(rut)) {
      setError("El RUT no tiene un formato válido.");
      setSuccess("");
      return;
    }

    setLoading(true);

    try {
      const result = await registerWithEmailPassword(
        email,
        password,
        rut,
        nombre,
        apellidos
      );
      setLoading(false);
      if (result && result.message === "Usuario registrado correctamente") {
        setSuccess(result.message);
        setError("");
        setFormData({
          email: "",
          password: "",
          rut: "",
          nombre: "",
          apellidos: "",
        });
        navigate("/login");
      } else {
        setError(
          result.message || "Error al registrar el usuario. Inténtalo de nuevo."
        );
        setSuccess("");
      }
    } catch (error) {
      setLoading(false);
      console.error("Register error:", error);
      setError("Error al registrar el usuario. Inténtalo de nuevo.");
      setSuccess("");
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
          value={formData.rut}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="nombre">Nombre</label>
        <input
          className="register-input"
          type="text"
          id="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="apellidos">Apellidos</label>
        <input
          className="register-input"
          type="text"
          id="apellidos"
          value={formData.apellidos}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          className="register-input"
          type="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="password">Contraseña</label>
        <input
          className="register-input"
          type="password"
          id="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button className="register-button" type="submit" disabled={loading}>
          {loading ? "Registrando..." : "Registrar"}
        </button>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </form>
    </div>
  );
};
