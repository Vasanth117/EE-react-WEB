// src/pages/PaymentMethods.js
import React, { useState } from 'react';
import './PaymentMethods.css';

const PaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: 'credit_card',
      cardType: 'visa',
      last4: '1234',
      expiry: '12/25',
      name: 'John Doe',
      isDefault: true
    },
    {
      id: 2,
      type: 'credit_card',
      cardType: 'mastercard',
      last4: '5678',
      expiry: '06/24',
      name: 'John Doe',
      isDefault: false
    },
    {
      id: 3,
      type: 'paypal',
      email: 'john.doe@example.com',
      isDefault: false
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newPaymentMethod, setNewPaymentMethod] = useState({
    type: 'credit_card',
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: '',
    isDefault: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewPaymentMethod(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateCardNumber = (number) => {
    // Simple validation - in real app, use a proper validation library
    return number.replace(/\s+/g, '').length === 16;
  };

  const validateExpiry = (expiry) => {
    // Simple validation - in real app, use a proper validation library
    return /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(expiry);
  };

  const validateCVV = (cvv) => {
    // Simple validation - in real app, use a proper validation library
    return cvv.length === 3 || cvv.length === 4;
  };

  const handleAddPaymentMethod = (e) => {
    e.preventDefault();
    
    if (newPaymentMethod.type === 'credit_card') {
      if (!validateCardNumber(newPaymentMethod.cardNumber)) {
        alert('Please enter a valid card number');
        return;
      }
      if (!validateExpiry(newPaymentMethod.expiry)) {
        alert('Please enter a valid expiry date (MM/YY)');
        return;
      }
      if (!validateCVV(newPaymentMethod.cvv)) {
        alert('Please enter a valid CVV');
        return;
      }
    }

    const method = {
      id: Date.now(),
      type: newPaymentMethod.type,
      ...(newPaymentMethod.type === 'credit_card' ? {
        cardType: newPaymentMethod.cardNumber.startsWith('4') ? 'visa' : 'mastercard',
        last4: newPaymentMethod.cardNumber.slice(-4),
        expiry: newPaymentMethod.expiry,
        name: newPaymentMethod.name
      } : {
        email: 'new@example.com'
      }),
      isDefault: newPaymentMethod.isDefault
    };
    
    if (method.isDefault) {
      // Remove default from other methods
      setPaymentMethods(prev => prev.map(m => ({ ...m, isDefault: false })));
    }
    
    setPaymentMethods(prev => [...prev, method]);
    setNewPaymentMethod({
      type: 'credit_card',
      cardNumber: '',
      expiry: '',
      cvv: '',
      name: '',
      isDefault: false
    });
    setShowAddForm(false);
  };

  const handleDeleteMethod = (id) => {
    if (window.confirm('Are you sure you want to delete this payment method?')) {
      setPaymentMethods(prev => prev.filter(m => m.id !== id));
    }
  };

  const handleSetDefault = (id) => {
    setPaymentMethods(prev => prev.map(m => ({
      ...m,
      isDefault: m.id === id
    })));
  };

  const formatCardNumber = (number) => {
    return number.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim();
  };

  return (
    <div className="payment-methods-page">
      <div className="page-header">
        <h1>Payment Methods</h1>
        <p>Manage your payment options</p>
      </div>

      <div className="container">
        <div className="payment-actions">
          <button 
            className="btn btn-primary"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            <i className="fas fa-plus"></i>
            Add Payment Method
          </button>
        </div>

        {showAddForm && (
          <div className="payment-form">
            <h3>Add Payment Method</h3>
            <form onSubmit={handleAddPaymentMethod}>
              <div className="form-group">
                <label>Payment Method Type</label>
                <select
                  name="type"
                  value={newPaymentMethod.type}
                  onChange={handleInputChange}
                >
                  <option value="credit_card">Credit Card</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>

              {newPaymentMethod.type === 'credit_card' && (
                <>
                  <div className="form-group">
                    <label>Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={newPaymentMethod.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input
                        type="text"
                        name="expiry"
                        value={newPaymentMethod.expiry}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        maxLength="5"
                      />
                    </div>
                    <div className="form-group">
                      <label>CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={newPaymentMethod.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        maxLength="4"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Cardholder Name</label>
                    <input
                      type="text"
                      name="name"
                      value={newPaymentMethod.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                    />
                  </div>
                </>
              )}

              {newPaymentMethod.type === 'paypal' && (
                <div className="paypal-note">
                  <p>You will be redirected to PayPal to complete the authentication process.</p>
                </div>
              )}

              <div className="form-checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="isDefault"
                    checked={newPaymentMethod.isDefault}
                    onChange={handleInputChange}
                  />
                  Set as default payment method
                </label>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  Add Payment Method
                </button>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => setShowAddForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="payment-methods-list">
          {paymentMethods.map(method => (
            <div key={method.id} className={`payment-method-card ${method.isDefault ? 'default' : ''}`}>
              {method.isDefault && <div className="default-badge">Default</div>}
              <div className="method-header">
                <div className="method-type">
                  {method.type === 'credit_card' ? (
                    <div className={`card-icon ${method.cardType}`}>
                      <i className={`fab fa-cc-${method.cardType}`}></i>
                      <span>{method.cardType.charAt(0).toUpperCase() + method.cardType.slice(1)}</span>
                    </div>
                  ) : (
                    <div className="card-icon paypal">
                      <i className="fab fa-paypal"></i>
                      <span>PayPal</span>
                    </div>
                  )}
                </div>
                <div className="method-actions">
                  <button 
                    className="delete-btn"
                    onClick={() => handleDeleteMethod(method.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>

              <div className="method-details">
                {method.type === 'credit_card' ? (
                  <>
                    <p>**** **** **** {method.last4}</p>
                    <p>Expires: {method.expiry}</p>
                    <p>{method.name}</p>
                  </>
                ) : (
                  <p>Connected: {method.email}</p>
                )}
              </div>

              {!method.isDefault && (
                <button 
                  className="set-default-btn"
                  onClick={() => handleSetDefault(method.id)}
                >
                  Set as Default
                </button>
              )}
            </div>
          ))}
        </div>

        {paymentMethods.length === 0 && (
          <div className="empty-payment-methods">
            <i className="fas fa-credit-card"></i>
            <h3>No payment methods yet</h3>
            <p>Add your first payment method to get started</p>
          </div>
        )}

        <div className="security-note">
          <h3>Security Notice</h3>
          <p>
            <i className="fas fa-lock"></i>
            Your payment information is encrypted and securely stored. We never store your CVV code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;