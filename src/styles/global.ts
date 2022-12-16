import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input:focus {
    outline: none;
    border: 1px solid #C47F17;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme["gray-700"]};
    background-color: #FAFAFA;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
