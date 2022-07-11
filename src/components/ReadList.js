import React from "react";
import '../css/ReadList.css';
import Book from "./Book";

function ReadList({ readListData, bookUserData, updateBookList, isLoggedIn, deleteBook }) {
  const displayBooks = readListData.map(book => (
    <Book 
      key={book.primary_isbn10} 
      book={book} 
      bookUserData={bookUserData} 
      updateBookList={updateBookList} 
      isLoggedIn={isLoggedIn}
      deleteBook={deleteBook}
    />
  ))

  const loginNotif = <h3>Please Log In</h3>

  return (
    <div className="read-list">
      <h1 className="header">Have Read List</h1>
      {isLoggedIn ? displayBooks : loginNotif}
    </div>
  )
}

export default ReadList;