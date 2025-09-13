// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-sections">
            <div className="footer-section">
              <h3>ShopEase</h3>
              <p>Your one-stop destination for all your shopping needs. Quality products at affordable prices.</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-pinterest"></i></a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Shop</h4>
              <ul>
                <li><Link to="/new-arrivals">New Arrivals</Link></li>
                <li><Link to="/best-sellers">Best Sellers</Link></li>
                <li><Link to="/deals">Deals of the Day</Link></li>
                <li><Link to="/clearance">Clearance Sale</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Help</h4>
              <ul>
                <li><Link to="/help-center">Help Center</Link></li>
                <li><Link to="/return-refund">Returns & Refunds</Link></li>
                <li><Link to="/order-tracking">Track Order</Link></li>
                <li><Link to="/chat-support">Contact Us</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/blogs">Blog</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Newsletter</h4>
              <p>Subscribe to get special offers, free giveaways, and exclusive deals.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2025 BenchEnd Tech. All rights reserved.</p>
          <div className="payment-methods">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-amex"></i>
            <i className="fab fa-cc-paypal"></i>
            <i className="fab fa-cc-apple-pay"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;