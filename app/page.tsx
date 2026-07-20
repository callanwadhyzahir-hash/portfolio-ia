'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import experienceData from '@/data/experience.json';
import projectsData from '@/data/projects.json';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div style={{ backgroundColor: "#0f0f0f", minHeight: "100vh", position: "relative", zIndex: 0 }}>
      
      {/* ==================== HERO SECTION ==================== */}
      <section 
        id="inicio" 
        style={{ 
          padding: "120px 40px", 
          maxWidth: "1200px", 
          margin: "0 auto", 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "flex-start", 
          minHeight: "100vh",
          position: "relative",
          zIndex: 2
        }}
      >
        {/* AVATAR + BADGE EN FILA */}
        <div 
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px"
          }}
        >
          {/* AVATAR CON HALO */}
          <div
            className="anim-fade-in anim-delay-1"
            style={{ 
              position: "relative",
              flexShrink: 0
            }}
          >
            {/* HALO GLOW EFFECT */}
            <div 
              style={{ 
                position: "absolute", 
                inset: "-20px", 
                borderRadius: "50%", 
                background: "radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 70%)",
                filter: "blur(20px)"
              }}
            />
            {/* AVATAR */}
            <div 
              style={{ 
                position: "relative",
                width: "120px", 
                height: "120px", 
                borderRadius: "50%", 
                backgroundColor: "#1a1a1a", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                border: "3px solid #fbbf24",
                overflow: "hidden"
              }}
            >
              <img 
                src="/foto de perfil.jpg" 
                alt="Wadhy Zahir" 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover"
                }} 
              />
            </div>
          </div>

          {/* BADGE CON DISPONIBILIDAD */}
          <a 
            href="https://wa.me/541158696318?text=Hola%20Wadhy,%20vi%20tu%20portfolio%20y%20me%20gustaria%20hablar%20sobre%20una%20oportunidad."
            target="_blank"
            rel="noopener noreferrer"
            className="anim-fade-in anim-delay-2"
            style={{ 
              display: "flex", 
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#1a1a1a", 
              padding: "12px 20px", 
              borderRadius: "20px", 
              fontSize: "0.875rem", 
              border: "1px solid #333",
              textDecoration: "none",
              color: "inherit",
              transition: "all 0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.borderColor = "#fbbf24";
              (e.target as HTMLAnchorElement).style.backgroundColor = "rgba(251, 191, 36, 0.1)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.borderColor = "#333";
              (e.target as HTMLAnchorElement).style.backgroundColor = "#1a1a1a";
            }}
          >
            <span style={{ display: "inline-block", animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite", width: "8px", height: "8px", backgroundColor: "#fbbf24", borderRadius: "50%" }}></span>
            ✨ Disponible para trabajar
          </a>
        </div>
        
        {/* NOMBRE EN DEGRADADO */}
        <h1 
          className="anim-fade-in anim-delay-3"
          style={{ 
            fontSize: "4rem", 
            fontWeight: "800", 
            marginBottom: "20px", 
            lineHeight: "1.1",
            letterSpacing: "-1px"
          }}
        >
          Hola, soy{' '}
          <span className="gradient-text" style={{ fontSize: "4rem" }}>
            Wadhy Zahir Callan
          </span>
        </h1>

        {/* DESCRIPCIÓN */}
        <p 
          className="anim-fade-in anim-delay-4"
          style={{ 
            fontSize: "1.125rem", 
            color: "#aaa", 
            marginBottom: "40px", 
            maxWidth: "700px", 
            lineHeight: "1.8"
          }}
        >
          {/* TODO: Actualiza con tu descripción personal */}
          Construyo software, automatizaciones e inteligencia artificial para transformar procesos complejos en experiencias simples.

Actualmente me especializo en desarrollo Full Stack, agentes de IA y automatización de procesos empresariales. Mi objetivo es diseñar productos que aumenten las capacidades humanas, no solo que automaticen tareas.
        </p>

        {/* BOTONES DE ACCIÓN */}
        <div 
          className="anim-fade-in anim-delay-4"
          style={{ 
            display: "flex", 
            gap: "15px",
            flexWrap: "wrap"
          }}
        >
          <a
            href="mailto:callanwadhyzahir@gmail.com"
            target="_blank"
            rel="noopener noreferrer" 
            style={{ 
              backgroundColor: "#fbbf24", 
              color: "#000", 
              padding: "14px 28px", 
              borderRadius: "8px", 
              border: "none", 
              cursor: "pointer", 
              fontSize: "0.95rem",
              fontWeight: "600",
              transition: "all 0.3s",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none"
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.target as HTMLAnchorElement).style.boxShadow = "0 12px 24px rgba(251, 191, 36, 0.3)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.target as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            📧 Contáctame
          </a>
          
          <a 
            href="https://www.linkedin.com/in/wadhy-zahir-callan-8a429a423"
            target="_blank"
            rel="noopener noreferrer" 
            style={{ 
              backgroundColor: "transparent", 
              color: "#fff", 
              padding: "14px 28px", 
              borderRadius: "8px", 
              border: "1.5px solid #444", 
              cursor: "pointer", 
              fontSize: "0.95rem",
              fontWeight: "600",
              transition: "all 0.3s",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.borderColor = "#fbbf24";
              (e.target as HTMLAnchorElement).style.color = "#fbbf24";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.borderColor = "#444";
              (e.target as HTMLAnchorElement).style.color = "#fff";
            }}
          >
            💼 LinkedIn
          </a>
          
          <a 
            href="https://github.com/wadhyzahircallanutn-ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: "transparent", 
              color: "#fff", 
              padding: "14px 28px", 
              borderRadius: "8px", 
              border: "1.5px solid #444", 
              cursor: "pointer", 
              fontSize: "0.95rem",
              fontWeight: "600",
              transition: "all 0.3s",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.borderColor = "#fbbf24";
              (e.target as HTMLAnchorElement).style.color = "#fbbf24";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.borderColor = "#444";
              (e.target as HTMLAnchorElement).style.color = "#fff";
            }}
          >
            🐙 GitHub
          </a>
        </div>
      </section>

      {/* ==================== EXPERIENCIA SECTION ==================== */}
      <section 
        id="experiencia" 
        style={{ 
          padding: "120px 40px", 
          maxWidth: "1200px", 
          margin: "0 auto", 
          borderTop: "1px solid #222",
          position: "relative",
          zIndex: 2
        }}
      >
        <h2 style={{ 
          fontSize: "3rem", 
          fontWeight: "700", 
          marginBottom: "60px", 
          display: "flex", 
          alignItems: "center", 
          gap: "12px" 
        }}>
          <span style={{ 
            width: "4px", 
            height: "2rem", 
            backgroundColor: "#fbbf24", 
            borderRadius: "2px", 
            display: "inline-block" 
          }}></span>
          💼 Experiencia laboral
        </h2>

        {/* TIMELINE */}
        <div style={{ 
          position: "relative",
          paddingLeft: "40px"
        }}>
          {/* LÍNEA VERTICAL */}
          <div style={{ 
            position: "absolute", 
            left: "0", 
            top: "0",
            bottom: "0",
            width: "2px", 
            backgroundColor: "#fbbf24"
          }} />

          {/* ITEMS DE EXPERIENCIA */}
          {mounted && experienceData.map((item, index) => (
            <div 
              key={item.id}
              className="anim-fade-in"
              style={{
                animationDelay: `${150 * index}ms`,
                marginBottom: "50px",
                position: "relative"
              }}
            >
              {/* PUNTO CON HALO PULSANTE */}
              <div style={{ 
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute", 
                left: "-48px", 
                top: "0",
                width: "28px",
                height: "28px"
              }}>
                {item.current ? (
                  <>
                    {/* PING ANIMATION */}
                    <div style={{
                      position: "absolute",
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      backgroundColor: "#fbbf24",
                      animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite"
                    }} />
                    {/* PUNTO CENTRAL */}
                    <div style={{
                      position: "relative",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: "#fbbf24",
                      border: "3px solid #0f0f0f",
                      zIndex: 1
                    }} />
                  </>
                ) : (
                  <div style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#fbbf24",
                    border: "3px solid #0f0f0f"
                  }} />
                )}
              </div>

              {/* CONTENIDO */}
              <div>
                <h3 style={{ 
                  fontSize: "1.3rem", 
                  color: "#fff", 
                  marginBottom: "5px",
                  fontWeight: "600"
                }}>
                  {item.position}
                  {item.current && (
                    <span style={{
                      marginLeft: "8px",
                      fontSize: "0.75rem",
                      backgroundColor: "#fbbf24",
                      color: "#000",
                      padding: "3px 8px",
                      borderRadius: "4px",
                      fontWeight: "600"
                    }}>
                      ACTUAL
                    </span>
                  )}
                </h3>
                <p style={{ 
                  fontSize: "1.1rem", 
                  color: "#fbbf24", 
                  marginBottom: "5px",
                  fontWeight: "500"
                }}>
                  {item.company}
                </p>
                <p style={{ 
                  fontSize: "0.9rem", 
                  color: "#888", 
                  marginBottom: "15px" 
                }}>
                
                </p>
                <p style={{ 
                  color: "#aaa", 
                  lineHeight: "1.8",
                  maxWidth: "600px"
                }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== PROYECTOS SECTION ==================== */}
      <section 
        id="proyectos" 
        style={{ 
          padding: "80px 20px md:120px md:40px", 
          maxWidth: "1200px", 
          margin: "0 auto", 
          borderTop: "1px solid #222",
          position: "relative",
          zIndex: 2
        }}
        className="px-5 md:px-10 py-20 md:py-32"
      >
        <style>{`
          @media (max-width: 640px) {
            #proyectos {
              padding: 60px 16px !important;
            }
            #proyectos h2 {
              font-size: 1.75rem !important;
              margin-bottom: 40px !important;
            }
            #proyectos > div {
              gap: 20px !important;
            }
          }
        `}</style>

        <h2 style={{ 
          fontSize: "3rem", 
          fontWeight: "700", 
          marginBottom: "60px", 
          display: "flex", 
          alignItems: "center", 
          gap: "12px" 
        }}>
          <span style={{ 
            width: "4px", 
            height: "2rem", 
            backgroundColor: "#fbbf24", 
            borderRadius: "2px", 
            display: "inline-block" 
          }}></span>
          💻 Proyectos
        </h2>

        {/* GRID DE PROYECTOS - RESPONSIVO */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: "30px",
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {mounted && projectsData.map((project, index) => (
            <div 
              key={project.id}
              className="anim-fade-in flex flex-col"
              style={{
                animationDelay: `${150 * index}ms`,
                position: "relative",
                backgroundColor: "#1a1a1a", 
                borderRadius: "12px", 
                overflow: "hidden", 
                border: "1px solid #222", 
                transition: "all 0.3s",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column"
              }}
              onMouseEnter={(e) => {
                const card = e.currentTarget as HTMLDivElement;
                card.style.borderColor = "#fbbf24";
                card.style.boxShadow = "0 20px 40px rgba(251, 191, 36, 0.15)";
                card.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget as HTMLDivElement;
                card.style.borderColor = "#222";
                card.style.boxShadow = "none";
                card.style.transform = "translateY(0)";
              }}
            >
              {/* IMAGEN CONTAINER - RESPONSIVA */}
              <div style={{ 
                minHeight: "180px",
                height: "auto",
                backgroundColor: "#1a1a1a", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                aspectRatio: "16/10",
                background: "linear-gradient(135deg, rgba(15,15,15,0.8) 0%, rgba(26,26,26,0.8) 100%)"
              }}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.name}
                    style={{
                      width: "90%",
                      height: "90%",
                      maxWidth: "280px",
                      maxHeight: "160px",
                      objectFit: "contain",
                      objectPosition: "center",
                      transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      filter: "drop-shadow(0 10px 30px rgba(251, 191, 36, 0.1))"
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLImageElement).style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLImageElement).style.transform = "scale(1)";
                    }}
                  />
                ) : (
                  <span style={{ color: "#666" }}>Imagen del proyecto</span>
                )}
                {/* OVERLAY GRADIENT MEJORADO */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)",
                  pointerEvents: "none"
                }} />
                {/* BORDE DECORATIVO */}
                <div style={{
                  position: "absolute",
                  inset: "8px",
                  border: "1px solid rgba(251, 191, 36, 0.1)",
                  borderRadius: "8px",
                  pointerEvents: "none"
                }} />
              </div>

              {/* CONTENIDO - FLEX GROW PARA LLENAR ESPACIO */}
              <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ 
                  fontSize: "1.2rem", 
                  marginBottom: "10px",
                  fontWeight: "600"
                }}>
                  {project.name}
                </h3>
                <p style={{ 
                  color: "#aaa", 
                  marginBottom: "15px", 
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                  flex: 1
                }}>
                  {project.description}
                </p>

                {/* TECNOLOGÍAS */}
                <div style={{ 
                  display: "flex", 
                  gap: "8px", 
                  flexWrap: "wrap",
                  marginBottom: "15px"
                }}>
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      style={{ 
                        backgroundColor: "#2a2a2a", 
                        padding: "4px 10px", 
                        borderRadius: "4px", 
                        fontSize: "0.75rem", 
                        color: "#fbbf24",
                        border: "1px solid #333",
                        transition: "all 0.3s"
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLSpanElement).style.borderColor = "#fbbf24";
                        (e.target as HTMLSpanElement).style.backgroundColor = "rgba(251, 191, 36, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLSpanElement).style.borderColor = "#333";
                        (e.target as HTMLSpanElement).style.backgroundColor = "#2a2a2a";
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINKS - RESPONSIVO */}
                <div style={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  marginTop: "auto"
                }}
                className="flex flex-col md:flex-row gap-3 md:gap-2"
                >
                  {project.links.preview && (
                    <a 
                      href={project.links.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        padding: "10px 16px",
                        backgroundColor: "transparent",
                        border: "1px solid #444",
                        borderRadius: "6px",
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        textAlign: "center",
                        transition: "all 0.3s",
                        cursor: "pointer"
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLAnchorElement).style.borderColor = "#fbbf24";
                        (e.target as HTMLAnchorElement).style.color = "#fbbf24";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLAnchorElement).style.borderColor = "#444";
                        (e.target as HTMLAnchorElement).style.color = "#fff";
                      }}
                    >
                      Ver proyecto →
                    </a>
                  )}
                  {project.links.github && (
                    <a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        padding: "10px 16px",
                        backgroundColor: "transparent",
                        border: "1px solid #444",
                        borderRadius: "6px",
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        textAlign: "center",
                        transition: "all 0.3s",
                        cursor: "pointer"
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLAnchorElement).style.borderColor = "#fbbf24";
                        (e.target as HTMLAnchorElement).style.color = "#fbbf24";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLAnchorElement).style.borderColor = "#444";
                        (e.target as HTMLAnchorElement).style.color = "#fff";
                      }}
                    >
                      Código →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SOBRE MI SECTION ==================== */}
      <section 
        id="sobre" 
        style={{ 
          padding: "120px 40px md:120px md:40px",
          maxWidth: "1200px", 
          margin: "0 auto", 
          borderTop: "1px solid #222",
          position: "relative",
          zIndex: 2
        }}
        className="px-5 md:px-10 py-20 md:py-32"
      >
        <style>{`
          @media (max-width: 640px) {
            #sobre {
              padding: 60px 16px !important;
            }
            #sobre h2 {
              font-size: 1.75rem !important;
              margin-bottom: 40px !important;
            }
            #sobre > div {
              grid-template-columns: 1fr !important;
              gap: 30px !important;
            }
            #sobre img {
              max-height: 350px !important;
            }
          }
        `}</style>

        <h2 style={{ 
          fontSize: "3rem", 
          fontWeight: "700", 
          marginBottom: "60px", 
          display: "flex", 
          alignItems: "center", 
          gap: "12px" 
        }}>
          <span style={{ 
            width: "4px", 
            height: "2rem", 
            backgroundColor: "#fbbf24", 
            borderRadius: "2px", 
            display: "inline-block" 
          }}></span>
          👤 Sobre mí
        </h2>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1fr", 
          gap: "60px", 
          alignItems: "center"
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
        >
          {/* TEXTO */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}>
            <p style={{ color: "#aaa", lineHeight: "1.8", marginBottom: "0", fontSize: "0.95rem" }}>
              Desde que descubrí el desarrollo de software entendí que programar no consiste únicamente en escribir código, sino en diseñar sistemas capaces de resolver problemas reales.
            </p>
            <p style={{ color: "#aaa", lineHeight: "1.8", marginBottom: "0", fontSize: "0.95rem" }}>
              Mi mayor interés está en la Inteligencia Artificial aplicada a negocios, la automatización de procesos y la creación de plataformas digitales escalables.
            </p>
            <p style={{ color: "#aaa", lineHeight: "1.8", marginBottom: "0", fontSize: "0.95rem" }}>
              Actualmente estoy desarrollando proyectos propios orientados a IA, software empresarial y automatización, mientras continúo ampliando mis conocimientos en arquitectura de software, ingeniería de sistemas y desarrollo Full Stack.
            </p>
            <p style={{ color: "#aaa", lineHeight: "1.8", marginBottom: "0", fontSize: "0.95rem" }}>
              Cuando no estoy codificando, me puedes encontrar explorando nuevas tecnologías, contribuyendo a proyectos open source, o compartiendo lo que he aprendido con la comunidad.
            </p>
          </div>
          
          {/* IMAGEN ENCUADRADA */}
          <div style={{
            width: "100%",
            height: "450px",
            backgroundColor: "#1a1a1a",
            borderRadius: "12px",
            border: "2px solid #fbbf24",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            boxShadow: "0 10px 40px rgba(251, 191, 36, 0.1), inset 0 0 20px rgba(251, 191, 36, 0.05)",
            transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            cursor: "pointer",
            position: "relative"
          }}
          onMouseEnter={(e) => {
            const div = e.currentTarget as HTMLDivElement;
            div.style.borderColor = "#fbbf24";
            div.style.boxShadow = "0 20px 50px rgba(251, 191, 36, 0.25), inset 0 0 30px rgba(251, 191, 36, 0.1)";
            div.style.transform = "translateY(-4px)";
          }}
          onMouseLeave={(e) => {
            const div = e.currentTarget as HTMLDivElement;
            div.style.borderColor = "#fbbf24";
            div.style.boxShadow = "0 10px 40px rgba(251, 191, 36, 0.1), inset 0 0 20px rgba(251, 191, 36, 0.05)";
            div.style.transform = "translateY(0)";
          }}
          className="md:h-96 h-80"
          >
            <img 
              src="/foto de peerfil 2.png" 
              alt="Foto de perfil Wadhy" 
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover",
                objectPosition: "center",
                transition: "transform 0.3s ease",
                display: "block"
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLImageElement).style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLImageElement).style.transform = "scale(1)";
              }}
            />
            {/* OVERLAY GRADIENT SUTIL */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(251, 191, 36, 0) 0%, rgba(251, 191, 36, 0.05) 100%)",
              pointerEvents: "none",
              borderRadius: "10px"
            }} />
          </div>
        </div>
      </section>

      {/* ==================== hablamos SECTION ==================== */}
      <section 
        id="hablamos" 
        style={{ 
          padding: "120px 40px md:120px md:40px",
          maxWidth: "1200px", 
          margin: "0 auto", 
          borderTop: "1px solid #222",
          position: "relative",
          zIndex: 2,
          color: "#fff"
        }}
        className="px-5 md:px-10 py-20 md:py-32"
      >
        <style>{`
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes glow {
            0%, 100% {
              box-shadow: 0 30px 90px rgba(251, 191, 36, 0.08);
            }
            50% {
              box-shadow: 0 30px 90px rgba(251, 191, 36, 0.15);
            }
          }

          .contact-section-left {
            animation: slideInUp 0.8s ease-out;
          }

          .contact-section-right {
            animation: slideInUp 0.8s ease-out 0.2s both;
          }

          #hablamos > div {
            animation: fadeIn 0.6s ease-out;
          }

          @media (max-width: 640px) {
            #hablamos {
              padding: 60px 16px !important;
            }
            #hablamos h2 {
              font-size: 2rem !important;
              margin-bottom: 24px !important;
            }
            #hablamos > div {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
            #bp-embedded-webchat {
              min-height: 360px !important;
              max-height: 480px !important;
            }
          }
        `}</style>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "60px",
          alignItems: "stretch",
        }}
        className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-stretch lg:items-start"
        >
          {/* SECCIÓN IZQUIERDA - INFORMACIÓN */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            gap: "32px",
            justifyContent: "flex-start"
          }}
          className="contact-section-left lg:col-span-2"
          >
            {/* HEADER CON TÍTULO */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}>
              <p style={{
                margin: 0,
                color: "#fbbf24",
                fontWeight: "700",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontSize: "0.75rem",
              }}>
                💬 Chat en vivo
              </p>
              <h2 style={{ 
                fontSize: "3rem", 
                fontWeight: "800", 
                margin: "0",
                lineHeight: 1.1,
                background: "linear-gradient(135deg, #fff 0%, #d1d5db 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                ¿Hablamos?
              </h2>
            </div>

            {/* DESCRIPCIÓN PRINCIPAL */}
            <p style={{ 
              fontSize: "1.05rem", 
              color: "#ccc", 
              lineHeight: 1.8,
              margin: 0,
              fontWeight: "400"
            }}>
              ¿Tenés una idea, un desafío técnico o simplemente querés conversar con el bot antes de iniciar un proyecto?
            </p>

            {/* CAJA DESTACADA */}
            <div style={{
              backgroundColor: "rgba(251, 191, 36, 0.05)",
              border: "1px solid rgba(251, 191, 36, 0.2)",
              borderRadius: "16px",
              padding: "24px",
              color: "#ddd",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.backgroundColor = "rgba(251, 191, 36, 0.08)";
              el.style.borderColor = "rgba(251, 191, 36, 0.4)";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 10px 30px rgba(251, 191, 36, 0.1)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.backgroundColor = "rgba(251, 191, 36, 0.05)";
              el.style.borderColor = "rgba(251, 191, 36, 0.2)";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
            >
              <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.7, fontWeight: "500" }}>
                Ingresá tu consulta, pedí una propuesta o probá el bot para conocer cómo puedo ayudarte en <span style={{ color: "#fbbf24", fontWeight: "700" }}>software, IA y automatización</span>.
              </p>
            </div>

            {/* CTA SECUNDARIO */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "auto"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}>
                <div style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
                }} />
                <p style={{ margin: 0, color: "#aaa", fontSize: "0.85rem" }}>
                  Bot disponible 24/7
                </p>
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}>
                <div style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#fbbf24"
                }} />
                <p style={{ margin: 0, color: "#aaa", fontSize: "0.85rem" }}>
                  Respuesta instantánea
                </p>
              </div>
            </div>
          </div>

          {/* SECCIÓN DERECHA - CHAT */}
          <div style={{
            width: "100%",
            height: "100%",
            borderRadius: "24px",
            overflow: "hidden",
            background: "linear-gradient(135deg, rgba(15,15,15,0.98) 0%, rgba(20,20,20,0.98) 100%)",
            border: "1px solid rgba(251, 191, 36, 0.15)",
            boxShadow: "0 30px 90px rgba(251, 191, 36, 0.1), inset 0 1px 0 rgba(255,255,255,0.08)",
            transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            animation: "glow 3s ease-in-out infinite",
            display: "flex",
            flexDirection: "column",
            minHeight: "520px"
          }}
          className="contact-section-right lg:col-span-3"
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLDivElement;
            el.style.borderColor = "rgba(251, 191, 36, 0.3)";
            el.style.transform = "translateY(-4px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLDivElement;
            el.style.borderColor = "rgba(251, 191, 36, 0.15)";
            el.style.transform = "translateY(0)";
          }}
          >
            {/* HEADER DEL CHAT */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 28px",
              borderBottom: "1px solid rgba(251, 191, 36, 0.1)",
              backgroundColor: "rgba(251, 191, 36, 0.03)",
              backgroundImage: "linear-gradient(90deg, rgba(251, 191, 36, 0.05) 0%, rgba(251, 191, 36, 0) 100%)",
              flexShrink: 0
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
                }} />
                <div>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "#fbbf24", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: "700" }}>
                    🤖 Atlas Bot
                  </p>
                  <p style={{ margin: "4px 0 0 0", color: "#888", fontSize: "0.75rem" }}>
                    En línea
                  </p>
                </div>
              </div>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "rgba(251, 191, 36, 0.15)",
                display: "grid",
                placeItems: "center",
                color: "#fbbf24",
                fontWeight: "700",
                fontSize: "1.1rem",
                border: "1px solid rgba(251, 191, 36, 0.2)"
              }}>
                🤖
              </div>
            </div>

            {/* CONTENEDOR DEL CHAT */}
            <div
              id="bp-embedded-webchat"
              style={{
                width: "100%",
                flex: 1,
                minHeight: "420px",
                maxHeight: "520px",
                backgroundColor: "#0f0f0f",
                backgroundImage: "radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.02) 0%, transparent 50%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }}
            />
          </div>
        </div>

        {/* ESTILOS ADICIONALES */}
        <style>{`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }

          @media (max-width: 768px) {
            .contact-section-left, .contact-section-right {
              animation: slideInUp 0.8s ease-out !important;
            }
          }
        `}</style>

        <Script src="https://cdn.botpress.cloud/webchat/v3.6/inject.js" strategy="afterInteractive" />
        <Script src="https://files.bpcontent.cloud/2026/07/19/01/20260719015847-89LDK7DQ.js" strategy="afterInteractive" />
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer 
        style={{ 
          padding: "60px 40px md:60px md:40px",
          borderTop: "1px solid #222",
          textAlign: "center",
          color: "#666",
          fontSize: "0.9rem",
          position: "relative",
          zIndex: 2,
          background: "linear-gradient(180deg, rgba(15,15,15,0) 0%, rgba(15,15,15,0.4) 100%)"
        }}
        className="px-5 md:px-10"
      >
        <style>{`
          @media (max-width: 640px) {
            footer {
              padding: 40px 16px !important;
              font-size: 0.8rem;
            }
          }
        `}</style>
        <p style={{ margin: 0, fontWeight: "500" }}>
          © 2026 Wadhy Zahir. Built with <span style={{ color: "#fbbf24" }}>Next.js</span> • Designed for AI & Innovation
        </p>
        <p style={{ margin: "12px 0 0 0", color: "#555", fontSize: "0.8rem" }}>
          Portfolio v1.0 • Passion for Code & Artificial Intelligence
        </p>
      </footer>
    </div>
  );
}

