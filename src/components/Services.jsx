import React, { useEffect, useRef } from 'react';
import { Cloud, Code, Shield, BarChart, Lock, Users } from 'lucide-react';
import './Services.css';

const services = [
  {
    title: 'Managed cloud services',
    description: 'Scalable cloud infrastructure, management, and optimization for AWS, GCP, and Azure.',
    icon: <Cloud size={24} />,
    tag: 'Cloud'
  },
  {
    title: 'Managed software and apps',
    description: 'End-to-end application management, maintenance, and modernization services.',
    icon: <Code size={24} />,
    tag: 'Development'
  },
  {
    title: 'Infrastructure Security',
    description: 'Launch-ready security management and continuous infrastructure monitoring.',
    icon: <Shield size={24} />,
    tag: 'Infrastructure'
  },
  {
    title: 'Data & Analytics (BI)',
    description: 'Data analytics, Big Data processing, and Business Intelligence insights.',
    icon: <BarChart size={24} />,
    tag: 'Data'
  },
  {
    title: 'Managed Cybersecurity',
    description: 'Advanced threat protection, security auditing, and continuous protection systems.',
    icon: <Lock size={24} />,
    tag: 'Security'
  },
  {
    title: 'Consulting',
    description: 'Expert technical consulting and strategy for digital transformation.',
    icon: <Users size={24} />,
    tag: 'Strategy'
  }
];

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('services--visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services section section--alt" id="services" ref={sectionRef}>
      <div className="services__container">
        <div className="services__header">
          <span className="section-tag">Managed Services</span>
          <h2 className="section-title">Comprehensive technology solutions.</h2>
          <p className="section-subtitle">
            From optimizing infrastructure to developing new digital products, we ensure every solution is secure, scalable, and built for growth.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              id={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <div className="service-card__footer">
                <span className="service-card__link">Learn More</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
