import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
