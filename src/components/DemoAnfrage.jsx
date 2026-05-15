import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const EDGE_URL = 'https://api.401dev.de/functions/v1/demo-anfragen'

export default function DemoAnfrage({ t }) {
  const [form, setForm] = useState({ name: '', email: '', schul_name: '', beschreibung: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [fehler, setFehler] = useState('')
  const headerRef = useInView()
  const formRef = useInView()

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setFehler('')
    try {
      const res = await fetch(EDGE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Fehler')
      setStatus('success')
    } catch (err) {
      setFehler(err.message)
      setStatus('error')
    }
  }

  const inp = "w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all"

  return (
    <section id="demo" className="py-24 sm:py-32 bg-slate-900/50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className="fade-up text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            Demo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.demo.title}
          </h2>
          <p className="text-slate-400 text-lg">{t.demo.subtitle}</p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {t.demo.features.map(f => (
              <span key={f} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm">
                <span className="text-violet-400">✓</span> {f}
              </span>
            ))}
          </div>
        </div>

        <div ref={formRef} className="fade-up bg-slate-900 border border-white/5 rounded-2xl p-8">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <p className="text-white font-semibold text-lg">{t.demo.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="name" required value={form.name} onChange={handleChange}
                  placeholder={t.demo.namePlaceholder} className={inp} />
                <input type="email" name="email" required value={form.email} onChange={handleChange}
                  placeholder={t.demo.emailPlaceholder} className={inp} />
              </div>
              <input type="text" name="schul_name" required value={form.schul_name} onChange={handleChange}
                placeholder={t.demo.schulnamePlaceholder} className={inp} />
              <textarea name="beschreibung" rows={4} value={form.beschreibung} onChange={handleChange}
                placeholder={t.demo.beschreibungPlaceholder}
                className={`${inp} resize-none`} />
              {fehler && <p className="text-red-400 text-sm">{fehler}</p>}
              <button type="submit" disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-violet-600 hover:bg-violet-500 disabled:bg-violet-800 text-white font-semibold rounded-xl transition-all shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 hover:-translate-y-0.5 active:translate-y-0">
                {status === 'loading' ? '…' : t.demo.send}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
