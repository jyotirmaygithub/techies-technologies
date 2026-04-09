import React, { useEffect, useRef } from 'react';
import './Stats.css';

const statsData = [
  {
    number: "10",
    title: "Years in the market.",
    description: "A decade of building brands, launching products, and shipping clean, conversion-focused design."
  },
  {
    number: "120+",
    title: "Happy clients.",
    description: "Long-term partnerships, repeat business, and glowing testimonials fuel our commitment to excellence."
  },
  {
    number: "$10M+",
    title: "Raised for clients.",
    description: "Our work helped founders secure funding — from pre-seed to Series A and beyond."
  },
  {
    number: "190+",
    title: "Completed projects.",
    description: "Funding won through work delivered on time, on brand, and with intent."
  }
];

const Stats = () => {
  const sectionRef = useRef(null);

  // Optional: A simple fade-up animation via intersection observer like other components
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('stats--visible');
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
    <section className="stats-section section" id="stats" ref={sectionRef}>
      <div className="stats__container">
        
        <div className="stats__header">
          <span className="section-tag">By The Numbers</span>
          <h2 className="section-title">A Proven Track Record.</h2>
        </div>

        <div className="stats__grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-card__number">{stat.number}</div>
              <h3 className="stat-card__title">{stat.title}</h3>
              <p className="stat-card__description">{stat.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;
