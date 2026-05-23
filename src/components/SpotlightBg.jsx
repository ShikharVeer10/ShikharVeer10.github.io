import React from 'react';

export default function SpotlightBg() {
  return (
    <>
      {/* Background Dot Matrix Grid */}
      <div className="spotlight-grid" aria-hidden="true" />
      {/* Dynamic Cursor Spotlight Overlay */}
      <div className="spotlight-glow" aria-hidden="true" />
    </>
  );
}
