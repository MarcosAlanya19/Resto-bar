import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App.tsx';
import GlobalStyles from './assets/global-css';

const theme = {
  primary: '#ECA400',
  secondary: '#F14A41',
  terceary: '#3FB43D',
  white: '#FDFFFC',
  black: '#2F2D2E',
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
