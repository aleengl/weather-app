import NotFoundContainer from "../styles/NotFound.styled";
import thunder from "../../img/1865-shooting-stars-outline.gif";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <div>
        <img src={thunder} alt="animated thunder" />
        <h1>404</h1>
        <p>Oops! Page not found!</p>
      </div>
    </NotFoundContainer>
  );
};

export default NotFound;
