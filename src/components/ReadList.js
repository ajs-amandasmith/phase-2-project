import React from "react";
import Book from "./Book";

function ReadList({ readListData, bookUserData }) {
  const displayBooks = readListData.map(book => (
    <Book key={book.primary_isbn10} book={book} bookUserData={bookUserData} />
  ))

  return (
    <div>
      <h1>Have Read List</h1>
      {displayBooks}
    </div>
  )
}

export default ReadList;