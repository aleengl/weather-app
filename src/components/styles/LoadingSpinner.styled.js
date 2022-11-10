import styled from "styled-components";

const LoadingWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 10;

  div {
    max-width: 600px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
      height: 200px;
      width: 200px;
      margin-bottom: 1rem;
      animation: spinner 2s linear infinite;
    }

    p {
      font-size: 2rem;
    }
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingWrapper;
