import logo from '../logo.svg';
import '../css/App.css';
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Search from "./Search";
import Filter from "./Filter";
import BookListContainer from "./BookListContainer";

function App() {
  const api = process.env.REACT_APP_NYT_KEY;
  const [status, setStatus] = useState('idle');
  const [bookData, setBookData] = useState([]);
  const [bookUserData, setBookUserData] = useState([]);

  useEffect(() => {
    setStatus("loading");
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${api}`)
      .then(r => r.json())
      .then(books => {
        setBookData(books.results.books)
        setStatus('idle');
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then(r => r.json())
      .then(userBooks => {
        setBookUserData(userBooks);
      })
  }, [])

  function addBookToList(book) {
    const newBookList = [...bookUserData, book]
    setBookUserData(newBookList)
  }

  return (
    <div>
      <header className="App-header">
        The New York Times Reading List
      </header>
      <NavBar />
      {status === 'loading' ? "Loading..." : <BookListContainer bookData={bookData} bookUserData={bookUserData} addBookToList={addBookToList} />}
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
