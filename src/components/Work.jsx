import React from 'react';
import { projects } from '../data';
import { ArrowUpRight } from 'lucide-react';

export default function Work({ onSelectProject, hoveredSkill, onHoverProject }) {
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--card-mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--card-mouse-y', `${y}px`);
  };

  return (
    <section className="editorial-section" id="work">
      
      {/* Left Column: Heading */}
      <div className="section-left">
        <h2>Selected Work</h2>
        <span className="section-meta">Index // 01</span>
      </div>

      {/* Right Column: Work list */}
      <div className="section-right">
        {projects.map((project) => {
          const isConnected = hoveredSkill && project.stack.includes(hoveredSkill);
          
          return (
            <div 
              className={`glow-card ${isConnected ? 'is-connected' : ''}`}
              key={project.id}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => onHoverProject(project)}
              onMouseLeave={() => onHoverProject(null)}
              onClick={() => onSelectProject(project)}
            >
              
              {/* Work Item Header */}
              <div className="work-header">
                <div className="work-title-group">
                  <h3>{project.title}</h3>
                  <span className="work-tag">{project.tag}</span>
                </div>
                <span className="work-year">{project.year}</span>
              </div>

              {/* Description */}
              <p className="work-desc">{project.desc}</p>

              {/* Bullets */}
              <ul className="bullets-list">
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="tech-stack-row">
                {project.stack.map((tech, i) => (
                  <span className="tech-badge" key={i}>{tech}</span>
                ))}
              </div>

              {/* Repository Link */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.4rem' }}>
                <span className="work-repo-link" style={{ color: 'var(--accent)' }}>
                  View Deep-Dive Architecture Specs →
                </span>
                {project.github && (
                  <a 
                    href={project.github} 
                    className="work-repo-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // don't open drawer when clicking repo directly
                  >
                    <span>GitHub</span>
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
