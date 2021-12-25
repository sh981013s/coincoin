import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-family: 'RocknRoll One', sans-serif !important;
  }
  body {
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
