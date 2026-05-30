import React, { useState, useEffect } from 'react';
import { bentoToolkit, personalInfo } from '../data';
import { FileText, ArrowDown } from 'lucide-react';

export default function SidePanel({ theme, onToggleTheme }) {
  const [time, setTime] = useState('');

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setTime(formatter.format(new Date()) + ' IST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="right-pane">
      
      {/* 1. System Status Panel */}
      <div className="widgets-container">
        <div className="widget-row">
          <span className="widget-lbl">STATUS</span>
          <span className="widget-val widget-beacon">
            <span className="widget-dot"></span> ONLINE
          </span>
        </div>
        <div className="widget-row">
          <span className="widget-lbl">LOC</span>
          <span className="widget-val">{time || '--:-- IST'}</span>
        </div>
        <div className="widget-row">
          <span className="widget-lbl">FOCUS</span>
          <span className="widget-val">AI ENGINE</span>
        </div>

        {/* Theme Toggle Button */}
        <button 
          className="theme-toggle-btn"
          onClick={onToggleTheme}
          aria-label="Toggle theme mode"
        >
          <span>Toggle: {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}</span>
        </button>
      </div>

      {/* 2. Bento Toolkit Stack */}
      <div className="bento-stack-grid" id="toolkit">
        {bentoToolkit.map((item, idx) => (
          <div className="bento-stack-box" key={idx}>
            <div className="bento-box-title">{item.title}</div>
            <div className="bento-box-tags">
              {item.techs.map((tech, i) => (
                <span key={i} className="bento-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 3. Credentials Preview & CV Download */}
      <div className="cv-preview-box" id="resume">
        <div className="cv-preview-frame">
          <span>Resume PDF</span>
        </div>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cv-download-btn"
        >
          <FileText size={16} />
          <span>Open CV</span>
        </a>
      </div>

    </aside>
  );
}
