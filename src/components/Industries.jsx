import React from 'react';
import { Heart, Landmark, ShoppingBag, Truck } from 'lucide-react';
import './Industries.css';

const industries = [
  {
    title: 'Healthcare',
    description: 'HIPAA-compliant software, patient management portals, and medical data analytics.',
    icon: <Heart size={24} />,
    tag: 'Compliance'
  },
  {
    title: 'FinTech',
    description: 'Secure payment gateways, blockchain integration, and robust financial reporting.',
    icon: <Landmark size={24} />,
    tag: 'Security'
  },
  {
    title: 'E-commerce',
    description: 'Scalable marketplaces, inventory management, and personalized shopping experiences.',
    icon: <ShoppingBag size={24} />,
    tag: 'Scalability'
  },
  {
    title: 'Logistics',
    description: 'Fleet tracking, supply chain optimization, and real-time delivery management.',
    icon: <Truck size={24} />,
    tag: 'Efficiency'
  }
];

const Industries = () => {
  return (
    <section className="industries section" id="industries">
      <div className="industries__container">
        <div className="section-header">
          <span className="section-tag">Industries We Serve</span>
          <h2 className="section-title">Deep expertise across<br />complex sectors.</h2>
          <p className="section-subtitle">
            We don't just write code; we understand your business environment. Our teams bring domain-specific knowledge to every partnership.
          </p>
        </div>

        <div className="industries__grid">
          {industries.map((item, idx) => (
            <div key={idx} className="industry-card" id={`industry-${item.title.toLowerCase()}`}>
              <div className="industry-card__header">
                <div className="industry-card__icon">
                  {item.icon}
                </div>
                <span className="industry-card__tag">{item.tag}</span>
              </div>
              <h3 className="industry-card__title">{item.title}</h3>
              <p className="industry-card__description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
