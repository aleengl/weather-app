import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 3rem;
  border-radius: ${({ theme }) => theme.border.bigRadius};
  box-shadow: ${({ theme }) => theme.colors.white} 0 2px 4px 0,
    ${({ theme }) => theme.colors.white} 0 2px 16px 0;
  background-color: ${({ theme }) => theme.colors.black};
`;

export default StyledContainer;
