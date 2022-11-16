import { Fragment } from "react";
import ReactDOM from "react-dom";
import ErrorModalContainer from "../styles/ErrorModal.styled";

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ErrorModalContainer>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#e60000"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            <p>{props.error} Try to reload the page!</p>
          </div>
        </ErrorModalContainer>,
        document.getElementById("error-modal")
      )}
    </Fragment>
  );
};

export default ErrorModal;

// height of the referenced DOM element is 0, also when porting the modal into it => worry about??
