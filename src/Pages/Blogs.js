import React from 'react';
import './Blogs.css';

const blogs = [
  {
    id: 1,
    title: 'Top 5 Wireless Headphones in 2025',
    author: 'Jane Smith',
    date: '2025-09-10',
    summary: 'Discover the best wireless headphones for music lovers, featuring top brands and the latest technology.',
    image: '/images/blog-headphones.jpg',
    link: '/blog/top-5-wireless-headphones-2025'
  },
  {
    id: 2,
    title: 'Smart Watches: Features You Need',
    author: 'Mike Johnson',
    date: '2025-08-28',
    summary: 'A guide to choosing the right smart watch for your lifestyle, including health tracking and notifications.',
    image: '/images/blog-smartwatch.jpg',
    link: '/blog/smart-watches-features-you-need'
  },
  {
    id: 3,
    title: 'Bluetooth Speakers for Outdoor Fun',
    author: 'Emily Lee',
    date: '2025-08-15',
    summary: 'Explore portable Bluetooth speakers that deliver great sound and durability for your adventures.',
    image: '/images/blog-speaker.jpg',
    link: '/blog/bluetooth-speakers-outdoor-fun'
  }
];

function Blogs() {
  return (
    <div className="blogs-container">
      <h1 className="blogs-title">Latest Blogs</h1>
      <div className="blogs-list">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-info">
              <a href={blog.link} className="blog-title-link">
                <h2 className="blog-title">{blog.title}</h2>
              </a>
              <div className="blog-meta">
                <span className="blog-author">{blog.author}</span> | <span className="blog-date">{blog.date}</span>
              </div>
              <p className="blog-summary">{blog.summary}</p>
              <a href={blog.link} className="blog-read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;