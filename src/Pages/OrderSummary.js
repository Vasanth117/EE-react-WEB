import React from 'react';
import './OrderSummary.css';

const order = {
  orderId: 'ORD123456',
  date: '2025-09-13',
  items: [
    {
      id: 1,
      name: 'Wireless Headphones',
      quantity: 1,
      price: 59.99,
      image: '/images/headphones.jpg'
    },
    {
      id: 2,
      name: 'Smart Watch',
      quantity: 2,
      price: 129.99,
      image: '/images/smartwatch.jpg'
    }
  ],
  subtotal: 319.97,
  shipping: 10.00,
  total: 329.97,
  address: {
    name: 'John Doe',
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001'
  }
};

function OrderSummary() {
  return (
    <div className="order-summary-container">
      <h1 className="order-summary-title">Order Summary</h1>
      <div className="order-summary-details">
        <div className="order-summary-section">
          <strong>Order ID:</strong> {order.orderId}<br />
          <strong>Date:</strong> {order.date}
        </div>
        <div className="order-summary-section">
          <h2>Shipping Address</h2>
          <p>
            {order.address.name}<br />
            {order.address.street}<br />
            {order.address.city}, {order.address.state} {order.address.zip}
          </p>
        </div>
        <div className="order-summary-section">
          <h2>Items</h2>
          <ul className="order-summary-items">
            {order.items.map(item => (
              <li key={item.id} className="order-summary-item">
                <img src={item.image} alt={item.name} className="order-summary-image" />
                <div>
                  <div className="order-summary-item-name">{item.name}</div>
                  <div>Qty: {item.quantity}</div>
                  <div>${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-summary-section order-summary-totals">
          <div>Subtotal: <span>${order.subtotal.toFixed(2)}</span></div>
          <div>Shipping: <span>${order.shipping.toFixed(2)}</span></div>
          <div className="order-summary-total">Total: <span>${order.total.toFixed(2)}</span></div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;