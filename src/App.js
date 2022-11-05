import { useState, useEffect } from "react";
import GlobalStyles from "./components/styles/Global";
import AppContainer from "./components/styles/AppContainer.styled";
import Grid from "./components/styles/Grid.styled";
import CurrentLocation from "./components/currentLocation/CurrentLocation";
import Measurement from "./components/measurement/Measurement";
import Map from "./components/map/Map";
import { getWeatherData } from "./components/api/api";
import WeatherContext from "./store/weather-context";

function App() {
  const [position, getPosition] = useState({
    lat: null,
    long: null,
  });
  const [weather, getWeather] = useState();

  console.log(weather);

  const success = (position) => {
    const { latitude, longitude } = position.coords;
    getPosition({
      lat: latitude,
      long: longitude,
    });
    getWeatherData(latitude, longitude, getWeather);
  };

  const error = (error) => {
    alert(`Error: ${error.message}`);
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      // test if geolocation is available
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      // may use Bolzano as a default city to show
      console.log("Geolocation not available!");
    }
  }, []);

  return (
    <>
      <WeatherContext.Provider value={weather}>
        <GlobalStyles />
        <AppContainer>
          {position.lat && <p>{position.lat}</p>}
          {position.long && <p>{position.long}</p>}
          <Grid>
            <CurrentLocation />
            <Measurement />
            <Map />
          </Grid>
        </AppContainer>
      </WeatherContext.Provider>
    </>
  );
}

export default App;

// TODO: only pass the data needed to the Chart Components
