import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="">
      <span>
        <Link to="/">
          <img alt="NO pic" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/province">Province</Link>
      </span>
      <span className="">
        <a href="tel: 0813 8837 6955">0813 8837 6955</a>
      </span>
    </nav>
  );
};

export default Navbar;
