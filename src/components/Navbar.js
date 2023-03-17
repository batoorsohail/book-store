import React from 'react';
import { Link } from 'react-router-dom';
import UserIcon from '../icons';
import '../index.css';

const Navbar = () => (
  <nav className="navbar">
    <h1>Book Store</h1>
    <ul className="menu-container">
      <li>
        <Link to="/" className="nav-links">Books</Link>
      </li>
      <li>
        <Link to="/categories" className="nav-links">Categories</Link>
      </li>
    </ul>
    <div className="icon-list">
      <UserIcon />
    </div>
  </nav>
);

export default Navbar;
