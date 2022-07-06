import React, { useState } from 'react';
import '../css/NavBar.css';
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const activeLink = {
    background: "white",
    color: "#282c34"
  }

  function handleLogInClick(e) {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div className="nav-bar">
      <NavLink exact to="/" className="nav-link" activeStyle={activeLink}>
        Home
      </NavLink>
      <NavLink to="to-read" className="nav-link" activeStyle={activeLink}>
        To Read
      </NavLink>
      <NavLink to="have-read" className="nav-link" activeStyle={activeLink}>
        Have Read
      </NavLink>
      <NavLink to="/currently-reading" className="nav-link" activeStyle={activeLink}>
        Currently Reading
      </NavLink>
      <button className="login" onClick={handleLogInClick}>{isLoggedIn ? "Log Out" : "Log In"}</button>
    </div>
  )
}

export default NavBar;