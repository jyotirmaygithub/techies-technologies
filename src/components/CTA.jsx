import './CTA.css';

const CTA = ({ onOpenPopup }) => {
  return (
    <section className="cta" id="contact">
      <div className="cta__container">
        <div className="cta__glow" />
        <div className="cta__content">
          <h2 className="cta__title">Stop Managing Work Manually. Start Running Systems.</h2>
          <p className="cta__subtitle">
            Scale your technology with confidence. Partner with Techies Technologies to launch innovative products and build reliable digital infrastructure.
          </p>
          <div className="cta__actions">
            <button onClick={onOpenPopup} className="cta__btn cta__btn--primary" id="cta-primary">
              <span>Book Your Free Strategy Call</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button onClick={onOpenPopup} className="cta__btn cta__btn--secondary" id="cta-secondary">
              contact@techies.co
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
