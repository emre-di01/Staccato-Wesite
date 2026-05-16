export const translations = {
  de: {
    nav: {
      features: 'Funktionen',
      forWhom: 'Für wen',
      pricing: 'Preise',
      contact: 'Kontakt',
      cta: 'Demo anfragen',
      login: 'Anmelden',
    },
    hero: {
      badge: '✦ Jetzt verfügbar',
      title1: 'Musikschule verwalten.',
      title2: 'Endlich einfach.',
      subtitle:
        'Staccato ist die moderne Plattform für Musikschulen – Kursverwaltung, Stundenplan, Repertoire, Live-Unterricht und mehr. Alles in einer App.',
      cta: 'Kostenlos starten',
      ctaSecondary: 'Demo ansehen',
      stats: [
        { value: '100%', label: 'Digital & papierlos' },
        { value: '6', label: 'Nutzerrollen' },
        { value: '∞', label: 'Schulen & Lehrer' },
      ],
    },
    forWhom: {
      badge: 'Für wen',
      title: 'Für jeden in der Musikschule',
      subtitle:
        'Staccato bringt alle Beteiligten auf eine Plattform – mit einer eigenen Ansicht für jede Rolle.',
      cards: [
        {
          icon: '🏫',
          title: 'Schulen & Verwaltung',
          desc: 'Mitglieder, Kurse, Räume, Inventar, Events und Finanzen zentral verwalten – für eine oder viele Schulen.',
        },
        {
          icon: '🎹',
          title: 'Lehrerinnen & Lehrer',
          desc: 'Stundenplan, Schülerlisten, Anwesenheit, Repertoire und Live-Unterrichtsmodus – alles an einem Ort.',
        },
        {
          icon: '🎵',
          title: 'Schülerinnen & Schüler',
          desc: 'Eigener Bereich für Stundenplan, Kurse, Noten, Aufgaben und Live-Sessions mit dem Lehrer.',
        },
        {
          icon: '📋',
          title: 'Vorstand & Eltern',
          desc: 'Ziele, Protokolle, Inventarübersicht und Veranstaltungen im Blick – transparent und jederzeit zugänglich.',
        },
      ],
    },
    features: {
      title: 'Alles was du brauchst',
      subtitle:
        'Von der Kursverwaltung bis zum Live-Unterricht – Staccato deckt den kompletten Schulalltag ab.',
      items: [
        {
          icon: '📚',
          title: 'Kursverwaltung',
          desc: 'Einzel-, Gruppen-, Chor- und Ensemble-Unterricht mit Wochenplänen, Zimmerbelegung und flexibler Abrechnung.',
        },
        {
          icon: '🗓️',
          title: 'Stundenplan',
          desc: 'Wochenansicht und Listenansicht, zeitzonengenau, farbkodiert nach Kurstyp – für alle Rollen.',
        },
        {
          icon: '🎼',
          title: 'Repertoire & KI-Tools',
          desc: 'MusicXML-Notation, Spotify-Player, KI-Akkorderkennung, ChordPro und Liedtexte – mit MusicBrainz-Metadatensuche und PDF-Export.',
        },
        {
          icon: '📡',
          title: 'Live-Unterrichtsmodus',
          desc: 'Lehrer teilt Noten und Akkorde live per QR-Code. Schüler reagieren in Echtzeit mit Emojis.',
        },
        {
          icon: '💬',
          title: 'Nachrichten',
          desc: 'Direkte, schulweite und kursbezogene Nachrichten für alle Rollen – mit Lesebestätigung.',
        },
        {
          icon: '🎤',
          title: 'Events & Veranstaltungen',
          desc: 'Konzerte, Vorspiele, Prüfungen mit Teilnehmerverwaltung, RSVP und eigenem Repertoire.',
        },
        {
          icon: '🎻',
          title: 'Inventar',
          desc: 'Instrumente und Equipment mit Zustandsverfolgung und automatischer Nummerierung.',
        },
        {
          icon: '🏢',
          title: 'Multi-Mandant',
          desc: 'Eine Installation, beliebig viele Schulen – vollständig datenisoliert und sicher.',
        },
      ],
    },
    pricing: {
      title: 'Einfache, faire Preise',
      subtitle: 'Keine versteckten Kosten. Jederzeit kündbar.',
      plans: [
        {
          name: 'Starter',
          price: 'Kostenlos',
          period: '',
          desc: 'Für kleine Schulen und Einsteiger.',
          features: [
            'Bis zu 3 Lehrer',
            '1 Schule',
            'Kursverwaltung & Stundenplan',
            'Nachrichten',
            'Community-Support',
          ],
          cta: 'Jetzt starten',
          highlight: false,
        },
        {
          name: 'Pro',
          price: '29 €',
          period: '/ Monat',
          desc: 'Für wachsende Musikschulen.',
          features: [
            'Unbegrenzte Lehrer & Schüler',
            '1 Schule',
            'Alle Features inkl. Live-Unterricht',
            'Repertoire & Events',
            'E-Mail-Support',
          ],
          cta: 'Pro testen',
          highlight: true,
        },
        {
          name: 'Enterprise',
          price: 'Auf Anfrage',
          period: '',
          desc: 'Für Verbände und mehrere Schulen.',
          features: [
            'Unbegrenzte Schulen',
            'Multi-Mandant vollständig',
            'Individuelles Onboarding',
            'SLA & dedizierter Support',
            'Custom Domain',
          ],
          cta: 'Kontakt aufnehmen',
          highlight: false,
        },
      ],
    },
    testimonials: {
      badge: 'Referenzen',
      title: 'Was unsere Nutzer sagen',
      subtitle: 'Musikschulen und Vereine, die mit Staccato ihren Alltag digitalisiert haben.',
      trustedBy: 'Bereits im Einsatz bei',
      items: [
        {
          quote: 'Staccato hat unsere gesamte Verwaltung vereinfacht. Stundenplan, Anwesenheit und Repertoire sind jetzt an einem Ort – das spart uns wöchentlich mehrere Stunden.',
          name: 'Yusuf Demir',
          role: 'Vorstandsvorsitzender',
          org: 'Türkischer Musikverein Darmstadt e.V.',
        },
      ],
      logos: [
        'Türkischer Musikverein Darmstadt e.V.',
      ],
    },
    contact: {
      title: 'Interesse geweckt?',
      subtitle: 'Schreib uns – wir melden uns innerhalb von 24 Stunden.',
      namePlaceholder: 'Dein Name',
      emailPlaceholder: 'deine@email.de',
      messagePlaceholder: 'Deine Nachricht...',
      send: 'Nachricht senden',
      success: '✓ Danke! Wir melden uns bald.',
    },
    footer: {
      tagline: 'Musikschul-Management für das 21. Jahrhundert.',
      product: 'Produkt',
      features: 'Funktionen',
      pricing: 'Preise',
      legal: 'Rechtliches',
      impressum: 'Impressum',
      datenschutz: 'Datenschutz',
      rights: '© 2025 Staccato. Alle Rechte vorbehalten.',
    },
  },
  en: {
    nav: {
      features: 'Features',
      forWhom: 'For whom',
      pricing: 'Pricing',
      contact: 'Contact',
      cta: 'Request demo',
      login: 'Sign in',
    },
    hero: {
      badge: '✦ Now available',
      title1: 'Manage your music school.',
      title2: 'Finally simple.',
      subtitle:
        'Staccato is the modern platform for music schools – course management, scheduling, repertoire, live lessons, and more. All in one app.',
      cta: 'Get started free',
      ctaSecondary: 'Watch demo',
      stats: [
        { value: '100%', label: 'Digital & paperless' },
        { value: '6', label: 'User roles' },
        { value: '∞', label: 'Schools & teachers' },
      ],
    },
    forWhom: {
      badge: 'For whom',
      title: 'For everyone at the music school',
      subtitle:
        'Staccato brings all participants to one platform – with a dedicated view for each role.',
      cards: [
        {
          icon: '🏫',
          title: 'Schools & Administration',
          desc: 'Manage members, courses, rooms, inventory, events and finances centrally – for one or many schools.',
        },
        {
          icon: '🎹',
          title: 'Teachers',
          desc: 'Schedule, student lists, attendance, repertoire and live teaching mode – all in one place.',
        },
        {
          icon: '🎵',
          title: 'Students',
          desc: 'Personal area for schedule, courses, sheet music, homework and live sessions with the teacher.',
        },
        {
          icon: '📋',
          title: 'Board & Parents',
          desc: 'Goals, minutes, inventory overview and events at a glance – transparent and always accessible.',
        },
      ],
    },
    features: {
      title: 'Everything you need',
      subtitle:
        'From course management to live lessons – Staccato covers the entire school day.',
      items: [
        {
          icon: '📚',
          title: 'Course Management',
          desc: 'Individual, group, choir and ensemble lessons with weekly schedules, room booking and flexible billing.',
        },
        {
          icon: '🗓️',
          title: 'Schedule',
          desc: 'Week and list view, timezone-accurate, color-coded by course type – for all roles.',
        },
        {
          icon: '🎼',
          title: 'Repertoire & AI Tools',
          desc: 'MusicXML notation, Spotify player, AI chord recognition, ChordPro and lyrics – with MusicBrainz metadata search and PDF export.',
        },
        {
          icon: '📡',
          title: 'Live Teaching Mode',
          desc: 'Teacher shares sheet music and chords live via QR code. Students react in real time with emojis.',
        },
        {
          icon: '💬',
          title: 'Messages',
          desc: 'Direct, school-wide and course-related messages for all roles – with read receipts.',
        },
        {
          icon: '🎤',
          title: 'Events',
          desc: 'Concerts, recitals, exams with participant management, RSVP and own repertoire.',
        },
        {
          icon: '🎻',
          title: 'Inventory',
          desc: 'Instruments and equipment with condition tracking and automatic numbering.',
        },
        {
          icon: '🏢',
          title: 'Multi-Tenant',
          desc: 'One installation, any number of schools – fully isolated and secure.',
        },
      ],
    },
    pricing: {
      title: 'Simple, fair pricing',
      subtitle: 'No hidden costs. Cancel anytime.',
      plans: [
        {
          name: 'Starter',
          price: 'Free',
          period: '',
          desc: 'For small schools and beginners.',
          features: [
            'Up to 3 teachers',
            '1 school',
            'Course management & schedule',
            'Messages',
            'Community support',
          ],
          cta: 'Get started',
          highlight: false,
        },
        {
          name: 'Pro',
          price: '€29',
          period: '/ month',
          desc: 'For growing music schools.',
          features: [
            'Unlimited teachers & students',
            '1 school',
            'All features incl. live teaching',
            'Repertoire & events',
            'Email support',
          ],
          cta: 'Try Pro',
          highlight: true,
        },
        {
          name: 'Enterprise',
          price: 'Contact us',
          period: '',
          desc: 'For associations and multiple schools.',
          features: [
            'Unlimited schools',
            'Full multi-tenant',
            'Custom onboarding',
            'SLA & dedicated support',
            'Custom domain',
          ],
          cta: 'Get in touch',
          highlight: false,
        },
      ],
    },
    testimonials: {
      badge: 'References',
      title: 'What our users say',
      subtitle: 'Music schools and associations that have digitised their daily work with Staccato.',
      trustedBy: 'Already in use at',
      items: [
        {
          quote: 'Staccato has simplified our entire administration. Schedule, attendance and repertoire are now in one place – saving us several hours every week.',
          name: 'Yusuf Demir',
          role: 'Chairman',
          org: 'Türkischer Musikverein Darmstadt e.V.',
        },
      ],
      logos: [
        'Türkischer Musikverein Darmstadt e.V.',
      ],
    },
    contact: {
      title: 'Interested?',
      subtitle: 'Write to us – we will get back to you within 24 hours.',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Your message...',
      send: 'Send message',
      success: '✓ Thanks! We will be in touch soon.',
    },
    footer: {
      tagline: 'Music school management for the 21st century.',
      product: 'Product',
      features: 'Features',
      pricing: 'Pricing',
      legal: 'Legal',
      impressum: 'Imprint',
      datenschutz: 'Privacy',
      rights: '© 2025 Staccato. All rights reserved.',
    },
  },
  tr: {
    nav: {
      features: 'Özellikler',
      forWhom: 'Kimler için',
      pricing: 'Fiyatlar',
      contact: 'İletişim',
      cta: 'Demo talep et',
      login: 'Giriş yap',
    },
    hero: {
      badge: '✦ Şimdi mevcut',
      title1: 'Müzik okulunu yönet.',
      title2: 'Sonunda kolay.',
      subtitle:
        'Staccato, müzik okulları için modern platformdur – kurs yönetimi, ders programı, repertuvar, canlı ders ve daha fazlası. Hepsi tek uygulamada.',
      cta: 'Ücretsiz başla',
      ctaSecondary: 'Demo izle',
      stats: [
        { value: '100%', label: 'Dijital & kağıtsız' },
        { value: '6', label: 'Kullanıcı rolü' },
        { value: '∞', label: 'Okul & öğretmen' },
      ],
    },
    forWhom: {
      badge: 'Kimler için',
      title: 'Müzik okulundaki herkes için',
      subtitle:
        'Staccato tüm katılımcıları tek platformda buluşturur – her rol için ayrı bir görünüm.',
      cards: [
        {
          icon: '🏫',
          title: 'Okullar & Yönetim',
          desc: 'Üyeler, kurslar, odalar, envanter, etkinlikler ve finansı merkezi olarak yönetin – bir veya birçok okul için.',
        },
        {
          icon: '🎹',
          title: 'Öğretmenler',
          desc: 'Ders programı, öğrenci listeleri, devamsızlık, repertuvar ve canlı ders modu – hepsi bir yerde.',
        },
        {
          icon: '🎵',
          title: 'Öğrenciler',
          desc: 'Ders programı, kurslar, notalar, ödevler ve öğretmenle canlı oturumlar için kişisel alan.',
        },
        {
          icon: '📋',
          title: 'Yönetim Kurulu & Veliler',
          desc: 'Hedefler, tutanaklar, envanter ve etkinlikler – şeffaf ve her zaman erişilebilir.',
        },
      ],
    },
    features: {
      title: 'İhtiyacın olan her şey',
      subtitle:
        'Kurs yönetiminden canlı derse kadar – Staccato tüm okul gününü kapsar.',
      items: [
        {
          icon: '📚',
          title: 'Kurs Yönetimi',
          desc: 'Bireysel, grup, koro ve topluluk dersleri – haftalık programlar, oda rezervasyonu ve esnek ödeme.',
        },
        {
          icon: '🗓️',
          title: 'Ders Programı',
          desc: 'Haftalık ve liste görünümü, saat dilimi doğru, kurs türüne göre renk kodlu – tüm roller için.',
        },
        {
          icon: '🎼',
          title: 'Repertuvar & Yapay Zeka',
          desc: 'MusicXML notasyonu, Spotify oynatıcı, yapay zeka akor tanıma, ChordPro ve şarkı sözleri – MusicBrainz meta veri arama ve PDF dışa aktarma.',
        },
        {
          icon: '📡',
          title: 'Canlı Ders Modu',
          desc: 'Öğretmen notaları ve akorları QR kodu ile canlı paylaşır. Öğrenciler gerçek zamanlı emoji ile tepki verir.',
        },
        {
          icon: '💬',
          title: 'Mesajlar',
          desc: 'Tüm roller için doğrudan, okul genelinde ve kursa özel mesajlar – okundu bilgisiyle.',
        },
        {
          icon: '🎤',
          title: 'Etkinlikler',
          desc: 'Konserler, resitaller, sınavlar – katılımcı yönetimi, RSVP ve kendi repertuvarıyla.',
        },
        {
          icon: '🎻',
          title: 'Envanter',
          desc: 'Durum takibi ve otomatik numaralandırma ile enstrüman ve ekipman yönetimi.',
        },
        {
          icon: '🏢',
          title: 'Çok Kiracılı',
          desc: 'Tek kurulum, sınırsız okul – tamamen izole ve güvenli.',
        },
      ],
    },
    pricing: {
      title: 'Basit, adil fiyatlar',
      subtitle: 'Gizli maliyet yok. İstediğin zaman iptal edebilirsin.',
      plans: [
        {
          name: 'Başlangıç',
          price: 'Ücretsiz',
          period: '',
          desc: 'Küçük okullar ve yeni başlayanlar için.',
          features: [
            'En fazla 3 öğretmen',
            '1 okul',
            'Kurs yönetimi & ders programı',
            'Mesajlar',
            'Topluluk desteği',
          ],
          cta: 'Hemen başla',
          highlight: false,
        },
        {
          name: 'Pro',
          price: '29 €',
          period: '/ ay',
          desc: 'Büyüyen müzik okulları için.',
          features: [
            'Sınırsız öğretmen & öğrenci',
            '1 okul',
            'Canlı ders dahil tüm özellikler',
            'Repertuvar & etkinlikler',
            'E-posta desteği',
          ],
          cta: "Pro'yu dene",
          highlight: true,
        },
        {
          name: 'Kurumsal',
          price: 'Fiyat al',
          period: '',
          desc: 'Dernekler ve birden fazla okul için.',
          features: [
            'Sınırsız okul',
            'Tam çok kiracılı',
            'Özel onboarding',
            'SLA & özel destek',
            'Özel alan adı',
          ],
          cta: 'İletişime geç',
          highlight: false,
        },
      ],
    },
    testimonials: {
      badge: 'Referanslar',
      title: 'Kullanıcılarımız ne diyor',
      subtitle: 'Staccato ile günlük işlerini dijitalleştiren müzik okulları ve dernekler.',
      trustedBy: 'Zaten kullananlar',
      items: [
        {
          quote: 'Staccato tüm yönetimimizi kolaylaştırdı. Ders programı, devamsızlık ve repertuvar artık tek bir yerde – bu bize her hafta birkaç saat kazandırıyor.',
          name: 'Yusuf Demir',
          role: 'Yönetim Kurulu Başkanı',
          org: 'Türkischer Musikverein Darmstadt e.V.',
        },
      ],
      logos: [
        'Türkischer Musikverein Darmstadt e.V.',
      ],
    },
    contact: {
      title: 'İlgin mi çekti?',
      subtitle: 'Bize yaz – 24 saat içinde geri döneceğiz.',
      namePlaceholder: 'Adın',
      emailPlaceholder: 'email@adresin.com',
      messagePlaceholder: 'Mesajın...',
      send: 'Mesaj gönder',
      success: '✓ Teşekkürler! Yakında sana döneceğiz.',
    },
    footer: {
      tagline: '21. yüzyıl için müzik okulu yönetimi.',
      product: 'Ürün',
      features: 'Özellikler',
      pricing: 'Fiyatlar',
      legal: 'Hukuki',
      impressum: 'Künye',
      datenschutz: 'Gizlilik',
      rights: '© 2025 Staccato. Tüm hakları saklıdır.',
    },
  },
}

export function useT(lang) {
  return translations[lang] || translations.de
}
