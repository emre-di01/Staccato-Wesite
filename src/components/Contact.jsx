import { useState } from 'react'
import { Send } from 'lucide-react'
import { useInView } from '../hooks/useInView'

export default function Contact({ t }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const headerRef = useInView()
  const formRef = useInView()

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const subject = encodeURIComponent('Staccato – Demo-Anfrage von ' + form.name)
    const body = encodeURIComponent(`Name: ${form.name}\nE-Mail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:info@staccato-music.de?subject=${subject}&body=${body}`
    setTimeout(() => { setLoading(false); setSent(true) }, 500)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-slate-900/50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className="fade-up text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            Kontakt
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-slate-400 text-lg">{t.contact.subtitle}</p>
        </div>

        <div ref={formRef} className="fade-up bg-slate-900 border border-white/5 rounded-2xl p-8">
          {sent ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <p className="text-white font-semibold text-lg">{t.contact.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder={t.contact.namePlaceholder}
                  className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all" />
                <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder={t.contact.emailPlaceholder}
                  className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all" />
              </div>
              <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder={t.contact.messagePlaceholder}
                className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none" />
              <button type="submit" disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-violet-600 hover:bg-violet-500 disabled:bg-violet-800 text-white font-semibold rounded-xl transition-all shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 hover:-translate-y-0.5 active:translate-y-0">
                <Send size={16} />
                {loading ? '...' : t.contact.send}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
