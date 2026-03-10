import { lazy, Suspense, Component, ReactNode } from 'react';
import { useLanguage } from '../i18n/context';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const Hero3D = lazy(() => import('../components/Hero3D'));

class WebGLErrorBoundary extends Component<{children: ReactNode, fallback: ReactNode}, {hasError: boolean}> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const Hero = () => {
  const { t, dir } = useLanguage();

  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const staticFallback = (
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center opacity-30">
      <div className="text-[20rem] font-heading font-bold text-gold-500/10 select-none">K</div>
    </div>
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* 3D Background - Lazy loaded with fallback */}
      <WebGLErrorBoundary fallback={staticFallback}>
        <Suspense fallback={staticFallback}>
          <Hero3D />
        </Suspense>
      </WebGLErrorBoundary>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-gold-500 font-medium tracking-widest uppercase text-sm mb-4">
              {t.hero.title}
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-tight mb-6">
              {t.hero.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed mb-10">
              {t.hero.intro}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-gold-500 text-black px-8 py-4 rounded-full font-medium hover:bg-gold-400 transition-colors"
            >
              {t.hero.viewWork}
              <Arrow className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              {t.hero.contact}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-white/10 pt-10"
          >
            {[
              { label: t.hero.stats.projects, value: "200+" },
              { label: t.hero.stats.brands, value: "40+" },
              { label: t.hero.stats.apps, value: "60+" },
              { label: t.hero.stats.experience, value: "15+" },
              { label: t.hero.stats.awards, value: "12+" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-heading font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label.replace(/[0-9+]/g, '').trim()}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
