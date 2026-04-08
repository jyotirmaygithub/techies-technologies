import React from 'react';
import { Smartphone, Layers, Server, Palette, CheckSquare, BarChart2, Cpu, ClipboardList } from 'lucide-react';
import './Outstaffing.css';

const outstaffingServices = [
  { title: 'Native Development', icon: <Smartphone size={24} />, desc: 'Swift, Kotlin, and Java experts for high-performance mobile apps.' },
  { title: 'Cross-platform', icon: <Layers size={24} />, desc: 'Flutter and React Native specialists for rapid, multi-platform launches.' },
  { title: 'Back-End development', icon: <Server size={24} />, desc: 'Node.js, Go, and Python engineers for robust and scalable systems.' },
  { title: 'Design (UI/UX)', icon: <Palette size={24} />, desc: 'Creative designers focused on user-centric and beautiful interfaces.' },
  { title: 'QA & Testing', icon: <CheckSquare size={24} />, desc: 'Thorough manual and automated testing for bug-free products.' },
  { title: 'Business analysis', icon: <BarChart2 size={24} />, desc: 'Bridging the gap between business goals and technical requirements.' },
  { title: 'DevOps & SRE', icon: <Cpu size={24} />, desc: 'CI/CD, Kubernetes, and cloud infrastructure management.' },
  { title: 'Project management', icon: <ClipboardList size={24} />, desc: 'Ensuring timelines, budgets, and quality standards are met.' },
];

const Outstaffing = () => {
  return (
    <section className="outstaffing section" id="outstaffing">
      <div className="outstaffing__container">
        <div className="section-header">
          <span className="section-tag">Outstaffing resources</span>
          <h2 className="section-title">Outstaffing services<br />we offer.</h2>
          <p className="section-subtitle">
            Expand your internal team with our dedicated specialists. We provide the talent you need to scale your engineering capacity in days, not months.
          </p>
        </div>

        <div className="outstaffing__grid">
          {outstaffingServices.map((service, idx) => (
            <div key={idx} className="outstaffing-card" id={`outstaffing-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="outstaffing-card__icon">
                {service.icon}
              </div>
              <h3 className="outstaffing-card__title">{service.title}</h3>
              <p className="outstaffing-card__description">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="outstaffing__comparison">
          <div className="comparison-content">
            <h3 className="comparison-title">Outstaffing ≠ Outsourcing</h3>
            <p className="comparison-text">
              Unlike outsourcing, our outstaffing model puts you in direct control. You manage the team while we handle recruitment, HR, payroll, and infrastructure. It's your team, just supported by us.
            </p>
            <div className="comparison-stats">
              <div className="comparison-stat">
                <span className="stat-value">24-48h</span>
                <span className="stat-label">Hire Speed</span>
              </div>
              <div className="comparison-stat">
                <span className="stat-value">Zero</span>
                <span className="stat-label">Recruitment Fees</span>
              </div>
            </div>
          </div>
          <div className="comparison-visual">
             {/* Placeholder for visual from Screenshot #2 */}
             <div className="comparison-box">
                <span className="comparison-label">Your Internal Management</span>
                <div className="comparison-arrow">↔</div>
                <span className="comparison-label">Our Dedicated Resources</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outstaffing;
