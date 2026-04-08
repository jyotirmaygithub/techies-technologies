import { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Their questions were sharp, their ideas sharper. The result finally looks and feels like us.",
    author: 'Jordan Peterson',
    role: 'COO',
    company: 'Kuts',
    avatar: 'JP',
  },
  {
    quote: "The team understood our brand better than we did. They didn't just redesign the site — they helped reposition the company.",
    author: 'Amira D.',
    role: 'Marketing Lead',
    company: 'Lit',
    avatar: 'AD',
  },
  {
    quote: "We thought we needed an application. What we got was clarity, confidence, and a way to tell our story.",
    author: 'Michelle Davis',
    role: 'Creative Director',
    company: 'Colo',
    avatar: 'MD',
  }
];

const avatarColors = ['#0070f3', '#7928ca', '#f81ce5'];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, []);

  const handleSelect = (idx) => {
    stopAutoplay();
    setActive(idx);
    startAutoplay();
  };

  return (
    <section className="testimonials section--alt" id="testimonials">
      <div className="testimonials__container">
        <div className="section-header">
           <span className="section-tag">Partnerships</span>
           <h2 className="section-title">Success stories from<br />those who scale.</h2>
        </div>

        {/* Philosophy Block from Screenshot #1 */}
        <div className="philosophy">
          <div className="philosophy__content">
            <h3 className="philosophy__title">not just a studio.<br />we are team.</h3>
            <p className="philosophy__text">
              We partner with our fast and established brands to build risk-free, launch products, and scale digital successes.
            </p>
          </div>
        </div>

        <div className="testimonials__grid">
          <div className="testimonials__quote-wrap">
            <svg className="testimonials__quote-icon" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M10 25C10 20 13 15 18 13L17 10C10 12 5 18 5 25C5 30 8 33 12 33C15 33 18 30 18 27C18 24 15 22 13 22C11.5 22 10.5 23 10 25Z" fill="rgba(0,112,243,0.2)" />
              <path d="M27 25C27 20 30 15 35 13L34 10C27 12 22 18 22 25C22 30 25 33 29 33C32 33 35 30 35 27C35 24 32 22 30 22C28.5 22 27.5 23 27 25Z" fill="rgba(0,112,243,0.2)" />
            </svg>

            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`testimonials__slide ${idx === active ? 'testimonials__slide--active' : ''}`}
              >
                <blockquote className="testimonials__text">{t.quote}</blockquote>
                <div className="testimonials__author">
                  <div
                    className="testimonials__avatar"
                    style={{ background: avatarColors[idx % avatarColors.length] }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="testimonials__name">{t.author}</div>
                    <div className="testimonials__role">{t.role} at {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials__dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`testimonials__dot ${idx === active ? 'testimonials__dot--active' : ''}`}
                onClick={() => handleSelect(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                id={`testimonial-dot-${idx}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
