import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
`;

export const ModalContainer = styled.div`
  padding: 3rem;
  font-size: 2rem;
  background-image: var(--background-gradient);
  border-radius: var(--border-radius--big);
  border: var(--border-white);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;

  & > button:last-child {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: none;
    background-color: transparent;
    font-size: 2.5rem;
    cursor: pointer;
    color: var(--color-white);

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
      border: var(--border-white);
      border-radius: var(--border-radius--small);
      outline: none;
      color: inherit;
      font: inherit;
      background-color: var(--color-dark);
      transition: var(--transition-all);

      &:focus {
        background-color: #474747;
      }
    }

    button {
      background-color: var(--color-dark);
      color: inherit;
      font: inherit;
      padding: 1rem 6rem;
      border: var(--border-white);
      border-radius: var(--border-radius--small);
      cursor: pointer;
      transition: var(--transition-all);

      &:hover,
      &:active {
        background-color: #474747;
        color: inherit;
      }
    }

    div:last-child {
      margin-top: 6rem;
      text-align: center;
    }
  }
`;
