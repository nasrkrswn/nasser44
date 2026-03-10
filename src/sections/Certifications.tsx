import { useLanguage } from '../i18n/context';
import { motion } from 'motion/react';
import { Award } from 'lucide-react';

export const Certifications = () => {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="py-24 bg-dark-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-medium tracking-widest uppercase text-gold-500 mb-4">
              {t.certifications.title}
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Continuous Learning
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.certifications.items.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group flex items-start gap-4 bg-dark-800 border border-white/5 rounded-2xl p-6 hover:border-gold-500/30 transition-colors cursor-pointer"
              >
                <div className="bg-dark-700 p-3 rounded-xl text-gold-500/50 group-hover:text-gold-500 group-hover:bg-gold-500/10 transition-colors shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white/90 font-medium leading-snug group-hover:text-gold-500 transition-colors">
                    {cert}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
