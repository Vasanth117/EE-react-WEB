// src/pages/Wishlist.js
import React from 'react';
import './Wishlist.css';

const Wishlist = () => {
  const wishlistItems = [
    { id: 1, name: 'Wireless Headphones', price: 89.99, image: '/images/headphones.jpg', inStock: true },
    { id: 2, name: 'Smart Watch', price: 199.99, image: '/images/smartwatch.jpg', inStock: true },
    { id: 3, name: 'Running Shoes', price: 79.99, image: '/images/shoes.jpg', inStock: false },
    { id: 4, name: 'Bluetooth Speaker', price: 59.99, image: '/images/speaker.jpg', inStock: true },
  ];

  const shareWishlist = () => {
    // In a real app, this would generate a shareable link
    alert('Wishlist shared!');
  };

  return (
    <div className="wishlist-page">
      <div className="page-header">
        <h1>My Wishlist</h1>
        <p>Your saved items</p>
      </div>

      <div className="container">
        <div className="wishlist-actions">
          <button className="share-wishlist-btn" onClick={shareWishlist}>
            <i className="fas fa-share-alt"></i>
            Share Wishlist
          </button>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist">
            <i className="far fa-heart"></i>
            <h3>Your wishlist is empty</h3>
            <p>Save your favorite items here for easy access</p>
            <button className="btn btn-primary">Continue Shopping</button>
          </div>
        ) : (
          <div className="wishlist-items">
            {wishlistItems.map(item => (
              <div key={item.id} className="wishlist-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <div className="item-price">${item.price}</div>
                  <div className="item-stock">
                    {item.inStock ? (
                      <span className="in-stock">In Stock</span>
                    ) : (
                      <span className="out-of-stock">Out of Stock</span>
                    )}
                  </div>
                </div>
                <div className="item-actions">
                  <button className="move-to-cart-btn">
                    <i className="fas fa-shopping-cart"></i>
                    Move to Cart
                  </button>
                  <button className="remove-item-btn">
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;