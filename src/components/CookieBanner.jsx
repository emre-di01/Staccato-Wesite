import { useState, useEffect } from 'react'

const KEY = 'staccato_cookie_consent'

export function loadGA() {
  if (document.getElementById('ga-script')) return
  const s1 = document.createElement('script')
  s1.id = 'ga-script'
  s1.async = true
  s1.src = 'https://www.googletagmanager.com/gtag/js?id=G-6QE1QRE7DS'
  document.head.appendChild(s1)
  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', 'G-6QE1QRE7DS', { anonymize_ip: true })
}

export function getConsent() {
  return localStorage.getItem(KEY)
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(KEY)
    if (!consent) setVisible(true)
    if (consent === 'accepted') loadGA()
  }, [])

  function accept() {
    localStorage.setItem(KEY, 'accepted')
    setVisible(false)
    loadGA()
  }

  function reject() {
    localStorage.setItem(KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000,
      background: '#0f172a', borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '16px 24px', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
    }}>
      <p style={{ color: '#94a3b8', fontSize: 13, margin: 0, flex: 1, minWidth: 200, lineHeight: 1.6 }}>
        Wir nutzen Google Analytics, um die Nutzung unserer Website zu analysieren.{' '}
        <a href="https://app.staccato-music.de/datenschutz" style={{ color: '#a78bfa', textDecoration: 'none' }}>
          Datenschutzerklärung
        </a>
      </p>
      <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
        <button onClick={reject} style={{
          padding: '8px 18px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.15)',
          background: 'transparent', color: '#94a3b8', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit',
        }}>
          Ablehnen
        </button>
        <button onClick={accept} style={{
          padding: '8px 18px', borderRadius: 8, border: 'none',
          background: '#7c3aed', color: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
        }}>
          Akzeptieren
        </button>
      </div>
    </div>
  )
}
