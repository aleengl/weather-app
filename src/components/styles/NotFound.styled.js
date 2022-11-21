import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundContainer = styled.div`
  font-size: 3rem;
  text-align: center;
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
      margin-bottom: 6rem;
    }
  }
`;

export const RetryLink = styled(Link)`
  display: inline-block;
  padding: 1rem 3rem;
  text-decoration: none;
  color: inherit;
  border: 3px solid ${({ theme }) => theme.color.white};
  border-radius: 10px;
  transition: ${({ theme }) => theme.transition.all};

  &:hover {
    background-color: #3a4756;
  }
`;
