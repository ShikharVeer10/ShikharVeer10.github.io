import React, { useRef } from 'react';
import { projects } from '../data';
import { Github, Play } from 'lucide-react';

function TiltCard({ project, onSelectProject }) {
  const cardRef = useRef(null);

  // 3D Tilt Card effect
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x coordinate inside the card
    const y = e.clientY - rect.top;  // y coordinate inside the card
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation angle (max 10 degrees)
    const rotateX = ((centerY - y) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div className="tilt-card-wrapper">
      <div 
        ref={cardRef}
        className="tilt-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-top">
          <div className="card-title-block">
            <h3>{project.title}</h3>
            <div className="card-tag-row">
              <span className="card-tag">{project.tag}</span>
            </div>
          </div>
          <span className="card-year">{project.year}</span>
        </div>

        <p className="card-desc">{project.desc}</p>

        {/* Technologies List */}
        <div className="card-stack">
          {project.stack.map((tech, i) => (
            <span key={i} className="card-tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Row */}
        <div className="card-action-bar">
          <button 
            className="card-test-btn"
            onClick={() => onSelectProject(project.id)}
          >
            <Play size={12} fill="currentColor" />
            <span>Test API Endpoint</span>
          </button>

          {project.github && (
            <a 
              href={project.github} 
              className="card-git-btn"
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              title="View Repository"
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectDeck({ onSelectProject }) {
  return (
    <section id="work">
      <div className="workspace-title-row">
        <h2>Selected Systems</h2>
        <span className="wire-line"></span>
        <span className="node-id">WORK // 01</span>
      </div>

      <div className="project-deck-list">
        {projects.map((project) => (
          <TiltCard 
            project={project} 
            key={project.id} 
            onSelectProject={onSelectProject} 
          />
        ))}
      </div>
    </section>
  );
}
