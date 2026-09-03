import React from 'react';

export const ResumeCard: React.FC = () => {
  return (
    <div className="resume-section-container">
      <div className="resume-header-row">
        <h2 className="resume-heading">RESUME</h2>
      </div>

      <div className="resume-card-paper">
        {/* Paper Header */}
        <div className="paper-header">
          <div className="paper-title-area">
            <h3 className="paper-name">AYMANE AIT MANSOUR</h3>
            <p className="paper-subtitle">Computer Science & Business Minor</p>
          </div>
        </div>

        {/* Profile / About Section */}
        <div className="paper-about-section">
          <div className="about-text-content">
            <h4 className="section-title">ABOUT ME</h4>
            <p className="about-paragraph">
              Computer Science student with a minor in Business Administration, offering a multidisciplinary profile spanning web development, AI engineering, system administration, and CAD/3D modeling.
            </p>
          </div>
          <div className="profile-avatar-container">
            <div className="profile-avatar-box">
              <svg viewBox="0 0 100 100" className="avatar-svg">
                <circle cx="50" cy="50" r="48" fill="#1b4332" />
                <circle cx="50" cy="38" r="20" fill="#e2e8f0" />
                <path d="M 20 85 C 20 65 32 55 50 55 C 68 55 80 65 80 85 Z" fill="#e2e8f0" />
              </svg>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="paper-experience-section">
          <h4 className="section-title">PROFESSIONAL EXPERIENCE</h4>
          <div className="timeline-container">
            {/* Item 1 */}
            <div className="timeline-item">
              <div className="timeline-date">
                <span>May 2026</span>
                <span>Present</span>
              </div>
              <div className="timeline-connector">
                <div className="timeline-dot" />
                <div className="timeline-line" />
              </div>
              <div className="timeline-content">
                <h5 className="role-company">Artificial Intelligence Engineer</h5>
                <ul className="achievement-list">
                  <li>Designed and developed an interactive digital textbook for Arabic literature.</li>
                  <li>Developed an e-magazine where students' work is published.</li>
                  <li>Developed educational chatbots.</li>
                </ul>
              </div>
            </div>

            {/* Item 2 */}
            <div className="timeline-item">
              <div className="timeline-date">
                <span>Jan 2025</span>
                <span>May 2025</span>
              </div>
              <div className="timeline-connector">
                <div className="timeline-dot" />
                <div className="timeline-line" />
              </div>
              <div className="timeline-content">
                <h5 className="role-company">Artificial Intelligence Intern — DPEP</h5>
                <ul className="achievement-list">
                  <li>Developed an AI app using LLMs & RAG to verify CPS compliance with public procurement regulations.</li>
                  <li>Built backend with FastAPI, managed data with MongoDB, developed UI with React, containerized with Docker.</li>
                </ul>
              </div>
            </div>

            {/* Item 3 */}
            <div className="timeline-item">
              <div className="timeline-date">
                <span>Jun 2024</span>
                <span>Aug 2024</span>
              </div>
              <div className="timeline-connector">
                <div className="timeline-dot" />
                <div className="timeline-line" />
              </div>
              <div className="timeline-content">
                <h5 className="role-company">System Administrator Intern — DGI</h5>
                <ul className="achievement-list">
                  <li>Installed VMware ESXi 6.5, configured storage arrays with pools and volumes.</li>
                  <li>Mapped volumes to ESXi hosts, configured DNS/NTP, deployed & managed vCenter 6.5.</li>
                </ul>
              </div>
            </div>

            {/* Item 4 */}
            <div className="timeline-item">
              <div className="timeline-date">
                <span>Jun 2024</span>
                <span>Aug 2024</span>
              </div>
              <div className="timeline-connector">
                <div className="timeline-dot" />
                <div className="timeline-line" />
              </div>
              <div className="timeline-content">
                <h5 className="role-company">IT Technician — Atelier Attar</h5>
                <ul className="achievement-list">
                  <li>Repaired computer hardware and performed data recovery using Hiren's BootCD.</li>
                  <li>Performed malware analysis and system scans for threat detection.</li>
                </ul>
              </div>
            </div>

            {/* Item 5 */}
            <div className="timeline-item">
              <div className="timeline-date">
                <span>Jun 2022</span>
                <span>Aug 2022</span>
              </div>
              <div className="timeline-connector">
                <div className="timeline-dot" />
              </div>
              <div className="timeline-content">
                <h5 className="role-company">Software Developer Intern — Dept. of Administrative Affairs</h5>
                <ul className="achievement-list">
                  <li>Developed Java software to automate internal administrative processes.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="paper-skills-section">
          <h4 className="section-title">SKILLS</h4>
          <div className="skills-pill-container">
            {[
              'ReactJS',
              'FastAPI',
              'Docker',
              'LLMs',
              'RAG',
              'Python',
              'Java',
              'TypeScript',
              'PostgreSQL',
              'MongoDB',
              'VMware ESXi',
              'Blender',
              'Exocad',
            ].map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="paper-education-section">
          <h4 className="section-title">EDUCATION</h4>
          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-date">
                <span>Expected</span>
                <span>Dec 2026</span>
              </div>
              <div className="timeline-connector">
                <div className="timeline-dot" />
              </div>
              <div className="timeline-content">
                <h5 className="role-company">Bachelor of Science in Computer Science</h5>
                <p className="education-desc">Minor in Business Administration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
