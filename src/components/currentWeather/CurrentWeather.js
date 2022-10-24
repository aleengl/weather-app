import { useState } from "react";
import Container from "../styles/CurrentWeather.styled";
import Condition from "./Condition";
import Station from "./Station";
import Modal from "../modal/Modal";

const CurrentWeather = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  return (
    <Container>
      {showModal && <Modal show={setShowModal} />}
      <div>
        <p>Current Location</p>
        <Condition />
        <Station />
        <button type="button" onClick={showModalHandler}>
          Select a new Location
        </button>
      </div>
    </Container>
  );
};

export default CurrentWeather;
