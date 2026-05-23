import React from 'react';
import { gitCommits } from '../data';

export default function GitTimeline() {
  return (
    <section id="experience">
      <div className="workspace-title-row">
        <h2>System Branches</h2>
        <span className="wire-line"></span>
        <span className="node-id">TIMELINES // 02</span>
      </div>

      <div className="git-timeline">
        {/* Branching vertical line */}
        <div className="git-line"></div>

        {gitCommits.map((commit, idx) => (
          <div className="git-commit-node" key={idx}>
            {/* Git node circle dot */}
            <div className="git-commit-dot"></div>

            {/* Commit Header Details */}
            <div className="commit-header">
              <div className="commit-meta">
                <span className="commit-title">{commit.company}</span>
                <span className="commit-role">{commit.role}</span>
              </div>
              <div className="commit-hash-date">
                <span className="commit-hash">{commit.hash}</span>
                <span>{commit.date}</span>
              </div>
            </div>

            <div className="commit-msg">
              commit: {commit.message}
            </div>

            {/* Detailed outcomes */}
            <ul className="commit-details">
              {commit.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
