import { useState, useEffect, useCallback } from "react";
import GlobalStyles from "./components/styles/Global";
import AppContainer from "./components/styles/AppContainer.styled";
import Grid from "./components/styles/Grid.styled";
import CurrentLocation from "./components/currentLocation/CurrentLocation";
import Measurement from "./components/measurement/Measurement";
import Map from "./components/map/Map";
import useHttp from "./components/hooks/use-http";
import LoadingSpinner from "./components/loadingSpinner/LoadingSpinner";
import ErrorModal from "./components/modal/ErrorModal";
import { Route, Switch, useHistory } from "react-router-dom";
import NotFound from "./components/notFound/NotFound";
import {
  API_URL_LOCATION,
  API_KEY_WEATHER,
  API_URL_FORECAST,
} from "./constants";

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
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  const history = useHistory();

  const {
    errorMessage,
    sendRequest: fetchData,
    position,
    setPosition,
    weatherData,
  } = useHttp();

  const success = useCallback(
    (position) => {
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
        history.push("/home");
      }, 5000);
    },
    [history, setPosition]
  );

  const error = useCallback(() => {
    setMessage(
      "Could not get your position! Bolzano is set as the default location..."
    );
    setTimeout(() => {
      fetchData(
        `${API_URL_LOCATION}Bolzano&limit=1&appid=${API_KEY_WEATHER}`,
        "coordinates"
      );
      console.log("Geolocation denied!");
      setIsLoading(false);
      history.push("/home");
    }, 5000);
  }, [history, fetchData]);

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
        fetchData(
          `${API_URL_LOCATION}Bolzano&limit=1&appid=${API_KEY_WEATHER}`,
          "coordinates"
        );
        console.log("Geolocation not available!");
        setIsLoading(false);
        history.push("/home");
      }, 5000);
    }
  }, [error, success, history, fetchData]);

  useEffect(() => {
    if (position.lat && position.lon) {
      fetchData(
        `${API_URL_FORECAST}${position.lat}&lon=${position.lon}&cnt=5&appid=${API_KEY_WEATHER}&units=metric`,
        "weather"
      );
    }
  }, [position, fetchData]);

  const plotWeatherData = filterWeatherData(weatherData);
  const forecastWeatherData = filterWeatherData(weatherData, false);

  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact>
          {isLoading && <LoadingSpinner message={message} />}
        </Route>
        <Route path="/home/error">
          {errorMessage && <ErrorModal error={errorMessage} />}
        </Route>
        <Route path="/home">
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
