import { useState } from 'react'
import { useT } from './i18n'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ForWhom from './components/ForWhom'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [lang, setLang] = useState(() => {
    const stored = localStorage.getItem('staccato_landing_lang')
    if (stored) return stored
    const browser = navigator.language?.slice(0, 2)
    return ['de', 'en', 'tr'].includes(browser) ? browser : 'de'
  })

  function handleSetLang(l) {
    setLang(l)
    localStorage.setItem('staccato_landing_lang', l)
    document.documentElement.lang = l
  }

  const t = useT(lang)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar lang={lang} setLang={handleSetLang} t={t} />
      <Hero t={t} />
      <ForWhom t={t} />
      <Features t={t} />
      <Testimonials t={t} />
      <Pricing t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  )
}
