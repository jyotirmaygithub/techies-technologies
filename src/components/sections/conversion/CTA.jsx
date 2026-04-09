import './CTA.css';
import siteData from '../../../data/siteData.json';

const CTA = ({ onOpenPopup }) => {
  const { cta } = siteData;

  return (
    <section className="cta" id="contact">
      <div className="cta__container">
        <div className="cta__glow" />
        <div className="cta__content">
          <h2 className="cta__title">{cta.title}</h2>
          <p className="cta__subtitle">{cta.subtitle}</p>
          <div className="cta__actions">
            <button onClick={onOpenPopup} className="cta__btn cta__btn--primary" id="cta-primary">
              <span>{cta.buttons.primary}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button onClick={onOpenPopup} className="cta__btn cta__btn--secondary" id="cta-secondary">
              {cta.buttons.secondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
