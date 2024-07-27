import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PropTypes from "prop-types";

const Map = ({ center, markerPosition, popupText }) => {
  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "500px", width: "80%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={markerPosition}>
        <Popup>{popupText}</Popup>
      </Marker>
    </MapContainer>
  );
};

Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  markerPosition: PropTypes.arrayOf(PropTypes.number).isRequired,
  popupText: PropTypes.string.isRequired,
};

export default Map;
