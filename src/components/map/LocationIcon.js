import L from "leaflet";
import mapPin from "../../img/postal-code-prefix.svg";

const LocationIcon = new L.Icon({
  iconUrl: mapPin,
  popupAnchor: [0, -45], // position of popup
  iconAnchor: [25, 45],
});

export default LocationIcon;
