import { useInView, useInViewChildren } from '../hooks/useInView'

export default function ForWhom({ t }) {
  const headerRef = useInView()
  const gridRef = useInViewChildren()

  return (
    <section id="for-whom" className="py-24 sm:py-32 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className="fade-up text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            {t.forWhom.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.forWhom.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.forWhom.subtitle}</p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.forWhom.cards.map((card, i) => (
            <div
              key={card.title}
              className={`fade-up fade-up-delay-${i + 1} relative group p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-violet-500/30 hover:-translate-y-1 transition-all cursor-default overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-violet-600/0 group-hover:from-violet-600/5 group-hover:to-purple-600/5 transition-all rounded-2xl" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
