// src/pages/OrderTracking.js
import React, { useState } from 'react';
import './OrderTracking.css';

const OrderTracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const mockOrders = {
    'TRK123456': {
      id: 'TRK123456',
      status: 'delivered',
      items: [
        { name: 'Wireless Headphones', quantity: 1, price: 89.99 },
        { name: 'Phone Case', quantity: 2, price: 19.99 }
      ],
      total: 129.97,
      timeline: [
        { status: 'ordered', date: '2023-06-10', time: '14:30' },
        { status: 'confirmed', date: '2023-06-10', time: '14:35' },
        { status: 'shipped', date: '2023-06-11', time: '09:15' },
        { status: 'out-for-delivery', date: '2023-06-12', time: '08:00' },
        { status: 'delivered', date: '2023-06-12', time: '14:20' }
      ],
      shippingAddress: {
        name: 'John Doe',
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001'
      },
      estimatedDelivery: '2023-06-12'
    }
  };

  const handleTrackOrder = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const foundOrder = mockOrders[trackingNumber];
      setOrder(foundOrder);
      setIsLoading(false);
    }, 1000);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'ordered': return 'fas fa-shopping-cart';
      case 'confirmed': return 'fas fa-check-circle';
      case 'shipped': return 'fas fa-shipping-fast';
      case 'out-for-delivery': return 'fas fa-truck';
      case 'delivered': return 'fas fa-box-open';
      default: return 'fas fa-info-circle';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'ordered': return 'Order Placed';
      case 'confirmed': return 'Order Confirmed';
      case 'shipped': return 'Shipped';
      case 'out-for-delivery': return 'Out for Delivery';
      case 'delivered': return 'Delivered';
      default: return status;
    }
  };

  return (
    <div className="order-tracking-page">
      <div className="page-header">
        <h1>Order Tracking</h1>
        <p>Track your order status</p>
      </div>

      <div className="container">
        <div className="tracking-form">
          <h2>Enter Tracking Number</h2>
          <form onSubmit={handleTrackOrder}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your tracking number"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? 'Tracking...' : 'Track Order'}
            </button>
          </form>
        </div>

        {order && (
          <div className="order-details">
            <div className="order-summary">
              <h2>Order #{order.id}</h2>
              <div className="status-badge">{order.status}</div>
              
              <div className="order-items">
                <h3>Items</h3>
                {order.items.map((item, index) => (
                  <div key={index} className="order-item">
                    <span>{item.name} × {item.quantity}</span>
                    <span>${item.price}</span>
                  </div>
                ))}
                <div className="order-total">
                  <strong>Total: ${order.total}</strong>
                </div>
              </div>

              <div className="shipping-address">
                <h3>Shipping Address</h3>
                <p>{order.shippingAddress.name}</p>
                <p>{order.shippingAddress.street}</p>
                <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}</p>
              </div>
            </div>

            <div className="timeline">
              <h2>Order Timeline</h2>
              <div className="timeline-tracker">
                {order.timeline.map((step, index) => (
                  <div key={index} className="timeline-step">
                    <div className="timeline-icon">
                      <i className={getStatusIcon(step.status)}></i>
                    </div>
                    <div className="timeline-content">
                      <h4>{getStatusText(step.status)}</h4>
                      <p>{step.date} at {step.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {!order && trackingNumber && !isLoading && (
          <div className="no-order-found">
            <i className="fas fa-search"></i>
            <h3>Order Not Found</h3>
            <p>Please check your tracking number and try again.</p>
          </div>
        )}

        <div className="tracking-help">
          <h2>Need Help?</h2>
          <p>If you're having trouble tracking your order, please contact our support team.</p>
          <button className="btn btn-secondary">Contact Support</button>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;