import React from 'react';
import { personalInfo, stats } from '../data';

export default function Hero() {
  return (
    <section className="hero-wrapper" id="manifesto">
      <h1 className="hero-heading">
        <span>I build systems where</span>
        <span>
          <span className="highlight">users, data, and AI</span>
        </span>
        <span>come together.</span>
      </h1>

      <div className="hero-manifesto">
        {personalInfo.manifesto.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      {/* Stats Ticker */}
      <div className="stats-ticker">
        <span className="stats-ticker-label">// SHIPPING VELOCITY</span>
        <span className="stats-ticker-line"></span>
        {stats.map((stat, idx) => (
          <div className="stats-ticker-group" key={idx}>
            <span className="stats-label">{stat.label}:</span>
            <span className="stats-val">{stat.val}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
