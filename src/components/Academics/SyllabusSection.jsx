// src/components/Academics/SyllabusSection.jsx
import React from 'react';
import './SyllabusSection.css';

const syllabusData = [
    {
        semester: 'Semester I',
        links: [
            { name: 'Semister 1', url: '/assets/syllabus/semister_1pdf' },


        ],
    },
    {
        semester: 'Semester II',
        links: [
            { name: 'Semister_2', url: '/assets/syllabus/semister_2.pdf' },

        ],
    },
    {
        semester: 'Semester III',
        links: [
            { name: 'Semister_3', url: '/assets/syllabus/semister_3.pdf' },

        ],
    },
];

const SyllabusSection = () => {
    return (
        <div className="academics-section">
            <h2>📄 Syllabus</h2>
            <p>Click on each subject to view/download the syllabus:</p>

            {syllabusData.map((sem, index) => (
                <div className="syllabus-block" key={index}>
                    <h4>{sem.semester}</h4>
                    <ul>
                        {sem.links.map((doc, idx) => (
                            <li key={idx}>
                                <a href={doc.url} target="_blank" rel="noopener noreferrer">{doc.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default SyllabusSection;
