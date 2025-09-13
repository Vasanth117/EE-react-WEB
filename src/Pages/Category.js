// src/pages/Category.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Category.css';

const Category = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    price: '',
    brand: '',
    rating: '',
    availability: ''
  });

  const brands = ['Apple', 'Samsung', 'Sony', 'LG', 'Microsoft'];
  const ratings = ['4+ Stars', '3+ Stars', '2+ Stars', '1+ Star'];

  useEffect(() => {
    // Simulate API call based on category
    const mockProducts = [
      { id: 1, name: 'Wireless Headphones', price: 89.99, rating: 4.5, brand: 'Sony', image: '/images/headphones.jpg', inStock: true },
      { id: 2, name: 'Smart Watch', price: 199.99, rating: 4.7, brand: 'Apple', image: '/images/smartwatch.jpg', inStock: true },
      { id: 3, name: 'Bluetooth Speaker', price: 59.99, rating: 4.2, brand: 'JBL', image: '/images/speaker.jpg', inStock: false },
      { id: 4, name: 'Gaming Mouse', price: 45.99, rating: 4.5, brand: 'Logitech', image: '/images/gamingmouse.jpg', inStock: true },
      { id: 5, name: 'Keyboard', price: 59.99, rating: 4.4, brand: 'Microsoft', image: '/images/keyboard.jpg', inStock: true },
      { id: 6, name: 'Webcam', price: 79.99, rating: 4.1, brand: 'Logitech', image: '/images/webcam.jpg', inStock: true },
      { id: 7, name: 'External SSD', price: 129.99, rating: 4.8, brand: 'Samsung', image: '/images/ssd.jpg', inStock: false },
      { id: 8, name: 'Monitor', price: 299.99, rating: 4.6, brand: 'LG', image: '/images/monitor.jpg', inStock: true },
    ];

    setProducts(mockProducts);
  }, [categoryName]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      price: '',
      brand: '',
      rating: '',
      availability: ''
    });
  };

  const filteredProducts = products.filter(product => {
    if (filters.price === 'under-50' && product.price >= 50) return false;
    if (filters.price === '50-100' && (product.price < 50 || product.price > 100)) return false;
    if (filters.price === '100-200' && (product.price < 100 || product.price > 200)) return false;
    if (filters.price === 'over-200' && product.price <= 200) return false;

    if (filters.brand && product.brand !== filters.brand) return false;

    if (filters.rating === '4+' && product.rating < 4) return false;
    if (filters.rating === '3+' && product.rating < 3) return false;
    if (filters.rating === '2+' && product.rating < 2) return false;
    if (filters.rating === '1+' && product.rating < 1) return false;

    if (filters.availability === 'in-stock' && !product.inStock) return false;
    if (filters.availability === 'out-of-stock' && product.inStock) return false;

    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // featured or default
  });

  return (
    <div className="category-page">
      <div className="page-header">
        <h1>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h1>
        <p>Browse our {categoryName} collection</p>
      </div>

      <div className="container">
        <div className="category-content">
          <div className="filters-sidebar">
            <div className="filters-header">
              <h3>Filters</h3>
              <button onClick={clearFilters}>Clear All</button>
            </div>

            <div className="filter-group">
              <h4>Price</h4>
              <div className="filter-options">
                <label>
                  <input
                    type="radio"
                    name="price"
                    checked={filters.price === 'under-50'}
                    onChange={() => handleFilterChange('price', 'under-50')}
                  />
                  Under $50
                </label>
                <label>
                  <input
                    type="radio"
                    name="price"
                    checked={filters.price === '50-100'}
                    onChange={() => handleFilterChange('price', '50-100')}
                  />
                  $50 - $100
                </label>
                <label>
                  <input
                    type="radio"
                    name="price"
                    checked={filters.price === '100-200'}
                    onChange={() => handleFilterChange('price', '100-200')}
                  />
                  $100 - $200
                </label>
                <label>
                  <input
                    type="radio"
                    name="price"
                    checked={filters.price === 'over-200'}
                    onChange={() => handleFilterChange('price', 'over-200')}
                  />
                  Over $200
                </label>
              </div>
            </div>

            <div className="filter-group">
              <h4>Brand</h4>
              <div className="filter-options">
                {brands.map(brand => (
                  <label key={brand}>
                    <input
                      type="radio"
                      name="brand"
                      checked={filters.brand === brand}
                      onChange={() => handleFilterChange('brand', brand)}
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <h4>Customer Rating</h4>
              <div className="filter-options">
                {ratings.map(rating => (
                  <label key={rating}>
                    <input
                      type="radio"
                      name="rating"
                      checked={filters.rating === rating.replace('+', '').replace(' Stars', '')}
                      onChange={() => handleFilterChange('rating', rating.replace('+', '').replace(' Stars', ''))}
                    />
                    {rating}
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <h4>Availability</h4>
              <div className="filter-options">
                <label>
                  <input
                    type="radio"
                    name="availability"
                    checked={filters.availability === 'in-stock'}
                    onChange={() => handleFilterChange('availability', 'in-stock')}
                  />
                  In Stock
                </label>
                <label>
                  <input
                    type="radio"
                    name="availability"
                    checked={filters.availability === 'out-of-stock'}
                    onChange={() => handleFilterChange('availability', 'out-of-stock')}
                  />
                  Out of Stock
                </label>
              </div>
            </div>
          </div>

          <div className="products-section">
            <div className="products-header">
              <p>{sortedProducts.length} products found</p>
              <div className="sort-options">
                <label>Sort by:</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                </select>
              </div>
            </div>

            <div className="products-grid">
              {sortedProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    {!product.inStock && <div className="out-of-stock">Out of Stock</div>}
                    <button className="wishlist-btn">
                      <i className="far fa-heart"></i>
                    </button>
                  </div>
                  <div className="product-info">
                    <span className="product-brand">{product.brand}</span>
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
                    <button 
                      className="add-to-cart-btn"
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="no-products">
                <i className="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your filters to see more results</p>
                <button onClick={clearFilters} className="btn btn-primary">
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;