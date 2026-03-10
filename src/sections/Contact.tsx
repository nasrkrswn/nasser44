import { useState } from 'react';
import { useLanguage } from '../i18n/context';
import { motion } from 'motion/react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-dark-800">
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
              {t.contact.title}
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Let's Collaborate
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-dark-900 border border-white/5 rounded-3xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/60">
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/60">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/60">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center gap-2 bg-gold-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-gold-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      {t.contact.send}
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    {t.contact.success}
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm font-medium">
                    <AlertCircle className="w-4 h-4" />
                    {t.contact.error}
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
