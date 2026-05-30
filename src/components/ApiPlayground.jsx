import React, { useState, useEffect, useRef } from 'react';
import { apiEndpoints, bentoToolkit } from '../data';
import { Play, FileText, Send, Loader2 } from 'lucide-react';

export default function ApiPlayground({ selectedProjectId }) {
  const [selectedEndpoint, setSelectedEndpoint] = useState(apiEndpoints[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [logs, setLogs] = useState([]);
  const [showResponse, setShowResponse] = useState(false);
  const logContainerRef = useRef(null);

  // Sync selected endpoint when user clicks card button in Left column
  useEffect(() => {
    if (selectedProjectId) {
      const target = apiEndpoints.find(api => api.id === selectedProjectId);
      if (target) {
        setSelectedEndpoint(target);
        // Automatically trigger request for visual interest!
        triggerRequest(target);
      }
    }
  }, [selectedProjectId]);

  // Auto-scroll logs
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const handleEndpointChange = (e) => {
    const target = apiEndpoints.find(api => api.path === e.target.value);
    if (target) {
      setSelectedEndpoint(target);
      setLogs([]);
      setShowResponse(false);
    }
  };

  const triggerRequest = (endpoint) => {
    setIsLoading(true);
    setShowResponse(false);
    setLogs([]);

    let idx = 0;
    const logInterval = setInterval(() => {
      if (idx < endpoint.logs.length) {
        setLogs(prev => [
          ...prev, 
          { 
            text: endpoint.logs[idx], 
            type: endpoint.logs[idx].includes("SUCCESS") 
              ? "success-cmd" 
              : endpoint.logs[idx].includes("POST") 
              ? "run-cmd" 
              : "default" 
          }
        ]);
        idx++;
      } else {
        clearInterval(logInterval);
        setIsLoading(false);
        setShowResponse(true);
      }
    }, 120);
  };

  return (
    <aside className="sticky-sandbox-pane">
      
      {/* API Sandbox Card */}
      <div className="api-playground" id="sandbox">
        {/* Header */}
        <div className="api-header">
          <div className="api-header-title">API Sandbox Client</div>
          <span className="api-method-pill">{selectedEndpoint.method}</span>
        </div>

        {/* URL Bar Selector */}
        <div className="api-url-bar">
          <select 
            value={selectedEndpoint.path}
            onChange={handleEndpointChange}
            className="api-select-field"
          >
            {apiEndpoints.map((api) => (
              <option key={api.path} value={api.path}>
                {api.method} http://localhost:8000{api.path}
              </option>
            ))}
          </select>
          
          <button 
            className="api-send-btn"
            onClick={() => triggerRequest(selectedEndpoint)}
            disabled={isLoading}
          >
            {isLoading ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
            <span>{isLoading ? 'Sending...' : 'Send'}</span>
          </button>
        </div>

        {/* Endpoint Params */}
        <div className="api-params-block">
          <span className="api-block-title">Request Headers & Parameters</span>
          <pre className="api-code-preview">
            {JSON.stringify(selectedEndpoint.params, null, 2)}
          </pre>
        </div>

        {/* System Terminal Logs Stream */}
        <div className="api-terminal-logs" ref={logContainerRef}>
          {logs.length === 0 ? (
            <span className="api-terminal-row" style={{ fontStyle: 'italic', opacity: 0.5 }}>
              // Server idle. Click Send Request to execute endpoint...
            </span>
          ) : (
            logs.map((log, i) => (
              <span key={i} className={`api-terminal-row ${log.type}`}>
                {log.text}
              </span>
            ))
          )}
        </div>

        {/* JSON Response Panel */}
        <div className="api-response-block">
          <div className="response-status-bar">
            <span className="api-block-title">JSON Response Payload</span>
            {showResponse && (
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <span className="status-badge">200 OK</span>
                <span className="latency-badge">{selectedEndpoint.latency}ms</span>
              </div>
            )}
          </div>
          <div className="api-json-window">
            {showResponse ? (
              JSON.stringify(selectedEndpoint.response, null, 2)
            ) : isLoading ? (
              <span style={{ color: 'var(--cyan)' }}>// Streaming response payload...</span>
            ) : (
              <span style={{ opacity: 0.4 }}>// Waiting for request execution...</span>
            )}
          </div>
        </div>
      </div>

      {/* Bento Grid Stack */}
      <div className="stack-bento-grid" id="toolkit">
        {bentoToolkit.map((item, idx) => (
          <div className="stack-bento-card" key={idx}>
            <div className="stack-card-title">{item.title}</div>
            <div className="stack-card-tags">
              {item.techs.map((tech, i) => (
                <span key={i} className="stack-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CV Download Panel */}
      <div className="download-cv-card" id="resume">
        <div className="download-cv-info">
          <h3>Credentials Sheet</h3>
          <p>Download full technical resume</p>
        </div>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="download-cv-action-btn"
        >
          <FileText size={14} />
          <span>Open CV</span>
        </a>
      </div>

    </aside>
  );
}
