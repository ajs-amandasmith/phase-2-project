import React from "react";
import { Route, Switch } from "react-router-dom";
import ToReadList from "./ToReadList";
import ReadList from "./ReadList";
import CurrentList from "./CurrentList";
import Home from "./Home";

function BookListContainer() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/currently-reading">
          <CurrentList />
        </Route>
        <Route path="/have-read">
          <ReadList />
        </Route>
        <Route path="/to-read">
          <ToReadList />
        </Route>
      </Switch>
    </div>
  )
}

export default BookListContainer;