import React from 'react';

export default function PageBanner({ title, subtitle, badge }) {
  return (
    <div className="page-banner">
      <div className="container">
        {badge && (
          <span style={{
            display: 'inline-block',
            backgroundColor: 'rgba(217, 154, 38, 0.2)',
            color: 'var(--accent-gold)',
            border: '1px solid rgba(217, 154, 38, 0.4)',
            padding: '6px 16px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '16px'
          }}>
            {badge}
          </span>
        )}
        <h1 className="banner-title">{title}</h1>
        {subtitle && <p className="banner-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}
