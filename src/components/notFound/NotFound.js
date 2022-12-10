import { Fragment } from "react";
import ReactDOM from "react-dom";
import { StyledNotFound } from "../styles/NotFound.styled";
import { StyledReloadLink } from "../styles/ErrorModal.styled";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  const changeLocation = (defaultPath) => {
    history.push(defaultPath);
    window.location.reload();
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <StyledNotFound>
          <div>
            <h1>404</h1>
            <h2>Ooops!</h2>
            <p>It looks like that the developer fell asleep...</p>
            <StyledReloadLink to="/" onClick={() => changeLocation("/")}>
              Reload the page
            </StyledReloadLink>
          </div>
        </StyledNotFound>,
        document.getElementById("not-found")
      )}
    </Fragment>
  );
};

export default NotFound;

// Portals allow us to move a component in the real DOM tree to another position
// => wrap the component into createPortal and define the target as the second argument
