import React from 'react';
import './Partners.css';
import siteData from '../../../data/siteData.json';

const Partners = () => {
  const { partners } = siteData;

  return (
    <section className="partners-section" id="partners">
      <div className="partners__container">
        <div className="partners__header">
          <span className="section-tag">{partners.sectionTag}</span>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>{partners.title}</h2>
        </div>
        <div className="partners__logogrid">
          {partners.names.map((logo, index) => (
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
