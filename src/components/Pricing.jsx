import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Pricing({ t }) {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            Preise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.pricing.title}
          </h2>
          <p className="text-slate-400 text-lg">{t.pricing.subtitle}</p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {t.pricing.plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 flex flex-col transition-all ${
                plan.highlight
                  ? 'bg-gradient-to-b from-violet-600/20 to-purple-900/10 border-2 border-violet-500/50 shadow-2xl shadow-violet-500/20 scale-105'
                  : 'bg-slate-900 border border-white/5 hover:border-white/10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full text-white text-xs font-semibold shadow-lg">
                  Most popular
                </div>
              )}

              <div className="mb-6">
                <div className="text-slate-400 text-sm font-medium mb-1">{plan.name}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-slate-500 text-sm">{plan.period}</span>
                  )}
                </div>
                <p className="text-slate-500 text-sm mt-2">{plan.desc}</p>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check
                      size={16}
                      className={`mt-0.5 flex-shrink-0 ${
                        plan.highlight ? 'text-violet-400' : 'text-slate-500'
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlight
                    ? 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
