import React from 'react';
import './Invoice.css';

const invoice = {
  invoiceId: 'INV-20250913-001',
  orderId: 'ORD123456',
  date: '2025-09-13',
  billing: {
    name: 'John Doe',
    address: '123 Main St, New York, NY 10001',
    email: 'john.doe@email.com'
  },
  items: [
    {
      id: 1,
      name: 'Wireless Headphones',
      quantity: 1,
      price: 59.99
    },
    {
      id: 2,
      name: 'Smart Watch',
      quantity: 2,
      price: 129.99
    }
  ],
  subtotal: 319.97,
  shipping: 10.00,
  total: 329.97
};

function Invoice() {
  return (
    <div className="invoice-container">
      <h1 className="invoice-title">Invoice</h1>
      <div className="invoice-details">
        <div className="invoice-section">
          <strong>Invoice ID:</strong> {invoice.invoiceId}<br />
          <strong>Order ID:</strong> {invoice.orderId}<br />
          <strong>Date:</strong> {invoice.date}
        </div>
        <div className="invoice-section">
          <h2>Billing Information</h2>
          <p>
            {invoice.billing.name}<br />
            {invoice.billing.address}<br />
            {invoice.billing.email}
          </p>
        </div>
        <div className="invoice-section">
          <h2>Items</h2>
          <table className="invoice-items-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Unit Price</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="invoice-section invoice-totals">
          <div>Subtotal: <span>${invoice.subtotal.toFixed(2)}</span></div>
          <div>Shipping: <span>${invoice.shipping.toFixed(2)}</span></div>
          <div className="invoice-total">Total: <span>${invoice.total.toFixed(2)}</span></div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;