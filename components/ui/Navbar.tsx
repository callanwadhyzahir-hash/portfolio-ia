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
    { name: "Contacto", href: "#contacto", id: "contacto" },
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

      {/* MOBILE MENU - DROPDOWN */}
      {mobileMenuOpen && (
        <nav 
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
            backgroundColor: "rgba(15, 15, 15, 0.98)",
            borderTop: "1px solid #222",
            padding: "1rem 1.5rem",
            animation: "slideDown 0.3s ease-in-out",
          }}
          className="md:hidden"
        >
          <style>{`
            @keyframes slideDown {
              from {
                opacity: 0;
                transform: translateY(-10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontSize: "1rem",
                fontWeight: activeSection === item.id ? "600" : "400",
                color: activeSection === item.id ? "#fbbf24" : "#999",
                textDecoration: "none",
                transition: "all 0.3s",
                padding: "0.75rem 0",
                borderLeft: activeSection === item.id ? "3px solid #fbbf24" : "3px solid transparent",
                paddingLeft: "0.75rem",
                display: "block",
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
      )}
    </header>
  );
}
