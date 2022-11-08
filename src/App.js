import { useState, useEffect } from "react";
import GlobalStyles from "./components/styles/Global";
import AppContainer from "./components/styles/AppContainer.styled";
import Grid from "./components/styles/Grid.styled";
import CurrentLocation from "./components/currentLocation/CurrentLocation";
import Measurement from "./components/measurement/Measurement";
import Map from "./components/map/Map";
import { getWeatherData, getCoordinates } from "./components/api/api";
import { defaultLocation } from "./constants";

const initialPos = {
  lat: null,
  lon: null,
};

const currentForecast = (data) => {
  if (!data) {
    return {
      icon: "",
      temp: null,
      description: "",
      cityName: "",
      timezone: "",
    };
  }

  const { icon } = data.list[0].weather[0];
  const { temp } = data.list[0].main;
  const { description } = data.list[0].weather[0];
  const { name: cityName, timezone } = data.city;

  return {
    icon,
    temp,
    description,
    cityName,
    timezone,
  };
};

const futureForecast = (data) => {
  if (!data) {
    return [];
  }

  const timestamps = data.list.filter((_, index) => index < 5);

  return timestamps;
};

const App = () => {
  const [defaultPosition, setDefaultPosition] = useState(initialPos);
  const [position, getPosition] = useState(initialPos);
  const [weather, getWeather] = useState();

  useEffect(() => {
    // test if geolocation is available
    if ("geolocation" in navigator) {
      // available
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getPosition({
            lat: latitude,
            lon: longitude,
          });
          getWeatherData(latitude, longitude, getWeather);
        },
        () => {
          getCoordinates("Tokio", setDefaultPosition);
          console.log("Geolocation denied");
        }
      );
    } else {
      // not available
      console.log("Geolocation not available!");
      // set Bolzano as default Location
      getWeatherData(defaultLocation.lat, defaultLocation.long, getWeather);
      getPosition(defaultLocation);
    }
  }, []);

  useEffect(() => {
    if (defaultPosition.lat && defaultPosition.lon) {
      getWeatherData(defaultPosition.lat, defaultPosition.lon, getWeather);
    }
  }, [defaultPosition.lat, defaultPosition.lon]);

  const currentTimeStamp = currentForecast(weather);
  const timestamps = futureForecast(weather);

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Grid>
          <CurrentLocation data={currentTimeStamp} />
          <Measurement data={timestamps} />
          <Map />
        </Grid>
      </AppContainer>
    </>
  );
};

export default App;

// TODO: only pass the data needed to the Chart Components
