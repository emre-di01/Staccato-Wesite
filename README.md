# Staccato Landing Page

Marketing-Website für die Staccato Musikschul-Management-Plattform.

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- Keine externen Animationsbibliotheken — CSS-Animationen + IntersectionObserver

## URLs

| | URL |
|--|--|
| Live | https://staccato-music.de |
| App | https://app.staccato-music.de |

## Befehle

```bash
npm install       # Abhängigkeiten installieren
npm run dev       # Dev-Server auf Port 5174 (alle Interfaces)
npm run build     # Produktions-Build → dist/
npm run preview   # Build lokal vorschauen
```

## Struktur

```
src/
  components/
    Navbar.jsx       # Sticky Nav mit Sprachumschalter + Login-Button
    Hero.jsx         # Hero-Section mit Statistiken
    ForWhom.jsx      # Zielgruppen-Karten
    Features.jsx     # Feature-Grid (8 Karten)
    Testimonials.jsx # Referenzen mit Zitaten
    Pricing.jsx      # 3 Preismodelle
    Contact.jsx      # Kontaktformular (mailto)
    Footer.jsx       # Links + Copyright
  hooks/
    useInView.js     # IntersectionObserver-Hook für Scroll-Animationen
  i18n.js            # Übersetzungen DE / EN / TR
  App.jsx
  index.css          # Tailwind + CSS-Animationen
```

## SEO

- `public/robots.txt` und `public/sitemap.xml` für `staccato-music.de`
- Open Graph Tags, Twitter Card und Schema.org `SoftwareApplication` in `index.html`
- `<html lang>` wird dynamisch beim Sprachwechsel gesetzt

## Deploy

Build-Output (`dist/`) wird von Nginx direkt ausgeliefert:
- Nginx-Config: `/etc/nginx/sites-available/staccato-music`
- SSL: `/etc/letsencrypt/live/staccato-music.de/`

```bash
npm run build
# dist/ wird sofort live ausgeliefert — kein Neustart nötig
```
