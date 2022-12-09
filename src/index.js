import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { amber, purple } from '@mui/material/colors';


const root = ReactDOM.createRoot(document.getElementById('root'));
let theme = createTheme({
  palette: {
    primary: {
      light: purple[100],
      main: purple[300],
      dark: purple[400]
    },
    secondary: {
      light: amber[100],
      main: amber[700],
      dark: amber[800]
    }
  },
})
theme = responsiveFontSizes(theme);

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

reportWebVitals();
