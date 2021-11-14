import React from "react";
import { Switch, Route, HashRouter as Router } from "react-router-dom";

// Route Setting
import HomePage from "../HomePage";
import ProjectDetails from "../ProjectDetails";
import ErroPage from "../404";
// Normal Route
import PrivateRoute from "../_PrivateRoute";
import PublicRoute from "../_PublicRoute";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={HomePage} />
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute path="/project/details" component={ProjectDetails} />
        <PrivateRoute path="/404" component={ErroPage} />
        <Route exact component={HomePage} />
      </Switch>
    </Router>
  );
}
