import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const LANGS = ['de', 'en', 'tr']

export default function Navbar({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: t.nav.features, href: '#features' },
    { label: t.nav.forWhom, href: '#for-whom' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <header
      className={`nav-in fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-shadow">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-bold text-white text-lg tracking-tight">Staccato</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                  lang === l ? 'bg-violet-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a href="https://app.staccato-music.de" className="px-4 py-2 text-slate-400 hover:text-white text-sm font-medium rounded-lg transition-colors">
            {t.nav.login}
          </a>
          <a href="#contact" className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-violet-500/20">
            {t.nav.cta}
          </a>
        </div>

        <button className="md:hidden text-slate-400 hover:text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/5">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white py-2 text-sm">
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-white/5">
              <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1">
                {LANGS.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                      lang === l ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
              <a href="https://app.staccato-music.de" className="px-3 py-2 text-slate-300 text-sm font-medium rounded-lg border border-white/10">
                {t.nav.login}
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="flex-1 text-center px-4 py-2 bg-violet-600 text-white text-sm font-medium rounded-lg">
                {t.nav.cta}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
