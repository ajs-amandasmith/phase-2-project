import React, { useState, useEffect } from 'react';
import ReviewDetails from "./ReviewDetails";

function ReviewForm({ book, updateBookList }) {
  const [review, setReview] = useState(book.review);
  const [hasReview, setHasReview] = useState(false)

  useEffect(() => {
    if (book.review !== '') {
      setHasReview(true);
    }
  }, [])

  function handleReviewChange(e) {
    setReview(e.target.value)
  }

  function handleReviewSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3001/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        review: review
      })
    })
      .then(r => r.json())
      .then(updatedBook => {
        updateBookList(updatedBook)
        setHasReview(true)
      })
  }

  function handleEditReview(e) {
    setHasReview(false)
  }

  function handleDeleteReview(e) {
    setReview('');
    fetch(`http://localhost:3001/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        review: ""
      })
    })
      .then(r => r.json())
      .then(updatedBook => {
        updateBookList(updatedBook)
        setHasReview(false)
      })
  }

  return (
    <div>
      {!hasReview ? <form onSubmit={handleReviewSubmit}>
        <input type="textarea" value={review} onChange={handleReviewChange}></input>
        <input type="submit" value="Submit Review"></input>
      </form> : null}
      {hasReview ? <ReviewDetails book={book} handleEditReview={handleEditReview} handleDeleteReview={handleDeleteReview} /> : null}
    </div>
  )
}

export default ReviewForm;