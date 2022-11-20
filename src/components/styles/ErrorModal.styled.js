import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledErrorModal = styled.div`
  font-size: 3rem;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(#0c0e10, #364e68);
  z-index: 99;

  div {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      text-shadow: 0 0 1rem #fefefe;
      margin-bottom: 3rem;
    }

    svg {
      height: 300px;
      width: 300px;
    }
  }
`;

export const StyledReloadLink = styled(Link)`
  display: inline-block;
  padding: 1rem 3rem;
  text-decoration: none;
  color: inherit;
  border: 3px solid ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  transition: ${({ theme }) => theme.transition.all};

  &:hover {
    background-color: #3a4756;
  }
`;
