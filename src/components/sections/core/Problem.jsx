import React from 'react';
import { AlertCircle, XCircle } from 'lucide-react';
import './Problem.css';
import siteData from '../../../data/siteData.json';

const Problem = () => {
  const { problem } = siteData;

  return (
    <section className="problem-section section" id="problem">
      <div className="problem__container">

        <div className="problem__header">
          <span className="section-tag">{problem.sectionTag}</span>
          <h2 className="section-title">{problem.title}</h2>
          <p className="section-subtitle">
            {problem.subtitle}
          </p>
        </div>

        <div className="problem__grid">

          {/* Left Column: Business Problems */}
          <div className="problem-card--client">
            <h3 className="problem-card-title">{problem.businessProblems.title}</h3>
            <ul className="problem-list">
              {problem.businessProblems.items.map((item, index) => (
                <li key={index} className="problem-list-item">
                  <AlertCircle className="icon-warning" size={24} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Agency Failures */}
          <div className="problem-card--agency">
            <h3 className="problem-card-title">{problem.agencyFailures.title}</h3>
            <ul className="problem-list">
              {problem.agencyFailures.items.map((item, index) => (
                <li key={index} className="problem-list-item agency-issue">
                  <XCircle className="icon-bad" size={24} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Problem;
