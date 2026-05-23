import React from 'react';
import { personalInfo } from '../data';

export default function Footer() {
  return (
    <footer className="footer-wrapper" id="contact">
      
      {/* Left Column: Availability */}
      <div className="footer-left">
        <p className="availability">{personalInfo.availability}</p>
        <p>© {new Date().getFullYear()} // {personalInfo.name}</p>
      </div>
      
      {/* Right Column: Contact Links */}
      <div className="footer-right">
        <div className="footer-nav">
          <a href={`mailto:${personalInfo.email}`}>Email</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="/resume.pdf" download="Shikhar_Veeramachineni_Resume.pdf">Resume ↓</a>
        </div>
        <a href="#intro" style={{ color: 'var(--accent)', fontWeight: '600' }}>Back to top ↑</a>
      </div>

    </footer>
  );
}
