import styled from "styled-components";

export const Container = styled.div`
  background-image: var(--background-gradient);
  border-radius: 10px;
  padding: 2rem 3rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  p:first-child {
    font-size: 2.3rem;
  }

  & > *:last-child > * {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    align-items: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;
