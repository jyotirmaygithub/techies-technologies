import React, { useState } from 'react';
import { SendHorizontal } from 'lucide-react';
import './Contact.css';
import siteData from '../../../data/siteData.json';

const Contact = () => {
  const { contact } = siteData;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for reaching out!');
    }, 1000);
  };

  return (
    <section className="contact-section" id="inpage-contact">
      <div className="contact__container">
        
        <div className="contact__content">
          <div className="contact__header">
            <span className="section-tag">{contact.sectionTag}</span>
            <h2 className="section-title">{contact.title}</h2>
            <p className="section-subtitle">
              {contact.subtitle}
            </p>
          </div>
        </div>

        <div className="contact__form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-row">
              <div className="contact-input-group">
                <label htmlFor="name">{contact.form.nameLabel}</label>
                <input type="text" id="name" className="contact-input" placeholder={contact.form.namePlaceholder} required />
              </div>
              <div className="contact-input-group">
                <label htmlFor="email">{contact.form.emailLabel}</label>
                <input type="email" id="email" className="contact-input" placeholder={contact.form.emailPlaceholder} required />
              </div>
            </div>

            <div className="contact-input-group">
              <label htmlFor="details">{contact.form.projectLabel}</label>
              <textarea 
                id="details" 
                className="contact-input" 
                rows="4" 
                placeholder={contact.form.projectPlaceholder}
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-btn" disabled={isSubmitting}>
              <span>{isSubmitting ? contact.form.submittingText : contact.form.submitBtn}</span>
              {!isSubmitting && <SendHorizontal size={20} />}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
