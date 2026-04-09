import React from 'react';
// import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__main">
          {/* Brand & Mission */}
          <div className="footer__brand">
            <h2 className="footer__logo">Techies</h2>
            <p className="footer__mission">
              Build. Launch. Manage. We are a team of visionary thinkers and skilled creators committed to supporting business enthusiasts globally.
            </p>
            <div className="footer__social">
              {/* <a href="#" className="footer__social-link"><Twitter size={18} /></a> */}
              {/* <a href="#" className="footer__social-link"><Linkedin size={18} /></a> */}
              {/* <a href="#" className="footer__social-link"><Github size={18} /></a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__nav">
            <h3 className="footer__nav-title">Company</h3>
            <ul className="footer__nav-list">
              <li><a href="#hero">Home</a></li>
              <li><a href="#problem">Our Approach</a></li>
              <li><a href="#use-cases">Use Cases</a></li>
              <li><a href="#partners">Clients</a></li>
              <li><a href="#inpage-contact">Contact</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer__nav">
            <h3 className="footer__nav-title">Services</h3>
            <ul className="footer__nav-list">
              <li><a href="#services">Managed Cloud</a></li>
              <li><a href="#services">Product Dev</a></li>
              <li><a href="#services">Cybersecurity</a></li>
              <li><a href="#services">Consulting</a></li>
              <li><a href="#services">MVP Build</a></li>
            </ul>
          </div>

          {/* Locations Column from Screenshot #1 */}
          <div className="footer__nav footer__nav--offices">
            <h3 className="footer__nav-title">Offices</h3>
            <ul className="footer__nav-list">
              <li className="footer__office">
                <strong>Georgia</strong>
                <span>Bakhtrioni Street, N11, Apartment 132, Tbilisi</span>
              </li>
              <li className="footer__office">
                <strong>USA</strong>
                <span>30 North Gould Street Sheridan, Wyoming 82801</span>
                <span className="footer__phone">+1 (307) 222-6630</span>
              </li>
              <li className="footer__office">
                <strong>KSA</strong>
                <span>Riyadh, Prince Moqrin Bin Abdulaziz St</span>
                <span className="footer__phone">+966 59 133 7644</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Techies Technologies. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
