import { useState, useEffect } from 'react';
import './Navbar.css';
import logoImg from '../assets/logo.png';

const Navbar = ({ onOpenPopup }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#features' }, // Maps to 'About Techies' / 'Problem'
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#footer' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <a href="#" className="navbar__logo" id="nav-logo">
          <img src={logoImg} alt="Techies Technologies Logo" style={{ height: '36px', width: 'auto' }} />
        </a>

        {/* Desktop Links */}
        <div className="navbar__links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="navbar__link" id={`nav-${link.label.toLowerCase()}`}>
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="navbar__actions">
          <a href="#footer" className="navbar__btn navbar__btn--ghost" id="nav-login">Global Presence</a>
          <button onClick={onOpenPopup} className="navbar__btn navbar__btn--primary" id="nav-cta">Reach Out</button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          id="nav-hamburger"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="navbar__mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <button onClick={onOpenPopup} className="navbar__btn navbar__btn--primary" style={{ width: '100%', textAlign: 'center', marginTop: '8px' }}>
          Reach Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
