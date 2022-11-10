import styled from "styled-components";

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    div:first-child {
      display: flex;
      align-items: center;
    }

    label {
      display: block;
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    input,
    select {
      padding: 1rem 2rem;
      border: 2px solid var(--color-white);
      border-radius: 10px;
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
      background-color: #333333;
      color: inherit;
      padding: 0.8rem 0;
      font-size: 1.8rem;
      border: 1px solid var(--color-white);
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background-color: #474747;
      }
    }
  }
`;
