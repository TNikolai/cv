import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import CV from "./CV";
import Error from "./Error";

const Routes = (props) =>
  console.log({ props, l: window.location }) || (
    <Switch>
      <Route exact path="/" component={CV} />
      <Route exact path="/404" component={Error} />
      <Route component={Error} status="404" />
    </Switch>
  );

export default Routes;
