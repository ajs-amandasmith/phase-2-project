import React from "react";
import Book from "./Book";
import '../css/Home.css'

function Home({ bookData, bookUserData, addBookToList }) {
  const displayBooks = bookData.map(book => (
    <Book key={book.primary_isbn10} book={book} bookUserData={bookUserData} addBookToList={addBookToList} />
  ))

  return (
    <div>
      <h1 className="header">Current Hardcover Best Sellers List</h1>
      <div>
        {displayBooks}
      </div>
    </div>
  )
}

export default Home;