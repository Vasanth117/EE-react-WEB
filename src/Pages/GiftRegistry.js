// src/pages/GiftRegistry.js
import React, { useState } from 'react';
import './GiftRegistry.css';

const GiftRegistry = () => {
  const [registries, setRegistries] = useState([
    { id: 1, name: 'Our Wedding Registry', eventDate: '2023-10-15', items: 24, image: '/images/wedding-registry.jpg' },
    { id: 2, name: 'Baby Shower Registry', eventDate: '2023-08-20', items: 18, image: '/images/baby-registry.jpg' },
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newRegistry, setNewRegistry] = useState({
    name: '',
    eventType: 'Wedding',
    eventDate: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRegistry(prev => ({ ...prev, [name]: value }));
  };

  const handleCreateRegistry = (e) => {
    e.preventDefault();
    const newRegistryItem = {
      id: Date.now(),
      name: newRegistry.name,
      eventDate: newRegistry.eventDate,
      items: 0,
      image: '/images/default-registry.jpg'
    };
    setRegistries([...registries, newRegistryItem]);
    setNewRegistry({ name: '', eventType: 'Wedding', eventDate: '', description: '' });
    setShowCreateForm(false);
  };

  const shareRegistry = (id) => {
    // In a real app, this would generate a shareable link
    alert(`Share link for registry ${id} copied to clipboard!`);
  };

  return (
    <div className="gift-registry-page">
      <div className="page-header">
        <h1>Gift Registry</h1>
        <p>Create and manage your gift lists</p>
      </div>

      <div className="container">
        <div className="registry-actions">
          <button 
            className="btn btn-primary"
            onClick={() => setShowCreateForm(!showCreateForm)}
          >
            <i className="fas fa-plus"></i>
            Create New Registry
          </button>
        </div>

        {showCreateForm && (
          <div className="create-registry-form">
            <h3>Create New Registry</h3>
            <form onSubmit={handleCreateRegistry}>
              <div className="form-group">
                <label>Registry Name</label>
                <input
                  type="text"
                  name="name"
                  value={newRegistry.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Event Type</label>
                <select
                  name="eventType"
                  value={newRegistry.eventType}
                  onChange={handleInputChange}
                >
                  <option value="Wedding">Wedding</option>
                  <option value="Baby Shower">Baby Shower</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Event Date</label>
                <input
                  type="date"
                  name="eventDate"
                  value={newRegistry.eventDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description (Optional)</label>
                <textarea
                  name="description"
                  value={newRegistry.description}
                  onChange={handleInputChange}
                  rows="3"
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Create Registry</button>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => setShowCreateForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="registries-grid">
          {registries.map(registry => (
            <div key={registry.id} className="registry-card">
              <div className="registry-image">
                <img src={registry.image} alt={registry.name} />
              </div>
              <div className="registry-info">
                <h3>{registry.name}</h3>
                <p className="event-date">Event Date: {new Date(registry.eventDate).toLocaleDateString()}</p>
                <p className="items-count">{registry.items} items</p>
                <div className="registry-actions">
                  <button className="btn btn-primary">Manage</button>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => shareRegistry(registry.id)}
                  >
                    <i className="fas fa-share"></i>
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {registries.length === 0 && !showCreateForm && (
          <div className="empty-registry">
            <i className="fas fa-gift"></i>
            <h3>No registries yet</h3>
            <p>Create your first gift registry to get started</p>
          </div>
        )}

        <div className="registry-guide">
          <h2>How It Works</h2>
          <div className="guide-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Create Your Registry</h4>
              <p>Choose your event type and add items you'd love to receive</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Share With Friends & Family</h4>
              <p>Send your registry link to your guests</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Receive Gifts</h4>
              <p>Guests can purchase items directly from your registry</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftRegistry;