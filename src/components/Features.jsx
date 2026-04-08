import React, { useEffect, useRef } from 'react';
import './Features.css';

const Features = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('features--visible');
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
    <section className="features section" id="features" ref={sectionRef}>
      <div className="features__container">
        <div className="features__header">
          <span className="section-tag">Value Proposition</span>
          <h2 className="section-title">Built for long-term growth.</h2>
          <p className="section-subtitle">
            We help organizations navigate complexity, improve efficiency, and turn technology into a competitive advantage.
          </p>
        </div>

        <div className="features__grid">
          {/* Main Problem/Solution Bento Card */}
          <div className="feature-card feature-card--large">
            <div className="feature-card__content">
              <span className="feature-card__tag">The Problem</span>
              <h3 className="feature-card__title">Fragmented IT infrastructure.</h3>
              <p className="feature-card__text">
                Modern businesses face complex technology environments with growing security risks and compliance demands. Fragile systems often limit growth rather than supporting it.
              </p>
              <div className="feature-card__divider" />
              <span className="feature-card__tag feature-card__tag--success">Our Solution</span>
              <p className="feature-card__text">
                We build systems that solve business problems. Our expertise spans managed services, data intelligence, and product development, ensuring tech works as a foundation for growth.
              </p>
            </div>
            {/* Abstract visual decoration */}
            <div className="feature-card__visual">
               <div className="visual-grid" />
               <div className="visual-node visual-node--1" />
               <div className="visual-node visual-node--2" />
               <div className="visual-line" />
            </div>
          </div>

          {/* About Card */}
          <div className="feature-card">
            <span className="feature-card__tag">About Techies</span>
            <h3 className="feature-card__title">Your technology partner.</h3>
            <p className="feature-card__text">
              We work closely with our clients to navigate complexity. Our approach combines strategic thinking, design, and engineering to create systems aligned with real business goals.
            </p>
          </div>

          {/* Why Us Card */}
          <div className="feature-card">
            <span className="feature-card__tag">Why Choose Us</span>
            <h3 className="feature-card__title">Scale with confidence.</h3>
            <p className="feature-card__text">
              From optimizing existing infrastructure to developing new digital products, we ensure every solution is secure, scalable, and built for performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
