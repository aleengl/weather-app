import { useMap, Marker } from "react-leaflet";
import LocationIcon from "./LocationIcon";
import { StyledPopup } from "../styles/Map.styled";

const LocationMarker = (props) => {
  const map = useMap();

  // move marker to latitude, longitude position
  if (props.location.lat) {
    map.flyTo(props.location, 16);
  }

  const PopupContent = () => {
    return (
      <div>
        <h1>Location Information</h1>
        <p>
          <span>Location:</span> {props.details.name}, {props.details.country}
        </p>
        <p>
          <span>Latitude:</span> {props.location.lat.toFixed(2)}°
        </p>
        <p>
          <span>Longitude:</span> {props.location.lon.toFixed(2)}°
        </p>
        <p>
          <span>Sunrise:</span> {props.details.sunriseHourMin}
        </p>
        <p>
          <span>Sunset:</span> {props.details.sunsetHourMin}
        </p>
      </div>
    );
  };

  return props.location.lat === null ? null : (
    <Marker position={props.location} icon={LocationIcon}>
      <StyledPopup>
        <PopupContent />
      </StyledPopup>
    </Marker>
  );
};

export default LocationMarker;
