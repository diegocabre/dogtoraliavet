import Map from "../map/Map";

const Centro = () => {
  return (
    <div>
      <h1>Dogtoralia Centro</h1>
      <Map
        center={[-33.4274487, -70.677764]}
        markerPosition={[-33.4274487, -70.677764]}
        popupText="Av. Pdte. Balmaceda 2776, Santiago, Región Metropolitana"
      />
    </div>
  );
};

export default Centro;
