import React, { useState, useEffect } from 'react';
import SpotlightBg from './components/SpotlightBg';
import ProjectPreview from './components/ProjectPreview';
import ProjectDrawer from './components/ProjectDrawer';
import BlogPost from './components/BlogPost';
import Intro from './components/Intro';
import Work from './components/Work';
import Publications from './components/Publications';
import Journey from './components/Journey';
import Blogs from './components/Blogs';
import GitHubActivity from './components/GitHubActivity';
import Achievements from './components/Achievements';
import Toolkit from './components/Toolkit';
import Footer from './components/Footer';
import { blogs } from './data';

function getSlugFromPath() {
  const path = window.location.pathname;
  const hash = window.location.hash;
  
  // Support both /blogs/:slug and #/blogs/:slug
  const pathMatch = path.match(/\/blogs\/([a-zA-Z0-9_-]+)/);
  if (pathMatch) return pathMatch[1];

  const hashMatch = hash.match(/#\/blogs\/([a-zA-Z0-9_-]+)/);
  if (hashMatch) return hashMatch[1];

  return null;
}

export default function App() {
  const [theme, setTheme] = useState('light'); // default to cream paper theme
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Active blog slug for dedicated page view (/blogs/:slug)
  const [currentBlogSlug, setCurrentBlogSlug] = useState(getSlugFromPath);
  
  // Interactive highlighting states
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeProjectStack, setActiveProjectStack] = useState(null);

  // Mouse coordinate tracker for spotlight grid & floating previews
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Listen to popstate (browser Back / Forward navigation)
  useEffect(() => {
    const handleLocationChange = () => {
      const slug = getSlugFromPath();
      setCurrentBlogSlug(slug);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
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

  // Navigate to a blog article
  const handleSelectBlog = (slug) => {
    const targetUrl = `/blogs/${slug}`;
    try {
      window.history.pushState({ slug }, '', targetUrl);
    } catch (e) {
      // Fallback for file:// or restricted environments
      window.location.hash = `/blogs/${slug}`;
    }
    setCurrentBlogSlug(slug);
    window.scrollTo(0, 0);
  };

  // Navigate back to the home page or writing section
  const handleBackToHome = (target = '/') => {
    try {
      window.history.pushState({}, '', target);
    } catch (e) {
      window.location.hash = target.replace('/', '');
    }
    setCurrentBlogSlug(null);

    if (target.includes('#blogs')) {
      setTimeout(() => {
        const el = document.getElementById('blogs');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const activeBlog = blogs.find((b) => b.slug === currentBlogSlug);

  return (
    <>
      {/* Dynamic Cursor Spotlight Grid Background */}
      <SpotlightBg />

      {currentBlogSlug ? (
        /* Dedicated Standalone Blog Post Page */
        <BlogPost 
          blog={activeBlog} 
          onBack={handleBackToHome}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
      ) : (
        /* Main Portfolio Home Page */
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

          {/* 5. Blogs (SlideForge & AetherMind) */}
          <Blogs onSelectBlog={handleSelectBlog} />

          {/* 6. GitHub Contribution Activity */}
          <GitHubActivity username="ShikharVeer10" />

          {/* 7. Achievements */}
          <Achievements />

          {/* 8. Toolkit with connected highlighting */}
          <Toolkit 
            activeProjectStack={activeProjectStack}
            onHoverSkill={setHoveredSkill}
          />

          {/* 9. Clean footer availability info */}
          <Footer />

        </div>
      )}

      {/* Slide-out Specification Panel for Work Projects */}
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
