import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

if (typeof document != "undefined") {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("app")
  );

  // Hot Module Replacement API
  if (module.hot) {
    module.hot.accept();
  }
}
