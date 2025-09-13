// src/pages/DealsOfTheDay.js
import React, { useState, useEffect } from 'react';
import './DealsOfTheDay.css';

const DealsOfTheDay = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 18
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const deals = [
    { id: 1, name: 'Wireless Earbuds', price: 49.99, oldPrice: 79.99, rating: 4.3, stock: 15, image: '/images/earbuds.jpg' },
    { id: 2, name: 'Smart Home Hub', price: 89.99, oldPrice: 129.99, rating: 4.7, stock: 8, image: '/images/smarthub.jpg' },
    { id: 3, name: 'Fitness Tracker', price: 39.99, oldPrice: 59.99, rating: 4.2, stock: 22, image: '/images/fitnesstracker.jpg' },
    { id: 4, name: 'Portable Charger', price: 29.99, oldPrice: 49.99, rating: 4.1, stock: 12, image: '/images/charger.jpg' },
    { id: 5, name: 'Gaming Mouse', price: 45.99, oldPrice: 69.99, rating: 4.5, stock: 5, image: '/images/gamingmouse.jpg' },
    { id: 6, name: 'Bluetooth Keyboard', price: 59.99, oldPrice: 89.99, rating: 4.4, stock: 18, image: '/images/keyboard.jpg' },
  ];

  return (
    <div className="deals-page">
      <div className="container">
        <div className="page-header">
          <h1>Deals of the Day</h1>
          <div className="countdown-timer">
            <h3>Hurry! These deals end soon:</h3>
            <div className="timer">
              <div className="time-unit">
                <span className="time-value">{timeLeft.hours.toString().padStart(2, '0')}</span>
                <span className="time-label">Hours</span>
              </div>
              <span className="time-separator">:</span>
              <div className="time-unit">
                <span className="time-value">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <span className="time-label">Minutes</span>
              </div>
              <span className="time-separator">:</span>
              <div className="time-unit">
                <span className="time-value">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <span className="time-label">Seconds</span>
              </div>
            </div>
          </div>
        </div>

        <div className="deals-grid">
          {deals.map(deal => (
            <div key={deal.id} className="deal-card">
              <div className="deal-image">
                <img src={deal.image} alt={deal.name} />
                <button className="wishlist-btn">
                  <i className="far fa-heart"></i>
                </button>
                <span className="discount-badge">
                  {Math.round((1 - deal.price / deal.oldPrice) * 100)}% OFF
                </span>
              </div>
              <div className="deal-info">
                <h3>{deal.name}</h3>
                <div className="product-rating">
                  <div className="stars">
                    {'★'.repeat(Math.floor(deal.rating))}
                    {'☆'.repeat(5 - Math.floor(deal.rating))}
                  </div>
                  <span>({deal.rating})</span>
                </div>
                <div className="product-price">
                  <span className="current-price">${deal.price}</span>
                  <span className="old-price">${deal.oldPrice}</span>
                </div>
                <div className="stock-indicator">
                  <div className="stock-bar">
                    <div 
                      className="stock-progress" 
                      style={{ width: `${(deal.stock / 25) * 100}%` }}
                    ></div>
                  </div>
                  <span>Only {deal.stock} left!</span>
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

export default DealsOfTheDay;