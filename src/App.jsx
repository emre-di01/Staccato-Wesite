import { useState, useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import de from './i18n/de.js'
import './App.css'

const ForWhom = lazy(() => import('./components/ForWhom'))
const Features = lazy(() => import('./components/Features'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Pricing = lazy(() => import('./components/Pricing'))
const DemoAnfrage = lazy(() => import('./components/DemoAnfrage'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const CookieBanner = lazy(() => import('./components/CookieBanner'))

const tCache = { de }

function loadT(lang) {
  if (!tCache[lang]) {
    tCache[lang] = import(`./i18n/${lang}.js`).then(m => m.default)
  }
  return tCache[lang]
}

function getInitialLang() {
  const stored = localStorage.getItem('staccato_landing_lang')
  if (stored && ['de', 'en', 'tr'].includes(stored)) return stored
  const browser = navigator.language?.slice(0, 2)
  return ['de', 'en', 'tr'].includes(browser) ? browser : 'de'
}

export default function App() {
  const [lang, setLang] = useState(getInitialLang)
  const [t, setT] = useState(() => tCache[getInitialLang()] || de)

  useEffect(() => {
    Promise.resolve(loadT(lang)).then(setT)
  }, [lang])

  function handleSetLang(l) {
    setLang(l)
    localStorage.setItem('staccato_landing_lang', l)
    document.documentElement.lang = l
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar lang={lang} setLang={handleSetLang} t={t} />
      <Hero t={t} />
      <Suspense fallback={null}>
        <ForWhom t={t} />
        <Features t={t} />
        <Testimonials t={t} />
        <Pricing t={t} />
        <DemoAnfrage t={t} />
        <Contact t={t} />
        <Footer t={t} />
        <CookieBanner />
      </Suspense>
    </div>
  )
}
