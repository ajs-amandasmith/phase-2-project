import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import '../css/Book.css';
import BookDetail from "./BookDetail";

function Book({ book }) {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedList, setSelectedList] = useState("")
  const match = useRouteMatch();
  // console.log(match)
  // console.log(book)

  // Converts the title to only capitalize the first letter of each word
  const bookTitle = book.title.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

  function handleDetailClick(e) {
    setShowDetail(!showDetail);
  }

  function handleSelectChange(e) {
    setSelectedList(e.target.value)
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (match.url === '/') {
      console.log(book)
    }
  }

  // if the current book isn't in the db.json list
    // post it
  // if the current book is in the db.json list
    // check the list key and if it's the same as what's being selected


  return (
    <div className="book">
      <h2 className="title">{bookTitle}</h2>
      <img className="book-image" src={book.book_image} alt={book.title}></img>
      <h3 className="author">Written by: {book.author}</h3>
      <button onClick={e => handleDetailClick(e)}>{showDetail ? "Show Less Info?" : "Show More Info?"}</button>
      <form onSubmit={e => handleFormSubmit(e)}>
        <select defaultValue="default" onChange={e => handleSelectChange(e)} >
          <option value="default" disabled>Select a List</option>
          <option value="to-read">To Read List</option>
          <option value="have-read">Have Read List</option>
          <option value="currently-reading">Currently Reading List</option>
        </select>
        <br></br>
        <input type="submit" value="Add to List" />
      </form>
      {showDetail ? <BookDetail book={book} /> : null}
    </div>
  )
}

export default Book;