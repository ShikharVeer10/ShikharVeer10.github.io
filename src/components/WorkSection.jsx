import React, { useState } from 'react';
import { projects } from '../data';
import { ArrowUpRight } from 'lucide-react';

export default function WorkSection() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleRow = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="work" className="section-block">
      <header className="block-header">
        <h2>Ship Log</h2>
        <span className="h-line"></span>
        <span className="year">2023—26</span>
      </header>

      <div className="ship-log-table">
        {projects.map((project) => {
          const isOpen = expandedId === project.id;
          return (
            <React.Fragment key={project.id}>
              {/* Row Header */}
              <div className="log-row" onClick={() => toggleRow(project.id)}>
                <div className="col-date">
                  <span className="mono-label">{project.year}</span>
                </div>
                <div className="col-name">
                  <h3 className="serif-display">{project.title}</h3>
                  <span className="mono-label" style={{ fontSize: '0.65rem', opacity: 0.7, display: 'block', marginTop: '4px' }}>
                    {project.tag}
                  </span>
                </div>
                <div className="col-role">
                  <span>Owner</span>
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="repo-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // Stop click propagating to row expand
                    >
                      Repo
                    </a>
                  )}
                  <span className="arrow-icon" style={{ transform: isOpen ? 'rotate(90deg)' : 'none' }}>→</span>
                </div>
              </div>

              {/* Expandable Breakdown Panel */}
              <div className={`log-row-expandable ${isOpen ? 'is-open' : ''}`}>
                <div className="expandable-grid">
                  <div className="expandable-details">
                    <h4>Ownership & Execution</h4>
                    <p style={{ marginBottom: '1rem' }}>{project.owned}</p>
                    
                    <h4>System Architecture Stack</h4>
                    <p>{project.stack.join(' // ')}</p>
                  </div>
                  
                  <div>
                    <h4 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.15rem', margin: '0 0 0.5rem' }}>
                      Key Outcomes & Metrics
                    </h4>
                    <div className="expandable-highlights" style={{ display: 'grid', gap: '0.5rem' }}>
                      {project.proof.map((metric, i) => (
                        <span key={i}>{metric}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
