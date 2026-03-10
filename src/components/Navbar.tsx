import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/context';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils/cn';

export const Navbar = () => {
  const { language, t, toggleLanguage, dir } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.work, href: '#work' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-dark-900/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-xl font-heading font-bold tracking-wider text-white">
          K<span className="text-gold-500">.</span>T
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-gold-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-gold-500 transition-colors"
            aria-label="Toggle Language"
          >
            <Globe className="w-4 h-4" />
            <span>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-dark-900 border-b border-white/5 shadow-2xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-gold-500"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-lg font-medium text-white/80 hover:text-gold-500 mt-4 pt-4 border-t border-white/10"
              >
                <Globe className="w-5 h-5" />
                <span>{language === 'en' ? 'العربية' : 'English'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
