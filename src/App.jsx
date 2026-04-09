import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Stats from './components/Stats';
import UseCases from './components/UseCases';
import Partners from './components/Partners';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import LeadPopup from './components/LeadPopup';
import ContactSidebar from './components/ContactSidebar';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    // LeadPopup: Still automatic after 40 seconds
    const isDismissed = sessionStorage.getItem('leadPopupDismissed');

    if (!isDismissed) {
      const timer = setTimeout(() => {
        // Only show centered popup if sidebar isn't currently open
        if (!showSidebar) {
          setShowPopup(true);
        }
      }, 40000); // 40 seconds

      return () => clearTimeout(timer);
    }
  }, [showSidebar]);

  const handleOpenSidebar = (e) => {
    if (e) e.preventDefault();
    setShowSidebar(true);
    setShowPopup(false); // Close centered popup if user clicks manually
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem('leadPopupDismissed', 'true');
  };

  return (
    <div className="app">
      <Navbar onOpenPopup={handleOpenSidebar} />
      <main>
        <Hero onOpenPopup={handleOpenSidebar} />
        <LogoTicker />
        <Problem />
        <Solution />
        <Stats />
        <UseCases />
        <Partners />
        <Contact />
        <CTA onOpenPopup={handleOpenSidebar} />
      </main>
      <Footer />

      <WhatsAppButton />
      <ContactSidebar isOpen={showSidebar} onClose={handleCloseSidebar} />
      {showPopup && <LeadPopup onClose={handleClosePopup} />}
    </div>
  );
}

export default App;
