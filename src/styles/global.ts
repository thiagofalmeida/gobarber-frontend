import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #312E38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px 'Roboto Slab', sans-serif;
  }

  input:-webkit-autofill {
    box-shadow: 0 0 0px 1000px #232129 inset;
    -webkit-box-shadow: 0 0 0px 1000px #232129 inset;
    -webkit-text-fill-color: #fff;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
`;
