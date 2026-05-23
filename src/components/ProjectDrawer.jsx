import React, { useEffect } from 'react';
import { X, Github, ArrowUpRight, Cpu, HardDrive, Terminal } from 'lucide-react';

const projectDeepDives = {
  emotio: {
    architecture: `
┌─────────────────────────────────────────────────────────────┐
│                 EMOTIO PIPELINE ARCHITECTURE                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [Text Input] ──> [Preprocessing] ──> [KeyBERT Extraction] ─┐│
│                                                             ││
│                                                             ├┼─> [Classifier Core]
│                                                             ││    (Sentiment Output)
│  [Vector DB]  ──> [FAISS Semantic Search] ──> [HuggingFace] ─┘│
│                                                             │
└─────────────────────────────────────────────────────────────┘
`,
    challenges: [
      {
        title: "Extracting Core Keywords from Long Text",
        desc: "Extracting keywords efficiently from raw text entries required custom stop-word modeling and term frequency weighting."
      },
      {
        title: "Low-Latency Local Inference",
        desc: "Running deep transformer models on resource-constrained server instances caused delays in real-time scoring response."
      }
    ],
    solutions: [
      "Implemented KeyBERT tokenizers with customized POS tagging, improving keyword extraction precision by 35%.",
      "Optimized HuggingFace pipelines with ONNX runtime conversions and model quantization, decreasing local CPU inference latency by 45%."
    ]
  },
  intellipost: {
    architecture: `
┌─────────────────────────────────────────────────────────────┐
│               INTELLIPOST SYSTEM FLOW DIAGRAM                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [User PDF] ──> [FastAPI Upload] ──> [Pydantic-AI Agent]    │
│                                            │                │
│                                            ▼                │
│  [PostgreSQL] <── [SQLAlchemy Async] <── [Validated JSON]   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
`,
    challenges: [
      {
        title: "Unstructured Data Hallucinations",
        desc: "Large PDFs containing detailed tables caused standard LLM prompts to output malformed JSON or miss parameters."
      },
      {
        title: "Asynchronous Database Locks",
        desc: "Concurrent multi-user uploads locked tables during write operations on structured policy parameters."
      }
    ],
    solutions: [
      "Designed a strict Pydantic schema model with double-pass verification, ensuring zero null outputs.",
      "Integrated SQLModel / SQLAlchemy asynchronous session loops, achieving parallel file uploads without database locks."
    ]
  },
  traction: {
    architecture: `
┌─────────────────────────────────────────────────────────────┐
│                 TRACTION AI COMPILER CORE                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [Prompt Text] ──> [Groq LLM Engine] ──> [9 JSON Outlines]  │
│                                                 │           │
│                                                 ▼           │
│  [Pitch Deck] <── [Python-pptx Generator] <── [Parser Loop] │
│                                                             │
└─────────────────────────────────────────────────────────────┘
`,
    challenges: [
      {
        title: "Parallel Output Structuring",
        desc: "Compiling nine separate business documents (financials, sales, marketing, PRDs, etc.) from a single prompt led to context-window timeouts."
      },
      {
        title: "PPTX Dynamic Coordinate Placement",
        desc: "Generating PowerPoint slides dynamically without layout overlaps caused visual bugs across different slide dimensions."
      }
    ],
    solutions: [
      "Built a stateful coordinator that breaks down outline generation into multi-stage tasks, processing documents in parallel.",
      "Coded a responsive slide-grid layout parser using relative coordinates (EMU offsets), eliminating overlapping texts."
    ]
  },
  synapsearena: {
    architecture: `
┌─────────────────────────────────────────────────────────────┐
│               SYNAPSEARENA DEBATE ORCHESTRATION             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [Topic Input] ──> [Moderator Agent] ──> [Round Manager]    │
│                         │                      │            │
│                         ▼                      ▼            │
│                  [Proposer Agent]       [Opposer Agent]     │
│                         │                      │            │
│                         └────────┬─────────────┘            │
│                                  ▼                          │
│                          [Judge Agent] ──> [Verdict JSON]   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
`,
    challenges: [
      {
        title: "Deterministic Agent Turn-Taking",
        desc: "Orchestrating multi-agent conversations without state collisions required strict lifecycle management to prevent agents from speaking out of turn."
      },
      {
        title: "Type-Safe Cross-Agent Communication",
        desc: "Passing arguments and counter-arguments between agents with varying schemas caused runtime errors in early iterations without a validated contract layer."
      }
    ],
    solutions: [
      "Designed a turn-gated debate loop using PydanticAI's structured agent API, enforcing role-based execution order and preventing parallel message conflicts.",
      "Implemented Pydantic model contracts for all inter-agent message payloads, achieving zero runtime validation failures across 100+ debate simulations."
    ]
  }
};

export default function ProjectDrawer({ project, onClose }) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  const dive = projectDeepDives[project.id] || { architecture: "", challenges: [], solutions: [] };

  return (
    <div className="drawer-overlay" onClick={onClose}>
      
      <div 
        className="drawer-panel" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        
        {/* Header */}
        <div className="drawer-header">
          <div className="drawer-header-left">
            <span className="drawer-meta-tag">// TECHNICAL SPECIFICATION</span>
            <h2>{project.title}</h2>
          </div>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close panel">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="drawer-content">
          
          {/* Main Info */}
          <div className="drawer-section">
            <p className="drawer-desc">{project.desc}</p>
            <div className="drawer-meta-badges">
              <span className="work-tag">{project.tag}</span>
              <span className="work-year">{project.year}</span>
              {project.achievements && (
                <span className="achieve-tag">{project.achievements}</span>
              )}
            </div>
          </div>

          {/* Architecture Monospace Spec */}
          {dive.architecture && (
            <div className="drawer-section">
              <h4 className="drawer-sec-title">
                <Terminal size={14} />
                <span>System Architecture</span>
              </h4>
              <pre className="arch-ascii">
                <code>{dive.architecture.trim()}</code>
              </pre>
            </div>
          )}

          {/* Engineering Challenges */}
          {dive.challenges.length > 0 && (
            <div className="drawer-section">
              <h4 className="drawer-sec-title">
                <Cpu size={14} />
                <span>Engineering Challenges</span>
              </h4>
              <div className="challenges-list">
                {dive.challenges.map((c, i) => (
                  <div className="challenge-item" key={i}>
                    <strong>{c.title}</strong>
                    <p>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Solutions & Outcomes */}
          {dive.solutions.length > 0 && (
            <div className="drawer-section">
              <h4 className="drawer-sec-title">
                <HardDrive size={14} />
                <span>Applied Solutions & Metrics</span>
              </h4>
              <ul className="drawer-solutions-list">
                {dive.solutions.map((sol, i) => (
                  <li key={i}>{sol}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology badges */}
          <div className="drawer-section">
            <h4 className="drawer-sec-title"><span>Technologies Deployed</span></h4>
            <div className="tech-stack-row">
              {project.stack.map((tech, i) => (
                <span className="tech-badge" key={i}>{tech}</span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="drawer-actions">
            {project.github && (
              <a 
                href={project.github} 
                className="drawer-action-btn"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github size={16} />
                <span>Clone Codebase</span>
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
