import Map from "../map/Map";

export const PuenteAlto = () => {
  return (
    <div>
      <h1>Puente Alto</h1>
      <Map
        center={[-33.570358, -70.584049]}
        markerPosition={[-33.570358, -70.584049]}
        popupText="Av. Concha y Toro lateral 3880, 8150215 La Florida, Puente Alto, Región Metropolitana"
      />
    </div>
  );
};
