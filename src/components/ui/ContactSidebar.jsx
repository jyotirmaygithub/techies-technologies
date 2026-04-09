import React, { useState } from 'react';
import './ContactSidebar.css';
import siteData from '../../data/siteData.json';

const ContactSidebar = ({ isOpen, onClose }) => {
  const { contactSidebar } = siteData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sidebar Form Submitted:', formData);
    alert('Thank you! Our team will reach out to you shortly.');
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div className={`sidebar-backdrop ${isOpen ? 'sidebar-backdrop--open' : ''}`} onClick={onClose} />
      
      {/* Sidebar Drawer */}
      <aside className={`contact-sidebar ${isOpen ? 'contact-sidebar--open' : ''}`}>
        <button className="sidebar-close-btn" onClick={onClose} aria-label="Close sidebar">×</button>
        
        <div className="sidebar-content">
          {/* Header */}
          <div className="sidebar-header">
            <h2>{contactSidebar.header}</h2>
          </div>

          {/* Form Section */}
          <form className="sidebar-form" onSubmit={handleSubmit}>
            <div className="sidebar-field">
              <input 
                type="text" 
                name="name" 
                placeholder={contactSidebar.form.namePlaceholder} 
                required 
                value={formData.name} 
                onChange={handleChange} 
              />
            </div>
            <div className="sidebar-field">
              <input 
                type="email" 
                name="email" 
                placeholder={contactSidebar.form.emailPlaceholder} 
                required 
                value={formData.email} 
                onChange={handleChange} 
              />
            </div>
            <div className="sidebar-field">
              <input 
                type="text" 
                name="company" 
                placeholder={contactSidebar.form.companyPlaceholder} 
                value={formData.company} 
                onChange={handleChange} 
              />
            </div>
            <div className="sidebar-field">
              <input 
                type="tel" 
                name="mobile" 
                placeholder={contactSidebar.form.mobilePlaceholder} 
                required 
                value={formData.mobile} 
                onChange={handleChange} 
              />
            </div>
            <div className="sidebar-field">
              <textarea 
                name="message" 
                placeholder={contactSidebar.form.messagePlaceholder} 
                rows="4" 
                value={formData.message} 
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="sidebar-submit-btn">{contactSidebar.form.submitBtn}</button>
          </form>

          {/* Contact Details Section */}
          <div className="sidebar-get-in-touch">
            <h3>{contactSidebar.getInTouch.title}</h3>
            <p className="sidebar-touch-desc">{contactSidebar.getInTouch.description}</p>
            
            <div className="sidebar-contact-list">
              {contactSidebar.getInTouch.contacts.map((contact, idx) => (
                <div key={idx} className="sidebar-contact-item">
                  <div className={`sidebar-contact-icon ${contact.color ? `sidebar-contact-icon--${contact.color}` : ''}`}>{contact.icon}</div>
                  <div>
                    <strong>{contact.label}</strong>
                    <span>{contact.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ContactSidebar;
