import { useLanguage } from '../i18n/context';
import { motion } from 'motion/react';

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-dark-900">
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
              {t.experience.title}
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Professional Journey
            </h3>
          </motion.div>

          <div className="space-y-8">
            {t.experience.roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-dark-800 border border-white/5 rounded-2xl p-8 hover:border-gold-500/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-2xl font-heading font-bold text-white group-hover:text-gold-500 transition-colors">
                      {role.title}
                    </h4>
                    <span className="text-white/60 font-medium">{role.company}</span>
                  </div>
                  <div className="text-sm font-mono text-gold-500/80 bg-gold-500/10 px-4 py-2 rounded-full inline-flex w-fit">
                    {role.period}
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed max-w-3xl">
                  {role.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
