import styled from "styled-components";

export const ConditionContainer = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-white);

  p {
    font-size: 5rem;
    color: var(--color-white);
  }

  div:last-child {
    display: flex;
    align-items: center;
    gap: 1rem;

    p:last-child {
      font-size: 2rem;
      color: var(--color-white);
    }
  }
`;
