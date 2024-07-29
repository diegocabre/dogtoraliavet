import "../assets/css/App.css";

export const Inicio = () => {
  return (
    <div className="inicio-container">
      <section className="inicio-section">
        <div className="inicio-title">
          <h1>Dogtoralia</h1>
        </div>
        <div className="inicio-img-container">
          <img
            className="inicio-img"
            src="public/imgs/Bienvenida.jpg"
            alt="Bienvenida"
          />
        </div>
      </section>
    </div>
  );
};
