import styled from "styled-components";

const LocationContainer = styled.div`
  padding: 2rem;
  background-image: var(--background-gradient);
  border-radius: var(--border-radius--big);
  font-size: 2.5rem;

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
    border-radius: var(--border-radius--small);
    border: var(--border-white);
    background-color: var(--color-dark);
    transition: var(--transition-all);

    &:hover,
    &:active {
      background-color: #474747;
    }
  }
`;

export default LocationContainer;
