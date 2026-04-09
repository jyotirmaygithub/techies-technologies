import React from 'react';
import { X, Check } from 'lucide-react';
import './Solution.css';
import siteData from '../../../data/siteData.json';

const Solution = () => {
  const { solution } = siteData;

  return (
    <section className="solution-section section" id="solution">
      <div className="solution__container">
        
        <div className="solution__header">
          <span className="section-tag">{solution.sectionTag}</span>
          <h2 className="section-title">{solution.title}</h2>
          <p className="section-subtitle">
            {solution.subtitle}
          </p>
        </div>

        <div className="solution__grid">
          
          {/* Left Column: Typical Agencies */}
          <div className="comparison-col comparison-col--bad">
            <h3 className="comparison-title comparison-title--bad">
              {solution.comparison.bad.title}
            </h3>
            <ul className="comparison-list">
              {solution.comparison.bad.items.map((practice, index) => (
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
              {solution.comparison.good.title}
            </h3>
            <ul className="comparison-list">
              {solution.comparison.good.items.map((practice, index) => (
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
