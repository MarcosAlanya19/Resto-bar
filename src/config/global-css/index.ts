import { createGlobalStyle } from "styled-components";

const MQ = {
	xs: "(min-width: 360px)",
	sm: "(min-width: 591px)",
	md: "(min-width: 800px)",
	mdx: "(min-width: 1000px)",
	lg: "(min-width: 1400px)",
};

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
		box-sizing: border-box;
    &::-webkit-scrollbar {
      background: transparent;
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
    }
  }

  html, body {
    padding: 0;
    margin: 0;
    font-size: 16px;

    &::-webkit-scrollbar {
      background: transparent;
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
    }
  }
  html{

@media ${MQ.xs} {
  font-size: 16px;
}
@media ${MQ.sm} {
  font-size: 16px;
}
@media ${MQ.md} {
  font-size: 20px;
}
}

`;

export default GlobalStyle;
