// src/pages/ProfileSettings.js
import React, { useState } from 'react';
import './ProfileSettings.css';

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    birthday: '1990-01-01'
  });

  const [connectedAccounts, setConnectedAccounts] = useState([
    { provider: 'google', connected: true },
    { provider: 'facebook', connected: false },
    { provider: 'twitter', connected: true }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    // Save profile changes
    alert('Profile updated successfully!');
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Change password logic
    alert('Password changed successfully!');
  };

  const toggleAccountConnection = (provider) => {
    setConnectedAccounts(accounts => 
      accounts.map(account => 
        account.provider === provider 
          ? { ...account, connected: !account.connected } 
          : account
      )
    );
  };

  return (
    <div className="profile-settings-page">
      <div className="page-header">
        <h1>Profile Settings</h1>
        <p>Manage your account information</p>
      </div>

      <div className="container">
        <div className="settings-tabs">
          <button 
            className={activeTab === 'profile' ? 'active' : ''}
            onClick={() => setActiveTab('profile')}
          >
            Personal Information
          </button>
          <button 
            className={activeTab === 'password' ? 'active' : ''}
            onClick={() => setActiveTab('password')}
          >
            Change Password
          </button>
          <button 
            className={activeTab === 'accounts' ? 'active' : ''}
            onClick={() => setActiveTab('accounts')}
          >
            Connected Accounts
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'profile' && (
            <div className="profile-form-section">
              <form onSubmit={handleSaveProfile}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={userData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={userData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={userData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="birthday">Birthday</label>
                  <input
                    type="date"
                    id="birthday"
                    name="birthday"
                    value={userData.birthday}
                    onChange={handleInputChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary">Save Changes</button>
              </form>
            </div>
          )}

          {activeTab === 'password' && (
            <div className="password-form-section">
              <form onSubmit={handlePasswordChange}>
                <div className="form-group">
                  <label htmlFor="currentPassword">Current Password</label>
                  <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm New Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">Change Password</button>
              </form>
            </div>
          )}

          {activeTab === 'accounts' && (
            <div className="accounts-section">
              <h3>Connected Accounts</h3>
              <p>Manage your social media connections</p>
              
              <div className="connected-accounts">
                {connectedAccounts.map(account => (
                  <div key={account.provider} className="account-item">
                    <div className="account-info">
                      <div className={`account-icon ${account.provider}`}>
                        <i className={`fab fa-${account.provider}`}></i>
                      </div>
                      <div className="account-details">
                        <h4>{account.provider.charAt(0).toUpperCase() + account.provider.slice(1)}</h4>
                        <span className={account.connected ? 'connected' : 'disconnected'}>
                          {account.connected ? 'Connected' : 'Not Connected'}
                        </span>
                      </div>
                    </div>
                    <button
                      className={account.connected ? 'btn btn-secondary' : 'btn btn-primary'}
                      onClick={() => toggleAccountConnection(account.provider)}
                    >
                      {account.connected ? 'Disconnect' : 'Connect'}
                    </button>
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

export default ProfileSettings;