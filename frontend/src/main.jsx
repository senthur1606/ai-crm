import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import "@fontsource/inter";
import App from "./App";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
        </ThemeProvider>
      </React.StrictMode>
    );