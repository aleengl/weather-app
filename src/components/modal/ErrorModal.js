import { Fragment } from "react";
import ReactDOM from "react-dom";
import {
  StyledErrorModal,
  StyledReloadLink,
} from "../styles/ErrorModal.styled";
import { useHistory } from "react-router-dom";

const ErrorModal = (props) => {
  const history = useHistory();

  const changeLocation = (defaultPath) => {
    // first need to push to new path and then trigger page reload
    history.push(defaultPath);
    window.location.reload();
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <StyledErrorModal>
          <div>
            <h1>{props.error}</h1>
            <StyledReloadLink to="/" onClick={() => changeLocation("/")}>
              Reload the page
            </StyledReloadLink>
          </div>
        </StyledErrorModal>,
        document.getElementById("error-modal")
      )}
    </Fragment>
  );
};

export default ErrorModal;
