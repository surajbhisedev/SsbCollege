import React from 'react';
import './Admission.css';

const Admission = () => (
  <div className="admission-page">
    <div className="admission-container">
      <h1>🎓 Admission Process</h1>
      <p className="intro">
        Get all the necessary details about the BCA admission process, eligibility criteria, fee structure, and important deadlines for the academic year.
      </p>

      <div className="admission-section">
        <h2>📌 Eligibility Criteria</h2>
        <ul>
          <li>Candidate must have passed 12th (HSC) or equivalent examination.</li>
          <li>Minimum 45% marks required (40% for reserved categories).</li>
          <li>Preference is given to students with Mathematics/Computer Science at 10+2 level.</li>
        </ul>
      </div>

      <div className="admission-section">
        <h2>📝 Admission Process</h2>
        <ol>
          <li>Fill the application form online or collect it from the college office.</li>
          <li>Submit necessary documents (mark sheets, ID proof, etc.).</li>
          <li>Pay the registration fee.</li>
          <li>Appear for the interview/counseling (if applicable).</li>
          <li>Get confirmation of admission and complete fee payment.</li>
        </ol>
      </div>

      <div className="admission-section">
        <h2>💰 Fee Structure</h2>
        <p>
          The total annual fee for the BCA program is approximately ₹XX,XXX. It includes tuition fees, exam fees, library access, and lab charges.
        </p>
        <p>
          <a href="/assets/fees-structure.pdf" target="_blank" rel="noopener noreferrer">
            📥 Download Full Fee Structure PDF
          </a>
        </p>
      </div>

      <div className="admission-section">
        <h2>📅 Important Dates</h2>
        <ul>
          <li>Application Start: <strong>1st May 2025</strong></li>
          <li>Last Date to Apply: <strong>30th June 2025</strong></li>
          <li>Counseling Dates: <strong>10th–15th July 2025</strong></li>
          <li>Commencement of Classes: <strong>1st August 2025</strong></li>
        </ul>
      </div>

      <div className="admission-section">
        <h2>📞 Contact for Admission</h2>
        <p>
          For any admission-related queries, feel free to reach out:
        </p>
        <ul>
          <li><strong>Phone:</strong> +91-9876543210</li>
          <li><strong>Email:</strong> admissions@yourcollege.edu.in</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Admission;
