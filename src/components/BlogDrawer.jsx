import React, { useEffect } from 'react';
import { X, ArrowLeft, Calendar, Clock, Terminal, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data';

export default function BlogDrawer({ blog, onClose }) {
  // Prevent background scroll while reader drawer is open
  useEffect(() => {
    if (blog) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [blog]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (blog) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [blog, onClose]);

  if (!blog) return null;

  return (
    <div className="blog-drawer-overlay" onClick={onClose}>
      <div 
        className="blog-drawer-panel"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="blog-drawer-title"
      >
        {/* Top Control Bar */}
        <div className="blog-drawer-nav">
          <button 
            type="button" 
            className="blog-back-btn" 
            onClick={onClose}
            aria-label="Back to blogs"
          >
            <ArrowLeft size={16} />
            <span>← All writing</span>
          </button>

          <span className="blog-breadcrumb">
            writing / <span className="mono">{blog.slug}</span>
          </span>

          <button 
            type="button" 
            className="blog-close-icon-btn" 
            onClick={onClose}
            aria-label="Close article"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Reader Body */}
        <div className="blog-drawer-scroll">
          <main className="blog-reader-container">
            {/* Author Identity Badge */}
            <div className="blog-author-byline">
              <div className="blog-author-avatar">
                <span>SV</span>
              </div>
              <div className="blog-author-meta">
                <b>{personalInfo.name}</b>
                <span className="blog-author-subtitle">{personalInfo.title}</span>
              </div>
            </div>

            {/* Title & Metadata */}
            <header className="blog-article-header">
              <h1 id="blog-drawer-title">{blog.title}</h1>
              <div className="blog-article-meta-row">
                <span className="meta-item">
                  <Calendar size={14} />
                  <span>{blog.date}</span>
                </span>
                <span className="meta-sep">•</span>
                <span className="meta-item">
                  <Clock size={14} />
                  <span>{blog.readingTime}</span>
                </span>
              </div>
            </header>

            {/* Prose Content */}
            <article className="blog-prose">
              {blog.sections.map((section, idx) => {
                switch (section.type) {
                  case 'lead':
                    return (
                      <p key={idx} className="blog-lead-paragraph">
                        {section.content}
                      </p>
                    );
                  case 'heading':
                    return (
                      <h2 key={idx} className="blog-section-heading">
                        {section.title}
                      </h2>
                    );
                  case 'paragraph':
                    return (
                      <p key={idx} className="blog-body-paragraph">
                        {section.content}
                      </p>
                    );
                  case 'code':
                    return (
                      <div key={idx} className="blog-code-container">
                        <div className="blog-code-header">
                          <Terminal size={13} />
                          <span>{section.caption || 'Code block'}</span>
                        </div>
                        <pre>
                          <code>{section.code}</code>
                        </pre>
                      </div>
                    );
                  case 'bullets':
                    return (
                      <ul key={idx} className="blog-bullets-list">
                        {section.items.map((item, i) => (
                          <li key={i}>
                            <ChevronRight size={14} className="blog-bullet-icon" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
            </article>

            {/* Footer Signoff */}
            <footer className="blog-article-footer">
              <div className="blog-footer-left">
                <button 
                  type="button" 
                  className="blog-back-pill" 
                  onClick={onClose}
                >
                  <ArrowLeft size={14} />
                  <span>Back to all writing</span>
                </button>
              </div>
              <div className="blog-footer-tags">
                {blog.tags.map((t) => (
                  <span key={t} className="blog-tag-pill">#{t}</span>
                ))}
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
