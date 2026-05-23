import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data';

export default function SystemHeader({ theme, onToggleTheme }) {
  const [time, setTime] = useState('');
  const [ping, setPing] = useState(12);
  const [cpu, setCpu] = useState(4);

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setTime(formatter.format(new Date()) + ' IST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Mock diagnostics updates (ping and CPU load fluctuating slightly)
  useEffect(() => {
    const interval = setInterval(() => {
      setPing(prev => Math.max(8, Math.min(25, prev + (Math.random() > 0.5 ? 1 : -1))));
      setCpu(prev => Math.max(2, Math.min(8, prev + (Math.random() > 0.5 ? 1 : -1))));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="system-header">
      <div className="system-logo">
        <span className="system-logo-dot"></span>
        <span>{personalInfo.brandLogo || 'SV'}.OS</span>
      </div>

      <div className="system-diagnostics">
        <div className="diagnostic-item">
          <span>PING:</span>
          <span className="highlight-val">{ping}ms</span>
        </div>
        <div className="diagnostic-item">
          <span>CPU:</span>
          <span className="highlight-val">{cpu}%</span>
        </div>
        <div className="diagnostic-item">
          <span>TIME:</span>
          <span className="highlight-val">{time || '--:--:-- IST'}</span>
        </div>
        <div className="diagnostic-item">
          <span className="blinker-dot"></span>
          <span>ONLINE</span>
        </div>

        {/* Theme mode toggle */}
        <button 
          className="theme-mode-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle theme mode"
        >
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>
      </div>
    </header>
  );
}
