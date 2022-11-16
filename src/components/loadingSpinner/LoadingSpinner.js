import { Fragment } from "react";
import ReactDOM from "react-dom";
import LoadingWrapper from "../styles/LoadingSpinner.styled";
import sun from "../../img/sunny-outline.svg";

const LoadingSpinner = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <LoadingWrapper>
          <div>
            <img src={sun} alt="rotating sun" />
            <p>{props.message}</p>
          </div>
        </LoadingWrapper>,
        document.getElementById("loading-spinner")
      )}
    </Fragment>
  );
};

export default LoadingSpinner;
