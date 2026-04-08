import React, { useState, useEffect } from 'react';
import './LeadPopup.css';
import logoImg from '../assets/logo.png';

const LeadPopup = ({ onClose }) => {
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
    // In a real app, you'd send this to your backend
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
            <span className="lead-tag">WHY BRANDS CHOOSE TECHIES</span>
            <h2 className="lead-title">Techies is Not Only an Idea But a Dream to Meet Business Needs.</h2>
          </div>

          <div className="lead-locations">
            <span className="lead-location-badge">GE <strong>Georgia</strong></span>
            <span className="lead-location-badge">US <strong>USA</strong></span>
            <span className="lead-location-badge">SA <strong>KSA</strong></span>
          </div>

          <div className="lead-testimonial">
            <p>"Techies helped us turn a complex operations workflow into a simple, automated system. The team was responsive, detail-oriented, and delivered on time."</p>
            <div className="lead-testimonial-author">
              <div className="lead-avatar">JP</div>
              <div>
                <strong>Jordan Peterson</strong>
                <span>COO, Kuts</span>
              </div>
            </div>
          </div>

          <div className="lead-clients">
            <p className="lead-clients-label">SELECTED CLIENTS WE WORK WITH</p>
            <div className="lead-client-grid">
              <div className="lead-client-item">lit</div>
              <div className="lead-client-item">colo</div>
              <div className="lead-client-item">Mashfa</div>
            </div>
          </div>
        </div>

        {/* Right Panel: The Form */}
        <div className="lead-popup-right">
          <div className="lead-partner-badge">
            <img src={logoImg} alt="Techies Logo" className="lead-mini-logo" />
            <div className="lead-partner-info">
              <span>Trusted</span>
              <strong>Technology Partner</strong>
            </div>
          </div>

          <div className="lead-form-header">
            <h3>Let's Talk About Your Project</h3>
            <p>Share a few details and our team will get back within 24 hours.</p>
          </div>

          <form className="lead-form" onSubmit={handleSubmit}>
            <div className="lead-form-row">
              <div className="lead-form-group">
                <label>Full Name*</label>
                <input type="text" name="fullName" required placeholder="John Doe" value={formData.fullName} onChange={handleChange} />
              </div>
              <div className="lead-form-group">
                <label>Email*</label>
                <input type="email" name="email" required placeholder="john@example.com" value={formData.email} onChange={handleChange} />
              </div>
            </div>

            <div className="lead-form-row">
              <div className="lead-form-group">
                <label>Company Name</label>
                <input type="text" name="companyName" placeholder="Your company name" value={formData.companyName} onChange={handleChange} />
              </div>
              <div className="lead-form-group">
                <label>Country</label>
                <input type="text" name="country" placeholder="e.g. USA, KSA" value={formData.country} onChange={handleChange} />
              </div>
            </div>

            <div className="lead-form-row">
              <div className="lead-form-group">
                <label>Contact Number*</label>
                <input type="tel" name="contactNumber" required placeholder="+1 234..." value={formData.contactNumber} onChange={handleChange} />
              </div>
              <div className="lead-form-group">
                <label>Services</label>
                <select name="service" value={formData.service} onChange={handleChange}>
                  <option value="">Select a service</option>
                  <option value="managed">Managed Services</option>
                  <option value="data">Data & Analytics</option>
                  <option value="mvp">MVP Development</option>
                  <option value="consulting">Technology Consulting</option>
                  <option value="outsourcing">Outsourcing</option>
                </select>
              </div>
            </div>

            <div className="lead-form-group">
              <label>Project Details</label>
              <textarea name="projectDetails" rows="3" placeholder="Tell us briefly about your idea..." value={formData.projectDetails} onChange={handleChange}></textarea>
            </div>

            <button type="submit" className="lead-submit-btn">Submit</button>
          </form>

          <p className="lead-footer-note">
            If you are looking for a job, please send your CV to: <strong>contact@techies.co</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadPopup;
