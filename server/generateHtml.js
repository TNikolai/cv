import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import Routes from "../src/Routes";

const render = (locals) => {
  const context = {};

  const html = renderToString(
    <StaticRouter location={locals.path} context={context}>
      <Routes />
    </StaticRouter>
  );

  return Promise.resolve(`
  <!doctype html>
  <head></head>
  <body>
    <div id="app">${html}</div>
    <script type="module" src="bundle.js"></script>
  </body>
  `);
};

export default render;
