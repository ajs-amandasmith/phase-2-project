import React from "react";
import Book from "./Book";

function ToReadList({ toReadListData }) {
  const displayBooks = toReadListData.map(book => (
    <Book key={book.primary_isbn10} book={book} />
  ))

  return (
    <div>
      <h1>To Read List</h1>
      {displayBooks}
    </div>
  )
}

export default ToReadList;