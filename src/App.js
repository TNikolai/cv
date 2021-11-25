import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import CV from "./CV";
import Error from "./Error";

const App = (props) =>
  console.log({ props, l: window.location }) || (
    <Switch>
      <Route exact path="/" component={CV} />
      <Route exact path="/404" component={Error} />
      <Route component={Error} />
    </Switch>
  );

export default App;
