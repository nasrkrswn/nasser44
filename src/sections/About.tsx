import { useLanguage } from '../i18n/context';
import { motion } from 'motion/react';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-dark-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-dark-700 relative group">
              <img
                src="https://picsum.photos/seed/karim/800/1200"
                alt="Karim Hesham El Tokhy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-sm font-medium tracking-widest uppercase text-gold-500 mb-4">
              {t.about.title}
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8 leading-tight">
              {t.about.description}
            </h3>

            <div className="space-y-6 border-t border-white/10 pt-8">
              <div className="flex flex-col gap-2">
                <span className="text-white/40 text-sm uppercase tracking-wider">Nationality</span>
                <span className="text-white/90 font-medium">{t.about.details.nationality}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-white/40 text-sm uppercase tracking-wider">Languages</span>
                <span className="text-white/90 font-medium">{t.about.details.languages}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-white/40 text-sm uppercase tracking-wider">Interests</span>
                <span className="text-white/90 font-medium">{t.about.details.interests}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
