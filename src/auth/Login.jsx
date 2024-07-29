import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import "../assets/css/Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    auth
      .login(email, password)
      .then(() => {
        navigate("/reservarhora");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="login-title">Iniciar Sesión</h1>
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
          />
          <button className="login-button" type="submit">
            Iniciar Sesión
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </>
  );
};
