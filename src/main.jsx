import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BadgeDollarSign,
  Banknote,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Crosshair,
  Fish,
  Gamepad2,
  Headphones,
  Menu,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Trophy,
  User,
  WalletCards,
  X,
  Zap,
} from 'lucide-react';
import './styles.css';

const categories = [
  { name: 'Sports', icon: Trophy },
  { name: 'Casino', icon: CircleDollarSign },
  { name: 'Slot', icon: Gamepad2 },
  { name: 'Togel', icon: BadgeDollarSign },
  { name: 'Sabung Ayam', icon: Zap },
  { name: 'Tembak Ikan', icon: Fish },
];

const banners = [
  {
    eyebrow: 'WELCOME OFFER',
    title: 'Bonus New Member 30%',
    description: 'Mulai lebih percaya diri dengan bonus pembuka untuk member baru.',
    cta: 'Klaim Bonus',
    className: 'promo-welcome',
  },
  {
    eyebrow: 'DAILY REWARD',
    title: 'Bonus Harian 200rb',
    description: 'Reward harian eksklusif dengan proses klaim yang cepat dan praktis.',
    cta: 'Lihat Detail',
    className: 'promo-daily',
  },
  {
    eyebrow: 'SECOND DEPOSIT',
    title: 'Bonus Depo Kedua 50%',
    description: 'Tambahan nilai lebih untuk deposit kedua akun GEM188 Anda.',
    cta: 'Aktifkan Sekarang',
    className: 'promo-second',
  },
];

const games = [
  {
    title: 'Gates Of Olympus 1000',
    provider: 'Pragmatic Play',
    category: 'Slot',
    badge: 'Featured',
    accent: 'olympus',
    multiplier: '1000x',
  },
  {
    title: 'Maxwin 3000.000',
    provider: 'GEM Exclusive',
    category: 'Slot',
    badge: 'Hot',
    accent: 'maxwin',
    multiplier: '3.000.000',
  },
  {
    title: 'Mahjong Fortune',
    provider: 'PG Soft',
    category: 'Slot',
    badge: 'Popular',
    accent: 'mahjong',
    multiplier: '5.000x',
  },
  {
    title: 'Lightning Baccarat',
    provider: 'Evolution',
    category: 'Casino',
    badge: 'Live',
    accent: 'baccarat',
    multiplier: '24/7',
  },
  {
    title: 'Premier League Arena',
    provider: 'GEM Sports',
    category: 'Sports',
    badge: 'Today',
    accent: 'sports',
    multiplier: 'Live Odds',
  },
  {
    title: 'Ocean Hunter',
    provider: 'JDB',
    category: 'Tembak Ikan',
    badge: 'New',
    accent: 'ocean',
    multiplier: 'Jackpot',
  },
  {
    title: 'Royal Rooster',
    provider: 'SV388',
    category: 'Sabung Ayam',
    badge: 'Live',
    accent: 'rooster',
    multiplier: 'Arena',
  },
  {
    title: 'Lucky Number Pro',
    provider: 'GEM Togel',
    category: 'Togel',
    badge: 'Fast',
    accent: 'togel',
    multiplier: 'Quick Pick',
  },
];

