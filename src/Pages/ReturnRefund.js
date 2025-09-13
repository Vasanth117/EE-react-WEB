// src/pages/ReturnRefund.js
import React, { useState } from 'react';
import './ReturnRefund.css';

const ReturnRefund = () => {
  const [activeTab, setActiveTab] = useState('policy');
  const [returnRequest, setReturnRequest] = useState({
    orderNumber: '',
    reason: '',
    details: '',
    preferredSolution: 'refund'
  });

  const policies = [
    {
      question: 'What is your return policy?',
      answer: 'We accept returns within 30 days of purchase. Items must be unused and in their original packaging with all tags attached.'
    },
    {
      question: 'How long does it take to process a refund?',
      answer: 'Refunds are processed within 5-7 business days after we receive your returned item.'
    },
    {
      question: 'Who pays for return shipping?',
      answer: 'We provide free return shipping for defective items. For other returns, customers are responsible for return shipping costs.'
    },
    {
      question: 'Can I exchange an item?',
      answer: 'Yes, we offer exchanges for items in stock. Please indicate your preference when submitting your return request.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReturnRequest(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    // Save return request to localStorage
    const requests = JSON.parse(localStorage.getItem('returnRequests') || '[]');
    requests.push({
      ...returnRequest,
      id: Date.now(),
      date: new Date().toISOString(),
      status: 'submitted'
    });
    localStorage.setItem('returnRequests', JSON.stringify(requests));
    
    alert('Return request submitted successfully!');
    setReturnRequest({
      orderNumber: '',
      reason: '',
      details: '',
      preferredSolution: 'refund'
    });
  };

  return (
    <div className="return-refund-page">
      <div className="page-header">
        <h1>Returns & Refunds</h1>
        <p>Manage your returns and refunds</p>
      </div>

      <div className="container">
        <div className="tabs">
          <button 
            className={activeTab === 'policy' ? 'active' : ''}
            onClick={() => setActiveTab('policy')}
          >
            Return Policy
          </button>
          <button 
            className={activeTab === 'request' ? 'active' : ''}
            onClick={() => setActiveTab('request')}
          >
            Request Return
          </button>
          <button 
            className={activeTab === 'faq' ? 'active' : ''}
            onClick={() => setActiveTab('faq')}
          >
            FAQs
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'policy' && (
            <div className="policy-section">
              <h2>Return Policy</h2>
              <div className="policy-content">
                <p>We want you to be completely satisfied with your purchase. If you're not happy for any reason, we're here to help.</p>
                
                <div className="policy-highlights">
                  <div className="highlight">
                    <i className="fas fa-calendar"></i>
                    <h3>30-Day Returns</h3>
                    <p>Return items within 30 days of purchase</p>
                  </div>
                  <div className="highlight">
                    <i className="fas fa-shipping-fast"></i>
                    <h3>Free Returns</h3>
                    <p>Free return shipping for defective items</p>
                  </div>
                  <div className="highlight">
                    <i className="fas fa-money-bill-wave"></i>
                    <h3>Full Refunds</h3>
                    <p>Get full refunds for eligible items</p>
                  </div>
                  <div className="highlight">
                    <i className="fas fa-exchange-alt"></i>
                    <h3>Easy Exchanges</h3>
                    <p>Exchange for different sizes or colors</p>
                  </div>
                </div>

                <div className="policy-details">
                  <h3>Detailed Policy</h3>
                  <ul>
                    <li>Items must be unused and in original condition</li>
                    <li>All original tags and packaging must be included</li>
                    <li>Proof of purchase is required</li>
                    <li>Some items are final sale (underwear, swimwear, etc.)</li>
                    <li>Return processing takes 5-7 business days</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'request' && (
            <div className="request-section">
              <h2>Request a Return</h2>
              <form onSubmit={handleSubmitRequest} className="return-form">
                <div className="form-group">
                  <label>Order Number</label>
                  <input
                    type="text"
                    name="orderNumber"
                    value={returnRequest.orderNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Reason for Return</label>
                  <select
                    name="reason"
                    value={returnRequest.reason}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a reason</option>
                    <option value="defective">Defective Product</option>
                    <option value="wrong-item">Wrong Item Received</option>
                    <option value="not-as-described">Not as Described</option>
                    <option value="size-issue">Size Doesn't Fit</option>
                    <option value="color-issue">Color Doesn't Match</option>
                    <option value="changed-mind">Changed My Mind</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Additional Details</label>
                  <textarea
                    name="details"
                    value={returnRequest.details}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Please provide any additional information about your return"
                  />
                </div>

                <div className="form-group">
                  <label>Preferred Solution</label>
                  <div className="solution-options">
                    <label>
                      <input
                        type="radio"
                        name="preferredSolution"
                        value="refund"
                        checked={returnRequest.preferredSolution === 'refund'}
                        onChange={handleInputChange}
                      />
                      Refund
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="preferredSolution"
                        value="exchange"
                        checked={returnRequest.preferredSolution === 'exchange'}
                        onChange={handleInputChange}
                      />
                      Exchange
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="preferredSolution"
                        value="store-credit"
                        checked={returnRequest.preferredSolution === 'store-credit'}
                        onChange={handleInputChange}
                      />
                      Store Credit
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit Return Request</button>
              </form>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="faq-section">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                {policies.map((item, index) => (
                  <div key={index} className="faq-item">
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReturnRefund;