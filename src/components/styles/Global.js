import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    // color
    --color-white: #fff;
    --color-dark: #333333;
    
    // background
    --background-gradient: linear-gradient(315deg, #1b2c35, #1c2d36, #1f313a, #24363f, #2b3c46, #32444d, #394b55, #40535d, #475a64, #4c606a, #50646e, #51656f);

    // border
    --border-white: 2px solid var(--color-white);
    --border-radius--small: 5px;
    --border-radius--big: 15px;

    --transition-all: all .2s;
    
  }

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
    padding: 5rem 10rem;
    background-image: var(--background-gradient);
    background-repeat: no-repeat;
    font-family: "Roboto", sans-serif;
    color: var(--color-white);
  }
  
`;

export default GlobalStyles;
