import React, { Suspense } from "react";
import GlobalStyles from "./components/styles/Global";
import AppContainer from "./components/styles/AppContainer.styled";
import Grid from "./components/styles/Grid.styled";
// import CurrentLocation from "./components/currentLocation/CurrentLocation";
// import Measurement from "./components/measurement/Measurement";
// import Map from "./components/map/Map";
// import LoadingSpinner from "./components/loadingSpinner/LoadingSpinner";
// import ErrorModal from "./components/modal/ErrorModal";
import { Route, Switch } from "react-router-dom";
// import NotFound from "./components/notFound/NotFound";
import useGeolocation from "./components/hooks/use-geolocation";

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

const App = () => {
  const { isLoading, message, errorMessage, weatherData, position } =
    useGeolocation();

  const plotWeatherData = filterWeatherData(weatherData);
  const forecastWeatherData = filterWeatherData(weatherData, false);

  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<p>Loading...</p>}>
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
      </Suspense>
    </>
  );
};

export default App;

// TODO: add lazy loading for Measurement component too!!!
// TODO: add lazy loading for Routes => download code when user visits the route
// TODO: improve Routes
// TODO: maybe try to improve accuracy with Geolocation API
// TODO: look at the definition of the parameters of the API => first timestamp maybe the current temperature and not the 3h
// TODO: improve the plots => adjust the yAxis => search for nicer colors
// TODO: improve loading spinner and 404 page
