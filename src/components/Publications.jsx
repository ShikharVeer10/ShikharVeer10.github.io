import React, { useEffect, useRef, useState } from 'react';
import { FileText, ArrowUpRight, BookOpen, Award } from 'lucide-react';

const publications = [
  {
    id: 'sentiment-analysis',
    title: 'Real-Time Twitter Sentiment Analysis with a Hybrid Transformer Framework',
    venue: 'INDIACom-2026',
    publisher: 'IEEE Delhi Section',
    status: 'Published',
    year: '2026',
    tag: 'NLP · Transformers · Social Media Intelligence',
    abstract: 'Engineered a live social media intelligence pipeline that streams Twitter data in real-time and runs it through a hybrid Transformer-based NLP stack — combining fine-tuned classification, keyword extraction, and topic modelling into a single cohesive analytics system. The framework delivers interactive sentiment dashboards with trend visualisation, enabling researchers and analysts to surface signal from noise at the speed the platform moves.',
    highlights: [
      'Real-time tweet ingestion with streaming preprocessing and noise filtering',
      'Hybrid Transformer classification pipeline for multi-class sentiment scoring',
      'Keyword extraction and topic modelling for contextual trend detection',
      'Interactive visual analytics dashboard for live social media intelligence',
    ],
    pdf: '/sentiment-analysis.pdf',
    pdfLabel: 'Read Paper',
  },
];

function PubCard({ pub }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`pub-card ${visible ? 'pub-visible' : ''}`}
      ref={cardRef}
    >
      {/* Top meta row */}
      <div className="pub-meta-row">
        <span className="pub-tag">{pub.tag}</span>
        <div className="pub-badges">
          <span className="pub-badge pub-badge-venue">
            <BookOpen size={10} />
            {pub.venue}
          </span>
          <span className="pub-badge pub-badge-publisher">
            <Award size={10} />
            {pub.publisher}
          </span>
          <span className="pub-badge pub-badge-status">{pub.status} · {pub.year}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="pub-title">{pub.title}</h3>

      {/* Divider */}
      <div className="pub-divider" />

      {/* Abstract */}
      <p className="pub-abstract">{pub.abstract}</p>

      {/* Highlights */}
      <ul className="pub-highlights">
        {pub.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      {/* Actions */}
      <div className="pub-actions">
        <a
          href={pub.pdf}
          download
          className="pub-action-primary"
          aria-label={`Download ${pub.title}`}
        >
          <FileText size={14} />
          <span>{pub.pdfLabel}</span>
          <ArrowUpRight size={12} />
        </a>
      </div>
    </div>
  );
}

export default function Publications() {
  return (
    <section className="editorial-section" id="publications">

      {/* Left label */}
      <div className="section-left">
        <h2>Research</h2>
        <span className="section-meta">Publications // 04</span>
      </div>

      {/* Right panel */}
      <div className="section-right pub-list">

        {/* Section label row */}
        <div className="jg-label-row" style={{ marginBottom: '2rem' }}>
          <span className="jg-label">Published Work</span>
          <span className="jg-label-meta">Peer-reviewed & Conference Papers</span>
          <div className="jg-label-line" />
        </div>

        {publications.map(pub => (
          <PubCard key={pub.id} pub={pub} />
        ))}

      </div>
    </section>
  );
}
