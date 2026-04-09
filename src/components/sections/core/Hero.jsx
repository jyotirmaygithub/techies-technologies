import React from 'react';
import './Hero.css';
import siteData from '../../../data/siteData.json';

const Hero = ({ onOpenPopup }) => {
  const { hero } = siteData;

  return (
    <section className="hero bg-grid" id="hero">
      {/* Subtle overlay gradient */}
      <div className="hero__overlay" />

      <div className="hero__container">
        <div className="hero__badge" id="hero-badge">
          <span className="hero__badge-dot" />
          <span>{hero.badge}</span>
        </div>

        <h1 className="hero__title" id="hero-title">
          <span className="hero__title-line">{hero.title}</span>
        </h1>

        <p className="hero__subtitle" id="hero-subtitle">
          {hero.subtitle}
        </p>

        <div className="hero__actions" id="hero-actions">
          <button onClick={onOpenPopup} className="hero__btn hero__btn--primary">
            <span>{hero.buttons.primary}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <a href="#services" className="hero__btn hero__btn--secondary">
            <span>{hero.buttons.secondary}</span>
          </a>
        </div>
      </div>

      {/* Decorative architectural grid lines */}
      <div className="hero__guide-lines">
        <div className="guide-line" />
        <div className="guide-line" />
        <div className="guide-line" />
      </div>
    </section>
  );
};

export default Hero;
