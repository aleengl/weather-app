import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    // color
    --color-white: #fff;
    --color-dark: #333333;
    
    // background
    --background-gradient: linear-gradient(
            to right bottom,
            #2b2c30,
            #2d3138,
            #2f363f,
            #2e3c47,
            #2d424e,
            #2b414d,
            #28404c,
            #263f4b,
            #233742,
            #203039,
            #1d2831,
            #192128
    );

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
    font-family: "Roboto", sans-serif;
    color: var(--color-white);
  }
  
`;

export default GlobalStyles;
