import LocationContainer from "../styles/CurrentLocation.styled";
import Condition from "./Condition";
import Station from "./Station";
import Modal from "../modal/Modal";
import { Route, useHistory, useRouteMatch } from "react-router-dom";

const CurrentLocation = (props) => {
  const history = useHistory();
  const match = useRouteMatch();

  const showModalHandler = () => {
    history.push(`${match.path}/new-location`);
  };

  return (
    <LocationContainer>
      <Route path={`${match.path}/new-location`}>
        <Modal />
      </Route>
      <div>
        <p>Current Location (+3h)</p>
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
    </LocationContainer>
  );
};

export default CurrentLocation;
