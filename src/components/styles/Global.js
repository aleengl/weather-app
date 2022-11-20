import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    height: 100%;
    padding: 5rem 10rem;
    background-image: ${({ theme }) => theme.background.gradient};
    background-repeat: no-repeat;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.colors.white};
  }
  
`;

export default GlobalStyles;
