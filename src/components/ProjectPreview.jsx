import React from 'react';
import { Terminal, Shield, FileSpreadsheet, Play, Activity, Cpu } from 'lucide-react';

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
  unipath: {
    icon: <Shield size={14} />,
    title: "UniPath Evaluator Logs",
    body: (
      <div className="preview-terminal">
        <div className="terminal-line text-green"><Play size={10} /> Profile evaluated: applicant_eval.json</div>
        <div className="terminal-line">• CGPA: 8.8/10 | GRE: 324 | Papers: 2</div>
        <div className="terminal-line">• Target: MS CS (United States)</div>
        <div className="terminal-line">• Running Multi-Criteria Matcher...</div>
        <div className="terminal-line">• Admissions Probability Breakdown:</div>
        <div className="terminal-line text-green">  - Stanford University: 28% [AMBITIOUS]</div>
        <div className="terminal-line text-green">  - Georgia Tech: 64% [TARGET]</div>
        <div className="terminal-line text-green">  - ASU / UT Dallas: 88% [SAFE]</div>
        <div className="terminal-line text-accent">■ EVALUATION COMPLETE: 12 MATCHES GENERATED</div>
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
  },
  synapsearena: {
    icon: <Cpu size={14} />,
    title: "SynapseArena Orchestrator",
    body: (
      <div className="preview-terminal">
        <div className="terminal-line text-green"><Play size={10} /> Debate topic: "Scaling vs Limits"</div>
        <div className="terminal-line">• Moderator: Round 1 Argument Phase</div>
        <div className="terminal-line text-green">  - Proposer: "Compute scaling persists..."</div>
        <div className="terminal-line text-yellow">  - Opposer: "Physical bottlenecks exist..."</div>
        <div className="terminal-line">• Moderator: Round 2 Rebuttal Phase</div>
        <div className="terminal-line">• Validating inter-agent contracts:</div>
        <div className="terminal-line text-green">  - Message payload schemas: OK</div>
        <div className="terminal-line text-green">  - Turn-taking lifecycle: OK</div>
        <div className="terminal-line">• Judge compiling final verdict...</div>
        <div className="terminal-line text-accent">■ VERDICT: 52% CONFIDENCE [PROPOSER]</div>
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
