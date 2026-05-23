import React, { useState } from 'react';
import { Github, Globe, ArrowUpRight } from 'lucide-react';

export default function WorkCard({ project }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="spec-sheet-block">
      {/* Card Header Bar */}
      <div className="spec-header-row">
        <div className="spec-title-group">
          <h3>{project.title}</h3>
          <span className="spec-tag">{project.tag}</span>
        </div>
        <div className="spec-year-marker">{project.year}</div>
      </div>

      {/* Tabs Menu */}
      <div className="spec-tab-bar">
        <button 
          className={`spec-tab-btn ${activeTab === 'overview' ? 'active-tab' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`spec-tab-btn ${activeTab === 'metrics' ? 'active-tab' : ''}`}
          onClick={() => setActiveTab('metrics')}
        >
          Metrics
        </button>
        <button 
          className={`spec-tab-btn ${activeTab === 'stack' ? 'active-tab' : ''}`}
          onClick={() => setActiveTab('stack')}
        >
          Stack
        </button>
      </div>

      {/* Tab Panes */}
      <div className="spec-tab-pane">
        {activeTab === 'overview' && (
          <p style={{ color: 'var(--muted)', fontSize: '0.94rem', lineHeight: '1.55' }}>
            {project.overview}
          </p>
        )}

        {activeTab === 'metrics' && (
          <div className="metrics-grid">
            {project.metrics.map((metric, i) => (
              <span key={i} className="metric-bullet">
                {metric}
              </span>
            ))}
          </div>
        )}

        {activeTab === 'stack' && (
          <div className="tech-tags-container">
            {project.stack.map((tech, i) => (
              <span key={i} className="tech-tag-badge">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="spec-action-row">
        {project.github && (
          <a 
            href={project.github} 
            className="spec-action-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span>GitHub Repository</span>
            <Github size={14} />
          </a>
        )}
        {project.link && (
          <a 
            href={project.link} 
            className="spec-action-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span>Live Demo</span>
            <Globe size={14} />
          </a>
        )}
      </div>
    </div>
  );
}
