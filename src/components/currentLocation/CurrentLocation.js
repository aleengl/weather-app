import LocationContainer from "../styles/CurrentLocation.styled";
import Condition from "./Condition";
import Station from "./Station";
import Modal from "../modal/Modal";
import { Route, useHistory } from "react-router-dom";

const CurrentLocation = (props) => {
  const history = useHistory();

  const showModalHandler = () => {
    history.push("/home/new-location");
  };

  return (
    <LocationContainer>
      <Route path="/home/new-location">
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

// TODO: add Portal to Modal to move it in other position in the real DOM
