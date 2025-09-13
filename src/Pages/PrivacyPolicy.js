import React from 'react';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <div className="privacy-content">
        <p>
          Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you use our website.
        </p>
        <h2>1. Information We Collect</h2>
        <p>
          We may collect information such as your name, email address, shipping address, payment details, and browsing activity.
        </p>
        <h2>2. How We Use Your Information</h2>
        <p>
          We use your information to process orders, improve our services, personalize your experience, and communicate with you.
        </p>
        <h2>3. Sharing Your Information</h2>
        <p>
          We do not sell your personal information. We may share it with trusted partners to fulfill orders and provide services.
        </p>
        <h2>4. Security</h2>
        <p>
          We implement security measures to protect your data from unauthorized access, alteration, or disclosure.
        </p>
        <h2>5. Cookies</h2>
        <p>
          Our website uses cookies to enhance your browsing experience and analyze site traffic.
        </p>
        <h2>6. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Please review this page periodically for changes.
        </p>
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about our privacy policy, please contact us.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;