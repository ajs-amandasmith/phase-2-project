import React, { useState } from 'react';
import '../css/NavBar.css';
import { NavLink } from "react-router-dom";

function NavBar({ isLoggedIn, handleLogInClick }) {
  const activeLink = {
    background: "white",
    color: "#282c34"
  }

  return (
    <div className="nav-bar">
      <NavLink exact to="/" className="nav-link" activeStyle={activeLink}>
        Home
      </NavLink>
      {isLoggedIn ? (<NavLink to="/to-read" className="nav-link" activeStyle={activeLink}>To Read</NavLink>) : null}
      {isLoggedIn ? (<NavLink to="/have-read" className="nav-link" activeStyle={activeLink}>Have Read</NavLink>) : null}
      {isLoggedIn ? (<NavLink to="/currently-reading" className="nav-link" activeStyle={activeLink}>Currently Reading</NavLink>) : null}
      <button className="login" onClick={handleLogInClick}>{isLoggedIn ? "Log Out" : "Log In"}</button>
    </div>
  )
}

export default NavBar;