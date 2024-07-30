import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/useAuth";
import "../assets/css/App.css";

export const Login = () => {
  const { loginEmailPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await loginEmailPassword(email, password);
      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/"); // Redirige a la ruta deseada después del inicio de sesión
      } else {
        setError(
          data.message || "Error al iniciar sesión. Inténtalo de nuevo."
        );
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Error al iniciar sesión. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Iniciar Sesión</h1>
        <input
          className="login-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" type="submit">
          Iniciar Sesión
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <p className="register-link">
        ¿No tienes una cuenta? <a href="/register">Regístrate</a>
      </p>
    </div>
  );
};
