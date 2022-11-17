import { Fragment } from "react";
import ReactDOM from "react-dom";
import { NotFoundContainer, RetryLink } from "../styles/NotFound.styled";

const NotFound = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <NotFoundContainer>
          <div>
            <h1>404</h1>
            <h2>Ooops!</h2>
            <p>It looks like that the developer fell asleep...</p>
            <RetryLink to="/">Go back</RetryLink>
          </div>
        </NotFoundContainer>,
        document.getElementById("not-found")
      )}
    </Fragment>
  );
};

export default NotFound;
