export default function Footer({ t }) {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <span className="font-bold text-white">Staccato</span>
            </div>
            <p className="text-slate-500 text-sm">{t.footer.tagline}</p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <div className="text-white font-medium text-sm mb-3">{t.footer.product}</div>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                    {t.footer.features}
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                    {t.footer.pricing}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-white font-medium text-sm mb-3">{t.footer.legal}</div>
              <ul className="space-y-2">
                <li>
                  <a href="https://app.staccato-music.de/impressum" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                    {t.footer.impressum}
                  </a>
                </li>
                <li>
                  <a href="https://app.staccato-music.de/datenschutz" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                    {t.footer.datenschutz}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-slate-600 text-sm">{t.footer.rights}</p>
          <div className="flex items-center gap-1 text-slate-600 text-sm">
            <span>Built with</span>
            <span className="text-red-500">♥</span>
            <span>in Germany</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
