import React from 'react';
import SyllabusSection from './SyllabusSection';
import './Academics.css';

const Academics = () => (
  <div className="academics-page">
    <div className="academics-container">
      <h1>📚 Academics</h1>
      <p className="intro">
        Our BCA program equips students with essential IT skills and real-world applications through a balanced academic structure.
      </p>

      <div className="academics-section">
        <h2>🖥 About the BCA Program</h2>
        <p>
          The curriculum includes programming, software engineering, data science, networking, and hands-on labs aligned with industry standards.
        </p>
      </div>

      <SyllabusSection />

      <div className="academics-section">
        <h2>🗓 Academic Calendar</h2>
        <p>
          Our academic calendar covers lecture periods, exams, holidays, and events.
        </p>
        <p>
          <a href="/assets/academic-calendar.pdf" target="_blank" rel="noopener noreferrer">
            📥 Download Academic Calendar
          </a>
        </p>
      </div>

      <div className="academics-section">
        <h2>🎯 Highlights</h2>
        <ul>
          <li>✅ Project-based learning</li>
          <li>✅ Mentorship & soft skills training</li>
          <li>✅ Guest lectures from industry experts</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Academics;
