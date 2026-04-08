import React from 'react';
import './Process.css';

const steps = [
  {
    number: '1',
    title: 'Schedule a call.',
    description: 'Share your vision with us. We conduct a preliminary check to understand your technical requirements and business goals.',
    details: 'Zero upfront cost for the initial consultation.'
  },
  {
    number: '2',
    title: 'Team alignment.',
    description: 'We allocate the right specialized resources. Whether it is Native Dev, DevOps, or Design, we assemble a team tailored to your project.',
    details: 'Typically happens within 24-48 hours.'
  },
  {
    number: '3',
    title: 'Launch and iterate.',
    description: 'We build your MVP with speed and quality. Post-launch, we provide continuous support to help you iterate based on real market feedback.',
    details: 'Dedicated support for scaling and maintenance.'
  }
];

const Process = () => {
  return (
    <section className="process section" id="process">
      <div className="process__container">
        <div className="section-header">
          <span className="section-tag">Our Workflow</span>
          <h2 className="section-title">MVP development is<br />as simple as 1-2-3.</h2>
          <p className="section-subtitle">
            We've streamlined our delivery process to ensure you can go from concept to launch in the shortest time possible without compromising quality.
          </p>
        </div>

        <div className="process__steps">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step" id={`process-step-${step.number}`}>
              <div className="process-step__number">{step.number}</div>
              <div className="process-step__content">
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__text">{step.description}</p>
                <div className="process-step__badge">{step.details}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
