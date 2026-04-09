import React from 'react';
import { AlertCircle, XCircle } from 'lucide-react';
import './Problem.css';

const Problem = () => {
  const businessProblems = [
    "Too many manual processes",
    "Teams using disconnected tools",
    "Time wasted on repetitive work",
    "No centralized system"
  ];

  const agencyFailures = [
    "Focus only on building, not understanding",
    "Deliver generic solutions",
    "No business thinking behind development",
    "Once delivered → no ownership"
  ];

  return (
    <section className="problem-section section" id="problem">
      <div className="problem__container">

        <div className="problem__header">
          <span className="section-tag">The Reality</span>
          <h2 className="section-title">Your Business Is Growing - But Your Systems Aren’t.</h2>
          <p className="section-subtitle">
            And most development agencies won’t fix that.
          </p>
        </div>

        <div className="problem__grid">

          {/* Left Column: Business Problems */}
          <div className="problem-card--client">
            <h3 className="problem-card-title">Business Issues You Face</h3>
            <ul className="problem-list">
              {businessProblems.map((problem, index) => (
                <li key={index} className="problem-list-item">
                  <AlertCircle className="icon-warning" size={24} />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Agency Failures */}
          <div className="problem-card--agency">
            <h3 className="problem-card-title">Where Most Agencies Go Wrong</h3>
            <ul className="problem-list">
              {agencyFailures.map((failure, index) => (
                <li key={index} className="problem-list-item agency-issue">
                  <XCircle className="icon-bad" size={24} />
                  <span>{failure}</span>
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
