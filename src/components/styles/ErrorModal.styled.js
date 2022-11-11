import styled from "styled-components";

const ErrorModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 99;

  svg {
    height: 100px;
    width: 100px;
  }
`;

export default ErrorModalContainer;
