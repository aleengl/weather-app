import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundContainer = styled.div`
  position: fixed;
  font-size: 3rem;
  text-align: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(#0c0e10, #364e68);
  z-index: 999;

  div {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

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
  border: 3px solid #fff;
  border-radius: 10px;
  transition: all 0.2s;

  &:hover {
    background-color: #3a4756;
  }
`;
