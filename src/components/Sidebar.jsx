import React from 'react';
import { bentoToolkit, personalInfo } from '../data';
import { FileText, Mail, Phone, MapPin } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="right-pane">
      
      {/* 1. Quick Info Card */}
      <div className="info-card">
        <div className="info-card-row">
          <span className="info-lbl">Email</span>
          <span className="info-val" style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem' }}>
            {personalInfo.email}
          </span>
        </div>
        <div className="info-card-row">
          <span className="info-lbl">Phone</span>
          <span className="info-val">{personalInfo.phone}</span>
        </div>
        <div className="info-card-row">
          <span className="info-lbl">Location</span>
          <span className="info-val">{personalInfo.location}</span>
        </div>
        <div className="info-card-row">
          <span className="info-lbl">Status</span>
          <span className="info-val info-status">
            <span className="info-status-dot"></span> Active
          </span>
        </div>
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
      <div className="cv-card" id="resume">
        <div className="cv-card-info">
          <h3>Credentials</h3>
          <p>Download full technical resume</p>
        </div>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cv-btn"
        >
          <FileText size={14} />
          <span>Open CV</span>
        </a>
      </div>

    </aside>
  );
}
