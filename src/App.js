import React from "react";
import Home from "./Home";
import { Route, Switch, Redirect } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <Route exact path="/home" render={(props) => <Home {...props} />} />
      {}
    </Switch>
  );
}
