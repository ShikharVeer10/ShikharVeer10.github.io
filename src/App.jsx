import React, { useState, useEffect } from 'react';
import SpotlightBg from './components/SpotlightBg';
import ProjectPreview from './components/ProjectPreview';
import ProjectDrawer from './components/ProjectDrawer';
import Intro from './components/Intro';
import Work from './components/Work';
import Publications from './components/Publications';
import Journey from './components/Journey';
import GitHubActivity from './components/GitHubActivity';
import Toolkit from './components/Toolkit';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('light'); // default to cream paper theme
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Interactive highlighting states
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeProjectStack, setActiveProjectStack] = useState(null);

  // Mouse coordinate tracker for spotlight grid & floating previews
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Global background spotlight positioning variables
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
      
      // Floating preview element coordinates
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  const handleHoverProject = (project) => {
    if (project) {
      setHoveredProject(project);
      setActiveProjectStack(project.stack);
    } else {
      setHoveredProject(null);
      setActiveProjectStack(null);
    }
  };

  return (
    <>
      {/* Dynamic Cursor Spotlight Grid Background */}
      <SpotlightBg />

      <div className="page-wrapper">
        
        {/* 1. Intro Identity Block & Manifesto */}
        <Intro theme={theme} onToggleTheme={toggleTheme} />

        {/* 2. Selected Work List */}
        <Work 
          onSelectProject={setSelectedProject}
          hoveredSkill={hoveredSkill}
          onHoverProject={handleHoverProject}
        />

        {/* 3. Publications */}
        <Publications />

        {/* 4. Journey (Experience & Education) */}
        <Journey />

        {/* 4. GitHub Contribution Activity */}
        <GitHubActivity username="ShikharVeer10" />

        {/* 5. Toolkit with connected highlighting */}
        <Toolkit 
          activeProjectStack={activeProjectStack}
          onHoverSkill={setHoveredSkill}
        />

        {/* 5. Clean footer availability info */}
        <Footer />

      </div>

      {/* Slide-out Specification Panel */}
      <ProjectDrawer 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Floating Mouse Preview Box */}
      <ProjectPreview 
        project={hoveredProject} 
        x={mousePos.x} 
        y={mousePos.y} 
      />
    </>
  );
}
