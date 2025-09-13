// src/pages/SubscriptionPlans.js
import React, { useState } from 'react';
import './SubscriptionPlans.css';

const SubscriptionPlans = () => {
  const [activePlan, setActivePlan] = useState('monthly');
  const [selectedFrequency, setSelectedFrequency] = useState('monthly');

  const subscriptionPlans = [
    {
      id: 1,
      name: 'Basic Box',
      price: { monthly: 29.99, quarterly: 79.99, yearly: 299.99 },
      description: 'Curated selection of essential items',
      features: ['3-5 products per box', 'Free shipping', 'Cancel anytime'],
      popular: false
    },
    {
      id: 2,
      name: 'Premium Box',
      price: { monthly: 49.99, quarterly: 129.99, yearly: 499.99 },
      description: 'Premium products and exclusive items',
      features: ['5-7 premium products', 'Free shipping', 'Early access to sales', 'Cancel anytime'],
      popular: true
    },
    {
      id: 3,
      name: 'Luxe Box',
      price: { monthly: 99.99, quarterly: 269.99, yearly: 999.99 },
      description: 'Luxury products and personalized selections',
      features: ['7-10 luxury products', 'Free shipping', 'Personal shopper consultation', 'Early access to sales', 'Cancel anytime'],
      popular: false
    }
  ];

  const frequencies = [
    { id: 'monthly', label: 'Monthly', discount: 0 },
    { id: 'quarterly', label: 'Quarterly', discount: 10 },
    { id: 'yearly', label: 'Yearly', discount: 20 }
  ];

  const calculateSavings = (plan) => {
    const monthlyPrice = plan.price.monthly * 12;
    const yearlyPrice = plan.price.yearly;
    return monthlyPrice - yearlyPrice;
  };

  return (
    <div className="subscription-plans-page">
      <div className="page-header">
        <h1>Subscription Plans</h1>
        <p>Choose the plan that works best for you</p>
      </div>

      <div className="container">
        <div className="frequency-selector">
          <h3>Delivery Frequency</h3>
          <div className="frequency-buttons">
            {frequencies.map(frequency => (
              <button
                key={frequency.id}
                className={selectedFrequency === frequency.id ? 'active' : ''}
                onClick={() => setSelectedFrequency(frequency.id)}
              >
                {frequency.label}
                {frequency.discount > 0 && <span>Save {frequency.discount}%</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="plans-grid">
          {subscriptionPlans.map(plan => (
            <div key={plan.id} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="plan-header">
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
                <div className="plan-price">
                  ${plan.price[selectedFrequency].toFixed(2)}
                  <span>/{selectedFrequency}</span>
                </div>
                {selectedFrequency === 'yearly' && (
                  <div className="savings">
                    Save ${calculateSavings(plan).toFixed(2)} annually
                  </div>
                )}
              </div>
              <div className="plan-features">
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="plan-actions">
                <button className="btn btn-primary">Subscribe Now</button>
                {activePlan === plan.name && (
                  <button className="btn btn-secondary">Manage Subscription</button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="subscription-benefits">
          <h2>Why Subscribe?</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <i className="fas fa-shipping-fast"></i>
              <h3>Free Shipping</h3>
              <p>Free delivery on all subscription orders</p>
            </div>
            <div className="benefit">
              <i className="fas fa-gift"></i>
              <h3>Exclusive Products</h3>
              <p>Access to products not available elsewhere</p>
            </div>
            <div className="benefit">
              <i className="fas fa-calendar-alt"></i>
              <h3>Flexible Delivery</h3>
              <p>Change frequency or skip anytime</p>
            </div>
            <div className="benefit">
              <i className="fas fa-star"></i>
              <h3>Member Rewards</h3>
              <p>Earn points with every delivery</p>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Can I change my subscription frequency?</h3>
              <p>Yes, you can change your delivery frequency or skip a delivery at any time from your account settings.</p>
            </div>
            <div className="faq-item">
              <h3>How do I cancel my subscription?</h3>
              <p>You can cancel your subscription at any time from your account settings. There are no cancellation fees.</p>
            </div>
            <div className="faq-item">
              <h3>When will I be charged?</h3>
              <p>You're charged on the same day each month/quarter/year, depending on your chosen frequency.</p>
            </div>
            <div className="faq-item">
              <h3>Can I return items from my subscription box?</h3>
              <p>Yes, all items come with our standard return policy. You can return any item within 30 days of delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;