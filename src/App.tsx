import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { LifestylePage } from './pages/LifestylePage';
import { WellnessPage } from './pages/WellnessPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { CommunityPage } from './pages/CommunityPage';
import { GalleryPage } from './pages/GalleryPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function App() {
  const [largeFont, setLargeFont] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('accessibility-large', largeFont);
    root.classList.toggle('accessibility-contrast', highContrast);
  }, [largeFont, highContrast]);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-cream-50 overflow-x-hidden flex flex-col">
        <Navbar
          onToggleLargeFont={() => setLargeFont((v) => !v)}
          onToggleContrast={() => setHighContrast((v) => !v)}
          largeFont={largeFont}
          highContrast={highContrast}
        />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lifestyle" element={<LifestylePage />} />
            <Route path="/wellness" element={<WellnessPage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
