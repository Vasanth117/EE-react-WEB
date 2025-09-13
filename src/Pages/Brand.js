import React from 'react';
import './Brand.css';

const brands = [
  {
    id: 1,
    name: 'SoundMax',
    logo: '/images/brand-soundmax.png',
    description: 'High-quality audio products for music lovers.',
    website: 'https://soundmax.com'
  },
  {
    id: 2,
    name: 'TechWear',
    logo: '/images/brand-techwear.png',
    description: 'Innovative smart wearables for everyday life.',
    website: 'https://techwear.com'
  },
  {
    id: 3,
    name: 'PulseFit',
    logo: '/images/brand-pulsefit.png',
    description: 'Fitness trackers and accessories for active people.',
    website: 'https://pulsefit.com'
  }
];

function Brand() {
  return (
    <div className="brand-container">
      <h1 className="brand-title">Our Brands</h1>
      <div className="brand-list">
        {brands.map(brand => (
          <div key={brand.id} className="brand-card">
            <img src={brand.logo} alt={brand.name} className="brand-logo" />
            <div className="brand-info">
              <div className="brand-name">{brand.name}</div>
              <div className="brand-description">{brand.description}</div>
              <a href={brand.website} className="brand-link" target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brand;