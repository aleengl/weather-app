import L from "leaflet";

const LocationIcon = new L.Icon({
  iconUrl:
    "https://api.geoapify.com/v1/icon/?type=material&color=red&size=small&icon=cloud&scaleFactor=2&apiKey=d6e692628e8d4cf29f0dadc1ca6df3e8",
  iconSize: [35, 50],
  popupAnchor: [0, -45], // position of popup
  iconAnchor: [15, 45],
});

export default LocationIcon;
