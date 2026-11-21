import React, { useState, useEffect, useRef } from 'react';
import { journey } from '../data';

function AnimatedNumber({ value, prefix = '', suffix = '', trigger }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!trigger) {
      setDisplayValue(0);
      return;
    }

    const duration = 1200; // ms
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic: 1 - pow(1 - x, 3)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(easeOut * value);

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [trigger, value]);

  return (
    <span className="jg-stat-numeric">
      {prefix}{displayValue}{suffix}
    </span>
  );
}

function JourneyGroup({ label, meta, items, isExperience = false }) {
  const groupRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
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
            className={`jg-entry ${item.stat ? 'jg-entry-with-stat' : ''}`}
            key={idx}
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
            {/* Date pill — left aligned */}
            <div className="jg-date">{item.date}</div>

            {/* Entry body: Content & Side Stat */}
            <div className="jg-body">
              <div className="jg-content-wrapper">
                <div className="jg-top">
                  <div className="jg-org-row">
                    <h3 className="jg-org">{item.company}</h3>
                    {item.logo && (
                      <a
                        href={item.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="jg-company-logo-link"
                        title={`${item.company} on LinkedIn`}
                        aria-label={`${item.company} on LinkedIn`}
                      >
                        <img
                          src={item.logo}
                          alt={`${item.company} logo`}
                          className="jg-company-logo"
                        />
                      </a>
                    )}
                  </div>
                  <span className="jg-role">{item.role}</span>
                </div>

                <div className="jg-details-row">
                  {/* Left animated numeric stat badge (like the attached design) */}
                  {item.stat && (
                    <div className="jg-stat-box">
                      <div className="jg-stat-val">
                        <AnimatedNumber
                          value={item.stat.value}
                          prefix={item.stat.prefix}
                          suffix={item.stat.suffix}
                          trigger={visible}
                        />
                      </div>
                      <span className="jg-stat-label">{item.stat.label}</span>
                    </div>
                  )}

                  {/* Bullets list */}
                  <ul className="jg-bullets">
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>

                {item.tagline && (
                  <p className="jg-tagline">"{item.tagline}"</p>
                )}
              </div>
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
        <span className="section-meta">Timeline // 03</span>
      </div>

      {/* Right Column: Stacked groups */}
      <div className="section-right jg-stack">
        <JourneyGroup
          label="Experience"
          meta="Work & Internships"
          items={journey.experience}
          isExperience={true}
        />
        <JourneyGroup
          label="Education"
          meta="Academic Background"
          items={journey.education}
          isExperience={false}
        />
      </div>

    </section>
  );
}
