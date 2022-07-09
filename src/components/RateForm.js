import React, { useState, useEffect } from 'react';

function RateForm({ book, updateBookList }) {
  const [hasRating, setHasRating] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [rating, setRating] = useState(book.rating);
  console.log(rating)

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
    setRating(e.target.value)
  }

  function handleUpdateRatingClick(e) {
    setShowRating(!showRating)
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
      {hasRating && !showRating ? <form onSubmit={e => handleFormSubmit(e)}>
        <label>Rate this book?</label>
        <br></br>
        <input type="radio" id="1" name="rating" value={1} onChange={e => handleRatingChange(e)}></input>
        <label>1</label>
        <input type="radio" id="2" name="rating" value={2} onChange={e => handleRatingChange(e)}></input>
        <label>2</label>
        <input type="radio" id="3" name="rating" value={3} onChange={e => handleRatingChange(e)}></input>
        <label>3</label>
        <input type="radio" id="4" name="rating" value={4} onChange={e => handleRatingChange(e)}></input>
        <label>4</label>
        <input type="radio" id="5" name="rating" value={5} onChange={e => handleRatingChange(e)}></input>
        <label>5</label>
        <br></br>
        <input type="submit" value="Submit Rating"></input>
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