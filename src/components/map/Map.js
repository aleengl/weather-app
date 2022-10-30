import { Container } from "../styles/Map.styled";
import MapChart from "./MapChart";

const Map = () => {
  return (
    <Container>
      <p>Current condition</p>
      <MapChart />
    </Container>
  );
};

export default Map;
