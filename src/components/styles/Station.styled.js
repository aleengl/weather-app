import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;

  & > * {
    display: var(--display-flex);
    align-items: center;
    gap: 1rem;
  }

  div:first-child {
    margin-bottom: 1rem;
  }

  div:first-child span,
  div:last-child p {
    font-size: 1.6rem;
    color: var(--color-white);
  }

  div:last-child p span {
    font-weight: 700;
  }
`;
