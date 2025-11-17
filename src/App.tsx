import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Positions } from './components/Positions';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { CursorFollower } from './components/CursorFollower';

export default function App() {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowCookie(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowCookie(false);
  };

  return (
    <div className="bg-zinc-50 text-zinc-900 overflow-x-hidden relative">
      <CursorFollower />
      <Hero />
      <About />
      <Positions />
      <Contact />
      <Footer />
      {showCookie && <CookieBanner onAccept={handleAcceptCookies} />}
    </div>
  );
}
