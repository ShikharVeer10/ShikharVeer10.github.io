import React from 'react';
import { stats } from '../data';

export default function Highlights() {
  return (
    <section className="highlights-strip" aria-label="Highlights">
      <div className="highlights-label">// HIGHLIGHTS</div>
      <div className="highlights-grid">
        {stats.map((item) => (
          <div key={item.label} className="highlight-item">
            <span className="highlight-val">{item.val}</span>
            <span className="highlight-key">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
