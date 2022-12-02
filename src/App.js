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
  breakpoints: {
    desktop: "110em", // 1760px
    tablet_landscape: ["62.5em", "75em"], // 1000px, 1200px
    tablet_portrait: "50em", // 800px
  },
};

const filterWeatherData = (weatherData, isPlotted = true) => {
  if (isPlotted) {
    const timezone = weatherData.city?.timezone;
    const timestamps = weatherData.list.slice(1);

    return { timezone, timestamps };
  }

  const firstTimestamp = weatherData.list[0];

  const icon = firstTimestamp?.weather[0].icon;
  const weatherCode = firstTimestamp?.weather[0].id;
  const daytime = firstTimestamp?.sys.pod;
  const temp = firstTimestamp?.main.temp;
  const description = firstTimestamp?.weather[0].description;
  const cityName = weatherData.city?.name;
  const timezone = weatherData.city?.timezone;
  const countryCode = weatherData.city?.country;

  return {
    icon,
    weatherCode,
    daytime,
    temp,
    description,
    cityName,
    countryCode,
    timezone,
    firstTimestamp,
  };
};

const getLocationInformation = (weatherData) => {
  if (weatherData.list.length !== 0) {
    const { country, name, sunrise, sunset, timezone } = weatherData.city;

    const getSunriseSunset = (unixTime) => {
      const unixToMilliseconds = Math.floor(
        (unixTime + timezone - 3600) * 1000
      );

      return new Date(unixToMilliseconds).toLocaleString("de-DE", {
        hour: "numeric",
        minute: "numeric",
      });
    };

    const sunriseHourMin = getSunriseSunset(sunrise);
    const sunsetHourMin = getSunriseSunset(sunset);

    return { country, name, sunriseHourMin, sunsetHourMin, timezone };
  }
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

let plotWeatherData, forecastWeatherData, locationDetails;

const App = () => {
  const {
    sendRequest: fetchWeatherDataFromInput,
    weatherData: weatherDataFromInput,
  } = useHttp();

  const [newPosition, setNewPosition] = useState();

  const { isLoading, message, errorMessage, weatherData, position } =
    useGeolocation();

  console.log(weatherData);
  console.log(weatherDataFromInput);

  if (weatherDataFromInput.list.length !== 0) {
    plotWeatherData = filterWeatherData(weatherDataFromInput);
    forecastWeatherData = filterWeatherData(weatherDataFromInput, false);
    locationDetails = getLocationInformation(weatherDataFromInput);
  } else {
    plotWeatherData = filterWeatherData(weatherData);
    forecastWeatherData = filterWeatherData(weatherData, false);
    locationDetails = getLocationInformation(weatherData);
  }

  console.log(locationDetails);

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
                  <Map
                    position={newPosition ? newPosition : position}
                    details={locationDetails}
                  />
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

// TODO: look where animations could make sense
// TODO: search for bugs, make code improvements
// TODO: write README file in Github
