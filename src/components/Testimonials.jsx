import { useInView } from '../hooks/useInView'

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials({ t }) {
  const headerRef = useInView()
  const cardRefs = t.testimonials.items.map(() => useInView())
  const logoRef = useInView()

  return (
    <section id="referenzen" className="py-24 sm:py-32 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className="fade-up text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            {t.testimonials.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <div
              key={item.name}
              ref={cardRefs[i]}
              className={`fade-up fade-up-delay-${i + 1} relative flex flex-col p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-white/10 transition-all`}
            >
              <div className="absolute top-5 right-6 text-5xl leading-none text-violet-500/20 font-serif select-none">"</div>
              <Stars />
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">"{item.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-500/20">
                  <span className="text-white font-bold text-sm">{item.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{item.name}</div>
                  <div className="text-slate-500 text-xs">{item.role}</div>
                  <div className="text-violet-400 text-xs font-medium mt-0.5">{item.org}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div ref={logoRef} className="fade-up mt-16 pt-10 border-t border-white/5 text-center">
          <p className="text-slate-600 text-sm mb-6 uppercase tracking-widest font-medium">{t.testimonials.trustedBy}</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {t.testimonials.logos.map((logo) => (
              <div key={logo} className="text-slate-500 font-semibold text-sm hover:text-slate-300 transition-colors">{logo}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
