import { useEffect } from 'react';
import Lenis from 'lenis';
import { LanguageProvider, useLanguage } from './i18n/context';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Certifications } from './sections/Certifications';
import { Work } from './sections/Work';
import { Awards } from './sections/Awards';
import { Talks } from './sections/Talks';
import { Blog } from './sections/Blog';
import { Downloads } from './sections/Downloads';
import { Contact } from './sections/Contact';

function AppContent() {
  const { language } = useLanguage();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className={`min-h-screen bg-dark-900 text-white font-sans selection:bg-gold-500 selection:text-black ${language === 'ar' ? 'font-arabic' : ''}`}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Work />
        <Awards />
        <Talks />
        <Blog />
        <Downloads />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}


