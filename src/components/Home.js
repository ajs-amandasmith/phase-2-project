import React from "react";
import Book from "./Book";
import '../css/Home.css'

function Home({ bookData }) {
  const displayBooks = bookData.map(book => (
    <Book key={book.primary_isbn10} book={book} />
  ))

  return (
    <div>
      <h1 className="header">Current Hardcover Best Sellers List</h1>
      {displayBooks}
    </div>
  )
}

export default Home;