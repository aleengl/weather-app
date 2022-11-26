import React, { Suspense, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import StyledContainer from "./components/styles/Container.styled";
import { StyledGrid } from "./components/styles/Grid.styled";
import { Route, Switch } from "react-router-dom";
import useGeolocation from "./components/hooks/use-geolocation";
import useHttp from "./components/hooks/use-http";
import { API_KEY_WEATHER, API_URL_FORECAST } from "./constants";

const theme = {
  colors: {
    white: "#fff",
    dark: "#333333",
    grey: "#474747",
    black: "#000",
  },
  background: {
    gradient:
      "linear-gradient(315deg, #1b2c35, #1c2d36, #1f313a, #24363f, #2b3c46, #32444d, #394b55, #40535d, #475a64, #4c606a, #50646e, #51656f)",
  },
  border: {
    whiteBorder: "2px solid #fff",
    smallRadius: "5px",
    bigRadius: "15px",
  },
  transition: {
    all: "all .2s",
  },
  display: {
    flex: "flex",
  },
  position: {
    absolute: "absolute",
    fixed: "fixed",
    distanceFromBorder: "0",
  },
  transform: "translate(-50%, -50%)",
};

const filterWeatherData = (weatherData, isPlotted = true) => {
  if (isPlotted) {
    const timezone = weatherData.city?.timezone;
    const timestamps = weatherData.list.slice(1);

    return { timezone, timestamps };
  }

  const firstTimestamp = weatherData.list[0];

  const icon = firstTimestamp?.weather[0].icon;
  const temp = firstTimestamp?.main.temp;
  const description = firstTimestamp?.weather[0].description;
  const cityName = weatherData.city?.name;
  const timezone = weatherData.city?.timezone;

  return {
    icon,
    temp,
    description,
    cityName,
    timezone,
    firstTimestamp,
  };
};

// lazy loading => import and download the components when needed => can improve the performance especially for large scale applications
const LoadingSpinner = React.lazy(() =>
  import("./components/loadingSpinner/LoadingSpinner")
);
const ErrorModal = React.lazy(() => import("./components/modal/ErrorModal"));
const NotFound = React.lazy(() => import("./components/notFound/NotFound"));
const CurrentLocation = React.lazy(() =>
  import("./components/currentLocation/CurrentLocation")
);
const Measurement = React.lazy(() =>
  import("./components/measurement/Measurement")
);
const Map = React.lazy(() => import("./components/map/Map"));

let plotWeatherData, forecastWeatherData;

const App = () => {
  const {
    sendRequest: fetchWeatherDataFromInput,
    weatherData: weatherDataFromInput,
  } = useHttp();

  const [newPosition, setNewPosition] = useState();

  const { isLoading, message, errorMessage, weatherData, position } =
    useGeolocation();

  if (weatherDataFromInput.list.length !== 0) {
    plotWeatherData = filterWeatherData(weatherDataFromInput);
    forecastWeatherData = filterWeatherData(weatherDataFromInput, false);
  } else {
    plotWeatherData = filterWeatherData(weatherData);
    forecastWeatherData = filterWeatherData(weatherData, false);
  }

  const getWeatherDataFromInput = (searchInputData) => {
    fetchWeatherDataFromInput(
      `${API_URL_FORECAST}${searchInputData.lat}&lon=${searchInputData.lon}&cnt=6&appid=${API_KEY_WEATHER}&units=metric`,
      "weather"
    );
    setNewPosition({ lat: searchInputData.lat, lon: searchInputData.lon });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Suspense fallback={<LoadingSpinner message="Loading..." />}>
          <Switch>
            <Route path="/" exact>
              {isLoading && <LoadingSpinner message={message} />}
            </Route>
            <Route path="/home/error">
              {errorMessage ? (
                <ErrorModal error={errorMessage} />
              ) : (
                <LoadingSpinner message="Redirect to home..." />
              )}
            </Route>
            <Route path="/home">
              <StyledContainer>
                <StyledGrid>
                  <CurrentLocation
                    forecastData={forecastWeatherData}
                    weatherData={getWeatherDataFromInput}
                  />
                  <Measurement plotData={plotWeatherData} />
                  <Map position={newPosition ? newPosition : position} />
                </StyledGrid>
              </StyledContainer>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </ThemeProvider>
    </>
  );
};

export default App;

// TODO: refactor the code => write functions and put it outside of the component

// TODO: in CurrentLocation component show forecasted time differently
// TODO: maybe try to improve accuracy with Geolocation API
// TODO: show additional Data in Popup in Map component
