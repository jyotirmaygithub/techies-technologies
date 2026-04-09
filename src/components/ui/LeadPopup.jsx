import React, { useState, useEffect } from 'react';
import './LeadPopup.css';
import logoImg from '../../assets/logo.png';
import siteData from '../../data/siteData.json';

const LeadPopup = ({ onClose }) => {
  const { leadPopup } = siteData;
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    country: '',
    contactNumber: '',
    service: '',
    projectDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Lead Form Submitted:', formData);
    alert('Thank you! Our team will get back to you within 24 hours.');
    onClose();
  };

  return (
    <div className="lead-popup-overlay">
      <div className="lead-popup-container">
        <button className="lead-popup-close" onClick={onClose} aria-label="Close popup">×</button>

        {/* Left Panel: Brand & Social Proof */}
        <div className="lead-popup-left">
          <div className="lead-brand-header">
            <span className="lead-tag">{leadPopup.left.tag}</span>
            <h2 className="lead-title">{leadPopup.left.title}</h2>
          </div>

          <div className="lead-locations">
            {leadPopup.left.locations.map((loc, idx) => (
              <span key={idx} className="lead-location-badge">{loc.code} <strong>{loc.name}</strong></span>
            ))}
          </div>

          <div className="lead-testimonial">
            <p>"{leadPopup.left.testimonial.quote}"</p>
            <div className="lead-testimonial-author">
              <div className="lead-avatar">{leadPopup.left.testimonial.initials}</div>
              <div>
                <strong>{leadPopup.left.testimonial.author}</strong>
                <span>{leadPopup.left.testimonial.role}</span>
              </div>
            </div>
          </div>

          <div className="lead-clients">
            <p className="lead-clients-label">{leadPopup.left.clientsLabel}</p>
            <div className="lead-client-grid">
              {leadPopup.left.clients.map((client, idx) => (
                <div key={idx} className="lead-client-item">{client}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel: The Form */}
        <div className="lead-popup-right">
          <div className="lead-partner-badge">
            <img src={logoImg} alt="Techies Logo" className="lead-mini-logo" />
            <div className="lead-partner-info">
              <span>{leadPopup.right.badge.title}</span>
              <strong>{leadPopup.right.badge.strong}</strong>
            </div>
          </div>

          <div className="lead-form-header">
            <h3>{leadPopup.right.header}</h3>
            <p>{leadPopup.right.subheader}</p>
          </div>

          <form className="lead-form" onSubmit={handleSubmit}>
            <div className="lead-form-row">
              <div className="lead-form-group">
                <label>{leadPopup.right.form.nameLabel}</label>
                <input type="text" name="fullName" required placeholder={leadPopup.right.form.namePlaceholder} value={formData.fullName} onChange={handleChange} />
              </div>
              <div className="lead-form-group">
                <label>{leadPopup.right.form.emailLabel}</label>
                <input type="email" name="email" required placeholder={leadPopup.right.form.emailPlaceholder} value={formData.email} onChange={handleChange} />
              </div>
            </div>

            <div className="lead-form-row">
              <div className="lead-form-group">
                <label>{leadPopup.right.form.companyLabel}</label>
                <input type="text" name="companyName" placeholder={leadPopup.right.form.companyPlaceholder} value={formData.companyName} onChange={handleChange} />
              </div>
              <div className="lead-form-group">
                <label>{leadPopup.right.form.countryLabel}</label>
                <input type="text" name="country" placeholder={leadPopup.right.form.countryPlaceholder} value={formData.country} onChange={handleChange} />
              </div>
            </div>

            <div className="lead-form-row">
              <div className="lead-form-group">
                <label>{leadPopup.right.form.phoneLabel}</label>
                <input type="tel" name="contactNumber" required placeholder={leadPopup.right.form.phonePlaceholder} value={formData.contactNumber} onChange={handleChange} />
              </div>
              <div className="lead-form-group">
                <label>{leadPopup.right.form.servicesLabel}</label>
                <select name="service" value={formData.service} onChange={handleChange}>
                  {leadPopup.right.form.services.map((s, idx) => (
                    <option key={idx} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="lead-form-group">
              <label>{leadPopup.right.form.projectLabel}</label>
              <textarea name="projectDetails" rows="3" placeholder={leadPopup.right.form.projectPlaceholder} value={formData.projectDetails} onChange={handleChange}></textarea>
            </div>

            <button type="submit" className="lead-submit-btn">{leadPopup.right.form.submitBtn}</button>
          </form>


        </div>
      </div>
    </div>
  );
};

export default LeadPopup;
