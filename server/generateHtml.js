import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../src/Routes";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

const render = (locals, ...rest) => {
  const context = {};

  console.log({ locals, rest });

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={locals.path} context={context}>
      <Routes />
    </StaticRouter>
  );

  return Promise.resolve(`
  <!doctype html>
  <head></head>
  <body>
    <div id="app">${html}</div>
    <script src="bundle.js"></script>
  </body>
  `);
};

export default render;
