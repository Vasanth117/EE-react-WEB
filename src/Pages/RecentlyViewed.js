import React from 'react';
import './RecentlyViewed.css';

const recentlyViewedItems = [
  {
    id: 1,
    name: 'Wireless Headphones',
    image: '/images/headphones.jpg',
    price: '$59.99',
    link: '/product/wireless-headphones'
  },
  {
    id: 2,
    name: 'Smart Watch',
    image: '/images/smartwatch.jpg',
    price: '$129.99',
    link: '/product/smart-watch'
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    image: '/images/speaker.jpg',
    price: '$39.99',
    link: '/product/bluetooth-speaker'
  }
];

function RecentlyViewed() {
  return (
    <div className="recently-viewed-container">
      <h1 className="recently-viewed-title">Recently Viewed Products</h1>
      <div className="recently-viewed-list">
        {recentlyViewedItems.map(item => (
          <div key={item.id} className="recently-viewed-item">
            <a href={item.link}>
              <img src={item.image} alt={item.name} className="recently-viewed-image" />
            </a>
            <div className="recently-viewed-info">
              <a href={item.link} className="recently-viewed-name">{item.name}</a>
              <div className="recently-viewed-price">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentlyViewed;