import React from 'react';
import { bentoToolkit } from '../data';

export default function ToolkitGrid() {
  return (
    <section id="toolkit" className="section-block">
      <header className="block-header">
        <h2>Toolkit</h2>
        <span className="h-line"></span>
      </header>

      <div className="toolkit-grid">
        {bentoToolkit.map((item, idx) => (
          <div className="toolkit-item" key={idx}>
            <span className="toolkit-label">{item.title}</span>
            <div className="toolkit-content">
              {item.techs.map((tech, i) => (
                <span key={i} className="tech-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
