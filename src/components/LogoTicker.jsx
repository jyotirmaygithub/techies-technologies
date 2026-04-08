import './LogoTicker.css';

const LogoTicker = () => {
  const industries = [
    'Healthcare',
    'Travel',
    'Logistics',
    'Media',
    'Marketplace',
    'Real Estate',
    'Wellness & Sport',
    'AI / IoT',
    'Terminal & POS',
    'Finance'
  ];

  return (
    <section className="ticker" id="industries">
      <p className="ticker__label">Industries We Work With</p>
      <div className="ticker__wrapper">
        <div className="ticker__track">
          {[...industries, ...industries, ...industries].map((industry, i) => (
            <div key={i} className="ticker__item">
              <span style={{ color: 'var(--accent-blue)', margin: '0 8px' }}>•</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 500, letterSpacing: '0.02em', color: 'var(--text-primary)' }}>{industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
