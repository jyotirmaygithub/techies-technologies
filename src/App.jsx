import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/core/Hero';
import LogoTicker from './components/ui/LogoTicker';
import Problem from './components/sections/core/Problem';
import Solution from './components/sections/core/Solution';
import Stats from './components/sections/core/Stats';
import UseCases from './components/sections/evidence/UseCases';
import Partners from './components/sections/evidence/Partners';
import Contact from './components/sections/conversion/Contact';
import CTA from './components/sections/conversion/CTA';
import Footer from './components/layout/Footer';
import LeadPopup from './components/ui/LeadPopup';
import ContactSidebar from './components/ui/ContactSidebar';
import WhatsAppButton from './components/ui/WhatsAppButton';

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
