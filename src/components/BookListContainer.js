import React from "react";
import { Route, Switch } from "react-router-dom";
import ToReadList from "./ToReadList";
import ReadList from "./ReadList";
import CurrentList from "./CurrentList";
import Home from "./Home";

function BookListContainer({ bookData, bookUserData }) {
  const currentListData = bookUserData.filter(book => book.list === "currently-reading");
  const toReadListData = bookUserData.filter(book => book.list === "to-read");
  const readListData = bookUserData.filter(book => book.list === "have-read");

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home bookData={bookData} />
        </Route>
        <Route path="/currently-reading">
          <CurrentList currentListData={currentListData} />
        </Route>
        <Route path="/have-read">
          <ReadList readListData={readListData} />
        </Route>
        <Route path="/to-read">
          <ToReadList toReadListData={toReadListData} />
        </Route>
      </Switch>
    </div>
  )
}

export default BookListContainer;