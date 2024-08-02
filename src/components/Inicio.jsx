import "../assets/css/App.css";

export const Inicio = () => {
  return (
    <div className="inicio-container">
      <section className="inicio-section">
        <div className="inicio-title">
          <h1>¡Bienvenidos a Dogtoraliavet!</h1>
        </div>
        <div className="inicio-text">
          <p>
            En Dogtoraliavet, cuidamos de tus mascotas como si fueran nuestras.
            Con más de cuatro años de experiencia, estamos comprometidos a
            ofrecer un cuidado veterinario de alta calidad y un servicio
            personalizado. Gracias por confiar en nosotros para mantener a tus
            amigos peludos sanos y felices.
          </p>
        </div>
        <section className="vision-section">
          <div className="vision-title">
            <h2>Visión</h2>
          </div>
          <div className="vision-text">
            <p>
              Ser líderes en el cuidado integral de mascotas, reconocidos por
              nuestra dedicación, empatía y excelencia en el servicio
              veterinario, proporcionando un hogar saludable y feliz para cada
              mascota y su familia.
            </p>
          </div>
        </section>
        <section className="mision-section">
          <div className="mision-title">
            <h2>Misión</h2>
          </div>
          <div className="mision-text">
            <p>
              Ofrecer servicios veterinarios de alta calidad con un enfoque en
              el bienestar animal y la satisfacción del cliente, mediante un
              equipo comprometido y profesional. Nos esforzamos por crear un
              ambiente acogedor y seguro para todas las mascotas, ofreciendo
              atención personalizada y recursos educativos para ayudar a los
              propietarios a cuidar mejor a sus compañeros de vida.
            </p>
          </div>
        </section>
        <section className="valores-section">
          <div className="valores-title">
            <h2>Valores</h2>
          </div>
          <div className="valores-text">
            <p>
              <ul>
                <li>
                  <img src="imgs/Bienvenida.jpg" alt="Calidad" />
                  <h3>Calidad</h3>
                </li>
                <li>
                  <img src="imgs/Cirugias.jpg" alt="Compromiso" />
                  <h3>Compromiso</h3>
                </li>
                <li>
                  <img src="imgs/anestesia.jpg" alt="Respeto" />
                  <h3>Respeto</h3>
                </li>
                <li>
                  <img src="imgs/peluqueria.jpg" alt="Responsabilidad" />
                  <h3>Responsabilidad</h3>
                </li>
              </ul>
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};
