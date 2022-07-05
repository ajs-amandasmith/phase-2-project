import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {
  const navStyle = {
    display: "inline-block",
    width: "100px",
    height: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  }

  
  return (
    <div>
      <NavLink to="/" style={navStyle}>
        Home
      </NavLink>
      <NavLink to="to-read" style={navStyle}>
        To Read List
      </NavLink>
      <NavLink to="have-read" style={navStyle}>
        Have Read List
      </NavLink>
      <NavLink to="/currently-reading" style={navStyle}>
        Currently Reading List
      </NavLink>
    </div>
  )
}

export default NavBar;