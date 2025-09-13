// src/pages/ClearanceSale.js
import React, { useState } from 'react';
import './ClearanceSale.css';

const ClearanceSale = () => {
  const [selectedTag, setSelectedTag] = useState('all');

  const tags = ['All', 'Clearance', 'Last Chance', 'Under $50', 'Under $100'];

  const clearanceProducts = [
    { id: 1, name: 'Wireless Earbuds', price: 39.99, oldPrice: 79.99, category: 'Electronics', rating: 4.3, image: '/images/earbuds-clearance.jpg', tags: ['Clearance', 'Under $50'] },
    { id: 2, name: 'Smart Watch Series 5', price: 149.99, oldPrice: 299.99, category: 'Electronics', rating: 4.5, image: '/images/smartwatch-clearance.jpg', tags: ['Clearance', 'Under $150'] },
    { id: 3, name: 'Winter Jacket', price: 59.99, oldPrice: 129.99, category: 'Fashion', rating: 4.2, image: '/images/jacket-clearance.jpg', tags: ['Clearance', 'Under $100', 'Last Chance'] },
    { id: 4, name: 'Bluetooth Speaker', price: 29.99, oldPrice: 59.99, category: 'Electronics', rating: 4.1, image: '/images/speaker-clearance.jpg', tags: ['Clearance', 'Under $50'] },
    { id: 5, name: 'Designer Handbag', price: 99.99, oldPrice: 199.99, category: 'Fashion', rating: 4.6, image: '/images/handbag-clearance.jpg', tags: ['Clearance', 'Under $100'] },
    { id: 6, name: 'Coffee Maker', price: 49.99, oldPrice: 89.99, category: 'Home', rating: 4.0, image: '/images/coffeemaker-clearance.jpg', tags: ['Clearance', 'Under $50', 'Last Chance'] },
    { id: 7, name: 'Skincare Set', price: 39.99, oldPrice: 79.99, category: 'Beauty', rating: 4.4, image: '/images/skincare-clearance.jpg', tags: ['Clearance', 'Under $50'] },
    { id: 8, name: 'Book Collection', price: 19.99, oldPrice: 49.99, category: 'Books', rating: 4.7, image: '/images/books-clearance.jpg', tags: ['Clearance', 'Under $50', 'Last Chance'] },
  ];

  const filteredProducts = selectedTag === 'all' 
    ? clearanceProducts 
    : clearanceProducts.filter(product => product.tags.includes(selectedTag));

  return (
    <div className="clearance-sale-page">
      <div className="page-header">
        <h1>Clearance Sale</h1>
        <p>Huge discounts on selected items</p>
      </div>

      <div className="container">
        <div className="tags-filters">
          <h3>Shop by Tag</h3>
          <div className="tag-buttons">
            {tags.map(tag => (
              <button
                key={tag}
                className={selectedTag === tag ? 'active' : ''}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <span className="clearance-badge">Clearance</span>
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
                <div className="product-price">
                  <span className="current-price">${product.price}</span>
                  <span className="old-price">${product.oldPrice}</span>
                  <span className="discount-percent">
                    {Math.round((1 - product.price / product.oldPrice) * 100)}% off
                  </span>
                </div>
                <div className="product-tags">
                  {product.tags.map(tag => (
                    <span key={tag} className="product-tag">{tag}</span>
                  ))}
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

export default ClearanceSale;