import React, { useState, useEffect, useRef } from 'react';

export default function DecryptText({ text, speed = 30, className = "" }) {
  const [displayText, setDisplayText] = useState(text);
  const isAnimating = useRef(false);
  const intervalId = useRef(null);
  const elementRef = useRef(null);
  const hasTriggeredOnScroll = useRef(false);

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+-/<>[]{}';

  const startDecrypt = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    let iteration = 0;

    clearInterval(intervalId.current);

    intervalId.current = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalId.current);
        isAnimating.current = false;
        setDisplayText(text);
      }

      iteration += 1 / 2; // control decay rate
    }, speed);
  };

  const handleMouseEnter = () => {
    startDecrypt();
  };

  useEffect(() => {
    setDisplayText(text);
    return () => clearInterval(intervalId.current);
  }, [text]);

  // Viewport scroll entry trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggeredOnScroll.current) {
            hasTriggeredOnScroll.current = true;
            startDecrypt();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.disconnect();
      }
    };
  }, [text]);

  return (
    <span 
      ref={elementRef}
      onMouseEnter={handleMouseEnter} 
      className={className}
      style={{ display: 'inline-block', cursor: 'default' }}
    >
      {displayText}
    </span>
  );
}
