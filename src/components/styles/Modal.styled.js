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

export const Container = styled.div`
  padding: 3rem;
  background-image: var(--background-gradient);
  border-radius: 10px;
  border: 2px solid var(--color-white);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;

  form {
    & > *:not(:last-child) {
      margin-bottom: 2rem;
    }

    div:last-child {
      margin-top: 5rem;
    }

    label {
      display: inline-block;
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    input,
    select {
      width: 80%;
      padding: 1rem 2rem;
      border: 2px solid var(--color-white);
      border-radius: 5px;
      outline: none;
      color: inherit;
      font: inherit;
      background-color: #333333;
      font-size: 1.7rem;
      transition: all 0.4s;

      &:focus {
        background-color: #474747;
      }
    }

    button {
      position: static;
      width: 80%;
      background-color: #333333;
      // margin-top: 3rem;
      color: inherit;
      padding: 0.8rem 0;
      font-size: 1.8rem;
      border: 1px solid var(--color-white);
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s;

      &:hover,
      &:active {
        background-color: #474747;
        color: inherit;
      }
    }
  }

  button {
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
`;
