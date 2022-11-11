import styled from "styled-components";

export const MeasureContainer = styled.div`
  background-image: var(--background-gradient);
  border-radius: var(--border-radius--big);
  padding: 2rem 3rem;
  font-size: 2rem;

  display: flex;
  justify-content: space-between;
  gap: 3rem;

  p {
    // align-self: center;
    margin-top: 4rem;
    margin-left: 10rem;
  }

  div label {
    display: inline-block;
    margin-bottom: 1rem;
  }

  div select {
    padding: 1rem 2rem;
    border: 2px solid var(--color-white);
    border-radius: var(--border-radius--small);
    outline: none;
    color: inherit;
    font: inherit;
    background-color: var(--color-dark);
    transition: var(--transition-all);

    &:focus {
      background-color: #474747;
    }
  }
`;
