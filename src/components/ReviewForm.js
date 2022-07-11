import React, { useState } from 'react';

function ReviewForm() {
  const [review, setReview] = useState("");

  function handleReviewChange(e) {
    setReview(e.target.value)
  }

  function handleReviewSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleReviewSubmit}>
        <input type="textarea" value={review} onChange={handleReviewChange}></input>
        <input type="submit" value="Submit Review"></input>
      </form>
    </div>
  )
}

export default ReviewForm;