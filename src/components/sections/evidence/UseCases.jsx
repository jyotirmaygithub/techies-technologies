import React from 'react';
import { ArrowRight } from 'lucide-react';
import './UseCases.css';
import siteData from '../../../data/siteData.json';

import crmImg from '../../../assets/crm.jpg';
import dashboardImg from '../../../assets/dashboard.jpg';
import automationImg from '../../../assets/automation.jpg';
import saas from '../../../assets/saas.jpg';

const UseCases = () => {
  const { useCases } = siteData;

  // Re-map images to JSON data (keeping images local as requested)
  const images = [crmImg, dashboardImg, automationImg, saas];
  const useCaseItems = useCases.items.map((item, index) => ({
    ...item,
    image: images[index]
  }));

  return (
    <section className="use-cases-section section" id="use-cases">
      <div className="use-cases__container">

        <div className="use-cases__header">
          <span className="section-tag">{useCases.sectionTag}</span>
          <h2 className="section-title">{useCases.title}</h2>
        </div>

        <div className="use-cases__grid">
          {useCaseItems.map((useCase, index) => (
            <div key={index} className="use-case-card">
              <div className="use-case-card__image-container">
                {useCase.image ? (
                  <img src={useCase.image} alt={useCase.title} />
                ) : (
                  <span>[ Add {useCase.title} Image ]</span>
                )}
              </div>
              <div className="use-case-card__content">
                <h3 className="use-case-card__title">{useCase.title}</h3>
                <ArrowRight size={20} color="var(--text-secondary)" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UseCases;
