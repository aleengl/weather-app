import { Fragment } from "react";
import ReactDOM from "react-dom";
import LoadingWrapper from "../styles/LoadingSpinner.styled";

const LoadingSpinner = (props) => {
  const loadingWrapper = (
    <LoadingWrapper loadingMessage={props.message}>
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
    </LoadingWrapper>
  );

  return (
    <Fragment>
      {props.message !== "Chart is loading..."
        ? ReactDOM.createPortal(
            loadingWrapper,
            document.getElementById("loading-spinner")
          )
        : loadingWrapper}
    </Fragment>
  );
};

export default LoadingSpinner;
