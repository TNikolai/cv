import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import CV from "./CV";

const Routes = (props) =>
  console.log({ props, l: window.location }) || (
    <Switch>
      <Route component={CV} status="CV" />
    </Switch>
  );

export default Routes;
