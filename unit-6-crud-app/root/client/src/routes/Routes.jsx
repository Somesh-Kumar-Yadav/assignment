import React from "react";
import { Route, Switch } from "react-router";
import { Edit } from "../components/Edit";
import { Home } from "../components/Home";


export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/edit/:id">
              <Edit />
        </Route>
      </Switch>
    </>
  );
}
