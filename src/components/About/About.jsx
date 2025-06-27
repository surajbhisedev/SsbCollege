import React from 'react';
import './About.css';

const About = () => (
  <div className="about-page">
    <div className="about-container">
      <h1>About SSB College</h1>
      <p className="intro">
        SSB College is a center of excellence dedicated to academic brilliance, personal growth, and social responsibility.
        Since its inception, we have strived to nurture an environment where students thrive in both intellect and character.
      </p>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          To provide high-quality education that empowers students to become innovative, responsible citizens and leaders of tomorrow.
          We aim to cultivate critical thinking, creativity, and ethical values through a learner-centered approach.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Vision</h2>
        <p>
          To be recognized as a leading institution in delivering inclusive and transformative education that contributes to the development
          of society and the nation at large.
        </p>
      </div>

      <div className="about-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔️ Qualified and experienced faculty</li>
          <li>✔️ Modern infrastructure and digital classrooms</li>
          <li>✔️ Strong emphasis on co-curricular and cultural activities</li>
          <li>✔️ Placement and career guidance support</li>
          <li>✔️ Community engagement and social initiatives</li>
        </ul>
      </div>
    </div>
  </div>
);

export default About;
