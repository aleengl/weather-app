import styled from "styled-components";

export const Container = styled.div`
  form {
    display: ${({ theme }) => theme.display.flex};
    flex-direction: column;
    gap: 2rem;

    div:first-child {
      display: ${({ theme }) => theme.display.flex};
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
      border: 2px solid ${({ theme }) => theme.color.white};
      border-radius: 10px;
      outline: none;
      color: inherit;
      font: inherit;
      background-color: ${({ theme }) => theme.color.dark};
      font-size: 1.7rem;
      transition: all 0.4s;

      &:focus {
        background-color: ${({ theme }) => theme.colors.grey};
      }
    }

    button {
      background-color: ${({ theme }) => theme.color.dark};
      color: inherit;
      padding: 0.8rem 0;
      font-size: 1.8rem;
      border: 1px solid ${({ theme }) => theme.color.white};
      border-radius: 5px;
      cursor: pointer;
      transition: ${({ theme }) => theme.transition.all};

      &:hover {
        background-color: ${({ theme }) => theme.colors.grey};
      }
    }
  }
`;
