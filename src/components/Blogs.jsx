import React from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { blogs } from '../data';

export default function Blogs({ onSelectBlog }) {
  return (
    <section className="editorial-section" id="blogs">
      {/* Left Column */}
      <div className="section-left">
        <h2>Blogs</h2>
        <span className="section-meta">Writing // 04</span>
        <p className="blogs-lead-note">
          Deep-dives into systems engineering, document AI architectures, and lessons learnt from production failures.
        </p>
      </div>

      {/* Right Column: List of Blog Entries */}
      <div className="section-right">
        <div className="blogs-list">
          {blogs.map((post) => (
            <div key={post.slug} className="blog-item-block">
              <a 
                href={`/blogs/${post.slug}`}
                className="blog-it-row"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectBlog(post.slug);
                }}
              >
                <span className="blog-it-title wrap">
                  {post.title}
                </span>
                <span className="blog-leader" aria-hidden="true" />
                <span className="blog-it-date">
                  {post.date}
                </span>
              </a>

              <p className="blog-it-desc">
                {post.description}
              </p>

              <div className="blog-meta-tags">
                <span className="blog-read-pill">
                  <BookOpen size={11} />
                  <span>{post.readingTime}</span>
                </span>
                {post.tags.map((t) => (
                  <span key={t} className="blog-tag-pill">#{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
