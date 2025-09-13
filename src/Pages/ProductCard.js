// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, onAddToWishlist }) => {
  const {
    id,
    name,
    price,
    oldPrice,
    rating,
    image,
    category,
    isNew,
    isBestSeller,
    discountPercent
  } = product;

  const handleAddToCart = () => {
    onAddToCart && onAddToCart(product);
  };

  const handleAddToWishlist = () => {
    onAddToWishlist && onAddToWishlist(product);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
        
        {isNew && <span className="new-badge">New</span>}
        {isBestSeller && <span className="bestseller-badge">Bestseller</span>}
        {discountPercent && <span className="discount-badge">{discountPercent}% OFF</span>}
        
        <button className="wishlist-btn" onClick={handleAddToWishlist}>
          <i className="far fa-heart"></i>
        </button>
      </div>
      
      <div className="product-info">
        {category && <span className="product-category">{category}</span>}
        <h3>{name}</h3>
        
        <div className="product-rating">
          <div className="stars">
            {'★'.repeat(Math.floor(rating))}
            {'☆'.repeat(5 - Math.floor(rating))}
          </div>
          <span>({rating})</span>
        </div>
        
        <div className="product-price">
          <span className="current-price">${price}</span>
          {oldPrice && <span className="old-price">${oldPrice}</span>}
        </div>
        
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;