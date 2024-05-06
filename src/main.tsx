import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './config/global-css/index.ts';
import { router } from './config/router/index.tsx';

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
			<RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
