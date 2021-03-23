import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-family: 'Oswald', sans-serif;
  }
`;

export default GlobalStyles;