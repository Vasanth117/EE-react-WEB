import React from 'react';
import './CompareProducts.css';

const productsToCompare = [
  {
    id: 1,
    name: 'Wireless Headphones',
    image: '/images/headphones.jpg',
    price: '$59.99',
    features: ['Bluetooth 5.0', 'Noise Cancelling', '20hr Battery', 'Lightweight']
  },
  {
    id: 2,
    name: 'Smart Watch',
    image: '/images/smartwatch.jpg',
    price: '$129.99',
    features: ['Heart Rate Monitor', 'GPS', 'Water Resistant', 'Notifications']
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    image: '/images/speaker.jpg',
    price: '$39.99',
    features: ['Portable', '10hr Battery', 'Stereo Sound', 'Waterproof']
  }
];

function CompareProducts() {
  return (
    <div className="compare-products-container">
      <h1 className="compare-products-title">Compare Products</h1>
      <div className="compare-products-list">
        {productsToCompare.map(product => (
          <div key={product.id} className="compare-product-card">
            <img src={product.image} alt={product.name} className="compare-product-image" />
            <div className="compare-product-info">
              <div className="compare-product-name">{product.name}</div>
              <div className="compare-product-price">{product.price}</div>
              <ul className="compare-product-features">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompareProducts;