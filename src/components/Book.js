import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import '../css/Book.css';
import BookDetail from "./BookDetail";
import SelectForm from "./SelectForm";
import RateForm from "./RateForm";

function Book({ book, bookUserData, addBookToList, updateBookList, isLoggedIn, deleteBook }) {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedList, setSelectedList] = useState("");
  const match = useRouteMatch();

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
      // is checking to see if a book is already in the db.json file
      if (bookUserData.find(bookData => bookData.primary_isbn10 === book.primary_isbn10) === undefined) {
        fetch("http://localhost:3001/books", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title: book.title,
            book_image: book.book_image,
            author: book.author,
            description: book.description,
            publisher: book.publisher,
            rank: book.rank,
            rank_last_week: book.rank_last_week,
            weeks_on_list: book.weeks_on_list,
            primary_isbn10: book.primary_isbn10,
            list: selectedList,
            comments: [],
            rating: 0
          })
        })
          .then(r => r.json())
          .then(newBook => {addBookToList(newBook)})
      } else {
        alert("You've already added this book to a list!")
      }
    } else if (match.url === '/' + selectedList) {
      alert("This book is already in this list!")
    } else {
      fetch(`http://localhost:3001/books/${book.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          list: selectedList,
        })
      })
        .then(r => r.json())
        .then(updatedBook => updateBookList(updatedBook))
    }
  }

  function handleDelete(e) {
    fetch(`http://localhost:3001/books/${book.id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(deleteBook(book))
  }

  return (
    <div className="book">
      <h2 className="title">{bookTitle}</h2>
      <img className="book-image" src={book.book_image} alt={book.title}></img>
      <h3 className="author">Written by: {book.author}</h3>
      <button onClick={e => handleDetailClick(e)}>{showDetail ? "Show Less Info?" : "Show More Info?"}</button>
      {isLoggedIn ? <SelectForm handleFormSubmit={handleFormSubmit} handleSelectChange={handleSelectChange} match={match} /> : null}
      {match.url === "/have-read" ? <RateForm book={book} updateBookList={updateBookList} /> : null}
      {match.url === '/' ? null : <button onClick={handleDelete}>Delete Book from List?</button>}
      {showDetail ? <BookDetail book={book} /> : null}
    </div>
  )
}

export default Book;