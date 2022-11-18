import React, { Suspense } from "react";
import GlobalStyles from "./components/styles/Global";
import AppContainer from "./components/styles/AppContainer.styled";
import Grid from "./components/styles/Grid.styled";
import { Route, Switch } from "react-router-dom";
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
  // custom geolocation hook to not pollute the component
  const { isLoading, message, errorMessage, weatherData, position } =
    useGeolocation();

  const plotWeatherData = filterWeatherData(weatherData);
  const forecastWeatherData = filterWeatherData(weatherData, false);

  return (
    <>
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

// TODO: maybe try to improve accuracy with Geolocation API
// TODO: look at the definition of the parameters of the API => first timestamp maybe the current temperature and not the 3h
// TODO: improve the plots => adjust the yAxis => search for nicer colors
// TODO: show additional Data in Popup in Map component
// TODO: implement search for a new location
