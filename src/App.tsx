import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

function App() {
  const nameRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const aboutSectionRef = useRef<HTMLDivElement>(null)
  const aboutContentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipContent, setTooltipContent] = useState('')
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      
      tl.fromTo(nameRef.current, 
        { 
          opacity: 0,
          scale: 1.2,
          filter: "blur(10px)"
        },
        { 
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power2.out"
        }
      )
      
      .to({}, { duration: 0.4 })
      
      .to(nameRef.current, {
        x: -200,
        duration: 1,
        ease: "power2.inOut"
      })
      
      .fromTo(descriptionRef.current,
        {
          opacity: 0,
          scale: 0.8,
          filter: "blur(5px)"
        },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out"
        },
        "-=0.3"
      )

      ScrollTrigger.create({
        trigger: aboutSectionRef.current,
        start: "top 80%",
        animation: gsap.timeline()
          .fromTo(aboutContentRef.current,
            {
              opacity: 0,
              y: 150,
              scale: 0.8,
              rotationX: 45
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationX: 0,
              duration: 1.8,
              ease: "power4.out"
            }
          )
          .fromTo(".about-title",
            {
              opacity: 0,
              rotationY: 90,
              scale: 0.5,
              transformOrigin: "center center",
              filter: "blur(20px)"
            },
            {
              opacity: 1,
              rotationY: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 1.5,
              ease: "elastic.out(1, 0.8)"
            },
            "-=1.2"
          )
          .fromTo(".about-text p",
            {
              opacity: 0,
              y: 80,
              rotationX: 45,
              transformOrigin: "center top",
              filter: "blur(15px)",
              scale: 0.9
            },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              filter: "blur(0px)",
              scale: 1,
              duration: 1.2,
              ease: "power4.out",
              stagger: {
                amount: 0.6,
                from: "start"
              }
            },
            "-=0.5"
          )
          .to(".about-text p .highlight-word",
            {
              color: "#a1a1aa",
              duration: 0.8,
              ease: "power2.out",
              stagger: {
                amount: 1.2,
                from: "random"
              }
            },
            "-=0.8"
          )
      })

      ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 85%",
        animation: gsap.fromTo(".stat-card",
          {
            opacity: 0,
            y: 60,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.2
          }
        )
      })

      ScrollTrigger.create({
        trigger: cardsRef.current,
        start: "top 85%",
        animation: gsap.timeline()
          .fromTo(".info-card",
            {
              opacity: 0,
              y: 100,
              rotationY: 45,
              scale: 0.8
            },
            {
              opacity: 1,
              y: 0,
              rotationY: 0,
              scale: 1,
              duration: 1.2,
              ease: "back.out(1.7)",
              stagger: {
                amount: 0.8,
                from: "center"
              }
            }
          )
          .fromTo(".info-card",
            {
              filter: "brightness(0.5)"
            },
            {
              filter: "brightness(1)",
              duration: 0.8,
              ease: "power2.out",
              stagger: 0.1
            },
            "-=0.5"
          )
      })

      ScrollTrigger.create({
        trigger: timelineRef.current,
        start: "top 85%",
        animation: gsap.timeline()
          .fromTo(".section-subtitle",
            {
              opacity: 0,
              scale: 0.5,
              rotationZ: 10
            },
            {
              opacity: 1,
              scale: 1,
              rotationZ: 0,
              duration: 1,
              ease: "elastic.out(1, 0.5)"
            }
          )
          .fromTo(".timeline::before",
            {
              scaleY: 0,
              transformOrigin: "top"
            },
            {
              scaleY: 1,
              duration: 1.5,
              ease: "power2.out"
            },
            "-=0.5"
          )
          .fromTo(".timeline-item",
            {
              opacity: 0,
              x: 100,
              scale: 0.9
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.8,
              ease: "back.out(1.7)",
              stagger: 0.3
            },
            "-=1"
          )
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  const handleMouseEnter = (e: React.MouseEvent, content: string) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.bottom + 15
    })
    setTooltipContent(content)
    setShowTooltip(true)
    
    if (tooltipRef.current) {
      gsap.fromTo(tooltipRef.current, 
        { opacity: 0, y: -10, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "back.out(1.7)" }
      )
    }
  }

  const handleMouseLeave = () => {
    if (tooltipRef.current) {
      gsap.to(tooltipRef.current, { 
        opacity: 0, 
        y: -10, 
        scale: 0.9, 
        duration: 0.2, 
        ease: "power2.in",
        onComplete: () => setShowTooltip(false)
      })
    }
  }

  return (
    <div ref={containerRef} className="app">
      <div className="hero-section">
        <div ref={nameRef} className="name-container">
          <h1 className="main-name">Ricardo Macedo Filho</h1>
        </div>
        
        <div ref={descriptionRef} className="description-container">
          <div className="description-content">
            <h2 className="role-title">Desenvolvedor</h2>
            <p className="role-subtitle">Full Stack</p>
            <div className="tech-stack">
              <span 
                className="tech-item"
                onMouseEnter={(e) => handleMouseEnter(e, 'Node.js, Python, Java, APIs REST, Bancos de dados, Microsserviços')}
                onMouseLeave={handleMouseLeave}
              >
                Backend
              </span>
              <span className="separator">•</span>
              <span 
                className="tech-item"
                onMouseEnter={(e) => handleMouseEnter(e, 'React, TypeScript, Next.js, Vue.js, CSS/SASS, Design responsivo')}
                onMouseLeave={handleMouseLeave}
              >
                Frontend
              </span>
            </div>
          </div>
        </div>

        {showTooltip && (
          <div 
            ref={tooltipRef}
            className="tooltip"
            style={{
              left: tooltipPosition.x,
              top: tooltipPosition.y,
            }}
          >
            {tooltipContent}
          </div>
        )}
      </div>

      <section ref={aboutSectionRef} className="about-section">
        <div ref={aboutContentRef} className="about-content">
          <h2 className="about-title">Sobre Mim</h2>
          <div className="about-text">
            <p className="interactive-paragraph">
              Me chamo <span className="highlight-word" data-info="Ricardo Roberto Macedo Filho">Ricardo Roberto Macedo Filho</span>, tenho 
              <span className="highlight-word" data-info="Nascido em 2006">18 anos</span> e atualmente estou cursando o 
              <span className="highlight-word" data-info="Graduação em andamento">primeiro período de Engenharia de Software</span>. 
              Estudo <span className="highlight-word" data-info="Node.js, Python, Java, APIs REST">desenvolvimento back-end</span> e 
              <span className="highlight-word" data-info="React, TypeScript, Next.js, CSS">front-end</span> há aproximadamente 
              <span className="highlight-word" data-info="Experiência desde 2022">2 anos</span> e mantenho uma 
              <span className="highlight-word" data-info="Dedicação e consistência">rotina de estudos bastante ativa</span>, sempre buscando 
              aprofundar meus conhecimentos e evoluir como desenvolvedor.
            </p>
            <p className="interactive-paragraph">
              Tenho grande interesse em construir <span className="highlight-word" data-info="Arquitetura escalável e confiável">sistemas robustos e escaláveis</span>, 
              com foco especial em <span className="highlight-word" data-info="Clean Code, SOLID, Design Patterns">boas práticas de código</span>, 
              <span className="highlight-word" data-info="Otimização e velocidade">performance</span> e 
              <span className="highlight-word" data-info="Estrutura e arquitetura">organização</span>. Estou em 
              <span className="highlight-word" data-info="Sempre aprendendo novas tecnologias">constante aprendizado</span> e aberto a 
              <span className="highlight-word" data-info="Oportunidades de crescimento">novas oportunidades</span> que me permitam crescer na área da tecnologia.
            </p>
          </div>
        </div>

        <div ref={cardsRef} className="info-cards-section">
          <div className="cards-grid">
            <div className="info-card">
              <h3>Design & UI/UX</h3>
              <p>Criação de interfaces elegantes e intuitivas, sempre pensando na melhor experiência do usuário.</p>
            </div>
            <div className="info-card">
              <h3>Performance</h3>
              <p>Otimização de aplicações para máxima performance, utilizando as melhores práticas de desenvolvimento.</p>
            </div>
            <div className="info-card">
              <h3>Full Stack</h3>
              <p>Desenvolvimento completo de aplicações, desde a concepção da ideia até o deploy em produção.</p>
            </div>
          </div>
        </div>

        <div ref={timelineRef} className="timeline-section">
          <h3 className="section-subtitle">Minha Jornada</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2025</div>
              <div className="timeline-content">
                <h4>Desenvolvimento Full Stack</h4>
                <p>Comecei a estudar angular e me especializando em Java, Spring Boot, APIs REST, Bancos de dados e Microsserviços.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2024</div>
              <div className="timeline-content">
                <h4>Especialização Backend</h4>
                <p>Foco em desenvolvimento backend, utilizando Java, Spring Boot, APIs REST, Bancos de dados e Microsserviços.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2023</div>
              <div className="timeline-content">
                <h4>Especialização Frontend</h4>
                <p>Logo após, comecei a estudar JavaScript, TypeScript e React, para me melhorar no desenvolvimento frontend.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2022</div>
              <div className="timeline-content">
                <h4>Primeiro Contato</h4>
                <p>Descobri minha paixão pela programação e comecei estudando o basíco sobre, que foi algoritmos, lógica de programação, HTML e CSS.</p>
              </div>
            </div>
          </div>
        </div>

        {showTooltip && (
          <div 
            ref={tooltipRef}
            className="tooltip"
            style={{
              left: tooltipPosition.x,
              top: tooltipPosition.y,
            }}
          >
            {tooltipContent}
          </div>
        )}
      </section>
    </div>
  )
}

export default App