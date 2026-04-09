import React, { useEffect, useRef } from 'react';
import './Stats.css';
import siteData from '../../../data/siteData.json';

const Stats = () => {
  const { stats } = siteData;
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
          <span className="section-tag">{stats.sectionTag}</span>
          <h2 className="section-title">{stats.title}</h2>
        </div>

        <div className="stats__grid">
          {stats.data.map((stat, index) => (
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
