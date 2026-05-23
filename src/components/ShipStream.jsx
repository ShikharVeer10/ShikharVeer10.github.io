import React, { useState } from 'react';
import { projects, experience, bentoToolkit } from '../data';
import { ArrowUpRight } from 'lucide-react';

export default function ShipStream({ onSelectProject, onSelectExperience }) {
  // Tab states for each project card: key is project.id, value is active tab name ('overview' | 'metrics' | 'stack')
  const [projectTabs, setProjectTabs] = useState({
    emotio: 'overview',
    intellipost: 'overview',
    traction: 'overview'
  });

  const handleTabChange = (projectId, tabName, e) => {
    e.stopPropagation(); // Prevent card body click trigger
    setProjectTabs(prev => ({
      ...prev,
      [projectId]: tabName
    }));
    // Notify console to stream logs
    const project = projects.find(p => p.id === projectId);
    onSelectProject(project, tabName);
  };

  return (
    <div className="center-panel col-border">
      
      {/* Selected Work Section */}
      <section className="section-block" id="work">
        <div className="panel-section-title">
          <h2>Selected Work</h2>
          <span className="divider-line"></span>
          <span className="year">Spec Sheets</span>
        </div>

        {projects.map((project) => {
          const activeTab = projectTabs[project.id];
          return (
            <div 
              key={project.id} 
              className="tabbed-spec-card"
              onClick={() => onSelectProject(project, activeTab)}
              title="Click to diagnostic logs in terminal"
            >
              {/* Header */}
              <div className="card-header-bar">
                <div className="card-header-title">
                  <span>{project.title}</span>
                  <span className="card-header-tag">{project.tag}</span>
                </div>
                <div className="card-header-year">{project.year}</div>
              </div>

              {/* Tab Bar */}
              <div className="card-tab-bar">
                <button 
                  className={`card-tab-btn ${activeTab === 'overview' ? 'active-tab' : ''}`}
                  onClick={(e) => handleTabChange(project.id, 'overview', e)}
                >
                  Overview
                </button>
                <button 
                  className={`card-tab-btn ${activeTab === 'metrics' ? 'active-tab' : ''}`}
                  onClick={(e) => handleTabChange(project.id, 'metrics', e)}
                >
                  Metrics
                </button>
                <button 
                  className={`card-tab-btn ${activeTab === 'stack' ? 'active-tab' : ''}`}
                  onClick={(e) => handleTabChange(project.id, 'stack', e)}
                >
                  Stack
                </button>
              </div>

              {/* Tab Content Panes */}
              <div className="card-content-pane">
                {activeTab === 'overview' && (
                  <p>{project.overview}</p>
                )}

                {activeTab === 'metrics' && (
                  <div className="tab-metrics-list">
                    {project.metrics.map((metric, i) => (
                      <span key={i} className="tab-metrics-item">
                        {metric}
                      </span>
                    ))}
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div className="tab-tech-list">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="tab-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* Bento Stack Section */}
      <section className="section-block" id="toolkit">
        <div className="panel-section-title">
          <h2>Toolkit</h2>
          <span className="divider-line"></span>
          <span className="year">Bento Grid</span>
        </div>

        <div className="bento-categories-grid">
          {bentoToolkit.map((item, idx) => (
            <div className="bento-category-box" key={idx}>
              <div className="bento-category-title">{item.title}</div>
              <div className="bento-category-tags">
                {item.techs.map((tech, i) => (
                  <span key={i} className="bento-tag-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="section-block" id="experience">
        <div className="panel-section-title">
          <h2>Experience</h2>
          <span className="divider-line"></span>
          <span className="year">Timelines</span>
        </div>

        <div className="stream-experience-list">
          {experience.map((item, idx) => (
            <div 
              className="experience-card-item" 
              key={idx}
              onClick={() => onSelectExperience(item)}
              title="Click to print experience history to terminal"
              style={{ cursor: 'pointer' }}
            >
              <div className="experience-card-header">
                <h3>{item.company}</h3>
                <span>{item.date}</span>
              </div>
              <div className="experience-card-role">{item.role}</div>
              <p className="experience-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}
