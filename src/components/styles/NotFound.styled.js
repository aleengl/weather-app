import styled from "styled-components";

const NotFoundContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  text-align: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;

  h1 {
    margin-bottom: 3rem;
  }
`;

export default NotFoundContainer;
