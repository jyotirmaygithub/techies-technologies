import React from 'react';
import './Hero.css';

const Hero = ({ onOpenPopup }) => {
  return (
    <section className="hero bg-grid" id="hero">
      {/* Subtle overlay gradient */}
      <div className="hero__overlay" />

      <div className="hero__container">
        <div className="hero__badge" id="hero-badge">
          <span className="hero__badge-dot" />
          <span>Techies Technologies</span>
        </div>

        <h1 className="hero__title" id="hero-title">
          <span className="hero__title-line">Design. Develop. Scale.</span>
        </h1>

        <p className="hero__subtitle" id="hero-subtitle">
          We design and develop systems that streamline operations, reduce manual work, and help businesses scale.
        </p>

        <div className="hero__actions" id="hero-actions">
          <button onClick={onOpenPopup} className="hero__btn hero__btn--primary">
            <span>Book a Free Call</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <a href="#services" className="hero__btn hero__btn--secondary">
            <span>Our Services</span>
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
