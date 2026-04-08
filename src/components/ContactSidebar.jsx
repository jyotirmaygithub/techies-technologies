import React, { useState } from 'react';
import './ContactSidebar.css';

const ContactSidebar = ({ isOpen, onClose }) => {
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
            <h2>Request A Quote</h2>
          </div>

          {/* Form Section */}
          <form className="sidebar-form" onSubmit={handleSubmit}>
            <div className="sidebar-field">
              <input 
                type="text" 
                name="name" 
                placeholder="Enter name" 
                required 
                value={formData.name} 
                onChange={handleChange} 
              />
            </div>
            <div className="sidebar-field">
              <input 
                type="email" 
                name="email" 
                placeholder="Enter email" 
                required 
                value={formData.email} 
                onChange={handleChange} 
              />
            </div>
            <div className="sidebar-field">
              <input 
                type="text" 
                name="company" 
                placeholder="Enter company" 
                value={formData.company} 
                onChange={handleChange} 
              />
            </div>
            <div className="sidebar-field">
              <input 
                type="tel" 
                name="mobile" 
                placeholder="Enter mobile" 
                required 
                value={formData.mobile} 
                onChange={handleChange} 
              />
            </div>
            <div className="sidebar-field">
              <textarea 
                name="message" 
                placeholder="Enter your message" 
                rows="4" 
                value={formData.message} 
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="sidebar-submit-btn">Submit</button>
          </form>

          {/* Contact Details Section */}
          <div className="sidebar-get-in-touch">
            <h3>Get In Touch</h3>
            <p className="sidebar-touch-desc">Please fill out the form below if you have a plan or project in mind that you'd like to share with us.</p>
            
            <div className="sidebar-contact-list">
              <div className="sidebar-contact-item">
                <div className="sidebar-contact-icon sidebar-contact-icon--blue">📞</div>
                <div>
                  <strong>+995 555 91 59 15</strong>
                  <span>Georgia / KSA Support (Mon-Sat 9am-6pm)</span>
                </div>
              </div>

              <div className="sidebar-contact-item">
                <div className="sidebar-contact-icon sidebar-contact-icon--green">💬</div>
                <div>
                  <strong>+1 840 688 84 19</strong>
                  <span>USA Support (Mon-Sat 9am-6pm)</span>
                </div>
              </div>

              <div className="sidebar-contact-item">
                <div className="sidebar-contact-icon sidebar-contact-icon--blue">📧</div>
                <div>
                  <strong>contact@techies.co</strong>
                  <span>Email Support</span>
                </div>
              </div>

              <div className="sidebar-contact-item">
                <div className="sidebar-contact-icon">📍</div>
                <div>
                  <strong>Global Offices</strong>
                  <span>Georgia, USA, and KSA (Riyadh)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ContactSidebar;
