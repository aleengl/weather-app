import GlobalStyles from "./components/styles/Global";
import AppContainer from "./components/styles/AppContainer.styled";
import Grid from "./components/styles/Grid.styled";
import CurrentLocation from "./components/currentLocation/CurrentLocation";
import Measurement from "./components/measurement/Measurement";
import Map from "./components/map/Map";
import LoadingSpinner from "./components/loadingSpinner/LoadingSpinner";
import ErrorModal from "./components/modal/ErrorModal";
import { Route, Switch } from "react-router-dom";
import NotFound from "./components/notFound/NotFound";
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

const App = () => {
  const { isLoading, message, errorMessage, weatherData, position } =
    useGeolocation();

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
