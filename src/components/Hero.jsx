export default function Hero({ t }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/15 blur-[80px]" />
        <div className="absolute top-[40%] left-[-5%] w-[300px] h-[300px] rounded-full bg-purple-900/20 blur-[60px]" />
        <div className="absolute top-[25%] right-[-5%] w-[280px] h-[280px] rounded-full bg-cyan-900/15 blur-[60px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="hero-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-slate-400 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          {t.hero.badge}
        </div>

        <h1 className="hero-2 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
          {t.hero.title1}
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {t.hero.title2}
          </span>
        </h1>

        <p className="hero-3 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="hero-4 flex flex-col sm:flex-row gap-3 justify-center mb-16">
          <a href="#demo" className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5 active:translate-y-0">
            {t.hero.cta}
          </a>
          <a href="#features" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all hover:-translate-y-0.5 active:translate-y-0">
            {t.hero.ctaSecondary} →
          </a>
        </div>

        <div className="hero-5 flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
          {t.hero.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  )
}
