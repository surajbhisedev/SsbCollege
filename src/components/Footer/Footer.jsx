import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <h3>SSB College</h3>
        <p>Empowering students through quality education and holistic development.</p>
      </div>

      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/academics">Academics</a></li>
          <li><a href="/admission">Admission</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>SSB College Campus, Maharashtra, India</p>
        <p>Email: info@ssbcollege.ac.in</p>
        <p>Phone: +91-12345-67890</p>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} SSB College. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
