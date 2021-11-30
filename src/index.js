import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { Global, ThemeProvider } from "@emotion/react";
import globalStyles from "./styles/globalStyles";
import theme from "./styles/theme";

if (typeof document != "undefined") {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles(theme.global)} />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>,
    document.getElementById("app")
  );

  // Hot Module Replacement API
  if (module.hot) {
    module.hot.accept();
  }
}
