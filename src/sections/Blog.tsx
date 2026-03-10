import { useLanguage } from '../i18n/context';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const Blog = () => {
  const { t, dir } = useLanguage();
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section id="blog" className="py-24 bg-dark-900">
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
              {t.blog.title}
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Latest Articles
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.blog.mockPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-dark-800 border border-white/5 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-colors flex flex-col h-full"
              >
                <div className="aspect-video bg-dark-700 relative overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${post.title.replace(/\s+/g, '')}/600/400`}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-gold-500/80 bg-gold-500/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-white/40 font-medium">
                      {post.date}
                    </span>
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white mb-4 group-hover:text-gold-500 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="inline-flex items-center gap-2 text-gold-500 font-medium text-sm hover:text-gold-400 transition-colors mt-auto group/btn">
                    Read Article
                    <Arrow className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
