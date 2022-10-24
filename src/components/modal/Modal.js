import { Fragment } from "react";
import { Container, Backdrop } from "../styles/Modal.styled";

const Modal = (props) => {
  const hideModalButtonHandler = () => {
    props.show(false);
  };

  const hideModalBackdropHandler = () => {
    props.show(false);
  };

  return (
    <Fragment>
      <Backdrop onClick={hideModalBackdropHandler} />
      <Container>
        <form>
          <div>
            <label htmlFor="city">City</label>
            <br />
            <input type="text" placeholder="Enter the city here..." id="city" />
          </div>

          <div>
            <label htmlFor="parameter">Parameter</label>
            <select name="parameter" id="parameter">
              <option value="Temperature">Temperature</option>
              <option value="Pressure">Pressure</option>
              <option value="Humidity">Humidity</option>
              <option value="Wind">Wind</option>
              <option value="Visibility">Visibility</option>
              <option value="Rain">Rain</option>
            </select>
          </div>

          <div>
            <label htmlFor="start">Start date</label>
            <input
              type="date"
              id="start"
              defaultValue="2022-10-19"
              min="2022-10-24"
            />
          </div>
          <div>
            <label htmlFor="end">End date</label>
            <input type="date" id="end" defaultValue="2022-10-24" />
          </div>
          <div>
            <button>Select</button>
          </div>
        </form>
        <button onClick={hideModalButtonHandler}>&#x2715;</button>
      </Container>
    </Fragment>
  );
};

export default Modal;
