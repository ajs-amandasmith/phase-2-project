import React from "react";
import { Route, Switch } from "react-router-dom";
import ToReadList from "./ToReadList";
import ReadList from "./ReadList";
import CurrentList from "./CurrentList";
import Home from "./Home";

function BookListContainer({ bookData, bookUserData, addBookToList }) {
  const currentListData = bookUserData.filter(book => book.list === "currently-reading");
  const toReadListData = bookUserData.filter(book => book.list === "to-read");
  const readListData = bookUserData.filter(book => book.list === "have-read");

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home bookData={bookData} bookUserData={bookUserData} addBookToList={addBookToList} />
        </Route>
        <Route path="/currently-reading">
          <CurrentList currentListData={currentListData} bookUserData={bookUserData} />
        </Route>
        <Route path="/have-read">
          <ReadList readListData={readListData} bookUserData={bookUserData} />
        </Route>
        <Route path="/to-read">
          <ToReadList toReadListData={toReadListData} bookUserData={bookUserData} />
        </Route>
      </Switch>
    </div>
  )
}

export default BookListContainer;