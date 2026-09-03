import { useState, useEffect } from 'react'

type Page = 'home' | 'about' | 'equipment' | 'services' | 'projects' | 'contact'

const YELLOW = '#F5A623'

// ─── CONTACT DETAILS ────────────────────────────────────────────────────────
const PHONE_DISPLAY = '072 112 2922'
const PHONE_INTL_DISPLAY = '+27 72 112 2922'
const PHONE_TEL = '+27721122922'
const WHATSAPP_INTL_DISPLAY = '+27 72 112 2922'
const WHATSAPP_DIGITS = '27721122922'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_DIGITS}`
const WHATSAPP_LINK_QUOTE = `${WHATSAPP_LINK}?text=${encodeURIComponent("Hi Zungu Brotherz, I'd like to request a quote.")}`
const EMAIL = 'kemistsoolebogeng@gmail.com'
const ADDRESS_LINE = 'Middelburg, Mpumalanga'
const ADDRESS_FULL = 'Middelburg, Mpumalanga, South Africa'

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Nav({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems: { label: string; id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Equipment', id: 'equipment' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ]

  const go = (p: Page) => {
    setPage(p)
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(8px)',
        borderBottom: scrolled ? '1px solid #222' : '1px solid transparent',
        transition: 'all 0.3s',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <button onClick={() => go('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src="/logo.png" alt="Zungu Brotherz Pty Ltd" style={{ height: 48, width: 'auto', display: 'block' }} />
        </button>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden-mobile">
          {navItems.map(item => (
            <button key={item.id} onClick={() => go(item.id)}
              className={`nav-link ${page === item.id ? 'active' : ''}`}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              {item.label}
            </button>
          ))}
          <a href={WHATSAPP_LINK_QUOTE} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.6rem 1.25rem' }}>
            Request a Quote
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: 5 }}
          className="hamburger">
          {[0, 1, 2].map(i => (
            <span key={i} style={{ display: 'block', width: 24, height: 2, background: '#fff', transition: 'all 0.2s' }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: '#111', borderTop: '1px solid #222', padding: '1rem 2rem 1.5rem' }}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => go(item.id)}
              style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', color: page === item.id ? YELLOW : '#e5e5e5', fontFamily: 'Oswald, sans-serif', fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.6rem 0', width: '100%', textAlign: 'left' }}>
              {item.label}
            </button>
          ))}
          <a href={WHATSAPP_LINK_QUOTE} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: '1rem', width: '100%', textAlign: 'center', fontSize: '0.85rem', display: 'block' }}>
            Request a Quote
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ setPage }: { setPage: (p: Page) => void }) {
  const go = (p: Page) => { setPage(p); window.scrollTo(0, 0) }
  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid #1e1e1e', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img src="/logo.png" alt="Zungu Brotherz Pty Ltd" style={{ height: 44, width: 'auto', display: 'block' }} />
            </div>
            <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Trusted supply, rental, and support solutions for mining operations across South Africa.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {['f', 'in', 'tw'].map(s => (
                <div key={s} style={{ width: 34, height: 34, border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', fontSize: '0.7rem', cursor: 'pointer', transition: 'border-color 0.2s, color 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = YELLOW; (e.currentTarget as HTMLElement).style.color = YELLOW }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#333'; (e.currentTarget as HTMLElement).style.color = '#666' }}>
                  {s.toUpperCase()}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: 'Oswald, sans-serif', color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem', fontSize: '0.9rem' }}>Quick Links</h4>
            {(['home', 'about', 'equipment', 'services', 'projects', 'contact'] as Page[]).map(p => (
              <button key={p} onClick={() => go(p)} style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', color: '#666', fontSize: '0.85rem', padding: '0.3rem 0', textAlign: 'left', textTransform: 'capitalize', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = YELLOW)}
                onMouseLeave={e => (e.currentTarget.style.color = '#666')}>
                {p}
              </button>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: 'Oswald, sans-serif', color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem', fontSize: '0.9rem' }}>Contact</h4>
            {[
              { icon: '📞', text: PHONE_INTL_DISPLAY, href: `tel:${PHONE_TEL}` },
              { icon: '✉️', text: EMAIL, href: `mailto:${EMAIL}` },
              { icon: '📍', text: ADDRESS_FULL, href: undefined },
            ].map(({ icon, text, href }) => (
              <div key={text} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '0.85rem' }}>{icon}</span>
                {href ? (
                  <a href={href} style={{ color: '#666', fontSize: '0.85rem', lineHeight: 1.5, textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.color = YELLOW)}
                    onMouseLeave={e => (e.currentTarget.style.color = '#666')}>{text}</a>
                ) : (
                  <span style={{ color: '#666', fontSize: '0.85rem', lineHeight: 1.5 }}>{text}</span>
                )}
              </div>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: 'Oswald, sans-serif', color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem', fontSize: '0.9rem' }}>Services</h4>
            {['Equipment Supply', 'Equipment Rental', 'Maintenance & Repairs', 'On-Site Support', 'Logistics & Delivery'].map(s => (
              <button key={s} onClick={() => go('services')} style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', color: '#666', fontSize: '0.85rem', padding: '0.3rem 0', textAlign: 'left', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = YELLOW)}
                onMouseLeave={e => (e.currentTarget.style.color = '#666')}>
                {s}
              </button>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid #1e1e1e', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#444', fontSize: '0.8rem' }}>© 2021 Zungu Brotherz Pty Ltd. All rights reserved.</p>
          <p style={{ color: '#444', fontSize: '0.8rem' }}>Registered in South Africa · CIPC Compliant</p>
        </div>
      </div>
    </footer>
  )
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  const go = (p: Page) => { setPage(p); window.scrollTo(0, 0) }

  const services = [
    { icon: '🚜', title: 'Equipment Supply', desc: 'Premium earthmoving, drilling, and crushing equipment sourced from trusted manufacturers.' },
    { icon: '🔑', title: 'Equipment Rental', desc: 'Flexible short and long-term rental solutions with full operational support.' },
    { icon: '🔧', title: 'Maintenance & Repairs', desc: 'Preventative maintenance and emergency repair services to minimize downtime.' },
    { icon: '👷', title: 'On-Site Support', desc: 'Certified technicians deployed on-site for operational assistance and safety compliance.' },
  ]

  const categories = [
    { title: 'Earthmoving Equipment', img: 'https://images.unsplash.com/photo-1523848309072-c199db53f137?w=600&h=400&fit=crop&auto=format', items: 'Excavators · Loaders · Bulldozers' },
    { title: 'Drilling Equipment', img: 'https://images.unsplash.com/photo-1667841686893-4a0b40e178b7?w=600&h=400&fit=crop&auto=format', items: 'Rotary · Percussion · Core Drills' },
    { title: 'Crushing & Screening', img: 'https://images.unsplash.com/photo-1769240628075-e4728cfba211?w=600&h=400&fit=crop&auto=format', items: 'Jaw Crushers · Screens · Conveyors' },
    { title: 'Spare Parts', img: 'https://images.unsplash.com/photo-1587919968590-fbc98cea6c9a?w=600&h=400&fit=crop&auto=format', items: 'Filters · Hydraulics · Wear Parts' },
  ]

  const industries = [
    { icon: '⛏', label: 'Mining' },
    { icon: '🏗', label: 'Construction' },
    { icon: '🛣', label: 'Infrastructure' },
    { icon: '🚛', label: 'Logistics' },
  ]

  const projects = [
    { title: 'Mpumalanga Coal Project', location: 'Mpumalanga', equipment: 'Excavators, Haul Trucks', result: 'Increased productivity by 34%', img: 'https://images.unsplash.com/photo-1709489662983-3674d790b224?w=700&h=400&fit=crop&auto=format' },
    { title: 'Limpopo Open-Pit Mine', location: 'Limpopo', equipment: 'Drilling Rigs, Bulldozers', result: 'Zero safety incidents over 18 months', img: 'https://images.unsplash.com/photo-1680463990599-9d318aaecf71?w=700&h=400&fit=crop&auto=format' },
    { title: 'Northern Cape Road Build', location: 'Northern Cape', equipment: 'Graders, Compactors', result: '12km completed 3 weeks ahead of schedule', img: 'https://images.unsplash.com/photo-1630288214117-5ebf6c9de343?w=700&h=400&fit=crop&auto=format' },
  ]

  return (
    <div style={{ background: '#0f0f0f', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 600, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: '#111' }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1523848309072-c199db53f137?w=1800&h=900&fit=crop&auto=format"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.75 }}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(10,10,10,0.75) 40%, rgba(10,10,10,0.15) 100%)' }} />
        </div>
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 2rem', width: '100%' }}>
          <div style={{ maxWidth: 680 }}>
            <div className="section-label" style={{ marginBottom: '1.25rem' }}>South Africa's Trusted Equipment Partner</div>
            <h1 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>
              Powering Mining<br />Operations with<br /><span style={{ color: YELLOW }}>Reliable Equipment</span>
            </h1>
            <p style={{ color: '#bbb', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 520 }}>
              Trusted supply, rental, and on-site support solutions across South Africa. Built for the demands of heavy industry.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={WHATSAPP_LINK_QUOTE} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.9rem' }}>Request a Quote</a>
              <button onClick={() => go('equipment')} className="btn-outline" style={{ fontSize: '0.9rem' }}>View Equipment</button>
            </div>
          </div>
        </div>
        {/* Stat strip */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(10,10,10,0.9)', borderTop: `1px solid ${YELLOW}`, padding: '1.25rem 2rem' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem' }}>
            {[{ n: '10+', l: 'Years Experience' }, { n: '50+', l: 'Projects Completed' }, { n: '20+', l: 'Equipment Units' }, { n: '100%', l: 'Safety Compliant' }].map(({ n, l }) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '2rem', fontWeight: 700, color: YELLOW, lineHeight: 1 }}>{n}</div>
                <div style={{ color: '#999', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.25rem' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '6rem 2rem', background: '#111' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>What We Do</div>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>Core Services</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {services.map(({ icon, title, desc }) => (
              <div key={title} className="card-hover" style={{ background: '#161616', border: '1px solid #222', padding: '2.5rem 2rem', cursor: 'pointer' }}
                onClick={() => go('services')}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>{icon}</div>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', color: '#fff', fontSize: '1.25rem', letterSpacing: '0.03em', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ color: '#888', fontSize: '0.875rem', lineHeight: 1.7 }}>{desc}</p>
                <div style={{ marginTop: '1.5rem', color: YELLOW, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Oswald, sans-serif' }}>Learn More →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment categories */}
      <section style={{ padding: '6rem 2rem', background: '#0f0f0f' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>Our Fleet</div>
              <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff' }}>Equipment Categories</h2>
            </div>
            <button onClick={() => go('equipment')} className="btn-outline" style={{ fontSize: '0.8rem' }}>View All Equipment</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {categories.map(({ title, img, items }) => (
              <div key={title} className="card-hover" style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', aspectRatio: '4/3', background: '#1a1a1a' }}
                onClick={() => go('equipment')}>
                <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 40%, transparent)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem' }}>
                  <div style={{ width: 36, height: 3, background: YELLOW, marginBottom: '0.75rem' }} />
                  <h3 style={{ fontFamily: 'Oswald, sans-serif', color: '#fff', fontSize: '1.2rem', letterSpacing: '0.03em', marginBottom: '0.4rem' }}>{title}</h3>
                  <p style={{ color: '#aaa', fontSize: '0.78rem', letterSpacing: '0.05em' }}>{items}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: '6rem 2rem', background: '#111' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1587919968590-fbc98cea6c9a?w=700&h=800&fit=crop&auto=format" alt="Heavy equipment at work" style={{ width: '100%', height: 480, objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: -24, right: -24, background: YELLOW, padding: '1.75rem', width: 160, textAlign: 'center' }}>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '2.5rem', fontWeight: 700, color: '#111', lineHeight: 1 }}>10+</div>
              <div style={{ fontSize: '0.7rem', color: '#333', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.25rem' }}>Years in Industry</div>
            </div>
          </div>
          <div>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Why Zungu Brotherz</div>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Built for the Demands of Heavy Industry
            </h2>
            <p style={{ color: '#888', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '0.95rem' }}>
              We combine operational expertise with premium-grade equipment to ensure your mining and construction projects run safely, efficiently, and on schedule.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { title: 'Reliable & Durable Equipment', desc: 'Every unit undergoes rigorous pre-deployment inspection.' },
                { title: 'Fast Turnaround Times', desc: 'Rapid mobilization — equipment on-site when you need it.' },
                { title: 'Industry Expertise', desc: '10+ years serving mining and construction operations across SA.' },
                { title: 'Safety-Compliant Operations', desc: 'All equipment meets MHSA and OHSA regulatory standards.' },
              ].map(({ title, desc }) => (
                <div key={title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 20, height: 20, background: YELLOW, flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontFamily: 'Oswald, sans-serif', color: '#fff', fontSize: '1rem', letterSpacing: '0.03em', marginBottom: '0.2rem' }}>{title}</div>
                    <div style={{ color: '#777', fontSize: '0.85rem', lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){section > div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Industries */}
      <section style={{ padding: '5rem 2rem', background: '#0f0f0f' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>Our Reach</div>
          <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#fff', marginBottom: '3rem' }}>Industries We Serve</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            {industries.map(({ icon, label }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: 80, height: 80, border: `2px solid #2a2a2a`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = YELLOW)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#2a2a2a')}>
                  {icon}
                </div>
                <span style={{ fontFamily: 'Oswald, sans-serif', color: '#bbb', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section style={{ padding: '6rem 2rem', background: '#111' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>Our Work</div>
              <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff' }}>Featured Projects</h2>
            </div>
            <button onClick={() => go('projects')} className="btn-outline" style={{ fontSize: '0.8rem' }}>All Projects</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {projects.map(({ title, location, equipment, result, img }) => (
              <div key={title} className="card-hover" style={{ background: '#161616', border: '1px solid #222', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => go('projects')}>
                <div style={{ height: 220, overflow: 'hidden', background: '#1a1a1a' }}>
                  <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <h3 style={{ fontFamily: 'Oswald, sans-serif', color: '#fff', fontSize: '1.2rem', marginBottom: '1rem', letterSpacing: '0.02em' }}>{title}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.8rem', color: '#777' }}>📍 {location}</div>
                    <div style={{ fontSize: '0.8rem', color: '#777' }}>⚙️ {equipment}</div>
                  </div>
                  <div style={{ background: 'rgba(245,166,35,0.1)', border: `1px solid rgba(245,166,35,0.2)`, padding: '0.75rem 1rem' }}>
                    <span style={{ color: YELLOW, fontSize: '0.8rem', fontWeight: 600 }}>Result: </span>
                    <span style={{ color: '#ccc', fontSize: '0.8rem' }}>{result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '6rem 2rem', background: '#0f0f0f' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '0.75rem', textAlign: 'center' }}>Client Feedback</div>
          <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', textAlign: 'center', marginBottom: '3.5rem' }}>What Our Clients Say</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { quote: "Zungu Brotherz delivered our excavators on-site within 48 hours. Their support team is second to none — we've renewed our contract three years running.", author: 'Sipho Dlamini', role: 'Operations Manager, Kumba Iron Ore' },
              { quote: "The maintenance programme they set up reduced our equipment downtime by 60%. Professional, reliable, and safety-first in everything they do.", author: 'Thabo Molefe', role: 'Site Director, Murray & Roberts' },
              { quote: "From first call to on-site deployment, the whole process was seamless. Excellent quality machines at competitive rental rates.", author: 'Nkosi Zulu', role: 'Project Manager, WBHO Construction' },
            ].map(({ quote, author, role }) => (
              <div key={author} style={{ background: '#161616', border: '1px solid #222', padding: '2rem' }}>
                <div style={{ color: YELLOW, fontSize: '2rem', lineHeight: 1, marginBottom: '1rem', fontFamily: 'Georgia, serif' }}>"</div>
                <p style={{ color: '#bbb', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1.5rem', fontStyle: 'italic' }}>{quote}</p>
                <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: '1rem' }}>
                  <div style={{ fontFamily: 'Oswald, sans-serif', color: '#fff', fontSize: '0.95rem' }}>{author}</div>
                  <div style={{ color: '#666', fontSize: '0.78rem', marginTop: '0.2rem' }}>{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '5rem 2rem', background: YELLOW }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 700, color: '#111', lineHeight: 1.1 }}>Need Reliable Mining Equipment?</h2>
            <p style={{ color: '#333', marginTop: '0.5rem', fontSize: '0.95rem' }}>Our team is ready to support your next project.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={WHATSAPP_LINK_QUOTE} target="_blank" rel="noopener noreferrer" style={{ background: '#111', color: '#fff', fontFamily: 'Oswald, sans-serif', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.85rem 2rem', border: 'none', cursor: 'pointer', fontSize: '0.9rem', transition: 'background 0.2s', textDecoration: 'none', display: 'inline-block' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#222')}
              onMouseLeave={e => (e.currentTarget.style.background = '#111')}>
              Request a Quote
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: '#111', fontFamily: 'Oswald, sans-serif', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.85rem 2rem', border: '2px solid #111', cursor: 'pointer', fontSize: '0.9rem', transition: 'background 0.2s, color 0.2s', textDecoration: 'none', display: 'inline-block' }}
              onMouseEnter={e => { (e.currentTarget.style.background = '#111'); (e.currentTarget.style.color = '#fff') }}
              onMouseLeave={e => { (e.currentTarget.style.background = 'transparent'); (e.currentTarget.style.color = '#111') }}>
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
function AboutPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div style={{ background: '#0f0f0f', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{ position: 'relative', paddingTop: 180, paddingBottom: '5rem', paddingLeft: '2rem', paddingRight: '2rem', background: '#111', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1769240628075-e4728cfba211?w=1600&h=500&fit=crop&auto=format" alt="Mining operations" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }} />
        </div>
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>Who We Are</div>
          <h1 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.05 }}>About Zungu Brotherz</h1>
        </div>
      </section>

      {/* Overview */}
      <section style={{ padding: '6rem 2rem', background: '#0f0f0f' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <div className="yellow-bar" />
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '2.5rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>Our Story</h2>
            <p style={{ color: '#888', lineHeight: 1.9, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
              Zungu Brotherz Pty Ltd was founded with a clear purpose: to give mining and construction operations across South Africa access to dependable, high-performance equipment backed by real expertise.
            </p>
            <p style={{ color: '#888', lineHeight: 1.9, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
              With over a decade of industry experience, we have grown from a local equipment supplier into a comprehensive mining solutions partner — offering supply, rental, maintenance, and on-site technical support from a single, trusted source.
            </p>
            <p style={{ color: '#888', lineHeight: 1.9, fontSize: '0.95rem' }}>
              We are proudly South African, CIPC-registered, and committed to empowering local industry with world-class equipment and service standards.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1680463990599-9d318aaecf71?w=700&h=600&fit=crop&auto=format" alt="Open pit mining" style={{ width: '100%', height: 480, objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', top: -20, left: -20, width: 120, height: 120, border: `4px solid ${YELLOW}`, zIndex: -1 }} />
          </div>
        </div>
        <style>{`@media(max-width:768px){section > div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: '6rem 2rem', background: '#111' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div style={{ background: '#161616', border: '1px solid #222', padding: '3rem' }}>
              <div style={{ width: 48, height: 48, background: YELLOW, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '1.5rem' }}>🎯</div>
              <h3 style={{ fontFamily: 'Oswald, sans-serif', color: '#fff', fontSize: '1.5rem', letterSpacing: '0.05em', marginBottom: '1rem' }}>OUR MISSION</h3>
              <p style={{ color: '#888', lineHeight: 1.8, fontSize: '0.95rem' }}>
                To deliver reliable mining equipment solutions that maximize operational efficiency, minimize downtime, and keep our clients' projects on track — safely, every time.
              </p>
            </div>
            <div style={{ background: YELLOW, padding: '3rem' }}>
              <div style={{ width: 48, height: 48, background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '1.5rem' }}>🔭</div>
              <h3 style={{ fontFamily: 'Oswald, sans-serif', color: '#111', fontSize: '1.5rem', letterSpacing: '0.05em', marginBottom: '1rem' }}>OUR VISION</h3>
              <p style={{ color: '#333', lineHeight: 1.8, fontSize: '0.95rem' }}>
                To become the leading equipment solutions partner in Southern Africa — recognized for our reliability, technical expertise, and commitment to the growth of local industry.
              </p>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Core Values */}
      <section style={{ padding: '6rem 2rem', background: '#0f0f0f' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>What Drives Us</div>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff' }}>Core Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🛡', title: 'Safety', desc: 'Safety is non-negotiable. Every operation, every deployment, every inspection.' },
              { icon: '⚙️', title: 'Reliability', desc: 'Equipment and people you can count on, day after day, site after site.' },
              { icon: '⚡', title: 'Efficiency', desc: 'Optimized processes that reduce cost and maximize output for our clients.' },
              { icon: '🤝', title: 'Customer Commitment', desc: 'Genuine partnerships built on transparency, responsiveness, and results.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ textAlign: 'center', padding: '2.5rem 2rem', border: '1px solid #1e1e1e', background: '#111' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>{icon}</div>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', color: YELLOW, fontSize: '1.2rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ color: '#777', fontSize: '0.875rem', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section style={{ padding: '6rem 2rem', background: '#111', borderBottom: '1px solid #1e1e1e' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Meet the Team</div>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff' }}>Leadership Team</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', maxWidth: 760, margin: '0 auto' }}>
            {[
              { name: 'Siyabonga Kunene', role: 'Founder and Director', img: '/team/founder-director.jpg' },
              { name: 'Charmaine Mokonyane', role: 'HR Manager', img: '/team/hr-manager.jpg' },
            ].map(({ name, role, img }) => (
              <div key={name} className="card-hover" style={{ background: '#161616', border: '1px solid #222', overflow: 'hidden', textAlign: 'center' }}>
                <div style={{ height: 340, overflow: 'hidden', background: '#1a1a1a' }}>
                  <img src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <div style={{ width: 36, height: 3, background: YELLOW, margin: '0 auto 0.9rem' }} />
                  <h3 style={{ fontFamily: 'Oswald, sans-serif', color: '#fff', fontSize: '1.25rem', letterSpacing: '0.03em', marginBottom: '0.4rem' }}>{name}</h3>
                  <p style={{ color: YELLOW, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section style={{ padding: '6rem 2rem', background: '#111' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Our Standards</div>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '2.5rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>Safety & Compliance</h2>
            <p style={{ color: '#888', lineHeight: 1.9, marginBottom: '2rem', fontSize: '0.95rem' }}>
              In the mining industry, safety is not a differentiator — it is the baseline. All Zungu Brotherz equipment and operations adhere to the Mine Health and Safety Act (MHSA) and the Occupational Health and Safety Act (OHSA).
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'All equipment pre-inspected and certified before deployment',
                'Operators trained to MHSA Part 38 standards',
                'Regular third-party safety audits conducted',
                'Full PPE compliance on all sites',
                'Incident reporting aligned with MHSA Chapter 16',
              ].map(item => (
                <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: YELLOW, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                  <span style={{ color: '#888', fontSize: '0.875rem', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {['MHSA Compliant', 'OHSA Registered', 'ISO Standards', 'CIPC Certified'].map((cert, i) => (
              <div key={cert} style={{ background: i === 0 ? YELLOW : '#161616', border: i !== 0 ? '1px solid #222' : 'none', padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.1rem', color: i === 0 ? '#111' : '#fff', fontWeight: 700, letterSpacing: '0.05em', lineHeight: 1.3 }}>{cert}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){section > div > div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', background: '#0f0f0f', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Ready to Work With Us?</h2>
        <p style={{ color: '#888', marginBottom: '2rem' }}>Let's build something reliable together.</p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">Get in Touch</a>
      </section>
    </div>
  )
}

// ─── EQUIPMENT PAGE ───────────────────────────────────────────────────────────
function EquipmentPage({ setPage }: { setPage: (p: Page) => void }) {
  const [activeTab, setActiveTab] = useState(0)

  const categories = [
    {
      label: 'Earthmoving', icon: '🚜',
      items: [
        { name: 'Hydraulic Excavator 20T', specs: '20-ton, 140HP, reach: 9.8m', img: 'https://images.unsplash.com/photo-1523848309072-c199db53f137?w=500&h=320&fit=crop&auto=format' },
        { name: 'Wheel Loader 3.5T', specs: '3.5m³ bucket, 180HP, 4WD', img: 'https://images.unsplash.com/photo-1630288214032-2c4cc2c080ca?w=500&h=320&fit=crop&auto=format' },
        { name: 'Bulldozer D8', specs: '240HP, 6-way blade, ROPS cab', img: 'https://images.unsplash.com/photo-1693651005564-a8c24afbc28e?w=500&h=320&fit=crop&auto=format' },
      ],
    },
    {
      label: 'Drilling', icon: '⛏',
      items: [
        { name: 'Surface Drill Rig DTH', specs: 'Depth: 30m, bit size: 90–115mm', img: 'https://images.unsplash.com/photo-1667841686893-4a0b40e178b7?w=500&h=320&fit=crop&auto=format' },
        { name: 'Rotary Blasthole Drill', specs: 'Hole diameter: 250mm, depth: 50m', img: 'https://images.unsplash.com/photo-1667841712928-6372a8bb1f3f?w=500&h=320&fit=crop&auto=format' },
        { name: 'Core Drill CT400', specs: 'Diamond core, depth: 400m', img: 'https://images.unsplash.com/photo-1709489662983-3674d790b224?w=500&h=320&fit=crop&auto=format' },
      ],
    },
    {
      label: 'Crushing & Screening', icon: '🪨',
      items: [
        { name: 'Jaw Crusher 600×900', specs: 'Feed: 500mm, output: 30–150t/h', img: 'https://images.unsplash.com/photo-1769240628075-e4728cfba211?w=500&h=320&fit=crop&auto=format' },
        { name: 'Cone Crusher HC400', specs: '400HP, capacity: 200t/h', img: 'https://images.unsplash.com/photo-1630288214117-5ebf6c9de343?w=500&h=320&fit=crop&auto=format' },
        { name: 'Vibrating Screen 3-Deck', specs: '3 deck, 4.8×1.5m panels', img: 'https://images.unsplash.com/photo-1680463990599-9d318aaecf71?w=500&h=320&fit=crop&auto=format' },
      ],
    },
    {
      label: 'Spare Parts', icon: '🔩',
      items: [
        { name: 'Hydraulic Filters', specs: 'OEM-compatible, all major brands', img: 'https://images.unsplash.com/photo-1587919968590-fbc98cea6c9a?w=500&h=320&fit=crop&auto=format' },
        { name: 'Wear Liner Packages', specs: 'AR400, AR500 steel options', img: 'https://images.unsplash.com/photo-1711012604128-8339024a3e12?w=500&h=320&fit=crop&auto=format' },
        { name: 'Hydraulic Cylinders', specs: 'Rebuilt & new, full warranty', img: 'https://images.unsplash.com/photo-1693653420407-34f7d93ef27a?w=500&h=320&fit=crop&auto=format' },
      ],
    },
  ]

  return (
    <div style={{ background: '#0f0f0f', minHeight: '100vh' }}>
      <section style={{ position: 'relative', paddingTop: 180, paddingBottom: '5rem', paddingLeft: '2rem', paddingRight: '2rem', background: '#111', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1587919968590-fbc98cea6c9a?w=1600&h=500&fit=crop&auto=format" alt="Equipment" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.12 }} />
        </div>
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>Our Fleet</div>
          <h1 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.05 }}>Equipment Solutions</h1>
          <p style={{ color: '#888', marginTop: '1rem', maxWidth: 560, lineHeight: 1.7 }}>Premium-grade machinery for mining, earthmoving, and crushing operations — available for supply or rental.</p>
        </div>
      </section>

      {/* Tabs */}
      <div style={{ background: '#111', borderBottom: '1px solid #222', position: 'sticky', top: 72, zIndex: 50 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', display: 'flex', gap: 0, overflowX: 'auto' }}>
          {categories.map((cat, i) => (
            <button key={cat.label} onClick={() => setActiveTab(i)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '1.25rem 1.75rem', fontFamily: 'Oswald, sans-serif', fontSize: '0.9rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: activeTab === i ? YELLOW : '#888', borderBottom: `3px solid ${activeTab === i ? YELLOW : 'transparent'}`, transition: 'color 0.2s, border-color 0.2s', whiteSpace: 'nowrap' }}>
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>
      </div>

      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {categories[activeTab].items.map(({ name, specs, img }) => (
              <div key={name} className="card-hover" style={{ background: '#111', border: '1px solid #222', overflow: 'hidden' }}>
                <div style={{ height: 220, overflow: 'hidden', background: '#1a1a1a' }}>
                  <img src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <h3 style={{ fontFamily: 'Oswald, sans-serif', color: '#fff', fontSize: '1.15rem', marginBottom: '0.5rem' }}>{name}</h3>
                  <p style={{ color: '#777', fontSize: '0.82rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>Specs: {specs}</p>
                  <a href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Hi Zungu Brotherz, I'd like to request a quote for the ${name}.`)}`} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.78rem', padding: '0.6rem 1.25rem' }}>
                    Request Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', background: '#111', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '2rem', color: '#fff', marginBottom: '0.75rem' }}>Need a Custom Specification?</h2>
        <p style={{ color: '#888', marginBottom: '2rem' }}>Contact our team — we source equipment tailored to your operational requirements.</p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">Get in Touch</a>
      </section>
    </div>
  )
}

// ─── SERVICES PAGE ────────────────────────────────────────────────────────────
function ServicesPage({ setPage }: { setPage: (p: Page) => void }) {
  const services = [
    {
      num: '01', icon: '🚜', title: 'Equipment Supply',
      desc: 'We source and supply premium-grade mining and construction equipment from leading global manufacturers. Our supply chain is built for reliability — every unit is inspected, certified, and ready to work.',
      points: ['New and refurbished units available', 'OEM and multi-brand inventory', 'Rapid nationwide delivery', 'Full handover documentation'],
    },
    {
      num: '02', icon: '🔑', title: 'Equipment Rental',
      desc: 'Flexible rental agreements designed around your project timeline. Whether you need a single excavator for a week or a full fleet for 18 months, we structure terms that work for your budget and operation.',
      points: ['Short-term and long-term contracts', 'Operator-inclusive options available', 'Fleet management support', 'Equipment swap-out at no extra charge'],
    },
    {
      num: '03', icon: '🔧', title: 'Maintenance & Repairs',
      desc: 'Keep your equipment running at peak performance. Our certified technicians handle scheduled preventative maintenance and emergency breakdown response — minimizing costly downtime.',
      points: ['Preventative maintenance programmes', 'Emergency breakdown response 24/7', 'OEM parts used exclusively', 'Detailed service record-keeping'],
    },
    {
      num: '04', icon: '🚛', title: 'Logistics & Delivery',
      desc: 'End-to-end logistics from our yard to your site. We handle permits, escorts, and specialized transport for oversized equipment across all nine provinces.',
      points: ['Abnormal load permits managed', 'GPS-tracked delivery fleet', 'Nationwide coverage', 'On-time delivery SLA guarantee'],
    },
    {
      num: '05', icon: '👷', title: 'On-Site Support',
      desc: 'Our field technicians deploy directly to your site to provide operational support, troubleshooting, and safety supervision — so your team can focus on production.',
      points: ['Qualified artisans deployed on-site', 'Compliance inspections and audits', 'Operator training and upskilling', 'Daily and weekly reporting'],
    },
  ]

  return (
    <div style={{ background: '#0f0f0f', minHeight: '100vh' }}>
      <section style={{ position: 'relative', paddingTop: 180, paddingBottom: '5rem', paddingLeft: '2rem', paddingRight: '2rem', background: '#111', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1630288214117-5ebf6c9de343?w=1600&h=500&fit=crop&auto=format" alt="Services" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.12 }} />
        </div>
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>What We Offer</div>
          <h1 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.05 }}>Our Services</h1>
        </div>
      </section>

      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {services.map(({ num, icon, title, desc, points }, idx) => (
            <div key={title} style={{ display: 'grid', gridTemplateColumns: idx % 2 === 0 ? '2fr 3fr' : '3fr 2fr', gap: '4rem', alignItems: 'center', borderBottom: '1px solid #1e1e1e', paddingBottom: '4rem' }}>
              {idx % 2 !== 0 && <div />}
              <div style={{ order: idx % 2 !== 0 ? 1 : 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '4rem', fontWeight: 700, color: '#1e1e1e', lineHeight: 1 }}>{num}</span>
                  <span style={{ fontSize: '2rem' }}>{icon}</span>
                </div>
                <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '2.25rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>{title}</h2>
                <p style={{ color: '#888', lineHeight: 1.9, marginBottom: '1.75rem', fontSize: '0.95rem' }}>{desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {points.map(p => (
                    <div key={p} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      <span style={{ color: YELLOW, fontWeight: 700 }}>—</span>
                      <span style={{ color: '#bbb', fontSize: '0.875rem' }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
              {idx % 2 === 0 && <div />}
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', background: YELLOW, textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#111', marginBottom: '1rem' }}>Let Us Support Your Operations</h2>
        <p style={{ color: '#333', marginBottom: '2rem' }}>Speak to our team about a tailored service solution for your site.</p>
        <a href={WHATSAPP_LINK_QUOTE} target="_blank" rel="noopener noreferrer"
          style={{ background: '#111', color: '#fff', fontFamily: 'Oswald, sans-serif', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.85rem 2.5rem', border: 'none', cursor: 'pointer', fontSize: '0.9rem', textDecoration: 'none', display: 'inline-block' }}>
          Request a Quote
        </a>
      </section>
    </div>
  )
}

// ─── PROJECTS PAGE ────────────────────────────────────────────────────────────
function ProjectsPage({ setPage }: { setPage: (p: Page) => void }) {
  const projects = [
    {
      title: 'Mpumalanga Coal Extraction Project',
      location: 'Mpumalanga', client: 'Anglo American subsidiary',
      equipment: 'Hydraulic Excavators (×4), 40T Haul Trucks (×6), Water Bowser',
      challenge: 'Client needed rapid fleet mobilization to recover a 3-week production deficit caused by contractor withdrawal.',
      solution: 'Zungu Brotherz mobilized a full fleet with operators within 72 hours. Our on-site support team managed shift handovers and equipment inspections.',
      result: 'Productivity increased by 34%, and the production deficit was recovered in 11 days.',
      img: 'https://images.unsplash.com/photo-1523848309072-c199db53f137?w=800&h=480&fit=crop&auto=format',
    },
    {
      title: 'Limpopo Open-Pit Platinum Mine',
      location: 'Limpopo', client: 'Independent mining operator',
      equipment: 'DTH Drill Rigs (×2), Bulldozers (×3), Graders (×2)',
      challenge: 'Aging equipment fleet was causing recurring breakdowns, with MTTR exceeding 14 hours per incident.',
      solution: 'Full fleet replacement via 24-month rental agreement with a preventative maintenance programme. Monthly compliance audits conducted.',
      result: 'Zero safety incidents over 18 months. MTTR reduced to under 3 hours.',
      img: 'https://images.unsplash.com/photo-1680463990599-9d318aaecf71?w=800&h=480&fit=crop&auto=format',
    },
    {
      title: 'Northern Cape Road Infrastructure',
      location: 'Northern Cape', client: 'Provincial government contractor',
      equipment: 'Graders (×3), Compactors (×2), Water Bowsers (×2), Front Loaders (×2)',
      challenge: '12km rural road project with tight SANRAL deadline and remote site logistics challenges.',
      solution: 'Full equipment package supplied with operators and a dedicated logistics coordinator. Daily progress reporting provided to the client.',
      result: '12km completed 3 weeks ahead of schedule. Client awarded follow-up contract extension.',
      img: 'https://images.unsplash.com/photo-1630288214117-5ebf6c9de343?w=800&h=480&fit=crop&auto=format',
    },
    {
      title: 'Gauteng Aggregate Crushing Plant',
      location: 'Gauteng', client: 'Aggregate processing facility',
      equipment: 'Jaw Crusher, Cone Crusher, 3-Deck Vibrating Screen, Conveyors',
      challenge: 'Client needed a turnkey crushing solution commissioned within 6 weeks ahead of a key supply contract.',
      solution: 'Zungu Brotherz designed, supplied, and commissioned a complete primary and secondary crushing circuit with operator training.',
      result: 'Crushing plant operational within 5.5 weeks. Output target of 180T/h achieved on day one.',
      img: 'https://images.unsplash.com/photo-1769240628075-e4728cfba211?w=800&h=480&fit=crop&auto=format',
    },
  ]

  return (
    <div style={{ background: '#0f0f0f', minHeight: '100vh' }}>
      <section style={{ position: 'relative', paddingTop: 180, paddingBottom: '5rem', paddingLeft: '2rem', paddingRight: '2rem', background: '#111', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1709489662983-3674d790b224?w=1600&h=500&fit=crop&auto=format" alt="Projects" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }} />
        </div>
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>Case Studies</div>
          <h1 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.05 }}>Our Work in Action</h1>
        </div>
      </section>

      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {projects.map(({ title, location, client, equipment, challenge, solution, result, img }, i) => (
            <div key={title} className="card-hover" style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr', gap: 0, background: '#111', border: '1px solid #1e1e1e', overflow: 'hidden' }}>
              <div style={{ order: i % 2 === 0 ? 0 : 1, height: 380, overflow: 'hidden', background: '#1a1a1a' }}>
                <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                  <span style={{ background: '#1e1e1e', color: '#888', fontSize: '0.75rem', padding: '0.3rem 0.75rem', letterSpacing: '0.05em' }}>📍 {location}</span>
                  <span style={{ background: '#1e1e1e', color: '#888', fontSize: '0.75rem', padding: '0.3rem 0.75rem', letterSpacing: '0.05em' }}>🏢 {client}</span>
                </div>
                <h2 style={{ fontFamily: 'Oswald, sans-serif', color: '#fff', fontSize: '1.5rem', marginBottom: '0.75rem', lineHeight: 1.2 }}>{title}</h2>
                <p style={{ color: '#666', fontSize: '0.78rem', marginBottom: '1.5rem' }}>Equipment: {equipment}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {[['Challenge', challenge], ['Solution', solution]].map(([label, text]) => (
                    <div key={label}>
                      <div style={{ fontFamily: 'Oswald, sans-serif', color: YELLOW, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{label}</div>
                      <p style={{ color: '#888', fontSize: '0.82rem', lineHeight: 1.7 }}>{text}</p>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '1.5rem', background: 'rgba(245,166,35,0.1)', border: `1px solid rgba(245,166,35,0.25)`, padding: '0.9rem 1.25rem' }}>
                  <span style={{ color: YELLOW, fontSize: '0.8rem', fontWeight: 700 }}>Result: </span>
                  <span style={{ color: '#ccc', fontSize: '0.8rem' }}>{result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', background: '#111', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '2rem', color: '#fff', marginBottom: '0.75rem' }}>Have a Project in Mind?</h2>
        <p style={{ color: '#888', marginBottom: '2rem' }}>Tell us about your requirements and we'll put together a tailored solution.</p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">Start a Conversation</a>
      </section>
    </div>
  )
}

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const lines = [
      'New Quote Request',
      `Name: ${form.name}`,
      form.company ? `Company: ${form.company}` : null,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Message: ${form.message}`,
    ].filter(Boolean)
    const waLink = `${WHATSAPP_LINK}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(waLink, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <div style={{ background: '#0f0f0f', minHeight: '100vh' }}>
      <section style={{ position: 'relative', paddingTop: 180, paddingBottom: '5rem', paddingLeft: '2rem', paddingRight: '2rem', background: '#111', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1711012604128-8339024a3e12?w=1600&h=500&fit=crop&auto=format" alt="Contact" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.12 }} />
        </div>
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>Let's Talk</div>
          <h1 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.05 }}>Get in Touch</h1>
        </div>
      </section>

      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '5rem', alignItems: 'flex-start' }}>
          {/* Contact info */}
          <div>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', color: '#fff', fontSize: '1.75rem', marginBottom: '2rem' }}>Contact Information</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '3rem' }}>
              {[
                { icon: '📞', label: 'Call', value: PHONE_INTL_DISPLAY, sub: 'Mon–Fri, 07:00–17:00 SAST', href: `tel:${PHONE_TEL}` },
                { icon: '💬', label: 'WhatsApp', value: WHATSAPP_INTL_DISPLAY, sub: 'Available 07:00–19:00', href: WHATSAPP_LINK_QUOTE },
                { icon: '✉️', label: 'Email', value: EMAIL, sub: 'We respond within 24 hours', href: `mailto:${EMAIL}` },
                { icon: '📍', label: 'Address', value: ADDRESS_LINE, sub: 'South Africa', href: undefined },
              ].map(({ icon, label, value, sub, href }) => (
                <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 44, height: 44, background: '#161616', border: `1px solid #2a2a2a`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ color: '#666', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'Oswald, sans-serif', marginBottom: '0.25rem' }}>{label}</div>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '0.2rem', textDecoration: 'none', display: 'block' }}
                        onMouseEnter={e => (e.currentTarget.style.color = YELLOW)}
                        onMouseLeave={e => (e.currentTarget.style.color = '#fff')}>{value}</a>
                    ) : (
                      <div style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '0.2rem' }}>{value}</div>
                    )}
                    <div style={{ color: '#555', fontSize: '0.78rem' }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* WhatsApp Button */}
            <a href={WHATSAPP_LINK_QUOTE} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: '#25D366', color: '#fff', padding: '1rem 1.5rem', textDecoration: 'none', fontFamily: 'Oswald, sans-serif', fontWeight: 600, letterSpacing: '0.05em', fontSize: '0.9rem', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1ebe5d')}
              onMouseLeave={e => (e.currentTarget.style.background = '#25D366')}>
              <span style={{ fontSize: '1.25rem' }}>💬</span> Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div style={{ background: '#111', border: '1px solid #1e1e1e', padding: '3rem' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>💬</div>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', color: '#fff', fontSize: '1.75rem', marginBottom: '0.75rem' }}>Opening WhatsApp…</h3>
                <p style={{ color: '#888', lineHeight: 1.7, marginBottom: '1.5rem' }}>We've opened WhatsApp in a new tab with your details filled in — just hit send there to reach our team.</p>
                <a href={`${WHATSAPP_LINK}?text=${encodeURIComponent([
                  'New Quote Request',
                  `Name: ${form.name}`,
                  form.company ? `Company: ${form.company}` : null,
                  `Phone: ${form.phone}`,
                  `Email: ${form.email}`,
                  `Message: ${form.message}`,
                ].filter(Boolean).join('\n'))}`} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.85rem' }}>
                  Didn't open? Click here
                </a>
              </div>
            ) : (
              <>
                <h2 style={{ fontFamily: 'Oswald, sans-serif', color: '#fff', fontSize: '1.75rem', marginBottom: '0.5rem' }}>Request a Quote</h2>
                <p style={{ color: '#666', fontSize: '0.875rem', marginBottom: '2rem' }}>Fill in your details and we'll get back to you promptly.</p>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', color: '#888', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'Oswald, sans-serif' }}>Full Name *</label>
                      <input required placeholder="John Smith" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#888', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'Oswald, sans-serif' }}>Company</label>
                      <input placeholder="ACME Mining Pty Ltd" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', color: '#888', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'Oswald, sans-serif' }}>Phone *</label>
                      <input required placeholder={PHONE_INTL_DISPLAY} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#888', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'Oswald, sans-serif' }}>Email *</label>
                      <input required type="email" placeholder="john@company.co.za" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#888', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'Oswald, sans-serif' }}>Message *</label>
                    <textarea required rows={5} placeholder="Describe your equipment needs, project location, and timeline..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: 'vertical' }} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ fontSize: '0.9rem', textAlign: 'center' }}>
                    Send via WhatsApp →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
        <style>{`@media(max-width:768px){section > div[style*="grid-template-columns: 1fr 1.6fr"]{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </div>
  )
}

// ─── WHATSAPP FLOAT ───────────────────────────────────────────────────────────
function WhatsAppFloat() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 2000)
    return () => clearTimeout(t)
  }, [])
  return (
    <a href={WHATSAPP_LINK_QUOTE} target="_blank" rel="noopener noreferrer"
      style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 200, width: 56, height: 56, background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', textDecoration: 'none', boxShadow: '0 4px 20px rgba(37,211,102,0.4)', transition: 'transform 0.2s, opacity 0.5s', opacity: show ? 1 : 0, transform: show ? 'scale(1)' : 'scale(0.5)' }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}>
      💬
    </a>
  )
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>('home')

  const renderPage = () => {
    switch (page) {
      case 'home': return <HomePage setPage={setPage} />
      case 'about': return <AboutPage setPage={setPage} />
      case 'equipment': return <EquipmentPage setPage={setPage} />
      case 'services': return <ServicesPage setPage={setPage} />
      case 'projects': return <ProjectsPage setPage={setPage} />
      case 'contact': return <ContactPage />
      default: return <HomePage setPage={setPage} />
    }
  }

  return (
    <div style={{ background: '#0f0f0f' }}>
      <Nav page={page} setPage={setPage} />
      <main style={{ paddingTop: 0 }}>
        {renderPage()}
      </main>
      <Footer setPage={setPage} />
      <WhatsAppFloat />
    </div>
  )
}
