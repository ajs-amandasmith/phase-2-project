import React from 'react';

function SelectForm({ handleFormSubmit, handleSelectChange, match }) {
  
  return (
    <div>
      <form onSubmit={e => handleFormSubmit(e)}>
        <select defaultValue="" onChange={e => handleSelectChange(e)} required>
          <option value="" disabled>
            {match.url === '/' ? "Select a List" : "Move to a New List"}
          </option>
          <option value="to-read">To Read List</option>
          <option value="currently-reading">Currently Reading List</option>
          <option value="have-read">Have Read List</option>
        </select>
        <br></br>
        <input type="submit" value={match.url === '/' ? "Add to List" : "Move to List"} />
      </form>
    </div>
  )
}

export default SelectForm;

