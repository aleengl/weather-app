import styled from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    // 1760px
    grid-template-columns: 1fr;
  }
`;
