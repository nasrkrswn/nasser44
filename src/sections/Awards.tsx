import { useLanguage } from '../i18n/context';
import { motion } from 'motion/react';

export const Awards = () => {
  const { t } = useLanguage();

  return (
    <section id="awards" className="py-24 bg-dark-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-medium tracking-widest uppercase text-gold-500 mb-4">
              {t.awards.title}
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Recognition
            </h3>
          </motion.div>

          <div className="space-y-4">
            {t.awards.items.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-4 bg-dark-900 border border-white/5 rounded-2xl p-6 hover:border-gold-500/30 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xl font-mono text-gold-500/50 group-hover:text-gold-500 transition-colors">
                    {award.year}
                  </span>
                  <h4 className="text-xl font-heading font-bold text-white group-hover:text-gold-500 transition-colors">
                    {award.name}
                  </h4>
                </div>
                <div className="text-white/50 text-sm font-medium">
                  {award.project}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
