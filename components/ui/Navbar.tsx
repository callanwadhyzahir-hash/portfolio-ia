'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const brandName = "Wadhy";

  const navItems = [
    { name: "Experiencia", href: "#experiencia", id: "experiencia" },
    { name: "Proyectos", href: "#proyectos", id: "proyectos" },
    { name: "Sobre mí", href: "#sobre", id: "sobre" },
    { name: "hablamos", href: "#hablamos", id: "hablamos" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled
      setScrolled(window.scrollY > 50);

      // Determine active section
      const inicio = document.getElementById('inicio');
      const sections = navItems.map(item => document.getElementById(item.id));
      
      if (inicio && window.scrollY < inicio.offsetHeight - 100) {
        setActiveSection('inicio');
      } else {
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= window.scrollY + 100) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      style={{
        width: "100%",
        borderBottom: scrolled ? "1px solid #222" : "1px solid transparent",
        backgroundColor: scrolled ? "rgba(15, 15, 15, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        position: "sticky",
        top: 0,
        zIndex: 50,
        transition: "all 0.3s",
      }}
    >
      <div 
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "0.75rem 1.5rem" : "1.25rem 1.5rem",
          transition: "padding 0.3s",
          position: "relative",
        }}
      >
        
        {/* LOGO / BOTÓN DE INICIO - IZQUIERDA */}
        <a 
          href="#inicio"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: scrolled ? "36px" : "44px",
            height: scrolled ? "36px" : "44px",
            borderRadius: "50%",
            backgroundColor: "#1a1a1a",
            border: "2px solid #fbbf24",
            overflow: "hidden",
            transition: "all 0.3s",
            cursor: "pointer",
            textDecoration: "none",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(251, 191, 36, 0.4)";
            (e.target as HTMLAnchorElement).style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLAnchorElement).style.boxShadow = "none";
            (e.target as HTMLAnchorElement).style.transform = "scale(1)";
          }}
          onClick={() => handleNavClick('inicio')}
        >
          <img 
            src="/LAB.png " 
            alt="Logo Wadhy" 
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%"
            }}
          />
        </a>
        
        {/* NAVIGATION LINKS - CENTRADO (SOLO DESKTOP) */}
        <nav 
          style={{
            display: "none",
            alignItems: "center",
            gap: "2.5rem",
          }}
          className="hidden md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontSize: "0.9rem",
                fontWeight: activeSection === item.id ? "600" : "400",
                color: activeSection === item.id ? "#fbbf24" : "#999",
                textDecoration: "none",
                transition: "all 0.3s",
                borderBottom: activeSection === item.id ? "2px solid #fbbf24" : "2px solid transparent",
                paddingBottom: "6px",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                if (activeSection !== item.id) {
                  (e.target as HTMLAnchorElement).style.color = "#fff";
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  (e.target as HTMLAnchorElement).style.color = "#999";
                }
              }}
              onClick={() => handleNavClick(item.id)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* HAMBURGER MENU BUTTON - SOLO MOBILE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
            border: "none",
            color: "#fbbf24",
            cursor: "pointer",
            padding: "0.5rem",
            fontSize: "1.5rem",
          }}
          className="md:hidden"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU - RIGHT DRAWER */}
      {mobileMenuOpen && (
        <>
          <div
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.45)',
              backdropFilter: 'blur(2px)',
              zIndex: 50,
            }}
            aria-hidden
          />

          <nav
            style={{
              position: 'fixed',
              top: '6vh',
              right: '1vw',
              height: '88vh',
              width: '320px',
              maxWidth: '92vw',
              backgroundColor: 'rgba(18,18,18,0.99)',
              padding: '1.5rem',
              zIndex: 60,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              boxShadow: '-14px 0 40px rgba(0,0,0,0.6)',
              borderTopLeftRadius: '12px',
              borderBottomLeftRadius: '12px',
              border: '1px solid rgba(255,255,255,0.03)',
              animation: 'slideInRight 320ms cubic-bezier(.2,.9,.2,1) forwards',
              overflow: 'hidden',
            }}
            className="md:hidden"
          >
            <style>{`
              @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
              }
            `}</style>

            {/* Drawer header: logo + brand */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #fbbf24', flexShrink: 0 }}>
                  <img src="/LAB.png " alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ color: '#fbbf24', fontWeight: 700, fontSize: '1rem' }}>{brandName}</div>
                  <div style={{ color: '#9b9b9b', fontSize: '0.775rem', marginTop: '2px' }}>Navegación</div>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: '#fbbf24',
                  border: 'none',
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 6px 18px rgba(251,191,36,0.12)'
                }}
                aria-label="Cerrar menú"
              >
                <span style={{ color: '#0b0b0b', fontSize: '1.05rem', lineHeight: 1 }}>✕</span>
              </button>
            </div>

            <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(251,191,36,0.12), rgba(255,255,255,0.02))', margin: '0.5rem 0 0.25rem' }} />

            {/* Menu items */}
            <div style={{ marginTop: '0.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingRight: '0.25rem', overflowY: 'auto' }}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  style={{
                    fontSize: '1.02rem',
                    fontWeight: activeSection === item.id ? 700 : 500,
                    color: activeSection === item.id ? '#fbbf24' : '#d7d7d7',
                    textDecoration: 'none',
                    transition: 'all 0.15s ease',
                    padding: '0.9rem 0',
                    borderLeft: activeSection === item.id ? '4px solid #fbbf24' : '4px solid transparent',
                    paddingLeft: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      (e.target as HTMLAnchorElement).style.color = '#fff';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      (e.target as HTMLAnchorElement).style.color = '#d7d7d7';
                    }
                  }}
                  onClick={() => handleNavClick(item.id)}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: activeSection === item.id ? '#fbbf24' : 'transparent', boxShadow: activeSection === item.id ? '0 0 12px rgba(251,191,36,0.12)' : 'none', flexShrink: 0 }} />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.02)' }}>
              <div style={{ color: '#8c8c8c', fontSize: '0.8rem' }}>¿Necesitas algo más?</div>
              <div style={{ color: '#bdbdbd', fontSize: '0.775rem', marginTop: '0.35rem' }}>Contacto rápido y enlaces relevantes.</div>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
