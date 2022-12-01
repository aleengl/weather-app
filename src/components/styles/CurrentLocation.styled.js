import styled from "styled-components";

const StyledLocation = styled.div`
  padding: 2rem;
  background-image: ${({ theme }) => theme.background.gradient};
  border-radius: ${({ theme }) => theme.border.bigRadius};
  font-size: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    // 1760px
    justify-self: center;
    width: 40rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet_portrait}) {
    // 800px
    width: 35rem;
  }

  p:first-child {
    margin-bottom: 2rem;
  }

  // in modal rendering buttons too => select with attribute
  button[type] {
    margin-top: 3rem;
    color: inherit;
    cursor: pointer;
    padding: 1rem 1.3rem;
    font-size: 2rem;
    border-radius: ${({ theme }) => theme.border.smallRadius};
    border: ${({ theme }) => theme.border.whiteBorder};
    background-color: ${({ theme }) => theme.colors.dark};
    transition: ${({ theme }) => theme.transition.all};

    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.colors.grey};
    }
  }
`;

export default StyledLocation;
