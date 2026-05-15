const tr = {
  nav: {
    features: 'Özellikler',
    forWhom: 'Kimler için',
    pricing: 'Fiyatlar',
    contact: 'İletişim',
    cta: 'Ücretsiz dene',
    login: 'Giriş yap',
  },
  hero: {
    badge: '✦ Hemen ücretsiz başla',
    title1: 'Müzik okulun.',
    title2: 'Yeniden tasarlandı.',
    subtitle:
      'Artık kağıt yok, karmaşa yok. Kurslar, ders programı, repertuvar ve canlı ders – hepsi tek, modern bir platformda.',
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
      'Her rol tam olarak ihtiyaç duyduğu görünümü alır – fazlası da yok, eksiği de.',
    cards: [
      {
        icon: '🏫',
        title: 'Okullar & Yönetim',
        desc: 'Üyeler, kurslar, odalar ve etkinlikler tek yerden. Bir okul veya birçok – her zaman kontrolde.',
      },
      {
        icon: '🎹',
        title: 'Öğretmenler',
        desc: 'Daha az evrak, daha fazla ders. Ders programı, devamsızlık ve repertuvar – hep elinizin altında.',
      },
      {
        icon: '🎵',
        title: 'Öğrenciler',
        desc: 'Ders programı, kurslar, notalar ve öğretmenle canlı oturumlar – her zaman yanında, her zaman güncel.',
      },
      {
        icon: '📋',
        title: 'Yönetim Kurulu & Veliler',
        desc: 'Hedefler, tutanaklar ve etkinlikler – zahmetsizce, şeffaf bir şekilde.',
      },
    ],
  },
  features: {
    title: 'Her şey var. Fazlası yok.',
    subtitle:
      'İlk dersten son konsere kadar – Staccato okul hayatının her aşamasını kapsar.',
    items: [
      {
        icon: '📚',
        title: 'Kurs Yönetimi',
        desc: 'Bireysel, grup, koro ve topluluk dersleri. Haftalık plan, oda rezervasyonu ve esnek ödeme sistemiyle.',
      },
      {
        icon: '🗓️',
        title: 'Ders Programı',
        desc: 'Haftalık görünüm veya liste – renk kodlu, saat dilimine duyarlı, her rol için.',
      },
      {
        icon: '🎼',
        title: 'Repertuvar',
        desc: 'Notalar, ses dosyaları, ChordPro akorları ve şarkı sözleri. Transpozisyon ve PDF dışa aktarma ile.',
      },
      {
        icon: '📡',
        title: 'Canlı Ders',
        desc: 'QR kodu tara, notalar telefonda – öğrenciler anında emoji ile tepki verir.',
      },
      {
        icon: '💬',
        title: 'Mesajlar',
        desc: 'Birebir, okul geneli ve kursa özel mesajlar. Tüm roller için okundu bildirimiyle.',
      },
      {
        icon: '🎤',
        title: 'Etkinlikler',
        desc: 'Konserler, resitaller, sınavlar – katılımcı listesi, RSVP ve kendi repertuvarıyla.',
      },
      {
        icon: '🎻',
        title: 'Envanter',
        desc: 'Enstrüman ve ekipmanları yönet, durumlarını takip et, numaraları otomatik ata.',
      },
      {
        icon: '🏢',
        title: 'Çok Kiracılı',
        desc: 'Tek kurulum, sınırsız okul – tamamen ayrılmış ve güvenli.',
      },
    ],
  },
  pricing: {
    title: 'Net. Adil. Sürpriz yok.',
    subtitle: 'Ücretsiz başla, okulunla birlikte büy.',
    plans: [
      {
        name: 'Başlangıç',
        price: 'Ücretsiz',
        period: '',
        desc: 'Başlamak için mükemmel.',
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
        desc: 'Dernekler ve okul ağları için.',
        features: [
          'Sınırsız okul',
          'Tam çok kiracılı yapı',
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
    subtitle: 'Staccato ile günlük işleyişini dönüştüren müzik okulları ve dernekler.',
    trustedBy: 'Zaten güvenilenler',
    items: [
      {
        quote: 'Staccato her şeyi değiştirdi – olumlu yönde. Ders programı, devamsızlık ve repertuvar artık tek bir yerde. Her hafta saatler kazanıyoruz.',
        name: 'Yusuf Demir',
        role: 'Yönetim Kurulu Başkanı',
        org: 'Türkischer Musikverein Darmstadt e.V.',
      },
    ],
    logos: ['Türkischer Musikverein Darmstadt e.V.'],
  },
  demo: {
    title: '7 gün ücretsiz dene',
    subtitle: 'Formu doldur – kişisel demo ortamını hazırlayalım.',
    features: ['7 gün tam erişim', 'Tüm 3 kullanıcı rolü', 'Hazır dolu demo okulu', 'Abonelik yok, kredi kartı yok'],
    namePlaceholder: 'Adın',
    emailPlaceholder: 'email@adresin.com',
    schulnamePlaceholder: 'Müzik okulunun adı',
    beschreibungPlaceholder: 'Okulundan kısaca bahset – büyüklük, enstrümanlar, ne beklediğin …',
    send: 'Demo talep et',
    success: '✓ Talep gönderildi! Kısa sürede bir onay e-postası alacaksın.',
  },
  contact: {
    title: 'Başlamaya hazır mısın?',
    subtitle: 'Bize yaz – 24 saat içinde geri döneceğiz.',
    namePlaceholder: 'Adın',
    emailPlaceholder: 'email@adresin.com',
    messagePlaceholder: 'Mesajın...',
    send: 'Mesaj gönder',
    success: '✓ Teşekkürler! Kısa süre içinde sana döneceğiz.',
  },
  footer: {
    tagline: 'Müzik okulları için modern yönetim platformu.',
    product: 'Ürün',
    features: 'Özellikler',
    pricing: 'Fiyatlar',
    legal: 'Hukuki',
    impressum: 'Künye',
    datenschutz: 'Gizlilik',
    rights: '© 2025 Staccato. Tüm hakları saklıdır.',
  },
}

export default tr
