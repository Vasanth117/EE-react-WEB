// src/pages/LoyaltyRewards.js
import React, { useState } from 'react';
import './LoyaltyRewards.css';

const LoyaltyRewards = () => {
  const [activeTab, setActiveTab] = useState('points');

  const userPoints = 1250;
  const pointsTiers = [
    { level: 'Bronze', points: 0, benefits: ['5% discount on selected items'] },
    { level: 'Silver', points: 500, benefits: ['10% discount on all items', 'Free shipping'] },
    { level: 'Gold', points: 1000, benefits: ['15% discount on all items', 'Free shipping', 'Early access to sales'] },
    { level: 'Platinum', points: 2000, benefits: ['20% discount on all items', 'Free shipping', 'Early access to sales', 'Personal shopper'] }
  ];

  const rewards = [
    { id: 1, name: '$10 Gift Card', points: 1000, image: '/images/gift-card.jpg' },
    { id: 2, name: 'Free Shipping', points: 500, image: '/images/free-shipping.jpg' },
    { id: 3, name: 'Premium Product', points: 1500, image: '/images/premium-product.jpg' },
    { id: 4, name: 'VIP Event Access', points: 2000, image: '/images/vip-event.jpg' },
  ];

  const recentActivities = [
    { id: 1, activity: 'Purchase completed', points: 250, date: '2023-06-15' },
    { id: 2, activity: 'Product review', points: 50, date: '2023-06-10' },
    { id: 3, activity: 'Referral bonus', points: 500, date: '2023-06-05' },
    { id: 4, activity: 'Birthday bonus', points: 100, date: '2023-06-01' },
  ];

  const currentTier = pointsTiers.reduce((current, tier) => {
    return userPoints >= tier.points ? tier : current;
  }, pointsTiers[0]);

  const nextTier = pointsTiers.find(tier => tier.points > userPoints) || pointsTiers[pointsTiers.length - 1];
  const pointsToNextTier = nextTier.points - userPoints;

  return (
    <div className="loyalty-rewards-page">
      <div className="page-header">
        <h1>Loyalty & Rewards</h1>
        <p>Earn points and get rewarded</p>
      </div>

      <div className="container">
        <div className="points-summary">
          <div className="points-display">
            <h2>Your Points</h2>
            <div className="points-value">{userPoints}</div>
            <p>Current Tier: <span className="tier-badge">{currentTier.level}</span></p>
          </div>

          <div className="progress-section">
            <h3>Progress to {nextTier.level} Tier</h3>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(userPoints / nextTier.points) * 100}%` }}
              ></div>
            </div>
            <p>{pointsToNextTier} points needed for {nextTier.level}</p>
          </div>
        </div>

        <div className="rewards-tabs">
          <button 
            className={activeTab === 'points' ? 'active' : ''}
            onClick={() => setActiveTab('points')}
          >
            Earn Points
          </button>
          <button 
            className={activeTab === 'rewards' ? 'active' : ''}
            onClick={() => setActiveTab('rewards')}
          >
            Redeem Rewards
          </button>
          <button 
            className={activeTab === 'activity' ? 'active' : ''}
            onClick={() => setActiveTab('activity')}
          >
            Activity History
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'points' && (
            <div className="earn-points">
              <h2>Ways to Earn Points</h2>
              <div className="earning-methods">
                <div className="method">
                  <i className="fas fa-shopping-cart"></i>
                  <h3>Make Purchases</h3>
                  <p>1 point for every $1 spent</p>
                </div>
                <div className="method">
                  <i className="fas fa-star"></i>
                  <h3>Write Reviews</h3>
                  <p>50 points per review</p>
                </div>
                <div className="method">
                  <i className="fas fa-user-plus"></i>
                  <h3>Refer Friends</h3>
                  <p>500 points per referral</p>
                </div>
                <div className="method">
                  <i className="fas fa-birthday-cake"></i>
                  <h3>Birthday Bonus</h3>
                  <p>100 points on your birthday</p>
                </div>
              </div>

              <div className="referral-section">
                <h3>Refer a Friend</h3>
                <p>Share your referral code and earn 500 points when a friend makes their first purchase</p>
                <div className="referral-code">
                  <span>REF-123456</span>
                  <button className="btn btn-primary">Copy Code</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'rewards' && (
            <div className="redeem-rewards">
              <h2>Available Rewards</h2>
              <div className="rewards-grid">
                {rewards.map(reward => (
                  <div key={reward.id} className="reward-card">
                    <div className="reward-image">
                      <img src={reward.image} alt={reward.name} />
                    </div>
                    <div className="reward-info">
                      <h3>{reward.name}</h3>
                      <div className="reward-points">{reward.points} points</div>
                      <button 
                        className="redeem-btn"
                        disabled={userPoints < reward.points}
                      >
                        {userPoints >= reward.points ? 'Redeem Now' : 'Not Enough Points'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="activity-history">
              <h2>Recent Activity</h2>
              <div className="activity-list">
                {recentActivities.map(activity => (
                  <div key={activity.id} className="activity-item">
                    <div className="activity-details">
                      <h3>{activity.activity}</h3>
                      <p>{new Date(activity.date).toLocaleDateString()}</p>
                    </div>
                    <div className="activity-points">+{activity.points}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="tiers-section">
          <h2>Membership Tiers</h2>
          <div className="tiers-grid">
            {pointsTiers.map(tier => (
              <div 
                key={tier.level} 
                className={`tier-card ${userPoints >= tier.points ? 'active' : ''}`}
              >
                <h3>{tier.level}</h3>
                <div className="tier-points">{tier.points} points</div>
                <ul className="tier-benefits">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyRewards;