import React from 'react';
import { ArrowRight } from 'lucide-react';
import './UseCases.css';

import crmImg from '../assets/crm.jpg';
import dashboardImg from '../assets/dashboard.jpg';
import automationImg from '../assets/automation.jpg';
import saas from '../assets/saas1.jpg';

const useCasesData = [
  {
    title: "Custom CRM",
    image: crmImg
  },
  {
    title: "Internal dashboards",
    image: dashboardImg
  },
  {
    title: "Automation systems",
    image: automationImg
  },
  {
    title: "SaaS platforms",
    image: saas
  }
];

const UseCases = () => {
  return (
    <section className="use-cases-section section" id="use-cases">
      <div className="use-cases__container">

        <div className="use-cases__header">
          <span className="section-tag">Use Cases</span>
          <h2 className="section-title">What We Can Build For You</h2>
        </div>

        <div className="use-cases__grid">
          {useCasesData.map((useCase, index) => (
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
