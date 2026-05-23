import React from 'react';
import { projects } from '../data';
import { Github, ArrowUpRight } from 'lucide-react';

export default function WorkList() {
  return (
    <section id="work">
      <div className="section-title-bar">
        <h2>Selected Work</h2>
        <span className="line"></span>
        <span className="marker">// 01</span>
      </div>

      <div className="project-spec-list">
        {projects.map((project) => (
          <div key={project.id} className="project-spec-item">
            {/* Header */}
            <div className="project-spec-header">
              <div className="project-spec-title">
                <h3>{project.title}</h3>
                <span className="project-spec-tag">{project.tag}</span>
              </div>
              <span className="project-spec-year">{project.year}</span>
            </div>

            {/* Description */}
            <p className="project-spec-desc">{project.desc}</p>

            {/* Outcomes/Bullets */}
            <ul className="project-spec-outcomes">
              {project.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>

            {/* Tech Badges */}
            <div className="project-spec-stack">
              {project.stack.map((tech, i) => (
                <span key={i} className="project-spec-tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            {/* Code Link */}
            {project.github && (
              <div className="project-spec-actions">
                <a 
                  href={project.github} 
                  className="project-spec-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>View Repository</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
