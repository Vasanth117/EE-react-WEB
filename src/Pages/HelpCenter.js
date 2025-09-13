// src/pages/HelpCenter.js
import React, { useState } from 'react';
import './HelpCenter.css';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'shipping', name: 'Shipping & Delivery', icon: 'fas fa-shipping-fast' },
    { id: 'returns', name: 'Returns & Refunds', icon: 'fas fa-undo' },
    { id: 'orders', name: 'Orders & Payments', icon: 'fas fa-shopping-bag' },
    { id: 'account', name: 'Account & Security', icon: 'fas fa-user-shield' },
    { id: 'products', name: 'Product Information', icon: 'fas fa-info-circle' },
    { id: 'technical', name: 'Technical Support', icon: 'fas fa-laptop' }
  ];

  const articles = [
    {
      id: 1,
      title: 'How long does shipping take?',
      content: 'Standard shipping takes 3-5 business days. Express shipping is available for next-day delivery in most areas.',
      category: 'shipping',
      views: 1245
    },
    {
      id: 2,
      title: 'How do I return an item?',
      content: 'You can initiate a return through your account page or by contacting customer support. Items must be returned within 30 days.',
      category: 'returns',
      views: 987
    },
    {
      id: 3,
      title: 'How do I track my order?',
      content: 'You can track your order using the tracking number provided in your confirmation email or through your account page.',
      category: 'orders',
      views: 756
    },
    {
      id: 4,
      title: 'How do I reset my password?',
      content: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email address.',
      category: 'account',
      views: 632
    },
    {
      id: 5,
      title: 'What is your warranty policy?',
      content: 'We offer a 1-year warranty on all electronics and a lifetime warranty on select products. See product pages for details.',
      category: 'products',
      views: 521
    },
    {
      id: 6,
      title: 'How do I contact support?',
      content: 'You can contact support through our live chat, email at support@shopease.com, or phone at 1-800-SHOP-EASE.',
      category: 'technical',
      views: 487
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="help-center-page">
      <div className="page-header">
        <h1>Help Center</h1>
        <p>Find answers to common questions</p>
      </div>

      <div className="container">
        <div className="search-section">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="categories-section">
          <h2>Browse by Category</h2>
          <div className="categories-grid">
            {categories.map(category => (
              <div
                key={category.id}
                className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <i className={category.icon}></i>
                <h3>{category.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="articles-section">
          <h2>Popular Articles</h2>
          <div className="articles-list">
            {filteredArticles.map(article => (
              <div key={article.id} className="article-card">
                <div className="article-content">
                  <h3>{article.title}</h3>
                  <p>{article.content}</p>
                  <div className="article-meta">
                    <span className="views">
                      <i className="fas fa-eye"></i>
                      {article.views} views
                    </span>
                    <span className="category">
                      {categories.find(cat => cat.id === article.category)?.name}
                    </span>
                  </div>
                </div>
                <button className="read-more-btn">Read More</button>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="no-articles">
              <i className="fas fa-search"></i>
              <h3>No articles found</h3>
              <p>Try adjusting your search or browse by category</p>
            </div>
          )}
        </div>

        <div className="contact-section">
          <div className="contact-card">
            <h2>Still Need Help?</h2>
            <p>Our support team is here to assist you</p>
            <div className="contact-options">
              <div className="contact-option">
                <i className="fas fa-comments"></i>
                <h3>Live Chat</h3>
                <p>Available 24/7</p>
                <button className="btn btn-primary">Start Chat</button>
              </div>
              <div className="contact-option">
                <i className="fas fa-envelope"></i>
                <h3>Email Support</h3>
                <p>Response within 24 hours</p>
                <button className="btn btn-secondary">Send Email</button>
              </div>
              <div className="contact-option">
                <i className="fas fa-phone"></i>
                <h3>Phone Support</h3>
                <p>Mon-Fri, 9AM-6PM EST</p>
                <button className="btn btn-secondary">Call Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;