import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="company-name">
          <h2>SSB College</h2>
        </div>

        {/* Toggle Button */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? 'rotate-top' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'hide-middle' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'rotate-bottom' : ''}`}></div>
        </div>

        {/* Nav Links */}
        <div className={`nav-page-container ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link to="/academics" onClick={() => setMenuOpen(false)}>Academics</Link>
          <Link to="/admission" onClick={() => setMenuOpen(false)}>Admission</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/committees" onClick={() => setMenuOpen(false)}>Committees</Link>
        </div>

        {/* Desktop CTA (Optional) */}
        <div className="nav-cta">
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
