import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/Views/App/App";
import { ThemeProvider } from "styled-components";
import { Theme } from "./components/GlobalStyle/global";
import { GlobalStyle } from "./components/GlobalStyle/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
