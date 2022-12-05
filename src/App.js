import React, { Suspense, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import StyledContainer from "./components/styles/Container.styled";
import { StyledGrid } from "./components/styles/Grid.styled";
import { Route, Switch } from "react-router-dom";
import useGeolocation from "./components/hooks/use-geolocation";
import useHttp from "./components/hooks/use-http";
import { API_KEY_WEATHER, API_URL_FORECAST } from "./constants";

// defined themes can be used inside of styled components but also outside in React components with ThemeContext
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

// based on where where the data is used (plotted or not) extract necessary information and return it
const filterWeatherData = (weatherData, isPlotted = true) => {
  if (isPlotted) {
    // optional chaining(?.) => if undefined or null => return undefined instead of an error
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

// get the data to show it on the map in the Popup window
const getLocationInformation = (weatherData) => {
  if (weatherData.list.length !== 0) {
    const { country, name, sunrise, sunset, timezone } = weatherData.city;

    // sunrise and sunset given in unix time => seconds passed since unix epoch (1. January 1970, 00:00 UTC)
    // convert it in a human readable format
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
// for this application may not make a huge difference
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
  // moved data fetching in separate custom reusable hook => outsource the logic and hold the App component clean
  const {
    sendRequest: fetchWeatherDataFromInput,
    weatherData: weatherDataFromInput,
  } = useHttp();

  const [newPosition, setNewPosition] = useState();

  // same as with fetching data => this time for the Geolocation API
  const { isLoading, message, errorMessage, weatherData, position } =
    useGeolocation();

  // not only need to filter the data from Geolocation but also from the AsyncPaginate input when the user searches for a new location
  if (weatherDataFromInput.list.length !== 0) {
    plotWeatherData = filterWeatherData(weatherDataFromInput);
    forecastWeatherData = filterWeatherData(weatherDataFromInput, false);
    locationDetails = getLocationInformation(weatherDataFromInput);
  } else {
    plotWeatherData = filterWeatherData(weatherData);
    forecastWeatherData = filterWeatherData(weatherData, false);
    locationDetails = getLocationInformation(weatherData);
  }

  // function to uplift the data from the CurrentLocation component => define function where data is needed and pass the function as props to the component where the data is ready to be uplifted
  // in the function parameter get access to the data
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
        {/* theme prop gives access to defined themes */}
        <GlobalStyles />
        {/* used to define the global styles => e.g. resetting the margin and padding, defining the font, set box-sizing to border-box,... */}
        <Suspense fallback={<LoadingSpinner message="Loading..." />}>
          {/* lazy loading => need fallback because components not ready immediately => have to be downloaded first */}
          <Switch>
            {/* with Switch component we can be sure that only one Route will be active at a time */}
            <Route path="/" exact>
              {/* exact prop => Route matches exactly the path and not only the beginning of the path => absolute path */}
              {isLoading && <LoadingSpinner message={message} />}
            </Route>
            <Route path="/home/error">
              {errorMessage ? (
                <ErrorModal error={errorMessage} />
              ) : (
                <ErrorModal error="An error occurred!" />
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
              {/* the asterisk matches everything => it's like a fallback when none of the Routes defined matches */}
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </ThemeProvider>
    </>
  );
};

export default App;

// TODO: when no chart plotted => empty space should occupy whole place to prevent whitespace at the end without any background
// TODO: write README file in Github
