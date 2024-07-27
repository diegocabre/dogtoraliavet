// src\components\Inicio.jsx
import "../assets/css/Inicio.css";
export default function Inicio() {
  return (
    <>
      <div className="inicio">
        <section>
          <div className="title">
            <h1>Dogtoralia</h1>
          </div>
          <div className="img">
            <img
              className="img-inicio"
              src="public\imgs\Bienvenida.jpg"
              alt=""
            />
          </div>
        </section>
      </div>
    </>
  );
}
