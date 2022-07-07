import React, { useState } from "react";
import '../css/Book.css';
import BookDetail from "./BookDetail";

function Book({ book }) {
  const [showDetail, setShowDetail] = useState(false);
  console.log(book)

  // Converts the title to only capitalize the first letter of each word
  const bookTitle = book.title.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

  function handleDetailClick(e) {
    setShowDetail(!showDetail);
  }

  return (
    <div className="book">
      <h2 className="title">{bookTitle}</h2>
      <img className="book-image" src={book.book_image} alt={book.title}></img>
      <h3 className="author">Written by: {book.author}</h3>
      <button onClick={e => handleDetailClick(e)}>{showDetail ? "Show Less Info?" : "Show More Info?"}</button>
      <form>
        <select>
          <option>To Read List</option>
          <option>Have Read List</option>
          <option>Currently Reading List</option>
        </select>
        <br></br>
        <button type="submit">Add to List</button>
      </form>
      {showDetail ? <BookDetail book={book} /> : null}
    </div>
  )
}

export default Book;