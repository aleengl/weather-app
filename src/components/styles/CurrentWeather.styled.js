import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  background-image: var(--background-gradient);
  border-radius: 10px;
  font-size: 2.5rem;

  p:first-child {
    margin-bottom: 2rem;
  }

  // select only the button with the type attribute
  button[type] {
    margin-top: 3rem;
    color: inherit;
    cursor: pointer;
    padding: 1.3rem 1.5rem;
    font-size: 1.8rem;
    border-radius: 5px;
    border: 1px solid var(--color-white);
    background-color: #333333;
    transition: all 0.2s;

    &:hover,
    &:active {
      background-color: #474747;
    }
  }
`;

export default Container;
