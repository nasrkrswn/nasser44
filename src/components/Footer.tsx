import { useLanguage } from '../i18n/context';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark-900 border-t border-white/5 py-12 mt-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-heading font-bold text-white mb-2">
            Karim Hesham El Tokhy
          </h2>
          <p className="text-white/50 text-sm">
            {t.hero.title}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://linkedin.com/in/karimtokhy" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold-500 transition-colors">
            LinkedIn
          </a>
          <a href="https://behance.net/karimtokhy" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold-500 transition-colors">
            Behance
          </a>
          <a href="https://dribbble.com/karimtokhy" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold-500 transition-colors">
            Dribbble
          </a>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/5 text-center text-white/30 text-xs">
        &copy; {new Date().getFullYear()} Karim Hesham El Tokhy. All rights reserved.
      </div>
    </footer>
  );
};
