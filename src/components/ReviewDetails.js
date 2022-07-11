import React from 'react';

function ReviewDetails({ book, handleEditReview, handleDeleteReview }) {
  return (
    <div>
      <p>User Review: {book.review}</p>
      <button onClick={e => handleEditReview(e)}>Edit Review</button>
      <button onClick={e=> handleDeleteReview(e)}>Delete Review</button>
    </div>
  )
}

export default ReviewDetails;