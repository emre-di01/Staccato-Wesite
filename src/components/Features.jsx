import { useInView } from '../hooks/useInView'

export default function Features({ t }) {
  const headerRef = useInView()
  const cardRefs = t.features.items.map(() => useInView())

  return (
    <section id="features" className="py-24 sm:py-32 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className="fade-up text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Features
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.features.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.features.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.features.items.map((item, i) => (
            <div
              key={item.title}
              ref={cardRefs[i]}
              className={`fade-up fade-up-delay-${i + 1} group p-5 rounded-2xl bg-slate-900 border border-white/5 hover:border-white/10 hover:-translate-y-1 transition-all`}
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
