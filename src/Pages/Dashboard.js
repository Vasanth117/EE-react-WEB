// src/pages/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const recentOrders = [
    { id: 'ORD-12345', date: '2023-06-15', status: 'Delivered', total: 149.99 },
    { id: 'ORD-12346', date: '2023-06-10', status: 'Shipped', total: 89.99 },
    { id: 'ORD-12347', date: '2023-06-05', status: 'Processing', total: 199.99 },
  ];

  const recommendedProducts = [
    { id: 1, name: 'Wireless Earbuds', price: 89.99, image: '/images/earbuds-rec.jpg' },
    { id: 2, name: 'Fitness Tracker', price: 59.99, image: '/images/fitness-rec.jpg' },
    { id: 3, name: 'Phone Case', price: 29.99, image: '/images/phonecase-rec.jpg' },
  ];

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <h1>My Dashboard</h1>
        <p>Welcome back, John!</p>
      </div>

      <div className="container">
        <div className="dashboard-grid">
          <div className="dashboard-card account-summary">
            <h2>Account Summary</h2>
            <div className="summary-items">
              <div className="summary-item">
                <div className="summary-icon">
                  <i className="fas fa-shopping-bag"></i>
                </div>
                <div className="summary-details">
                  <h3>Orders</h3>
                  <p>12 orders placed</p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <div className="summary-details">
                  <h3>Wishlist</h3>
                  <p>8 items saved</p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="summary-details">
                  <h3>Addresses</h3>
                  <p>3 addresses saved</p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">
                  <i className="fas fa-credit-card"></i>
                </div>
                <div className="summary-details">
                  <h3>Payment Methods</h3>
                  <p>2 cards saved</p>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-card recent-orders">
            <h2>Recent Orders</h2>
            {recentOrders.length === 0 ? (
              <p className="no-orders">You haven't placed any orders yet.</p>
            ) : (
              <div className="orders-list">
                {recentOrders.map(order => (
                  <div key={order.id} className="order-item">
                    <div className="order-info">
                      <h3>Order #{order.id}</h3>
                      <p>Placed on {order.date}</p>
                    </div>
                    <div className="order-status">
                      <span className={`status-badge ${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="order-total">
                      ${order.total}
                    </div>
                    <div className="order-actions">
                      <button className="view-order-btn">View Order</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="view-all-orders">
              <button className="btn btn-secondary">View All Orders</button>
            </div>
          </div>

          <div className="dashboard-card recommendations">
            <h2>Recommended For You</h2>
            <div className="recommended-products">
              {recommendedProducts.map(product => (
                <div key={product.id} className="recommended-product">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-details">
                    <h3>{product.name}</h3>
                    <div className="product-price">${product.price}</div>
                    <button className="add-to-cart-btn">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-card loyalty-rewards">
            <h2>Loyalty Rewards</h2>
            <div className="rewards-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '65%' }}></div>
              </div>
              <div className="rewards-details">
                <p>650 points earned</p>
                <p>350 points until next reward</p>
              </div>
            </div>
            <div className="rewards-actions">
              <button className="btn btn-primary">View Rewards</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;