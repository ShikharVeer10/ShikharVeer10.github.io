import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, Terminal, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data';

export default function BlogPost({ blog, onBack, theme, onToggleTheme }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  if (!blog) {
    return (
      <main className="col post-page-container">
        <p className="post-not-found">
          That post isn't here.{' '}
          <button type="button" className="inline-link" onClick={() => onBack('/')}>
            See all writing
          </button>
        </p>
      </main>
    );
  }

  return (
    <div className="post-page-wrapper">
      <main className="col post-main">
        {/* Author Byline / Avatar Link back to home */}
        <a 
          href="#intro" 
          className="post-by"
          onClick={(e) => {
            e.preventDefault();
            onBack('/');
          }}
        >
          <div className="post-by-avatar">
            <span>SV</span>
          </div>
          <span className="post-by-meta">
            <b>{personalInfo.name}</b>
            <span className="ser">{personalInfo.title}</span>
          </span>
        </a>

        {/* Article Container */}
        <article>
          {/* Breadcrumb: writing / slug */}
          <p className="post-path mono">
            <button 
              type="button" 
              className="path-link"
              onClick={() => onBack('/#blogs')}
            >
              writing
            </button>
            <span className="path-sep"> / </span>
            <span className="path-slug">{blog.slug}</span>
          </p>

          {/* Post Title */}
          <h1 className="post-title">{blog.title}</h1>

          {/* Post Meta */}
          <p className="post-meta">
            <span className="meta-date">{blog.date.toLowerCase()}</span>
            <span className="meta-dot"> • </span>
            <span className="meta-read">{blog.readingTime.toLowerCase()}</span>
          </p>

          {/* Prose Content */}
          <div className="prose">
            {blog.sections.map((section, idx) => {
              switch (section.type) {
                case 'lead':
                  return (
                    <p key={idx} className="prose-lead">
                      {section.content}
                    </p>
                  );
                case 'heading':
                  return (
                    <h2 key={idx}>
                      {section.title}
                    </h2>
                  );
                case 'paragraph':
                  return (
                    <p key={idx}>
                      {section.content}
                    </p>
                  );
                case 'code':
                  return (
                    <div key={idx} className="prose-code-block">
                      {section.caption && (
                        <div className="code-caption mono">
                          <Terminal size={12} />
                          <span>{section.caption}</span>
                        </div>
                      )}
                      <pre>
                        <code>{section.code}</code>
                      </pre>
                    </div>
                  );
                case 'bullets':
                  return (
                    <ul key={idx} className="prose-bullets">
                      {section.items.map((item, i) => (
                        <li key={i}>
                          <ChevronRight size={14} className="bullet-arrow" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </article>

        {/* Footer Navigation */}
        <nav className="post-foot">
          <button 
            type="button" 
            className="ul post-foot-link"
            onClick={() => onBack('/#blogs')}
          >
            ← all writing
          </button>
          <button 
            type="button" 
            className="ul post-foot-link"
            onClick={() => onBack('/')}
          >
            more about me
          </button>
        </nav>

        {/* Theme mode toggle footer */}
        <footer className="post-theme-foot">
          <button 
            type="button" 
            className="theme-switch-pill"
            onClick={onToggleTheme}
          >
            [{theme === 'dark' ? 'Cream Paper Theme' : 'Slate Paper Theme'}]
          </button>
        </footer>
      </main>
    </div>
  );
}
