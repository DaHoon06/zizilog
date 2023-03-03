import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body, div, p {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  h1, h2, h3, h4, h5 {
    font-size: 12px;
    font-weight: normal;
  }
  
  :root {
    --color__primary: #FCBA08;
    --color__line: #EBEBEB;
  }

  hr {
    margin: 0;
    border: none;
    height: 1px;
    background-color: var(--color__line);
  }
`;

export default GlobalStyles;