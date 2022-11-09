import { useState } from "react";
import LocationContainer from "../styles/CurrentLocation.styled";
import Condition from "./Condition";
import Station from "./Station";
import Modal from "../modal/Modal";

const CurrentLocation = (props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  return (
    <LocationContainer>
      {showModal && <Modal show={setShowModal} />}
      <div>
        <p>Current Location (+3h)</p>
        <Condition
          icon={props.data.icon}
          temperature={props.data.temp}
          description={props.data.description}
        />
        <Station city={props.data.cityName} />
        <button type="button" onClick={showModalHandler}>
          Choose a new Location
        </button>
      </div>
    </LocationContainer>
  );
};

export default CurrentLocation;
