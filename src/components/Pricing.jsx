import { Check } from 'lucide-react'
import { useInView, useInViewChildren } from '../hooks/useInView'

export default function Pricing({ t }) {
  const headerRef = useInView()
  const gridRef = useInViewChildren()

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className="fade-up text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            Preise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.pricing.title}
          </h2>
          <p className="text-slate-400 text-lg">{t.pricing.subtitle}</p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-start">
          {t.pricing.plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`fade-up fade-up-delay-${i + 1} relative rounded-2xl p-5 flex flex-col transition-all ${
                plan.highlight
                  ? 'bg-gradient-to-b from-violet-600/20 to-purple-900/10 border-2 border-violet-500/50 shadow-2xl shadow-violet-500/20 lg:-translate-y-2'
                  : 'bg-slate-900 border border-white/5 hover:border-white/10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full text-white text-xs font-semibold shadow-lg whitespace-nowrap">
                  Beliebtester Plan
                </div>
              )}
              <div className="mb-5">
                <div className="text-slate-400 text-sm font-medium mb-1">{plan.name}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-slate-500 text-sm">{plan.period}</span>}
                </div>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">{plan.desc}</p>
              </div>
              <ul className="flex-1 space-y-2.5 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check size={14} className={`mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-violet-400' : 'text-slate-500'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-2.5 px-4 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlight
                    ? 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          🎻 Musikvereine mit e.V.-Nachweis erhalten <span className="text-amber-400 font-semibold">40 % Rabatt</span> auf den Vereins-Plan (35 €/Monat). Einfach beim Onboarding angeben.
        </p>
      </div>
    </section>
  )
}
