import React from 'react';
import './TermsConditions.css';

function TermsConditions() {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms & Conditions</h1>
      <div className="terms-content">
        <p>
          Welcome to our website. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions.
        </p>
        <h2>1. Use of Site</h2>
        <p>
          You may use this site for lawful purposes only. You must not use our site in any way that breaches any applicable local, national, or international law.
        </p>
        <h2>2. Intellectual Property</h2>
        <p>
          All content on this site, including text, graphics, logos, and images, is the property of the company and protected by copyright laws.
        </p>
        <h2>3. Limitation of Liability</h2>
        <p>
          We are not liable for any damages arising from the use of this site or the information contained within it.
        </p>
        <h2>4. Changes to Terms</h2>
        <p>
          We reserve the right to update these terms at any time. Please review this page periodically for changes.
        </p>
        <h2>5. Contact Us</h2>
        <p>
          If you have any questions about these Terms & Conditions, please contact us.
        </p>
      </div>
    </div>
  );
}

export default TermsConditions;