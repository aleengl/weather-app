// import { useState, useEffect } from "react";
import GlobalStyles from "./components/styles/Global";
import AppContainer from "./components/styles/AppContainer.styled";
import Grid from "./components/styles/Grid.styled";
import CurrentLocation from "./components/currentLocation/CurrentLocation";
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
      <AppContainer>
        <Grid>
          <CurrentLocation />
          <Measurement />
          <Forecast />
          <Map />
        </Grid>
      </AppContainer>
    </>
  );
}

export default App;
