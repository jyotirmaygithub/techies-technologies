import React, { useState } from 'react';
import { SendHorizontal } from 'lucide-react';
import './Contact.css';

const Contact = () => {
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
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Start your next project.</h2>
            <p className="section-subtitle">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>
        </div>

        <div className="contact__form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-row">
              <div className="contact-input-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" className="contact-input" placeholder="John Doe" required />
              </div>
              <div className="contact-input-group">
                <label htmlFor="email">Work Email</label>
                <input type="email" id="email" className="contact-input" placeholder="john@company.com" required />
              </div>
            </div>

            <div className="contact-input-group">
              <label htmlFor="details">Project Details</label>
              <textarea 
                id="details" 
                className="contact-input" 
                rows="4" 
                placeholder="Tell us a bit about what you're trying to build..."
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-btn" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              {!isSubmitting && <SendHorizontal size={20} />}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
