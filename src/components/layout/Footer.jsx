import React from 'react';
import './Footer.css';
import siteData from '../../data/siteData.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { footer } = siteData;

  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__main">
          {/* Brand & Mission */}
          <div className="footer__brand">
            <h2 className="footer__logo">{footer.logo}</h2>
            <p className="footer__mission">{footer.mission}</p>
          </div>

          {/* Dynamic Nav Columns */}
          {footer.columns.map((column, idx) => (
            <div key={idx} className="footer__nav">
              <h3 className="footer__nav-title">{column.title}</h3>
              <ul className="footer__nav-list">
                {column.links.map((link, lIdx) => (
                  <li key={lIdx}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>
          ))}

          {/* Locations Column */}
          <div className="footer__nav footer__nav--offices">
            <h3 className="footer__nav-title">{footer.offices.title}</h3>
            <ul className="footer__nav-list">
              {footer.offices.items.map((office, idx) => (
                <li key={idx} className="footer__office">
                  <strong>{office.country}</strong>
                  <span>{office.address}</span>
                  {office.phone && <span className="footer__phone">{office.phone}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} {footer.copyright}
          </p>
          <div className="footer__legal">
            {footer.legal.map((link, idx) => (
              <a key={idx} href={link.href}>{link.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
