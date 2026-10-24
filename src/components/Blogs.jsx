import React from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { blogs } from '../data';

export default function Blogs({ onSelectBlog }) {
  return (
    <section className="editorial-section" id="blogs">
      {/* Left Column */}
      <div className="section-left">
        <h2>Blogs</h2>
        <span className="section-meta">Technical Writing // 03</span>
        <p className="blogs-lead-note">
          Deep-dives into systems engineering, document AI architectures, and lessons learnt from production failures.
        </p>
      </div>

      {/* Right Column: List of Blog Entries */}
      <div className="section-right">
        <div className="blogs-list">
          {blogs.map((post) => (
            <article 
              key={post.slug} 
              className="blog-row-item"
              onClick={() => onSelectBlog(post)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectBlog(post);
                }
              }}
            >
              {/* Top line with Title, dotted leader, and Date */}
              <div className="blog-row-header">
                <span className="blog-row-title">
                  {post.title}
                </span>
                <span className="blog-leader" aria-hidden="true" />
                <span className="blog-row-date">{post.date}</span>
                <ArrowUpRight size={16} className="blog-arrow-icon" />
              </div>

              {/* Subtitle / summary paragraph */}
              <p className="blog-row-desc">
                {post.description}
              </p>

              {/* Meta pills */}
              <div className="blog-meta-tags">
                <span className="blog-read-pill">
                  <BookOpen size={12} />
                  <span>{post.readingTime}</span>
                </span>
                {post.tags.map((t) => (
                  <span key={t} className="blog-tag-pill">#{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
