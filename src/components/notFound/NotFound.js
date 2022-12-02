import { Fragment } from "react";
import ReactDOM from "react-dom";
import { StyledNotFound } from "../styles/NotFound.styled";

const NotFound = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <StyledNotFound>
          <div>
            <h1>404</h1>
            <h2>Ooops!</h2>
            <p>It looks like that the developer fell asleep...</p>
            <p>Redirecting...</p>
          </div>
        </StyledNotFound>,
        document.getElementById("not-found")
      )}
    </Fragment>
  );
};

export default NotFound;
