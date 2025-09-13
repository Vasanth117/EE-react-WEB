// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const featuredCategories = [
    { name: 'Electronics', image: '/images/electronics.jpg', items: 1245 },
    { name: 'Fashion', image: '/images/fashion.jpg', items: 2897 },
    { name: 'Home', image: '/images/home.jpg', items: 1876 },
    { name: 'Beauty', image: '/images/beauty.jpg', items: 956 },
  ];

  const featuredProducts = [
    { id: 1, name: 'Wireless Headphones', price: 89.99, oldPrice: 129.99, rating: 4.5, image: '/images/headphones.jpg' },
    { id: 2, name: 'Smart Watch', price: 199.99, oldPrice: 249.99, rating: 4.7, image: '/images/smartwatch.jpg' },
    { id: 3, name: 'Running Shoes', price: 79.99, oldPrice: 99.99, rating: 4.3, image: '/images/shoes.jpg' },
    { id: 4, name: 'Bluetooth Speaker', price: 59.99, oldPrice: 79.99, rating: 4.2, image: '/images/speaker.jpg' },
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Summer Sale</h1>
          <h2>Up to 50% Off on Selected Items</h2>
          <p>Discover the latest trends and get amazing deals on thousands of products.</p>
          <div className="hero-buttons">
            <Link to="/deals" className="btn btn-primary">Shop Now</Link>
            <Link to="/new-arrivals" className="btn btn-secondary">New Arrivals</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero-banner.jpg" alt="Summer Sale" />
        </div>
      </section>

      {/* Featured Categories */}
      <section className="featured-categories">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="categories-grid">
            {featuredCategories.map(category => (
              <div key={category.name} className="category-card">
                <img src={category.image} alt={category.name} />
                <div className="category-info">
                  <h3>{category.name}</h3>
                  <p>{category.items} items</p>
                  <Link to={`/category/${category.name.toLowerCase()}`}>Shop Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Sales */}
      <section className="flash-sales">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Flash Sales</h2>
            <div className="countdown">
              <span>Ends in:</span>
              <div className="countdown-timer">
                <span>05</span>:<span>42</span>:<span>18</span>
              </div>
            </div>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <button className="wishlist-btn">
                    <i className="far fa-heart"></i>
                  </button>
                  {product.oldPrice && (
                    <span className="discount-badge">
                      {Math.round((1 - product.price / product.oldPrice) * 100)}%
                    </span>
                  )}
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="product-rating">
                    <div className="stars">
                      {'★'.repeat(Math.floor(product.rating))}
                      {'☆'.repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span>({product.rating})</span>
                  </div>
                  <div className="product-price">
                    <span className="current-price">${product.price}</span>
                    {product.oldPrice && (
                      <span className="old-price">${product.oldPrice}</span>
                    )}
                  </div>
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-container">
            <Link to="/deals" className="view-all-btn">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Additional sections would go here */}
    </div>
  );
};

export default LandingPage;