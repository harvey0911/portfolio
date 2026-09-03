import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('aymaneaitmansour@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="contact-page-container view-fade-in">
      <div className="contact-page-header">
        <h2 className="contact-page-title">GET IN TOUCH</h2>
        <p className="contact-page-subtitle">
          Seeking full-time opportunities in Information Technology, AI Engineering, and Software Development.
        </p>
      </div>

      <div className="contact-cards-grid">
        {/* Email Card */}
        <div className="contact-card">
          <div className="contact-card-icon">📬</div>
          <h3 className="contact-card-label">Email Address</h3>
          <p className="contact-card-value">aymaneaitmansour@gmail.com</p>
          <div className="contact-card-actions">
            <a
              href="mailto:aymaneaitmansour@gmail.com"
              className="contact-action-btn primary"
            >
              Send Email ↗
            </a>
            <button
              className="contact-action-btn secondary"
              onClick={handleCopyEmail}
            >
              {copied ? '✓ Copied!' : 'Copy Email'}
            </button>
          </div>
        </div>

        {/* GitHub Card */}
        <div className="contact-card">
          <div className="contact-card-icon">💻</div>
          <h3 className="contact-card-label">GitHub</h3>
          <p className="contact-card-value">github.com/harvey0911</p>
          <div className="contact-card-actions">
            <a
              href="https://github.com/harvey0911"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action-btn primary"
            >
              Visit Profile ↗
            </a>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="contact-card">
          <div className="contact-card-icon">🔗</div>
          <h3 className="contact-card-label">LinkedIn</h3>
          <p className="contact-card-value">aymane-ait-mansour</p>
          <div className="contact-card-actions">
            <a
              href="https://linkedin.com/in/aymane-ait-mansour"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action-btn primary"
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
