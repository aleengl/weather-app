import { Fragment } from "react";
import ReactDOM from "react-dom";
import { ErrorModalContainer, ReloadLink } from "../styles/ErrorModal.styled";
import { useHistory } from "react-router-dom";

const ErrorModal = (props) => {
  const history = useHistory();

  const changeLocation = (location) => {
    // first need to push to new path and then trigger page reload
    history.push(location);
    window.location.reload();
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ErrorModalContainer>
          <div>
            <h1>{props.error}</h1>
            <ReloadLink to="/" onClick={() => changeLocation("/")}>
              Reload the page
            </ReloadLink>
          </div>
        </ErrorModalContainer>,
        document.getElementById("error-modal")
      )}
    </Fragment>
  );
};

export default ErrorModal;
