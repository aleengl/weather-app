import { useState, useEffect } from "react";
import GlobalStyles from "./components/styles/Global";
import AppContainer from "./components/styles/AppContainer.styled";
import Grid from "./components/styles/Grid.styled";
import CurrentLocation from "./components/currentLocation/CurrentLocation";
import Measurement from "./components/measurement/Measurement";
import Map from "./components/map/Map";

function App() {
  const [position, getPosition] = useState();

  const success = (position) => {
    getPosition(position);
  };

  const error = (error) => {
    alert(`Error: ${error.message}`);
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      // test if geolocation is available
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not available!");
    }
  }, []);
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
        {position && <p>{position.coords.latitude}</p>}
        {position && <p>{position.coords.longitude}</p>}
        <Grid>
          <CurrentLocation />
          <Measurement />
          <Map />
        </Grid>
      </AppContainer>
    </>
  );
}

export default App;
