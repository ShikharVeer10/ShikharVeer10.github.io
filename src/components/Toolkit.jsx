import React from 'react';
import { bentoToolkit } from '../data';

export default function Toolkit({ activeProjectStack, onHoverSkill }) {
  return (
    <section className="editorial-section" id="toolkit">
      
      {/* Left Column: Heading */}
      <div className="section-left">
        <h2>Toolkit</h2>
        <span className="section-meta">Skills // 03</span>
      </div>

      {/* Right Column: Grouped Tag lists */}
      <div className="section-right">
        <div className="toolkit-grid">
          {bentoToolkit.map((group, idx) => (
            <div className="toolkit-group" key={idx}>
              <h3>{group.title}</h3>
              <div className="toolkit-tags">
                {group.techs.map((tech, i) => {
                  const isActive = activeProjectStack && activeProjectStack.includes(tech);
                  
                  return (
                    <span 
                      key={i} 
                      className={`interactive-skill ${isActive ? 'is-active' : ''}`}
                      onMouseEnter={() => onHoverSkill(tech)}
                      onMouseLeave={() => onHoverSkill(null)}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
