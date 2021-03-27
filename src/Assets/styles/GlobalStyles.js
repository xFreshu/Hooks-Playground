import { createGlobalStyle } from 'styled-components';
import { theme } from "./Theme";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-family: 'Oswald', sans-serif;
    background-color: #E5E5E5;
    color: ${theme.colors.primaryFont};
  }
`;

export default GlobalStyles;