import React from 'react';
import { X, Check } from 'lucide-react';
import './Solution.css';

const Solution = () => {
  const badPractices = [
    "Build what you ask",
    "Generic solutions",
    "Focus on delivery",
    "One-time projects"
  ];

  const goodPractices = [
    "Understand what you actually need",
    "Fully custom systems",
    "Focus on business outcomes",
    "Long-term thinking"
  ];

  return (
    <section className="solution-section section" id="solution">
      <div className="solution__container">
        
        <div className="solution__header">
          <span className="section-tag">How We Work</span>
          <h2 className="section-title">We Don’t Just Build Software. We Build Business Systems.</h2>
          <p className="section-subtitle">
            Everything we create is designed around how your business actually works — not how templates are built.
          </p>
        </div>

        <div className="solution__grid">
          
          {/* Left Column: Typical Agencies */}
          <div className="comparison-col comparison-col--bad">
            <h3 className="comparison-title comparison-title--bad">
              Typical Agencies
            </h3>
            <ul className="comparison-list">
              {badPractices.map((practice, index) => (
                <li key={index} className="comparison-item comparison-item--bad">
                  <X className="comparison-icon icon-cross" size={24} strokeWidth={2.5} />
                  <span>{practice}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Techies */}
          <div className="comparison-col comparison-col--good">
            <h3 className="comparison-title comparison-title--good">
              Techies Technologies
            </h3>
            <ul className="comparison-list">
              {goodPractices.map((practice, index) => (
                <li key={index} className="comparison-item comparison-item--good">
                  <Check className="comparison-icon icon-check" size={24} strokeWidth={3} />
                  <span>{practice}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Solution;
