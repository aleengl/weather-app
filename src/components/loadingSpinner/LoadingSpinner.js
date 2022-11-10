import LoadingWrapper from "../styles/LoadingSpinner.styled";
import sun from "../../img/sunny-outline.svg";

const LoadingSpinner = (props) => {
  return (
    <LoadingWrapper>
      <div>
        <img src={sun} alt="rotating sun" />
        <p>{props.message}</p>
      </div>
    </LoadingWrapper>
  );
};

export default LoadingSpinner;
