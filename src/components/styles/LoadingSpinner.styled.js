import styled from "styled-components";

const LoadingWrapper = styled.div`
  position: ${(props) =>
    props.loadingMessage === "Chart is loading..." ? "absolute" : "fixed"};
  display: ${({ theme }) => theme.display.flex};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  ${({ theme }) => `
  top: ${theme.position.distanceFromBorder};
  left: ${theme.position.distanceFromBorder};
  right: ${theme.position.distanceFromBorder};
  bottom: ${theme.position.distanceFromBorder};
  `}
  background-color: ${(props) =>
    props.loadingMessage === "Chart is loading..."
      ? "noone"
      : "rgba(0, 0, 0, 0.9)"};
  z-index: ${(props) =>
    props.loadingMessage === "Chart is loading..." ? "1" : "10"};
  font-size: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: ${(props) =>
      props.loadingMessage === "Chart is loading..." ? "row" : "column"};
    text-align: center;
  }

  & > div:first-child {
    display: inline-block;
    position: relative;
    width: 8rem;
    height: 8rem;

    & div {
      animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      transform-origin: 4rem 4rem;

      &::after {
        content: " ";
        display: block;
        position: ${({ theme }) => theme.position.absolute};
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.white};
        margin: -0.4rem 0 0 -0.4rem;
      }

      &:nth-child(1) {
        animation-delay: -0.036s;

        &::after {
          top: 6.3rem;
          left: 6.3rem;
        }
      }

      &:nth-child(2) {
        animation-delay: -0.072s;

        &::after {
          top: 6.8rem;
          left: 5.6rem;
        }
      }

      &:nth-child(3) {
        animation-delay: -0.108s;

        &::after {
          top: 7.1rem;
          left: 4.8rem;
        }
      }

      &:nth-child(4) {
        animation-delay: -0.144s;

        &::after {
          top: 7.2rem;
          left: 4rem;
        }
      }

      &:nth-child(5) {
        animation-delay: -0.18s;

        &::after {
          top: 7.1rem;
          left: 3.2rem;
        }
      }

      &:nth-child(6) {
        animation-delay: -0.216s;

        &::after {
          top: 6.8rem;
          left: 2.4rem;
        }
      }

      &:nth-child(7) {
        animation-delay: -0.252s;

        &::after {
          top: 6.3rem;
          left: 1.7rem;
        }
      }

      &:nth-child(8) {
        animation-delay: -0.288s;

        &::after {
          top: 5.6rem;
          left: 1.2rem;
        }
      }
      @keyframes lds-roller {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
`;

export default LoadingWrapper;
