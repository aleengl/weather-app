import { Container } from "../styles/Map.styled";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  ScaleControl,
  LayersControl,
} from "react-leaflet";
import styled from "styled-components";
import LocationIcon from "./LocationIcon";
import { centeredMap, PopupContent } from "../../constants";

const MyMap = styled(MapContainer)`
  height: 700px;
  font-size: 1.5rem;
`;

const LocationMarker = (props) => {
  const map = useMap();

  if (props.location.lat) {
    map.flyTo(props.location, 16);
  }

  return props.location.lat === null ? null : (
    <Marker position={props.location} icon={LocationIcon}>
      <Popup>
        <PopupContent />
      </Popup>
    </Marker>
  );
};

const { BaseLayer } = LayersControl;

const Map = (props) => {
  return (
    <Container>
      <MyMap
        center={centeredMap}
        zoom={8}
        minZoom={4}
        scrollWheelZoom={false}
        style={{ zIndex: 1 }}
      >
        <LocationMarker location={props.position} />
        <ScaleControl imperial={false} maxWidth={200} position="topright" />
        <LayersControl>
          <BaseLayer checked name="OpenStreetMap.HOT">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>, The map marker icons are generated with <a href="https://www.geoapify.com/">Geoapify</a>'
              url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <BaseLayer name="OpenTopoMap">
            <TileLayer
              maxZoom={17}
              attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>), The map marker icons are generated with <a href="https://www.geoapify.com/">Geoapify</a>'
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <BaseLayer name="Esri.WorldImagery">
            <TileLayer
              attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community, The map marker icons are generated with <a href="https://www.geoapify.com/">Geoapify</a>'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </BaseLayer>
        </LayersControl>
      </MyMap>
    </Container>
  );
};

export default Map;
