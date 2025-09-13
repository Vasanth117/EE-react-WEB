// src/pages/NewArrivals.js
import React, { useState } from 'react';
import './NewArrivals.css';

const NewArrivals = () => {
  const [sortBy, setSortBy] = useState('newest');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Beauty', 'Books'];

  const newProducts = [
    { id: 1, name: 'Wireless Earbuds Pro', price: 129.99, category: 'Electronics', rating: 4.5, image: '/images/earbuds-pro.jpg', isNew: true },
    { id: 2, name: 'Smart Watch Series 7', price: 399.99, category: 'Electronics', rating: 4.8, image: '/images/smartwatch-7.jpg', isNew: true },
    { id: 3, name: 'Summer Dress Collection', price: 59.99, category: 'Fashion', rating: 4.3, image: '/images/summer-dress.jpg', isNew: true },
    { id: 4, name: 'Organic Skincare Kit', price: 89.99, category: 'Beauty', rating: 4.6, image: '/images/skincare-kit.jpg', isNew: true },
    { id: 5, name: 'Smart Home Hub', price: 149.99, category: 'Electronics', rating: 4.4, image: '/images/smarthome-hub.jpg', isNew: true },
    { id: 6, name: 'Designer Handbag', price: 199.99, category: 'Fashion', rating: 4.7, image: '/images/designer-handbag.jpg', isNew: true },
    { id: 7, name: 'Air Purifier', price: 179.99, category: 'Home', rating: 4.2, image: '/images/air-purifier.jpg', isNew: true },
    { id: 8, name: 'Best Seller Book Collection', price: 49.99, category: 'Books', rating: 4.9, image: '/images/book-collection.jpg', isNew: true },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? newProducts 
    : newProducts.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'newest') return b.id - a.id;
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="new-arrivals-page">
      <div className="page-header">
        <h1>New Arrivals</h1>
        <p>Discover our latest products</p>
      </div>

      <div className="container">
        <div className="filters-section">
          <div className="category-filters">
            <h3>Categories</h3>
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

          <div className="sort-filters">
            <label htmlFor="sort">Sort by:</label>
            <select 
              id="sort" 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <div className="products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.isNew && <span className="new-badge">New</span>}
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

export default NewArrivals;