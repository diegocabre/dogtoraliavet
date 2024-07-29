import { useState } from "react";
import "../assets/css/App.css"; // Asegúrate de tener este archivo CSS

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rut, setRut] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    // Implementar lógica de registro aquí
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
      </form>
    </div>
  );
};
