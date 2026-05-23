import React, { useEffect, useState, useRef } from 'react';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const LEVEL_COLORS = [
  'var(--gh-0)',
  'var(--gh-1)',
  'var(--gh-2)',
  'var(--gh-3)',
  'var(--gh-4)',
];

// Group flat contributions array into columns of 7 (weeks), starting on Sunday
function buildWeeks(contributions) {
  if (!contributions.length) return [];

  // Pad the front so the first week starts on Sunday (day 0)
  const firstDate = new Date(contributions[0].date);
  const startDow = firstDate.getDay(); // 0=Sun … 6=Sat
  const padded = [
    ...Array(startDow).fill(null),
    ...contributions,
  ];

  const weeks = [];
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7));
  }
  return weeks;
}

// Derive month labels: first week index where a new month appears
function buildMonthLabels(weeks) {
  const labels = [];
  let lastKey = null;
  weeks.forEach((week, wi) => {
    const firstReal = week.find(Boolean);
    if (!firstReal) return;
    const d = new Date(firstReal.date);
    const key = `${d.getFullYear()}-${d.getMonth()}`;
    if (key !== lastKey) {
      labels.push({ weekIndex: wi, label: MONTHS[d.getMonth()], year: d.getFullYear() });
      lastKey = key;
    }
  });
  return labels;
}

export default function GitHubActivity({ username = 'ShikharVeer10' }) {
  const [contributions, setContributions] = useState([]);
  const [totals, setTotals] = useState({});
  const [tooltip, setTooltip] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const years = [];
    // Collect 2025 through current year
    for (let y = 2025; y <= currentYear; y++) years.push(y);

    Promise.all(
      years.map(y =>
        fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${y}`)
          .then(r => r.json())
      )
    )
      .then(results => {
        // Merge all contributions in chronological order, deduplicate by date
        const seen = new Set();
        const merged = [];
        const totalMap = {};

        results.forEach((res, i) => {
          const year = years[i];
          totalMap[year] = res.total?.[year] ?? 0;
          (res.contributions || []).forEach(d => {
            if (!seen.has(d.date)) {
              seen.add(d.date);
              merged.push(d);
            }
          });
        });

        // Sort chronologically
        merged.sort((a, b) => a.date.localeCompare(b.date));
        setContributions(merged);
        setTotals(totalMap);
        setTimeout(() => setLoaded(true), 100);
      })
      .catch(() => setError(true));
  }, [username]);

  if (error) {
    return (
      <section className="editorial-section" id="activity">
        <div className="section-left"><h2>Activity</h2><span className="section-meta">Code // 03</span></div>
        <div className="section-right gh-loading"><span>Could not load contributions.</span></div>
      </section>
    );
  }

  if (!contributions.length) {
    return (
      <section className="editorial-section" id="activity">
        <div className="section-left"><h2>Activity</h2><span className="section-meta">Code // 03</span></div>
        <div className="section-right gh-loading"><span>Loading contributions…</span></div>
      </section>
    );
  }

  const weeks = buildWeeks(contributions);
  const monthLabels = buildMonthLabels(weeks);

  // Stats
  const totalAll = Object.values(totals).reduce((s, v) => s + v, 0);
  const activeDays = contributions.filter(d => d.count > 0).length;
  const maxDay = contributions.reduce(
    (acc, d) => (d.count > acc.count ? d : acc),
    { count: 0, date: '' }
  );

  // Year range label e.g. "2025 – 2026"
  const years = Object.keys(totals).map(Number).sort();
  const yearRange = years.length > 1
    ? `${years[0]} – ${years[years.length - 1]}`
    : `${years[0]}`;

  const CELL = 11;
  const GAP  = 3;

  return (
    <section className="editorial-section" id="activity">

      {/* Left label */}
      <div className="section-left">
        <h2>Activity</h2>
        <span className="section-meta">Code // 03</span>
      </div>

      {/* Right panel */}
      <div className="section-right">

        {/* Header row */}
        <div className="gh-header">
          <div className="jg-label-row" style={{ marginBottom: 0 }}>
            <span className="jg-label">GitHub Contributions</span>
            <span className="jg-label-meta">{username} · {yearRange}</span>
            <div className="jg-label-line" />
          </div>
        </div>

        {/* Stats row */}
        <div className="gh-stats-row">
          <div className="gh-stat">
            <span className="gh-stat-val">{totalAll}</span>
            <span className="gh-stat-lbl">total contributions</span>
          </div>
          <div className="gh-stat">
            <span className="gh-stat-val">{activeDays}</span>
            <span className="gh-stat-lbl">active days</span>
          </div>
          <div className="gh-stat">
            <span className="gh-stat-val">{maxDay.count}</span>
            <span className="gh-stat-lbl">peak in a day</span>
          </div>
          {/* Per-year breakdown */}
          {years.map(y => (
            <div className="gh-stat" key={y}>
              <span className="gh-stat-val">{totals[y]}</span>
              <span className="gh-stat-lbl">in {y}</span>
            </div>
          ))}
        </div>

        {/* Heatmap grid */}
        <div className={`gh-grid-wrapper ${loaded ? 'gh-grid-loaded' : ''}`}>

          {/* Month labels row */}
          <div className="gh-month-row">
            {monthLabels.map(({ weekIndex, label, year }, i) => {
              // Show year badge when the year changes
              const prevYear = i > 0 ? monthLabels[i - 1].year : null;
              const showYear = year !== prevYear;
              return (
                <span
                  key={`${year}-${weekIndex}`}
                  className={`gh-month-label ${showYear ? 'gh-year-marker' : ''}`}
                  style={{ left: `${weekIndex * (CELL + GAP)}px` }}
                >
                  {showYear ? `${year}` : label}
                </span>
              );
            })}
          </div>

          {/* Week columns */}
          <div className="gh-grid">
            {weeks.map((week, wi) => (
              <div className="gh-week" key={wi}>
                {week.map((day, di) =>
                  day ? (
                    <div
                      key={di}
                      className="gh-cell"
                      style={{ background: LEVEL_COLORS[day.level] }}
                      onMouseEnter={(e) => {
                        const rect = e.target.getBoundingClientRect();
                        setTooltip({
                          text: day.count === 0
                            ? `No contributions on ${day.date}`
                            : `${day.count} contribution${day.count !== 1 ? 's' : ''} on ${day.date}`,
                          x: rect.left + rect.width / 2,
                          y: rect.top - 8,
                        });
                      }}
                      onMouseLeave={() => setTooltip(null)}
                    />
                  ) : (
                    // Padding cell (invisible)
                    <div key={di} className="gh-cell gh-cell-empty" />
                  )
                )}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="gh-legend">
            <span className="gh-legend-lbl">Less</span>
            {LEVEL_COLORS.map((c, i) => (
              <div key={i} className="gh-cell gh-legend-cell" style={{ background: c }} />
            ))}
            <span className="gh-legend-lbl">More</span>
          </div>
        </div>

        {/* Tooltip */}
        {tooltip && (
          <div
            className="gh-tooltip"
            style={{ left: tooltip.x, top: tooltip.y }}
          >
            {tooltip.text}
          </div>
        )}

      </div>
    </section>
  );
}
