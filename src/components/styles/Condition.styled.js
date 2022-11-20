import styled from "styled-components";

export const StyledCondition = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};

  p {
    font-size: 5rem;
  }

  span {
    font-size: 2rem;
  }
`;
