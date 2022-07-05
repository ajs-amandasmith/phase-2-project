import logo from '../logo.svg';
import '../css/App.css';
import NavBar from "./NavBar";
import Search from "./Search";
import Filter from "./Filter";
import BookListContainer from "./BookListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <BookListContainer />
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
