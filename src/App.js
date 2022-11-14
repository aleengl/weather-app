import { useState, useEffect } from "react";
import GlobalStyles from "./components/styles/Global";
import AppContainer from "./components/styles/AppContainer.styled";
import Grid from "./components/styles/Grid.styled";
import CurrentLocation from "./components/currentLocation/CurrentLocation";
import Measurement from "./components/measurement/Measurement";
import Map from "./components/map/Map";
import { getWeatherData, getCoordinates } from "./components/api/api";
import LoadingSpinner from "./components/loadingSpinner/LoadingSpinner";
import ErrorModal from "./components/modal/ErrorModal";
import { Route, Switch } from "react-router-dom";
import NotFound from "./components/notFound/NotFound";

const filterWeatherData = (weatherData, isPlotted = true) => {
  if (isPlotted) {
    const timezone = weatherData.city?.timezone;
    const timestamps = weatherData.list;

    return { timezone, timestamps };
  }

  const firstElement = weatherData.list[0];

  const icon = firstElement?.weather[0].icon;
  const temp = firstElement?.main.temp;
  const description = firstElement?.weather[0].description;
  const cityName = weatherData.city?.name;
  const timezone = weatherData.city?.timezone;

  return {
    icon,
    temp,
    description,
    cityName,
    timezone,
  };
};

const App = () => {
  const [position, setPosition] = useState({
    lat: null,
    lon: null,
  });
  const [weather, setWeather] = useState({
    list: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const success = (position) => {
    const { latitude: lat, longitude: lon } = position.coords;
    setMessage(
      "Could get your position! Weather data will be available soon..."
    );
    setTimeout(() => {
      setPosition({
        lat: lat,
        lon: lon,
      });
      setIsLoading(false);
    }, 5000);
  };

  const error = () => {
    setMessage(
      "Could not get your position! Bolzano is set as the default location..."
    );
    setTimeout(() => {
      getCoordinates("Bolzano", setPosition, setErrorMessage);
      console.log("Geolocation denied!");
      setIsLoading(false);
    }, 5000);
  };

  useEffect(() => {
    // test if geolocation is available
    if ("geolocation" in navigator) {
      // geolocation available
      navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true,
      });
    } else {
      // geolocation not available
      setMessage(
        "The browser is not able to get your position! Bolzano is set as the default location..."
      );
      setTimeout(() => {
        getCoordinates("Bolzano", setPosition, setErrorMessage);
        console.log("Geolocation not available!");
        setIsLoading(false);
      }, 5000);
    }
  }, []);

  useEffect(() => {
    if (position.lat && position.lon) {
      getWeatherData(position, setWeather, setErrorMessage);
    }
  }, [position]);

  const plotWeatherData = filterWeatherData(weather);
  const forecastWeatherData = filterWeatherData(weather, false);

  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path="/">
          {isLoading && <LoadingSpinner message={message} />}
          {errorMessage && <ErrorModal error={errorMessage} />}
          <AppContainer>
            <Grid>
              <CurrentLocation forecastData={forecastWeatherData} />
              <Measurement plotData={plotWeatherData} />
              <Map position={position} />
            </Grid>
          </AppContainer>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
};

export default App;

// TODO: add more Routes => path="/" is not specific enough for all the components => e.g. path /num renders the components => should render the NotFound component
// TODO: maybe try to improve accuracy with Geolocation API
