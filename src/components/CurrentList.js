import React from "react";
import '../css/CurrentList.css';
import Book from "./Book";

function CurrentList({ currentListData, bookUserData, updateBookList, isLoggedIn, deleteBook }) {
  const displayBooks = currentListData.map(book => (
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
    <div className="current-list">
      <h1 className="header">Current Reading List</h1>
      {isLoggedIn ? displayBooks : loginNotif}
    </div>
  )
}

export default CurrentList;