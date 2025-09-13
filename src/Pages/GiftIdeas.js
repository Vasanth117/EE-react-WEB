// src/pages/GiftIdeas.js
import React, { useState } from 'react';
import './GiftIdeas.css';

const GiftIdeas = () => {
  const [selectedOccasion, setSelectedOccasion] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const occasions = ['All', 'Birthday', 'Anniversary', 'Wedding', 'Christmas', 'Valentine\'s Day'];
  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under $25', value: 'under-25' },
    { label: '$25 - $50', value: '25-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: 'Over $100', value: 'over-100' }
  ];

  const giftBundles = [
    { id: 1, name: 'Luxury Spa Set', price: 89.99, occasion: 'Anniversary', image: '/images/spa-set.jpg' },
    { id: 2, name: 'Gourmet Coffee Basket', price: 49.99, occasion: 'Birthday', image: '/images/coffee-basket.jpg' },
    { id: 3, name: 'Romantic Evening Box', price: 79.99, occasion: 'Valentine\'s Day', image: '/images/romantic-box.jpg' },
    { id: 4, name: 'Tech Lover Bundle', price: 199.99, occasion: 'Christmas', image: '/images/tech-bundle.jpg' },
  ];

  const filteredBundles = giftBundles.filter(bundle => {
    const occasionMatch = selectedOccasion === 'all' || bundle.occasion === selectedOccasion;
    let priceMatch = true;
    
    if (priceRange === 'under-25') priceMatch = bundle.price < 25;
    else if (priceRange === '25-50') priceMatch = bundle.price >= 25 && bundle.price <= 50;
    else if (priceRange === '50-100') priceMatch = bundle.price >= 50 && bundle.price <= 100;
    else if (priceRange === 'over-100') priceMatch = bundle.price > 100;
    
    return occasionMatch && priceMatch;
  });

  return (
    <div className="gift-ideas-page">
      <div className="page-header">
        <h1>Gift Ideas</h1>
        <p>Find the perfect gift for any occasion</p>
      </div>

      <div className="container">
        <div className="gift-filters">
          <div className="filter-group">
            <h3>Occasion</h3>
            <div className="filter-buttons">
              {occasions.map(occasion => (
                <button
                  key={occasion}
                  className={selectedOccasion === occasion.toLowerCase() ? 'active' : ''}
                  onClick={() => setSelectedOccasion(occasion.toLowerCase())}
                >
                  {occasion}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3>Price Range</h3>
            <div className="filter-buttons">
              {priceRanges.map(range => (
                <button
                  key={range.value}
                  className={priceRange === range.value ? 'active' : ''}
                  onClick={() => setPriceRange(range.value)}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="gift-bundles">
          <h2>Curated Gift Bundles</h2>
          <div className="bundles-grid">
            {filteredBundles.map(bundle => (
              <div key={bundle.id} className="bundle-card">
                <div className="bundle-image">
                  <img src={bundle.image} alt={bundle.name} />
                  <span className="bundle-badge">{bundle.occasion}</span>
                </div>
                <div className="bundle-info">
                  <h3>{bundle.name}</h3>
                  <div className="bundle-price">${bundle.price}</div>
                  <button className="view-bundle-btn">View Bundle</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="personalized-recommendations">
          <h2>Personalized Recommendations</h2>
          <div className="recommendation-form">
            <div className="form-group">
              <label>Who are you shopping for?</label>
              <select>
                <option>Partner</option>
                <option>Parent</option>
                <option>Friend</option>
                <option>Child</option>
                <option>Colleague</option>
              </select>
            </div>
            <div className="form-group">
              <label>Interests</label>
              <select>
                <option>Technology</option>
                <option>Fashion</option>
                <option>Home & Kitchen</option>
                <option>Beauty</option>
                <option>Sports</option>
              </select>
            </div>
            <div className="form-group">
              <label>Budget</label>
              <select>
                <option>Under $50</option>
                <option>$50 - $100</option>
                <option>$100 - $200</option>
                <option>Over $200</option>
              </select>
            </div>
            <button className="btn btn-primary">Get Recommendations</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftIdeas;