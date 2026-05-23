import React from 'react';
import { personalInfo } from '../data';
import { Mail, Linkedin, Github, FileText, ArrowRight } from 'lucide-react';

export default function Identity() {
  return (
    <div className="left-panel col-border">
      <div>
        <div className="identity-name-block">
          <h1>{personalInfo.name}</h1>
          <div className="identity-tagline">{personalInfo.title}</div>
        </div>

        <p className="identity-bio">
          {personalInfo.bio}
        </p>

        {/* Education Card */}
        <div className="identity-education-card">
          <span style={{ fontSize: '0.68rem', fontFamily: 'var(--mono)', color: 'var(--accent)', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>
            Education
          </span>
          <h3>{personalInfo.education.school}</h3>
          <p style={{ fontWeight: 600, color: 'var(--ink)' }}>{personalInfo.education.degree}</p>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', marginTop: '0.2rem', marginBottom: '0.4rem' }}>{personalInfo.education.date}</p>
          <p>{personalInfo.education.details}</p>
        </div>
      </div>

      {/* Connection Links */}
      <div className="identity-links">
        <a 
          href={`mailto:${personalInfo.email}`} 
          className="identity-link-item"
        >
          <span>Email</span>
          <Mail size={14} />
        </a>
        <a 
          href={personalInfo.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="identity-link-item"
        >
          <span>LinkedIn</span>
          <Linkedin size={14} />
        </a>
        <a 
          href={personalInfo.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="identity-link-item"
        >
          <span>GitHub</span>
          <Github size={14} />
        </a>
        <a 
          href="file:///C:/Users/shikh/OneDrive/Documents/Desktop/Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="identity-link-item"
          style={{ borderStyle: 'dashed' }}
        >
          <span>Open CV</span>
          <FileText size={14} />
        </a>
      </div>
    </div>
  );
}
