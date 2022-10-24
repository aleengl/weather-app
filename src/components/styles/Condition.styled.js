import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid #fff;

  & > * {
    text-align: left;
  }

  p {
    font-size: 5rem;
    color: var(--color-white);
  }

  div:last-child {
    display: var(--display-flex);
    align-items: var(--align-items);
    gap: 1rem;

    p:last-child {
      font-size: 2rem;
      color: var(--color-white);
    }
  }
`;
