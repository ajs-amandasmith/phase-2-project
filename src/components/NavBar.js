import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="to-read">
        To Read List
      </NavLink>
      <NavLink to="have-read">
        Have Read List
      </NavLink>
      <NavLink to="/currently-reading">
        Currently Reading List
      </NavLink>
    </div>
  )
}

export default NavBar;