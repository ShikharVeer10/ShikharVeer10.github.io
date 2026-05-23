import React from 'react';
import { personalInfo } from '../data';

export default function IntroBlock() {
  return (
    <section className="workspace-intro">
      <span className="intro-pre">// SYSTEM ARCHITECT & AI ENGINEER</span>
      <h1 className="intro-title">
        <span>I build systems where</span>
        <span>
          <span className="indigo-glow"> users, data, and AI</span>
        </span>
        <span> come together.</span>
      </h1>

      <div className="intro-manifesto">
        {personalInfo.manifesto.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
