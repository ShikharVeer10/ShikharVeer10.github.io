import React, { useState } from 'react';
import { personalInfo } from '../data';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="contact-footer" id="contact">
      <div className="contact-cta-grid">
        <div className="contact-cta-left">
          <span className="contact-eyebrow">START A CONVERSATION</span>
          <h2 className="contact-heading">
            Got a hard problem<br />worth solving?
          </h2>
        </div>

        <div className="contact-cta-right">
          <p className="contact-pitch">
            {personalInfo.availability}. Always down to chat about interesting engineering problems or new opportunities.
          </p>

          <div className="contact-actions">
            <a
              href={`mailto:${personalInfo.email}?subject=Role%20Opportunity`}
              className="contact-btn contact-btn-primary"
            >
              Discuss a role ↗
            </a>
            <a
              href={`mailto:${personalInfo.email}?subject=Project%20Collaboration`}
              className="contact-btn contact-btn-secondary"
            >
              Discuss a project ↗
            </a>
          </div>

          <div className="contact-copy-wrap">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="contact-email-btn"
              title="Copy email address"
            >
              {personalInfo.email}
            </button>
            <span className="contact-copy-hint">
              {copied ? '✓ copied to clipboard' : 'click to copy'}
            </span>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <span className="footer-copy">© {new Date().getFullYear()} // {personalInfo.name}</span>

        <div className="footer-nav">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="/resume.pdf" download="Shikhar_Veeramachineni_Resume.pdf">Resume ↓</a>
          <a href="#intro" className="footer-top-link">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
