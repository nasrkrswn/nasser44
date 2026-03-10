import { useLanguage } from '../i18n/context';
import { motion } from 'motion/react';
import { Mic } from 'lucide-react';

export const Talks = () => {
  const { t } = useLanguage();

  return (
    <section id="talks" className="py-24 bg-dark-800">
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
              {t.talks.title}
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Speaking & Workshops
            </h3>
          </motion.div>

          <div className="space-y-4">
            {t.talks.items.map((talk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex items-center gap-6 bg-dark-900 border border-white/5 rounded-2xl p-6 hover:border-gold-500/30 transition-colors"
              >
                <div className="bg-dark-800 p-4 rounded-full text-gold-500/50 group-hover:text-gold-500 group-hover:bg-gold-500/10 transition-colors shrink-0">
                  <Mic className="w-6 h-6" />
                </div>
                <h4 className="text-lg md:text-xl font-medium text-white/90 group-hover:text-gold-500 transition-colors">
                  {talk}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
