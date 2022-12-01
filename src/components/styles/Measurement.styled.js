import styled from "styled-components";

export const MeasureContainer = styled.div`
  background-image: ${({ theme }) => theme.background.gradient};
  border-radius: ${({ theme }) => theme.border.bigRadius};
  padding: 2rem 3rem;
  font-size: 2rem;

  display: ${({ theme }) => theme.display.flex};
  justify-content: space-between;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet_landscape[0]}) {
    // 62.5em
    // 1000px
    flex-direction: column;
    flex-flow: column-reverse;
  }

  div label {
    display: inline-block;
    margin-bottom: 1rem;
  }

  div select {
    padding: 1rem 2rem;
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.border.smallRadius};
    outline: none;
    color: inherit;
    font: inherit;
    background-color: ${({ theme }) => theme.colors.dark};
    transition: ${({ theme }) => theme.transition.all};

    &:focus {
      background-color: ${({ theme }) => theme.colors.grey};
    }
  }
`;
