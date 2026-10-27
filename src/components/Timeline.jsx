import React from 'react';
import { journey } from '../data';

export default function Timeline() {
  return (
    <section id="experience">
      <div className="section-title-bar">
        <h2>Journey</h2>
        <span className="line"></span>
        <span className="marker">// 02</span>
      </div>

      <div className="timeline-block">
        {/* Work Experience */}
        {journey.experience.map((item, idx) => (
          <div className="timeline-row-item" key={idx}>
            <div className="timeline-date-col">
              {item.date}
            </div>
            <div className="timeline-details-col">
              <div className="jg-org-row">
                <div className="timeline-org">{item.company}</div>
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
              <div className="timeline-role">{item.role}</div>
              <ul className="timeline-bullets">
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Separator */}
        <h4 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.25rem', marginTop: '2rem', borderBottom: '1px solid var(--line)', paddingBottom: '0.4rem' }}>
          Education
        </h4>

        {/* Education Milestones */}
        {journey.education.map((item, idx) => (
          <div className="timeline-row-item" key={idx}>
            <div className="timeline-date-col">
              {item.date}
            </div>
            <div className="timeline-details-col">
              <div className="jg-org-row">
                <div className="timeline-org">{item.company}</div>
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
              <div className="timeline-role">{item.role}</div>
              <ul className="timeline-bullets">
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
