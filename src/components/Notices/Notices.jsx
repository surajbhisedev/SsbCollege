import React from 'react';
import './Notices.css';

const notices = [
  {
    title: "Admissions Open for BCA & BCS 2025",
    date: "2025-06-27",
    description: "Applications are now open for the 2025 academic session. Visit the admission section for details.",
    link: "/admissions"
  },
  {
    title: "Seminar on Cyber Security",
    date: "2025-06-20",
    description: "Join us for an expert-led seminar on modern cyber security practices.",
    link: "/events/cyber-seminar"
  },
  {
    title: "Internal Exams Timetable Released",
    date: "2025-06-15",
    description: "Download the PDF for the upcoming internal examination schedule.",
    link: "/assets/internal-exam-timetable.pdf"
  },
  {
    title: "College Annual Day",
    date: "2025-05-10",
    description: "Celebrate achievements and performances at our Annual Day function.",
    link: "/events/annual-day"
  }
];

// Sort notices by date (newest first)
const sortedNotices = [...notices].sort((a, b) => new Date(b.date) - new Date(a.date));

const Notices = () => {
  return (
    <div className="notices-page">
      <div className="notices-container">
        <h1>📢 College Announcements & Notices</h1>
        <ul className="notice-list">
          {sortedNotices.map((notice, index) => (
            <li key={index} className="notice-card">
              <div className="notice-header">
                <h3>{notice.title}</h3>
                <span className="notice-date">
                  {new Date(notice.date).toLocaleDateString('en-IN', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  })}
                </span>
              </div>
              <p>{notice.description}</p>
              <a href={notice.link} target="_blank" rel="noopener noreferrer">
                👉 View Details
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notices;
