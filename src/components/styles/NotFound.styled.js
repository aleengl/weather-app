import styled from "styled-components";

export const StyledNotFound = styled.div`
  font-size: 3rem;
  text-align: center;
  // can combine multiple arrow functions in once
  ${({ theme }) => `
  position: ${theme.position.fixed};
  top: ${theme.position.distanceFromBorder};
  left: ${theme.position.distanceFromBorder};
  right: ${theme.position.distanceFromBorder};
  bottom: ${theme.position.distanceFromBorder};
  `}
  background-image: linear-gradient(#0c0e10, #364e68);
  z-index: 999;

  div {
    position: ${({ theme }) => theme.position.absolute};
    top: 40%;
    left: 50%;
    transform: ${({ theme }) => theme.transform};

    h1 {
      text-shadow: 0 0 1rem #fefefe;
      margin-bottom: 3rem;
      font-size: 15rem;
    }

    p {
      margin-bottom: 1rem;
    }
  }
`;
