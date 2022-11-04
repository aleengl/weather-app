import React from "react";
import { Container } from "../styles/Map.styled";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  ScaleControl,
} from "react-leaflet";
import styled from "styled-components";
import { useState } from "react";
import LocationIcon from "./LocationIcon";
import { centeredMap, PopupContent } from "../../constants";

const MyMap = styled(MapContainer)`
  height: 700px;
  font-size: 1.5rem;
`;

const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, 18); // takes the zoom as a number
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={LocationIcon}>
      <Popup>
        <PopupContent />
      </Popup>
    </Marker>
  );
};

const Map = () => {
  return (
    <Container>
      <MyMap
        center={centeredMap}
        zoom={8}
        minZoom={4}
        scrollWheelZoom={false}
        style={{ zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          opacity={0.8}
        />
        <LocationMarker />
        <ScaleControl imperial={false} maxWidth={200} position="topright" />
      </MyMap>
    </Container>
  );
};

export default Map;
