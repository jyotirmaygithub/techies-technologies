import React from 'react';
import './Partners.css';

const Partners = () => {
  // Placeholder data for logos. In a real scenario, these could be img tags with SVG sources.
  const partnerLogos = [
    "TechCorp",
    "GlobalBank",
    "RetailPro",
    "HealthSync",
    "LogisTech",
    "MediaPlus"
  ];

  return (
    <section className="partners-section" id="partners">
      <div className="partners__container">
        <div className="partners__header">
          <span className="section-tag">Trusted By</span>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>Companies that scale with us</h2>
        </div>
        <div className="partners__logogrid">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="partner-logo">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
