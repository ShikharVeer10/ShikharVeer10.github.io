import React, { useState, useEffect, useRef } from 'react';
import { terminalCommands } from '../data';

export default function Console({ incomingTrigger }) {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState([
    { text: "=== Shikhar Veeramachineni Shell v1.0.0 ===", type: "cyan-txt" },
    { text: "System diagnostic pipeline initialized.", type: "gray-txt" },
    { text: "Type 'help' in prompt below to view commands list.", type: "green-txt" },
    { text: "Or click on any Selected Work card/tab to print live pipeline logs.", type: "yellow-txt" },
    { text: "", type: "default" }
  ]);

  const logEndRef = useRef(null);

  // Auto-scroll terminal logs to bottom
  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  // Handle incoming triggers from project cards / experience clicks
  useEffect(() => {
    if (!incomingTrigger) return;

    // Clear and print boot log sequence
    const newLogs = [
      { text: `sv-shell> boot --target=${incomingTrigger.title.toLowerCase()} --scope=${incomingTrigger.action.toUpperCase()}`, type: "cyan-txt" },
      { text: "Loading target configuration manifest...", type: "gray-txt" }
    ];

    setLogs(newLogs);

    // Stream logs line by line
    let index = 0;
    const interval = setInterval(() => {
      if (index < incomingTrigger.logs.length) {
        setLogs(prev => [
          ...prev,
          { 
            text: `[INFO] ${incomingTrigger.logs[index]}`, 
            type: incomingTrigger.logs[index].includes("SUCCESS") || incomingTrigger.logs[index].includes("STABLE") 
              ? "green-txt" 
              : incomingTrigger.logs[index].includes("Error") 
              ? "red-txt" 
              : "default" 
          }
        ]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [incomingTrigger]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const cmd = inputVal.trim().toLowerCase();
    const promptLine = { text: `sv-shell> ${inputVal}`, type: "cyan-txt" };

    if (cmd === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    }

    let responses = [];
    if (terminalCommands[cmd]) {
      responses = terminalCommands[cmd].map(line => ({ text: line, type: "default" }));
    } else {
      responses = [
        { text: `Command not found: '${cmd}'.`, type: "red-txt" },
        { text: "Type 'help' to check available commands list.", type: "gray-txt" }
      ];
    }

    setLogs(prev => [
      ...prev,
      promptLine,
      ...responses,
      { text: "", type: "default" }
    ]);

    setInputVal('');
  };

  return (
    <div className="right-panel col-border">
      <div className="console-container">
        {/* Header Bar */}
        <div className="console-header-bar">
          <div className="console-dots">
            <span className="console-dot red"></span>
            <span className="console-dot yellow"></span>
            <span className="console-dot green"></span>
          </div>
          <div className="console-title">Diagnostic Shell</div>
          <div></div>
        </div>

        {/* Scrollable logs stream */}
        <div className="console-logs-stream">
          {logs.map((log, idx) => (
            <div 
              className={`console-log-row ${log.type}`} 
              key={idx}
            >
              {log.text}
            </div>
          ))}
          <div ref={logEndRef} />
        </div>

        {/* Command Input Bar */}
        <form onSubmit={handleCommandSubmit} className="console-input-bar">
          <span className="console-input-prompt">sv-shell&gt;</span>
          <input 
            type="text"
            className="console-field"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help'..."
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
}
