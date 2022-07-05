import React, { useState } from 'react';
import '../css/NavBar.css';
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogInClick(e) {
    console.log(e.target)
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div className="nav-bar">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="to-read" className="nav-link">
        To Read List
      </NavLink>
      <NavLink to="have-read" className="nav-link">
        Have Read List
      </NavLink>
      <NavLink to="/currently-reading" className="nav-link">
        Currently Reading List
      </NavLink>
      <button onClick={handleLogInClick}>{isLoggedIn ? "Log Out" : "Log In"}</button>
    </div>
  )
}

export default NavBar;