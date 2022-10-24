// import { useState, useEffect } from "react";
import GlobalStyles from "./components/styles/Global";
import Container from "./components/styles/Container.styled";
import Grid from "./components/styles/Grid.styled";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import Measurement from "./components/measurement/Measurement";
import Forecast from "./components/forecast/Forecast";
import Map from "./components/map/Map";

function App() {
  // const [data, setData] = useState([]);

  /* useEffect(() => {
    console.log("useEffect executed!");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}${API_KEY}`);
      if (!response.ok) {
        throw new Error("Fetching not successful!");
      }
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }; */

  return (
    <>
      <GlobalStyles />
      <Container>
        <Grid>
          <CurrentWeather />
          <Measurement />
          <Forecast />
          <Map />
        </Grid>
      </Container>
    </>
  );
}

export default App;
