import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import CV from "./CV";

const Routes = (props) => (
  <Switch>
    <Route component={CV} key="CV" />
  </Switch>
);

export default Routes;
