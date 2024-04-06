import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
  }

  h1, h2, h3 {
    margin: 0;
  }

  p {
    margin-bottom: 1rem;
    margin: 0
  }
`;

export default GlobalStyles;
