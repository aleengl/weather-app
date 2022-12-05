import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

// global reset of margin and padding => some elements have default margins and paddings => makes life easier
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
    // easier calculation when using rems => with rems can scale down layout easily => just need to reduce the font-size and properties where rem is used will scale down automatically 
    font-size: 62.5%; // 1rem = 10px
    box-sizing: border-box;
    overflow-x: hidden;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet_landscape[1]}) 
      { // 1200px
      font-size: 56.25%; // 1rem = 9px
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet_portrait}) 
    { // 800px
      font-size: 50%; // 1rem = 8px
    }
  }

  body {
    padding: 10rem;
    background-image: ${({ theme }) => theme.background.gradient};
    background-repeat: no-repeat;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet_portrait}) {
      padding: 5rem 3rem;
    }

  }
  
`;

export default GlobalStyles;
