import React from 'react';
import './Careers.css';

function Careers() {
  return (
    <div className="careers-container">
      <h1 className="careers-title">Careers</h1>
      <div className="careers-content">
        <p>
          Join our team and help us build amazing experiences for our customers! We are always looking for talented, passionate people.
        </p>
        <h2>Current Openings</h2>
        <ul className="careers-list">
          <li>
            <strong>Frontend Developer</strong> <br />
            <span>Location: Remote</span> <br />
            <span>Experience: 2+ years</span>
          </li>
          <li>
            <strong>UI/UX Designer</strong> <br />
            <span>Location: New York, NY</span> <br />
            <span>Experience: 1+ years</span>
          </li>
          <li>
            <strong>Customer Support Specialist</strong> <br />
            <span>Location: Remote</span> <br />
            <span>Experience: 1+ years</span>
          </li>
        </ul>
        <h2>How to Apply</h2>
        <p>
          Send your resume and portfolio to <a href="mailto:careers@example.com">careers@example.com</a>. We look forward to hearing from you!
        </p>
      </div>
    </div>
  );
}

export default Careers;