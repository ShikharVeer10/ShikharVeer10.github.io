import React from 'react';
import { Terminal, Shield, FileSpreadsheet, Play, Activity } from 'lucide-react';

const previews = {
  emotio: {
    icon: <Activity size={14} />,
    title: "Emotio Text Pipeline",
    body: (
      <div className="preview-terminal">
        <div className="terminal-line text-green"><Play size={10} /> NLP Pipeline: ACTIVE</div>
        <div className="terminal-line">• Text tokenization: OK</div>
        <div className="terminal-line">• Keyword extraction (KeyBERT):</div>
        <div className="terminal-line text-yellow">  - "Excited", "Deploy", "ML"</div>
        <div className="terminal-line">• Sentiment probabilities:</div>
        <div className="terminal-progress-row">
          <span>POSITIVE:</span>
          <div className="terminal-bar"><div className="fill" style={{ width: '84%' }}></div></div>
          <span>84%</span>
        </div>
        <div className="terminal-progress-row">
          <span>NEUTRAL:</span>
          <div className="terminal-bar"><div className="fill" style={{ width: '12%' }}></div></div>
          <span>12%</span>
        </div>
        <div className="terminal-line text-accent">■ SENTIMENT SCORE: 0.84 [STABLE]</div>
      </div>
    )
  },
  intellipost: {
    icon: <Shield size={14} />,
    title: "IntelliPost Parser Logs",
    body: (
      <div className="preview-terminal">
        <div className="terminal-line text-green"><Play size={10} /> PDF received: policy_contract.pdf</div>
        <div className="terminal-line">• File size: 4.8MB</div>
        <div className="terminal-line">• Pages: 14</div>
        <div className="terminal-line">• Extracting structure parameters...</div>
        <div className="terminal-line">• Validating schemas:</div>
        <div className="terminal-line text-green">  - Header metadata: OK</div>
        <div className="terminal-line text-green">  - Liability table: OK</div>
        <div className="terminal-line text-green">  - Coverage limits: OK</div>
        <div className="terminal-line text-accent">■ SCHEMA EXPORT: 100% VALIDATED</div>
      </div>
    )
  },
  traction: {
    icon: <FileSpreadsheet size={14} />,
    title: "Traction Doc-Compiler",
    body: (
      <div className="preview-terminal">
        <div className="terminal-line text-green"><Play size={10} /> Prompt: "SaaS revenue growth plan"</div>
        <div className="terminal-line">• Groq Planner initialized...</div>
        <div className="terminal-line">• Spawning 9 Document Generators:</div>
        <div className="terminal-line text-green">  1. Teaser Teaser    [COMPLETE]</div>
        <div className="terminal-line text-green">  2. Slide Deck pptx   [COMPLETE]</div>
        <div className="terminal-line text-green">  3. Sales Script      [COMPLETE]</div>
        <div className="terminal-line text-green">  4. Hiring Plan docx  [COMPLETE]</div>
        <div className="terminal-line text-green">  5. Financials xlsx   [COMPLETE]</div>
        <div className="terminal-line text-accent">■ COMPLETED: 9/9 business briefs</div>
      </div>
    )
  }
};

export default function ProjectPreview({ project, x, y }) {
  if (!project) return null;

  const content = previews[project.id];
  if (!content) return null;

  return (
    <div 
      className="floating-preview-window active"
      style={{
        left: `${x}px`,
        top: `${y}px`
      }}
    >
      <div className="preview-inner">
        <div className="preview-inner-header">
          {content.icon}
          <span>{content.title}</span>
        </div>
        <div className="preview-body">
          {content.body}
        </div>
      </div>
    </div>
  );
}