const bankingPartners = ['BCA', 'MANDIRI', 'BRI', 'BNI', 'DANA', 'OVO', 'GOPAY', 'USDT'];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [query, setQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % banners.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesCategory = activeCategory === 'Semua' || game.category === activeCategory;
      const searchable = `${game.title} ${game.provider} ${game.category}`.toLowerCase();
      return matchesCategory && searchable.includes(query.toLowerCase());
    });
  }, [activeCategory, query]);

  const goToSlide = (direction) => {
    setActiveSlide((current) => (current + direction + banners.length) % banners.length);
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-top container">
          <a className="brand" href="#top" aria-label="GEM188 Home">
            <span className="brand-mark"><Sparkles size={20} /></span>
            <span className="brand-copy">
              <strong>GEM188</strong>
              <small>PREMIUM GAME HUB</small>
            </span>
          </a>

          <button className="mobile-menu-button" onClick={() => setMobileOpen(true)} aria-label="Buka menu">
            <Menu size={22} />
          </button>

          <div className="quick-login">
            <label>
              <User size={16} />
              <input type="text" placeholder="Username" aria-label="Username" />
            </label>
            <label>
              <ShieldCheck size={16} />
              <input type="password" placeholder="Password" aria-label="Password" />
            </label>
            <button className="btn btn-ghost">Login</button>
            <button className="btn btn-primary">Daftar</button>
          </div>
        </div>

        <nav className={`category-nav ${mobileOpen ? 'is-open' : ''}`} aria-label="Kategori utama">
          <div className="mobile-nav-head">
            <span>Menu GEM188</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Tutup menu"><X size={20} /></button>
          </div>
          <div className="container category-nav-inner">
            {categories.map(({ name, icon: Icon }) => (
              <button
                key={name}
                className={activeCategory === name ? 'active' : ''}
                onClick={() => {
                  setActiveCategory(name);
                  setMobileOpen(false);
                }}
              >
                <Icon size={18} strokeWidth={2.2} />
                <span>{name}</span>
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section container" aria-label="Promo GEM188">
          <div className="promo-slider">
            {banners.map((banner, index) => (
              <article
                key={banner.title}
                className={`promo-slide ${banner.className} ${index === activeSlide ? 'active' : ''}`}
                aria-hidden={index !== activeSlide}
              >
                <div className="promo-copy">
                  <span className="eyebrow">{banner.eyebrow}</span>
                  <h1>{banner.title}</h1>
                  <p>{banner.description}</p>
                  <button className="btn btn-primary">{banner.cta}</button>
                </div>
                <div className="promo-art" aria-hidden="true">
                  <div className="orbit orbit-one" />
                  <div className="orbit orbit-two" />
                  <div className="promo-emblem"><Zap size={54} /></div>
                  <span className="spark spark-a" />
                  <span className="spark spark-b" />
                  <span className="spark spark-c" />
                </div>
              </article>
            ))}

            <button className="slider-arrow slider-prev" onClick={() => goToSlide(-1)} aria-label="Promo sebelumnya">
              <ChevronLeft size={22} />
            </button>
            <button className="slider-arrow slider-next" onClick={() => goToSlide(1)} aria-label="Promo berikutnya">
              <ChevronRight size={22} />
            </button>
            <div className="slider-dots" role="tablist" aria-label="Pilih promo">
              {banners.map((banner, index) => (
                <button
                  key={banner.title}
                  className={index === activeSlide ? 'active' : ''}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Tampilkan ${banner.title}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="catalog-section container" id="games">
          <div className="section-heading">
            <div>
              <span className="eyebrow">GAME CATALOG</span>
              <h2>Pilih permainan favorit Anda</h2>
              <p>Temukan permainan pilihan dengan navigasi cepat dan tampilan yang lebih fokus.</p>
            </div>
            <div className="catalog-tools">
              <div className="search-box">
                <Search size={18} />
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari game..." />
              </div>
              <div className="filter-tabs" aria-label="Filter kategori">
                {['Semua', 'Slot', 'Casino', 'Sports'].map((category) => (
                  <button
                    key={category}
                    className={activeCategory === category ? 'active' : ''}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="game-grid">
            {filteredGames.map((game) => (
              <article className={`game-card game-${game.accent}`} key={game.title}>
                <div className="game-art">
                  <div className="game-badge">{game.badge}</div>
                  <div className="game-icon-wrap">
                    {game.category === 'Tembak Ikan' ? <Fish size={48} /> : game.category === 'Sports' ? <Trophy size={48} /> : game.category === 'Casino' ? <CircleDollarSign size={48} /> : <Gamepad2 size={48} />}
                  </div>
                  <span className="multiplier">{game.multiplier}</span>
                  <div className="card-glow" />
                </div>
                <div className="game-card-body">
                  <div>
                    <small>{game.provider}</small>
                    <h3>{game.title}</h3>
                  </div>
                  <button className="play-button" aria-label={`Mainkan ${game.title}`}><ChevronRight size={18} /></button>
                </div>
              </article>
            ))}
          </div>

          {filteredGames.length === 0 && (
            <div className="empty-state">
              <Search size={32} />
              <h3>Game tidak ditemukan</h3>
              <p>Coba kata kunci atau kategori lain.</p>
            </div>
          )}
        </section>

        <section className="jawa-section container">
          <div className="jawa-panel">
            <div className="wayang-decoration" aria-hidden="true">
              <span className="wayang-head" />
              <span className="wayang-body" />
              <span className="wayang-arm left" />
              <span className="wayang-arm right" />
            </div>
            <div className="jawa-copy">
              <span className="eyebrow">KATEGORI EKSKLUSIF</span>
              <h2>Jawa Togel</h2>
              <p>Nuansa budaya Jawa dengan sentuhan ornamen wayang, lentera emas, dan pola batik modern.</p>
              <div className="jawa-actions">
                <button className="btn btn-primary">Buka Kategori</button>
                <span><ShieldCheck size={17} /> Data terenkripsi</span>
              </div>
            </div>
            <div className="lanterns" aria-hidden="true">
              <div className="lantern lantern-one"><span /></div>
              <div className="lantern lantern-two"><span /></div>
              <div className="lantern lantern-three"><span /></div>
            </div>
          </div>
        </section>

        <section className="benefits container" aria-label="Keunggulan layanan">
          <article><ShieldCheck /><div><strong>Keamanan Berlapis</strong><span>Proteksi akun & transaksi</span></div></article>
          <article><Banknote /><div><strong>Proses Cepat</strong><span>Deposit dan withdraw efisien</span></div></article>
          <article><Headphones /><div><strong>Support 24/7</strong><span>Tim bantuan selalu aktif</span></div></article>
          <article><Smartphone /><div><strong>Mobile Friendly</strong><span>Nyaman di semua perangkat</span></div></article>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container trust-bar">
          <div className="trust-heading">
            <ShieldCheck size={22} />
            <div><strong>Metode Pembayaran Terpercaya</strong><span>Bank, e-wallet, dan aset digital</span></div>
          </div>
          <div className="partner-logos">
            {bankingPartners.map((partner) => <span key={partner}>{partner}</span>)}
          </div>
        </div>
        <div className="container footer-bottom">
          <div className="brand footer-brand">
            <span className="brand-mark"><Sparkles size={18} /></span>
            <span className="brand-copy"><strong>GEM188</strong><small>PREMIUM GAME HUB</small></span>
          </div>
          <p>© 2026 GEM188. 18+ • Bermain secara bertanggung jawab.</p>
          <div className="footer-links">
            <a href="#games">Game</a>
            <a href="#top">Promosi</a>
            <a href="#support">Bantuan</a>
          </div>
        </div>
      </footer>

      <div className="floating-actions" id="support">
        <a className="floating-btn apk-btn" href="#apk" aria-label="Download APK GEM188">
          <Smartphone size={21} />
          <span><small>Download</small>APK GEM188</span>
        </a>
        <a className="floating-btn chat-btn" href="#live-chat" aria-label="Live Chat 24/7">
          <Headphones size={21} />
          <span><small>Online 24/7</small>Live Chat</span>
          <i />
        </a>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
