import { useLanguage } from '../i18n/context';
import { motion } from 'motion/react';
import { Download, FileText, Image, Presentation } from 'lucide-react';

export const Downloads = () => {
  const { t } = useLanguage();

  const downloads = [
    { name: t.downloads.cv, icon: FileText, href: "#" },
    { name: t.downloads.mediaKit, icon: Image, href: "#" },
    { name: t.downloads.portfolio, icon: Presentation, href: "#" },
  ];

  return (
    <section id="downloads" className="py-24 bg-dark-900 border-t border-white/5">
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
              {t.downloads.title}
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Resources
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {downloads.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col items-center text-center gap-4 bg-dark-800 border border-white/5 rounded-2xl p-8 hover:border-gold-500/30 transition-colors"
              >
                <div className="bg-dark-700 p-4 rounded-full text-gold-500/50 group-hover:text-gold-500 group-hover:bg-gold-500/10 transition-colors shrink-0">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-medium text-white/90 group-hover:text-gold-500 transition-colors">
                  {item.name}
                </h4>
                <div className="mt-2 flex items-center gap-2 text-sm text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Download className="w-4 h-4" />
                  Download
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
