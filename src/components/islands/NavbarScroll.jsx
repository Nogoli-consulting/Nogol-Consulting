import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Método', href: '#metodo' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sobre mí', href: '#sobre' },
  { label: 'Contacto', href: '#contacto' },
  { label: 'Artículos', href: '/articulos' },
];

const SECTION_IDS = ['inicio', 'metodo', 'servicios', 'sobre', 'contacto', 'articulos'];

export default function NavbarScroll({ logoSrc }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy
      let current = 'inicio';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      // If not on the homepage, navigate there with the hash
      if (window.location.pathname !== '/') {
        window.location.href = '/' + href;
        return;
      }
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
      return;
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/98 backdrop-blur-lg'
          : 'bg-cream/95 backdrop-blur-md'
      }`}
      style={{
        borderBottom: '1px solid rgba(211,153,69,0.30)',
        boxShadow: scrolled
          ? '0 2px 24px rgba(99,87,87,0.13), 0 1px 0 rgba(211,153,69,0.18)'
          : '0 1px 0 rgba(211,153,69,0.15)',
      }}
    >
      <nav
        className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between transition-all duration-500"
        style={{ height: scrolled ? '72px' : '96px' }}
      >
        {/* ── Logo + Brand name ── */}
        <a
          href="#inicio"
          onClick={(e) => handleNav(e, '#inicio')}
          className="flex items-center gap-3 group"
          aria-label="Nogolí Consulting — inicio"
        >
          {/* Logo image with entrance animation + hover glow */}
          <div
            className="relative shrink-0 transition-all duration-500"
            style={{ width: scrolled ? '64px' : '92px', height: scrolled ? '64px' : '92px' }}
          >
            {logoSrc && (
              <img
                src={logoSrc}
                alt="Nogolí Consulting"
                className="logo-entrance w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                width="40"
                height="40"
              />
            )}
            {/* Subtle golden glow on hover */}
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(211,153,69,0.20) 0%, transparent 70%)' }}
            />
          </div>

          {/* Brand text — slides out when scrolled */}
          <div
            className="brand-entrance flex flex-col leading-none overflow-hidden transition-all duration-500"
            style={{
              maxWidth: scrolled ? '0px' : '160px',
              opacity: scrolled ? 0 : 1,
              marginLeft: scrolled ? '0px' : undefined,
            }}
          >
            <span
              className="font-serif text-espresso font-bold whitespace-nowrap"
              style={{ fontSize: '22px', letterSpacing: '-0.01em' }}
            >
              Nogolí
            </span>
            <span
              className="font-sans text-dark-mid font-light whitespace-nowrap"
              style={{ fontSize: '11px', letterSpacing: '0.24em', textTransform: 'uppercase', marginTop: '3px' }}
            >
              Consulting
            </span>
          </div>
        </a>

        {/* ── Desktop nav ── */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNav(e, item.href)}
                  className={`font-sans text-sm font-normal tracking-wide transition-all duration-200 relative pb-0.5
                    after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gold-dark after:transition-all after:duration-300 ${
                    isActive
                      ? 'text-gold-dark after:w-full'
                      : 'text-dark-mid hover:text-espresso after:w-0 hover:after:w-full'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* ── CTA Button ── */}
        <a
          href="#contacto"
          onClick={(e) => handleNav(e, '#contacto')}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 font-sans text-sm font-medium tracking-wide transition-all duration-300 group/cta"
          style={{
            border: '1px solid #d39945',
            color: '#d39945',
            letterSpacing: '0.06em',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#d39945';
            e.currentTarget.style.color = '#FAF3E4';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#d39945';
          }}
        >
          Hablemos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-200 group-hover/cta:translate-x-0.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 text-espresso"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>
      </nav>

      {/* ── Mobile menu — slide-down animation ── */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: menuOpen ? '400px' : '0px',
          opacity: menuOpen ? 1 : 0,
          borderTop: menuOpen ? '1px solid rgba(211,153,69,0.22)' : '1px solid transparent',
        }}
      >
        <div className="bg-cream px-6 py-6">
          <ul className="flex flex-col gap-5">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNav(e, item.href)}
                    className={`font-sans text-base font-normal transition-colors ${
                      isActive ? 'text-gold-dark' : 'text-dark-mid hover:text-espresso'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-2" style={{ borderTop: '1px solid rgba(211,153,69,0.18)' }}>
              <a
                href="https://wa.me/5491130855891?text=Hola%20Sergio%2C%20te%20contacto%20desde%20tu%20web.%20Me%20gustar%C3%ADa%20agendar%20una%20charla%20para%20ver%20c%C3%B3mo%20pod%C3%A9s%20ayudarme%20a%20ordenar%20la%20operaci%C3%B3n%20de%20mi%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gold-dark text-gold-dark text-sm font-medium font-sans hover:bg-gold-dark hover:text-cream transition-all duration-200"
              >
                Hablemos →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
