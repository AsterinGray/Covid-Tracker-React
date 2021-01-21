import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <span className="nav-menu">
        <Link to="/" className="nav-brand nav-item">
          <i class="fas fa-shield-virus"></i>
          <span>COVID-19</span>
        </Link>
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/province" className="nav-item">
          Province
        </Link>
      </span>
      <button className="nav-btn">
        <a href="tel: 0813 8837 6955">
          <i class="fas fa-phone-alt"></i>
          <span>0813 8837 6955</span>
        </a>
      </button>
    </nav>
  );
};

export default Navbar;
