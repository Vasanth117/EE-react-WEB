// src/pages/BestSellers.js
import React, { useState } from 'react';
import './BestSellers.css';

const BestSellers = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Beauty', 'Books'];

  const bestSellers = [
    { id: 1, name: 'Wireless Headphones', price: 89.99, category: 'Electronics', rating: 4.5, reviews: 1245, image: '/images/headphones.jpg', isBestSeller: true },
    { id: 2, name: 'Smart Watch', price: 199.99, category: 'Electronics', rating: 4.7, reviews: 987, image: '/images/smartwatch.jpg', isBestSeller: true },
    { id: 3, name: 'Running Shoes', price: 79.99, category: 'Fashion', rating: 4.3, reviews: 756, image: '/images/shoes.jpg', isBestSeller: true },
    { id: 4, name: 'Bluetooth Speaker', price: 59.99, category: 'Electronics', rating: 4.2, reviews: 632, image: '/images/speaker.jpg', isBestSeller: true },
    { id: 5, name: 'Designer Handbag', price: 199.99, category: 'Fashion', rating: 4.8, reviews: 521, image: '/images/handbag.jpg', isBestSeller: true },
    { id: 6, name: 'Air Purifier', price: 179.99, category: 'Home', rating: 4.4, reviews: 487, image: '/images/air-purifier.jpg', isBestSeller: true },
    { id: 7, name: 'Skincare Set', price: 89.99, category: 'Beauty', rating: 4.6, reviews: 412, image: '/images/skincare-set.jpg', isBestSeller: true },
    { id: 8, name: 'Bestselling Novel', price: 14.99, category: 'Books', rating: 4.9, reviews: 389, image: '/images/novel.jpg', isBestSeller: true },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? bestSellers 
    : bestSellers.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="best-sellers-page">
      <div className="page-header">
        <h1>Best Sellers</h1>
        <p>Our most popular products</p>
      </div>

      <div className="container">
        <div className="category-filters">
          <h3>Shop by Category</h3>
          <div className="category-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={selectedCategory === category.toLowerCase() ? 'active' : ''}
                onClick={() => setSelectedCategory(category.toLowerCase())}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.isBestSeller && <span className="bestseller-badge">Bestseller</span>}
                <button className="wishlist-btn">
                  <i className="far fa-heart"></i>
                </button>
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <div className="product-rating">
                  <div className="stars">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span>({product.rating})</span>
                </div>
                <div className="product-reviews">
                  {product.reviews.toLocaleString()} reviews
                </div>
                <div className="product-price">
                  <span className="current-price">${product.price}</span>
                </div>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;