import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Overpass', sans-serif;
    font-size: 16px;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
