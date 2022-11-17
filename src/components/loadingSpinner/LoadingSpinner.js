import { Fragment } from "react";
import ReactDOM from "react-dom";
import LoadingWrapper from "../styles/LoadingSpinner.styled";

const LoadingSpinner = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <LoadingWrapper>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p>{props.message}</p>
        </LoadingWrapper>,
        document.getElementById("loading-spinner")
      )}
    </Fragment>
  );
};

export default LoadingSpinner;
