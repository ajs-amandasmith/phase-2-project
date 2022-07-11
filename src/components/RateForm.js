import React, { useState, useEffect } from 'react';

function RateForm({ book, updateBookList }) {
  const [hasRating, setHasRating] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [rating, setRating] = useState(book.rating);

  useEffect(() => {
    if (book.rating > 0) {
      setShowRating(!showRating)
      setHasRating(!hasRating)
    }
  }, [])

  function handleRateClick(e) {
    setHasRating(!hasRating);
  }

  function handleRatingChange(e) {
    setRating(parseInt(e.target.value))
  }

  function handleUpdateRatingClick(e) {
    setShowRating(!showRating)
  }

  function cancelUpdateClick(e) {
    if (book.rating === 0) {
      setShowRating(false)
      setHasRating(false)
    } else {
      setShowRating(!showRating)
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3001/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        rating: parseInt(rating),
      })
    })
      .then(r => r.json())
      .then(updatedBook => {
        updateBookList(updatedBook)
        setShowRating(!showRating);
      })
  }

  return (
    <div>
      {hasRating ? null : <button onClick={handleRateClick}>Rate This Book?</button>}
      {hasRating && !showRating ? <form id="rating-form" onSubmit={e => handleFormSubmit(e)}>
        <label>Rate this book?</label>
        <div>
          <input type="radio" id="1" name="rating" checked={rating === 1} value={1} onChange={e => handleRatingChange(e)}></input>
          <label htmlFor='1'>1</label>
          <input type="radio" id="2" name="rating" checked={rating === 2} value={2} onChange={e => handleRatingChange(e)}></input>
          <label htmlFor='2'>2</label>
          <input type="radio" id="3" name="rating" checked={rating === 3} value={3} onChange={e => handleRatingChange(e)}></input>
          <label htmlFor='3'>3</label>
          <input type="radio" id="4" name="rating" checked={rating === 4} value={4} onChange={e => handleRatingChange(e)}></input>
          <label htmlFor='4'>4</label>
          <input type="radio" id="5" name="rating" checked={rating === 5} value={5} onChange={e => handleRatingChange(e)}></input>
          <label htmlFor='5'>5</label>
        </div>
        <input type="submit" value="Submit Rating"></input>
        <button onClick={cancelUpdateClick}>Cancel Update?</button>
      </form> : null}
      {showRating ? <><h4>Your Rating: {book.rating}</h4>
        <button onClick={handleUpdateRatingClick}>Update Rating?</button></> : null} 
    </div>
  )
}

export default RateForm;


// const commentForms = <form>
//     <label>Rate this book?</label>
//     <input type="radio"></input>
//   </form>;