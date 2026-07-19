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
          💻 Proyectos
        </h2>

        {/* GRID DE PROYECTOS */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", 
          gap: "30px" 
        }}>
          {mounted && projectsData.map((project, index) => (
            <div 
              key={project.id}
              className="anim-fade-in"
              style={{
                animationDelay: `${150 * index}ms`,
                position: "relative",
                backgroundColor: "#1a1a1a", 
                borderRadius: "12px", 
                overflow: "hidden", 
                border: "1px solid #222", 
                transition: "all 0.3s",
                cursor: "pointer"
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
              {/* IMAGEN CONTAINER */}
              <div style={{ 
                height: "200px", 
                backgroundColor: "#2a2a2a", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                position: "relative",
                overflow: "hidden"
              }}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                      padding: "20px",
                      transition: "transform 0.3s"
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLImageElement).style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLImageElement).style.transform = "scale(1)";
                    }}
                  />
                ) : (
                  <span style={{ color: "#666" }}>Imagen del proyecto</span>
                )}
                {/* OVERLAY GRADIENT */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "100px",
                  background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  pointerEvents: "none"
                }} />
              </div>

              {/* CONTENIDO */}
              <div style={{ padding: "20px" }}>
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
                  lineHeight: "1.6"
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

                {/* LINKS */}
                <div style={{
                  display: "flex",
                  gap: "10px"
                }}>
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
          👤 Sobre mí
        </h2>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1fr", 
          gap: "60px", 
          alignItems: "center" 
        }}>
          <div>
            {/* TODO: Actualiza con tu biografía */}
            <p style={{ color: "#aaa", lineHeight: "1.8", marginBottom: "20px" }}>
             Desde que descubrí el desarrollo de software entendí que programar no consiste únicamente en escribir código, sino en diseñar sistemas capaces de resolver problemas reales.

Mi mayor interés está en la Inteligencia Artificial aplicada a negocios, la automatización de procesos y la creación de plataformas digitales escalables.

Actualmente estoy desarrollando proyectos propios orientados a IA, software empresarial y automatización, mientras continúo ampliando mis conocimientos en arquitectura de software, ingeniería de sistemas y desarrollo Full Stack.

Disfruto aprender tecnologías nuevas, experimentar con herramientas modernas y construir productos que generen impacto real en las personas y organizaciones.
            </p>
            <p style={{ color: "#aaa", lineHeight: "1.8" }}>
              Cuando no estoy codificando, me puedes encontrar explorando nuevas tecnologías, contribuyendo a proyectos open source, o compartiendo lo que he aprendido con la comunidad.
            </p>
          </div>
          
          <div style={{
            width: "100%",
            height: "400px",
            backgroundColor: "#1a1a1a",
            borderRadius: "12px",
            border: "1px solid #222",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
          }}>
            <img 
              src="/foto de peerfil 2.png" 
              alt="Foto de perfil" 
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover",
                objectPosition: "center"
              }} 
            />
          </div>
        </div>
      </section>

      {/* ==================== CONTACTO SECTION ==================== */}
      <section 
        id="contacto" 
        style={{ 
          padding: "120px 40px", 
          maxWidth: "1200px", 
          margin: "0 auto", 
          borderTop: "1px solid #222",
          position: "relative",
          zIndex: 2,
          color: "#fff"
        }}
      >
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "40px",
          alignItems: "start",
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            gap: "24px"
          }}>
            <div>
              <p style={{
                margin: 0,
                color: "#fbbf24",
                fontWeight: "700",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontSize: "0.82rem"
              }}>
                Chat en vivo
              </p>
              <h2 style={{ 
                fontSize: "3rem", 
                fontWeight: "700", 
                margin: "18px 0 0 0",
                lineHeight: 1.05
              }}>
                ¿Hablamos?
              </h2>
            </div>

            <p style={{ 
              fontSize: "1.05rem", 
              color: "#d1d5db", 
              lineHeight: 1.8,
              maxWidth: "540px"
            }}>
              ¿Tenés una idea, un desafío técnico o simplemente querés conversar con el bot antes de iniciar un proyecto?
              Aquí podés probar el asistente de Botpress directamente en la página y obtener respuestas al instante.
            </p>

            <div style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding: "24px",
              color: "#ddd",
              boxShadow: "0 24px 70px rgba(0,0,0,0.22)",
              maxWidth: "540px"
            }}>
              <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.7 }}>
                Ingresá tu consulta, pedí una propuesta o probá el bot para conocer cómo puedo ayudarte en software, IA y automatización.
              </p>
            </div>
          </div>

          <div style={{
            width: "100%",
            borderRadius: "30px",
            overflow: "hidden",
            background: "linear-gradient(180deg, rgba(15,15,15,0.95) 0%, rgba(17,17,17,0.95) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 30px 90px rgba(0, 0, 0, 0.28)",
          }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "24px 28px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              backgroundColor: "rgba(255,255,255,0.03)"
            }}>
              <div>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#fbbf24", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Chat con el bot
                </p>
                <p style={{ margin: "8px 0 0 0", color: "#aaa", fontSize: "0.9rem" }}>
                  Respuestas rápidas desde Botpress
                </p>
              </div>
              <span style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                backgroundColor: "#fbbf24",
                display: "grid",
                placeItems: "center",
                color: "#111",
                fontWeight: "700"
              }}>
                B
              </span>
            </div>

            <div
              id="bp-embedded-webchat"
              style={{
                width: "100%",
                minHeight: "650px",
                backgroundColor: "#0f0f0f"
              }}
            />
          </div>
        </div>

        <Script src="https://cdn.botpress.cloud/webchat/v3.6/inject.js" strategy="afterInteractive" />
        <Script src="https://files.bpcontent.cloud/2026/07/19/01/20260719015847-89LDK7DQ.js" strategy="afterInteractive" />
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer 
        style={{ 
          padding: "40px", 
          borderTop: "1px solid #222",
          textAlign: "center",
          color: "#666",
          fontSize: "0.9rem",
          position: "relative",
          zIndex: 2
        }}
      >
        <p>© Mi portafolio 2026. All rights reserved</p>
      </footer>
    </div>
  );
}

