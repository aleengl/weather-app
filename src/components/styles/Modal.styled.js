import styled from "styled-components";

export const Backdrop = styled.div`
  ${({ theme }) => `
  position: ${theme.position.fixed};
  top: ${theme.position.distanceFromBorder};
  left: ${theme.position.distanceFromBorder};
  right: ${theme.position.distanceFromBorder};
  bottom: ${theme.position.distanceFromBorder};
  `}
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

export const ModalContainer = styled.div`
  padding: 3rem;
  font-size: 2rem;
  ${({ theme }) => `
  background-image: ${theme.background.gradient};
  border-radius: ${theme.border.bigRadius};
  border: ${theme.border.whiteBorder};
  position: ${theme.position.fixed};
  `}
  top: 50%;
  left: 50%;
  transform: ${({ theme }) => theme.transform};
  z-index: 9999;

  & > button:last-child {
    position: ${({ theme }) => theme.position.absolute};
    top: 1.5rem; // change in %
    right: 1.5rem;
    border: none;
    background-color: transparent;
    font-size: 2.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};

    &:hover,
    &:active {
      color: #b3b3b3;
    }
  }

  form {
    & > *:not(:last-child) {
      margin-bottom: 2rem;
    }

    label {
      display: inline-block;
      margin-bottom: 1rem;
    }

    input {
      width: 100%;
      padding: 1rem 2rem;
      border: ${({ theme }) => theme.border.whiteBorder};
      border-radius: ${({ theme }) => theme.border.smallRadius};
      outline: none;
      color: inherit;
      font: inherit;
      background-color: ${({ theme }) => theme.colors.dark};
      transition: ${({ theme }) => theme.transition.all};

      &:focus {
        background-color: ${({ theme }) => theme.colors.grey};
      }
    }

    button {
      background-color: ${({ theme }) => theme.colors.dark};
      color: inherit;
      font: inherit;
      padding: 1rem 6rem;
      border: ${({ theme }) => theme.border.whiteBorder};
      border-radius: ${({ theme }) => theme.border.smallRadius};
      cursor: pointer;
      transition: ${({ theme }) => theme.transition.all};

      &:hover,
      &:active {
        background-color: ${({ theme }) => theme.colors.grey};
        color: inherit;
      }
    }

    div:last-child {
      margin-top: 6rem;
      text-align: center;
    }
  }
`;
