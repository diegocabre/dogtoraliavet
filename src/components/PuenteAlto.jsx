import Map from "../map/Map";
import Button from "react-bootstrap/Button";

export const PuenteAlto = () => {
  return (
    <>
      <section>
        <h1>Puente Alto</h1>
        <Map
          center={[-33.570358, -70.584049]}
          markerPosition={[-33.570358, -70.584049]}
          popupText="Av. Concha y Toro lateral 3880, 8150215 La Florida, Puente Alto, Región Metropolitana"
        />
      </section>

      <section>
        <Button
          variant="primary"
          href="/ecommerce"
          className="ecommerce-button"
          size="lg"
        >
          Ecommerce
        </Button>
      </section>
    </>
  );
};
