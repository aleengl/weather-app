import styled from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
  // grid-template-columns: repeat(auto-fit, minmax(55rem, 1fr));
  grid-template-columns: 1fr 3fr;
  // align-items: start;
  gap: 5rem;
`;
