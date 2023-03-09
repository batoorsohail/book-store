import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Navbar = () => (
  <nav className="navbar">
    <h1>Book Store</h1>
    <ul className="menu-container">
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
