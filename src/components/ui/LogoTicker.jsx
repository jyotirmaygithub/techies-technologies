import './LogoTicker.css';
import siteData from '../../data/siteData.json';

const LogoTicker = () => {
  const { logoTicker } = siteData;

  return (
    <section className="ticker" id="industries">
      <p className="ticker__label">{logoTicker.label}</p>
      <div className="ticker__wrapper">
        <div className="ticker__track">
          {[...logoTicker.industries, ...logoTicker.industries, ...logoTicker.industries].map((industry, i) => (
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
