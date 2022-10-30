import { Fragment } from "react";
import { ModalContainer, Backdrop } from "../styles/Modal.styled";

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
      <ModalContainer>
        <form>
          <div>
            <label htmlFor="city">City</label>
            <br />
            <input type="text" placeholder="Enter the city here..." id="city" />
          </div>

          <div>
            <label htmlFor="start">Start date</label>
            <br />
            <input
              type="date"
              id="start"
              defaultValue="2022-10-19"
              min="2022-10-24"
            />
          </div>
          <div>
            <label htmlFor="end">End date</label>
            <br />
            <input type="date" id="end" defaultValue="2022-10-24" />
          </div>
          <div>
            <button>Search</button>
          </div>
        </form>
        <button onClick={hideModalButtonHandler}>&#x2715;</button>
      </ModalContainer>
    </Fragment>
  );
};

export default Modal;
