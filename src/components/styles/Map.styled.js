import styled from "styled-components";

export const Container = styled.div`
  background-image: ${({ theme }) => theme.background.gradient};
  border-radius: 10px;
  padding: 2rem 3rem;

  grid-column: 1 / -1;
`;
