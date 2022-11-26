import StyledLocation from "../styles/CurrentLocation.styled";
import Condition from "./Condition";
import Station from "./Station";
import Modal from "../modal/Modal";
import { Route, useHistory, useRouteMatch } from "react-router-dom";

const calcTime = (timezone, timestamp) => {
  if (timestamp) {
    const date = new Date(timestamp["dt_txt"]);
    const timestampInMs = date.getTime();
    const unixTime = Math.floor(timestampInMs / 1000) + timezone;
    const time = new Date(unixTime * 1000).toLocaleString("de-DE", {
      hour: "numeric",
      minute: "numeric",
    });

    return {
      time: time,
    };
  }

  return {
    time: "N/A",
  };
};

const CurrentLocation = (props) => {
  const history = useHistory();
  const match = useRouteMatch();

  const showModalHandler = () => {
    history.push(`${match.path}/new-location`);
  };

  const time = calcTime(
    props.forecastData.timezone,
    props.forecastData.firstTimestamp
  );

  const getWeatherData = (searchInputdata) => {
    props.weatherData(searchInputdata);
  };

  return (
    <StyledLocation>
      <Route path={`${match.path}/new-location`}>
        <Modal getData={getWeatherData} />
      </Route>
      <div>
        <p>Current Location ({time.time})</p>
        <Condition
          icon={props.forecastData.icon}
          temperature={props.forecastData.temp}
          description={props.forecastData.description}
        />
        <Station city={props.forecastData.cityName} />
        <button type="button" onClick={showModalHandler}>
          Choose a new Location
        </button>
      </div>
    </StyledLocation>
  );
};

export default CurrentLocation;
