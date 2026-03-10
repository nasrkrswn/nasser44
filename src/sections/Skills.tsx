import { useLanguage } from '../i18n/context';
import { motion } from 'motion/react';

export const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 bg-dark-800">
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
              {t.skills.title}
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Core Competencies
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(t.skills.categories).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-900 border border-white/5 rounded-2xl p-8 hover:border-gold-500/30 transition-colors"
              >
                <h4 className="text-xl font-heading font-bold text-white mb-6 capitalize border-b border-white/10 pb-4">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <ul className="space-y-4">
                  {skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500/50" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
