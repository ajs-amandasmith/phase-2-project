import React from "react";
import Book from "./Book";

function CurrentList({ currentListData }) {
  const displayBooks = currentListData.map(book => (
    <Book key={book.primary_isbn10} book={book} />
  ))

  return (
    <div>
      <h1>Current Reading List</h1>
      {displayBooks}
    </div>
  )
}

export default CurrentList;