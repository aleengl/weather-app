import { useState, useEffect } from "react";
import GlobalStyles from "./components/styles/Global";
import AppContainer from "./components/styles/AppContainer.styled";
import Grid from "./components/styles/Grid.styled";
import CurrentLocation from "./components/currentLocation/CurrentLocation";
import Measurement from "./components/measurement/Measurement";
import Map from "./components/map/Map";
import { getWeatherData, getCoordinates } from "./components/api/api";

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
    return {
      timestamps: [],
      timezone: null,
    };
  }

  const timestamps = data.list.filter((_, index) => index < 5);
  const { timezone } = data.city;

  return { timestamps, timezone };
};

const App = () => {
  const [position, getPosition] = useState({
    lat: null,
    lon: null,
  });
  const [weather, getWeather] = useState();

  useEffect(() => {
    // test if geolocation is available
    if ("geolocation" in navigator) {
      // available
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude: lat, longitude: lon } = position.coords;
          getPosition({
            lat: lat,
            lon: lon,
          });
        },
        () => {
          getCoordinates("Bolzano", getPosition);
          console.log("Geolocation denied");
        },
        { enableHighAccuracy: true }
      );
    } else {
      // not available
      console.log("Geolocation not available!");
      // set Bolzano as default Location
      getCoordinates("Bolzano", getPosition);
    }
  }, []);

  useEffect(() => {
    if (position.lat && position.lon) {
      getWeatherData(position.lat, position.lon, getWeather);
    }
  }, [position.lat, position.lon]);

  const currentTimeStamp = currentForecast(weather);
  const timestamps = futureForecast(weather);

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Grid>
          <CurrentLocation data={currentTimeStamp} />
          <Measurement data={timestamps} />
          <Map position={position} />
        </Grid>
      </AppContainer>
    </>
  );
};

export default App;
