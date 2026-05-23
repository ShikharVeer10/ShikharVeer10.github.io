import React from 'react';
import { personalInfo } from '../data';

export default function Header({ theme, onToggleTheme }) {
  const navItems = [
    { label: "Work", target: "#work" },
    { label: "Journey", target: "#experience" },
    { label: "Toolkit", target: "#toolkit" },
    { label: "CV", target: "#resume" }
  ];

  return (
    <nav className="navbar">
      <div className="nav-brand">
        {personalInfo.name.toUpperCase()}
      </div>

      <div className="nav-links">
        {navItems.map((item) => (
          <a 
            key={item.target} 
            href={item.target} 
            className="nav-item-link"
          >
            {item.label}
          </a>
        ))}

        {/* Theme mode switcher button */}
        <button 
          className="theme-switch-btn"
          onClick={onToggleTheme}
          aria-label="Switch theme mode"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  );
}
