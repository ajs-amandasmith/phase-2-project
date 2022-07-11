import React, { useState } from 'react';

function ReviewForm({ book, updateBookList }) {
  const [review, setReview] = useState("");

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
      .then(updatedBook => updateBookList(updatedBook))
  }

  return (
    <div>
      {book.review === '' ? <form onSubmit={handleReviewSubmit}>
        <input type="textarea" value={review} onChange={handleReviewChange}></input>
        <input type="submit" value="Submit Review"></input>
      </form> : null}
      {book.review !== '' ? <p>User Review: {book.review}</p> : null}
    </div>
  )
}

export default ReviewForm;