import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
		overflow-x: hidden;
  }

  h1, h2, h3, p {
    margin: 0;
		font-size: 16px;
  }
`;

export default GlobalStyles;
