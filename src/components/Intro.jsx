import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data';
import DecryptText from './DecryptText';
import { FileDown } from 'lucide-react';

export default function Intro({ theme, onToggleTheme }) {
  const [timeStr, setTimeStr] = useState('--:--:-- IST');

  // Real-time ticking clock aligned with Indian Standard Time
  useEffect(() => {
    const updateClock = () => {
      try {
        const options = {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        };
        const formatter = new Intl.DateTimeFormat([], options);
        setTimeStr(formatter.format(new Date()) + ' IST');
      } catch (err) {
        setTimeStr(new Date().toLocaleTimeString() + ' Local');
      }
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="editorial-section" id="intro">
      
      {/* Left Column: Identity & Contact Info */}
      <div className="section-left">
        <div className="identity-block">
          <h1 style={{ cursor: 'pointer' }}>
            <DecryptText text={personalInfo.name} speed={20} />
          </h1>
          <p>
            <DecryptText text={personalInfo.title} speed={25} />
          </p>
        </div>

        <div className="links-list" style={{ marginTop: '1.2rem' }}>
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

        {/* Resume Download Button */}
        <a
          href="/resume.pdf"
          download="Shikhar_Veeramachineni_Resume.pdf"
          className="resume-btn"
          aria-label="Download Resume"
        >
          <FileDown size={14} />
          <span>Download Resume</span>
        </a>

        {/* Live System Status Dashboard Widget */}
        <div className="status-widget">
          <div className="status-widget-row">
            <span className="label">Status</span>
            <span className="value">
              <span className="pulse-dot"></span>ONLINE
            </span>
          </div>
          <div className="status-widget-row">
            <span className="label">Local Time</span>
            <span className="value">{timeStr}</span>
          </div>
          <div className="status-widget-row">
            <span className="label">Deployments</span>
            <span className="value">3 AI Systems</span>
          </div>
          <div className="status-widget-row">
            <span className="label">Availability</span>
            <span className="value">Summer 2026</span>
          </div>
        </div>

        <button 
          className="theme-text-btn" 
          onClick={onToggleTheme}
          aria-label="Switch visual theme"
        >
          [{theme === 'dark' ? 'Cream Theme' : 'Slate Theme'}]
        </button>
      </div>

      {/* Right Column: Manifesto Header & Text */}
      <div className="section-right">
        <h2 className="manifesto-heading">
          I build systems where <span className="highlight">strict schema validation, robust backend APIs, and stateful AI agents</span> come together.
        </h2>
        
        <div className="manifesto-body">
          {personalInfo.manifesto.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>

    </header>
  );
}
