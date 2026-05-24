import React, { useEffect, useRef, useState } from 'react';
import { achievements } from '../data';
import { Award } from 'lucide-react';

export default function Achievements() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="editorial-section" id="achievements">
      
      {/* Left Column: Heading */}
      <div className="section-left">
        <h2>Achievements</h2>
        <span className="section-meta">Awards // 05</span>
      </div>

      {/* Right Column: Achievements list */}
      <div className={`section-right jg-block ${visible ? 'jg-visible' : ''}`} ref={sectionRef}>
        
        {/* Section Label Row */}
        <div className="jg-label-row" style={{ marginBottom: '2rem' }}>
          <span className="jg-label">Recognitions & Honors</span>
          <span className="jg-label-meta">Hackathons & Highlights</span>
          <div className="jg-label-line" />
        </div>

        {/* Entries */}
        <div className="jg-entries">
          {achievements.map((item, idx) => (
            <div 
              className="jg-entry" 
              key={item.id || idx}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Date */}
              <div className="jg-date">{item.date}</div>

              {/* Body */}
              <div className="jg-body">
                <div className="jg-top">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Award size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    <h3 className="jg-org">{item.title}</h3>
                  </div>
                  <span className="jg-role">{item.organization}</span>
                </div>
                
                <ul className="jg-bullets">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
