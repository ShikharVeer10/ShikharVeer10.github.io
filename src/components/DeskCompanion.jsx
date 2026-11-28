import React, { useState } from 'react';

export default function DeskCompanion({ mousePos }) {
  const [paused, setPaused] = useState(false);
  const [mood, setMood] = useState('watching');

  const winW = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const winH = typeof window !== 'undefined' ? window.innerHeight : 800;

  const dx = paused ? 0 : Math.max(-4, Math.min(4, ((mousePos.x / winW) - 0.5) * 10));
  const dy = paused ? 0 : Math.max(-3, Math.min(3, ((mousePos.y / winH) - 0.5) * 8));

  const handleTogglePause = () => {
    setPaused((prev) => {
      const next = !prev;
      setMood(next ? 'paused' : 'watching');
      return next;
    });
  };

  const handleReset = () => {
    setPaused(false);
    setMood('reset!');
    setTimeout(() => setMood('watching'), 1200);
  };

  return (
    <aside className="desk-companion" aria-label="Desk companion widget">
      <div className="companion-face" title="Pixel, desk companion">
        <span
          className="companion-eye"
          style={{ transform: `translate(${dx}px, ${dy}px)` }}
        />
        <span
          className="companion-eye"
          style={{ transform: `translate(${dx}px, ${dy}px)` }}
        />
      </div>
      <div className="companion-meta">
        <span className="companion-name">pixel · {mood}</span>
        <div className="companion-controls">
          <button type="button" onClick={handleTogglePause}>
            {paused ? 'Resume' : 'Pause'}
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </aside>
  );
}
