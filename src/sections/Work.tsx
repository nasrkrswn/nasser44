import { useLanguage } from '../i18n/context';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const Work = () => {
  const { t, dir } = useLanguage();
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section id="work" className="py-24 bg-dark-900">
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
              {t.work.title}
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Featured Projects
            </h3>
          </motion.div>

          <div className="space-y-24">
            {t.work.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
              >
                <div className="w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden bg-dark-800 relative group">
                  <img
                    src={`https://picsum.photos/seed/${project.name.replace(/\s+/g, '')}/800/600`}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="text-sm font-mono text-gold-500/80 bg-gold-500/10 px-4 py-2 rounded-full inline-flex w-fit">
                    {project.category}
                  </div>
                  <h4 className="text-3xl md:text-4xl font-heading font-bold text-white">
                    {project.name}
                  </h4>
                  <p className="text-white/70 leading-relaxed text-lg">
                    {project.overview}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                    <div>
                      <h5 className="text-white/40 text-xs uppercase tracking-wider mb-2">Challenge</h5>
                      <p className="text-white/80 text-sm leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <h5 className="text-white/40 text-xs uppercase tracking-wider mb-2">Results</h5>
                      <p className="text-white/80 text-sm leading-relaxed">{project.results}</p>
                    </div>
                  </div>

                  <div className="pt-6 flex flex-wrap gap-3">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="text-xs font-medium text-white/50 bg-white/5 px-3 py-1.5 rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="pt-8">
                    <button className="inline-flex items-center gap-2 text-gold-500 font-medium hover:text-gold-400 transition-colors group">
                      View Case Study
                      <Arrow className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
