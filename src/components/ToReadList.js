import React from "react";
import '../css/ToReadList.css';
import Book from "./Book";

function ToReadList({ toReadListData, bookUserData, updateBookList, isLoggedIn, deleteBook }) {
  const displayBooks = toReadListData.map(book => (
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
    <div className="to-read-list">
      <h1 className="header">To Read List</h1>
      {isLoggedIn ? displayBooks : loginNotif}
    </div>
  )
}

export default ToReadList;