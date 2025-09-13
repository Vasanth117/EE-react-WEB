// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const categories = [
    'Electronics', 'Fashion', 'Home', 'Beauty', 'Books', 'Sports'
  ];

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <p>Free shipping on orders over $50</p>
            <div className="top-links">
              <Link to="/help-center">Help</Link>
              <Link to="/order-tracking">Track Order</Link>
              <Link to="/gift-ideas">Gift Cards</Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="main-header">
        <div className="container">
          <div className="header-content">
            <button className="menu-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            
            <Link to="/" className="logo">
              <h1>BenchEnd</h1>
            </Link>
            
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-btn">
                <i className="fas fa-search"></i>
              </button>
            </div>
            
            <div className="header-actions">
              <Link to="/wishlist" className="action-btn">
                <i className="far fa-heart"></i>
                <span>Wishlist</span>
              </Link>
              <Link to="/dashboard" className="action-btn">
                <i className="far fa-user"></i>
                <span>Account</span>
              </Link>
              <Link to="/order-summary" className="action-btn cart-btn">
                <i className="fas fa-shopping-cart"></i>
                <span>Cart</span>
                <span className="cart-count">3</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <nav className={`main-nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <div className="container">
          <ul className="nav-list">
            <li><Link to="/deals">Deals of the Day</Link></li>
            <li><Link to="/new-arrivals">New Arrivals</Link></li>
            <li><Link to="/best-sellers">Best Sellers</Link></li>
            <li><Link to="/clearance">Clearance Sale</Link></li>
            <li className="has-dropdown">
              <a href="#categories">Categories</a>
              <div className="dropdown-menu">
                {categories.map(category => (
                  <Link key={category} to={`/category/${category.toLowerCase()}`}>
                    {category}
                  </Link>
                ))}
              </div>
            </li>
            <li><Link to="/gift-ideas">Gift Ideas</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;