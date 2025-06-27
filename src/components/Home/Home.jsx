import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div className="home-page">
    {/* Hero Section */}
    <div className="hero-section">
      <h1>Welcome to SSB College</h1>
      <p className="tagline">Empowering Education. Enriching Lives.</p>
      <p className="description">
        At SSB College, we are dedicated to academic excellence, holistic development, and building a strong foundation for our students. 
        Explore our programs, meet our faculty, and discover what makes us one of the most promising institutions for future leaders.
      </p>
      <a href="/admission" className="hero-button">Apply Now</a>
    </div>

    {/* Notices Section */}
    <div className="notice-cta">
      <h2>📢 Latest Announcements</h2>
      <p>Stay updated with our latest notices, events, and circulars.</p>
      <Link to="/notices" className="notice-btn">View Notices</Link>
    </div>
  </div>
);

export default Home;
