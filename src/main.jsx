import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from './App.jsx'
import './App.css'
import { CssBaseline } from "@mui/material";


const theme = createTheme({
  typography: {
    fontFamily: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif`,
  },
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
        <App />
    </ThemeProvider>
  </StrictMode>,
)
