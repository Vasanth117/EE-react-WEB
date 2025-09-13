import React from 'react';
import './RecentlySearched.css';

const recentlySearchedTerms = [
  { id: 1, term: 'Wireless Headphones', results: 120, link: '/search?q=wireless+headphones' },
  { id: 2, term: 'Smart Watch', results: 85, link: '/search?q=smart+watch' },
  { id: 3, term: 'Bluetooth Speaker', results: 60, link: '/search?q=bluetooth+speaker' },
  { id: 4, term: 'Laptop Bag', results: 45, link: '/search?q=laptop+bag' },
  { id: 5, term: 'Fitness Tracker', results: 72, link: '/search?q=fitness+tracker' },
];

function RecentlySearched() {
  return (
    <div className="recently-searched-container">
      <h1 className="recently-searched-title">Recently Searched Terms</h1>
      <ul className="recently-searched-list">
        {recentlySearchedTerms.map(item => (
          <li key={item.id} className="recently-searched-item">
            <a href={item.link} className="recently-searched-term">{item.term}</a>
            <span className="recently-searched-results">{item.results} results</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentlySearched;