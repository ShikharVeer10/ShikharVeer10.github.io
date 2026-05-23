import React, { useState, useEffect, useRef } from 'react';
import { journey } from '../data';

function JourneyGroup({ label, meta, items }) {
  const groupRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (groupRef.current) observer.observe(groupRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`jg-block ${visible ? 'jg-visible' : ''}`} ref={groupRef}>
      {/* Big left label row */}
      <div className="jg-label-row">
        <span className="jg-label">{label}</span>
        <span className="jg-label-meta">{meta}</span>
        <div className="jg-label-line" />
      </div>

      {/* Entry list */}
      <div className="jg-entries">
        {items.map((item, idx) => (
          <div
            className="jg-entry"
            key={idx}
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
            {/* Date pill — left aligned */}
            <div className="jg-date">{item.date}</div>

            {/* Entry body */}
            <div className="jg-body">
              <div className="jg-top">
                <h3 className="jg-org">{item.company}</h3>
                <span className="jg-role">{item.role}</span>
              </div>
              <ul className="jg-bullets">
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              {item.tagline && (
                <p className="jg-tagline">"{item.tagline}"</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Journey() {
  return (
    <section className="editorial-section" id="journey">

      {/* Left Column: Section heading */}
      <div className="section-left">
        <h2>Journey</h2>
        <span className="section-meta">Timeline // 02</span>
      </div>

      {/* Right Column: Stacked groups */}
      <div className="section-right jg-stack">
        <JourneyGroup
          label="Experience"
          meta="Work & Internships"
          items={journey.experience}
        />
        <JourneyGroup
          label="Education"
          meta="Academic Background"
          items={journey.education}
        />
      </div>

    </section>
  );
}
