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
  const cardsRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipContent, setTooltipContent] = useState('')
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const [activeFilter, setActiveFilter] = useState('todos')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768
      if (isMobile && nameRef.current) {
        gsap.set(nameRef.current, { x: 0, transform: "none" })
      }
    }

    window.addEventListener('resize', handleResize)
    
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth <= 768
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
      
      if (!isMobile) {
        tl.to(nameRef.current, {
          x: -200,
          duration: 1,
          ease: "power2.inOut"
        })
      }
      
      tl.fromTo(descriptionRef.current,
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
        isMobile ? "-=1.5" : "-=0.3"
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
        trigger: skillsRef.current,
        start: "top 85%",
        animation: gsap.timeline()
          .fromTo(".skills-title",
            {
              opacity: 0,
              y: 60,
              scale: 0.8
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.2,
              ease: "power4.out"
            }
          )
          .fromTo(".skill-category",
            {
              opacity: 0,
              y: 80,
              rotationX: 45
            },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              duration: 1,
              ease: "power3.out",
              stagger: 0.2
            },
            "-=0.8"
          )
          .fromTo(".skill-item",
            {
              opacity: 0,
              scale: 0.7,
              rotationY: 45
            },
            {
              opacity: 1,
              scale: 1,
              rotationY: 0,
              duration: 0.8,
              ease: "back.out(1.7)",
              stagger: {
                amount: 1.2,
                from: "random"
              }
            },
            "-=0.6"
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

      ScrollTrigger.create({
        trigger: projectsRef.current,
        start: "top 80%",
        animation: gsap.timeline()
          .fromTo(".projects-title",
            {
              opacity: 0,
              y: 60,
              scale: 0.8
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.2,
              ease: "power4.out"
            }
          )
          .fromTo(".filter-buttons .filter-btn",
            {
              opacity: 0,
              y: 30,
              scale: 0.9
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "back.out(1.7)",
              stagger: 0.1
            },
            "-=0.8"
          )
          .fromTo(".project-item",
            {
              opacity: 0,
              y: 80,
              rotationX: 30
            },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              duration: 1,
              ease: "power3.out",
              stagger: 0.15
            },
            "-=0.6"
          )
      })

      ScrollTrigger.create({
        trigger: contactRef.current,
        start: "top 85%",
        animation: gsap.timeline()
          .fromTo(".contact-title",
            {
              opacity: 0,
              y: 50,
              scale: 0.8
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "back.out(1.7)"
            }
          )
          .fromTo(".contact-subtitle",
            {
              opacity: 0,
              y: 30
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out"
            },
            "-=0.5"
          )
          .fromTo(".contact-links .contact-link",
            {
              opacity: 0,
              y: 40,
              scale: 0.8
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "back.out(1.7)",
              stagger: 0.15
            },
            "-=0.5"
          )
      })

    }, containerRef)

    return () => {
      ctx.revert()
      window.removeEventListener('resize', handleResize)
    }
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

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
  }

  const projects = [
    {
      id: 1,
      title: "MoneyTracker API",
      description: "API em Java + Spring Boot para gerenciamento de finanças. Permite cadastrar orçamentos, categorias e transações com persistência segura.",
      category: "backend",
      technologies: ["Java", "Spring Boot", "PostgreSQL"],
      icon: "💰",
      githubUrl: "https://github.com/MaccedoFilho/moneytracker",
      projectUrl: "null"
    },
    {
      id: 2,
      title: "Gestão de Funcionários",
      description: "Sistema de gerenciamento de funcionários, cargos e departamentos. Permite cadastrar, atualizar e listar registros com persistência em banco relacional.",
      category: "backend",
      technologies: ["Java", "Spring Boot", "MySQL"],
      icon: "👥",
      githubUrl: "https://github.com/MaccedoFilho/Gestao-de-Funcionarios",
      projectUrl: "null"
    },
    {
      id: 3,
      title: "Controle de Faturas",
      description: "API RESTful desenvolvida para controle de faturas e contas a pagar/receber, com autenticação e integração com banco Oracle.",
      category: "backend",
      technologies: ["Java", "Spring Boot", "Oracle"],
      icon: "📄",
      githubUrl: "https://github.com/MaccedoFilho/Controle-de-faturas",
      projectUrl: "null"
    },
    {
      id: 4,
      title: "Agenda de Tarefas",
      description: "Gerenciamento de tarefas com criação, edição, remoção e filtros por status. Utiliza Local Storage para persistência.",
      category: "frontend",
      technologies: ["HTML", "CSS", "JavaScript"],
      icon: "📅",
      githubUrl: "https://github.com/MaccedoFilho/Agenda-de-Tarefas",
      projectUrl: "https://maccedofilho.github.io/Agenda-de-Tarefas/"
    },
    {
      id: 5,
      title: "zonx",
      description: "Plataforma digital completa com interface moderna e funcionalidades avançadas para experiência do usuário otimizada.",
      category: "frontend",
      technologies: ["JavaScript", "React", "CSS"],
      icon: "🚀",
      githubUrl: "https://github.com/MaccedoFilho/zonx",
      projectUrl: "https://www.zonx.com.br/"
    },
    {
      id: 6,
      title: "Plataforma de Cursos",
      description: "Interface para plataforma de cursos online com player de vídeo personalizado e layout responsivo.",
      category: "frontend",
      technologies: ["TypeScript", "React", "CSS"],
      icon: "🎓",
      githubUrl: "https://github.com/MaccedoFilho/CodeMind",
      projectUrl: "https://maccedofilho.github.io/CodeMind/"
    },
    {
      id: 7,
      title: "NutriSync",
      description: "Aplicação full stack para controle de refeições diárias com interface moderna e intuitiva.",
      category: "fullstack",
      technologies: ["Next.js", "Tailwind CSS", "React Hook"],
      icon: "🍎",
      githubUrl: "https://github.com/MaccedoFilho/NutriSync",
      projectUrl: "https://nutri-sync-two.vercel.app/"
    },
    {
      id: 8,
      title: "HypeWear",
      description: "E-commerce acadêmico para venda de roupas com vitrine de produtos e carrinho de compras.",
      category: "frontend",
      technologies: ["HTML", "CSS", "JavaScript"],
      icon: "👕",
      githubUrl: "https://github.com/MaccedoFilho/ecommerce-faculdade",
      projectUrl: "https://maccedofilho.github.io/ecommerce-faculdade/"
    },
    {
      id: 9,
      title: "Projeto Maste",
      description: "Página institucional para empresa de arquitetura com layout responsivo e comunicação visual profissional.",
      category: "frontend",
      technologies: ["Angular", "SCSS", "TypeScript"],
      icon: "🏗️",
      githubUrl: "https://github.com/MaccedoFilho/Maste",
      projectUrl: "https://maccedofilho.github.io/Maste/"
    }
  ]

  const filteredProjects = projects.filter(project => 
    activeFilter === 'todos' || project.category === activeFilter
  )

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
                onMouseEnter={(e) => handleMouseEnter(e, 'Java, Python, Spring Boot, APIs REST, Bancos de dados, Microsserviços')}
                onMouseLeave={handleMouseLeave}
              >
                Backend
              </span>
              <span className="separator">•</span>
              <span 
                className="tech-item"
                onMouseEnter={(e) => handleMouseEnter(e, 'React, TypeScript, Next.js, Angular, CSS/SASS, Design responsivo')}
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

      <section ref={projectsRef} className="projects-section">
        <h2 className="projects-title">Projetos</h2>
        
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${activeFilter === 'todos' ? 'active' : ''}`}
            onClick={() => handleFilterChange('todos')}
          >
            Todos
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'frontend' ? 'active' : ''}`}
            onClick={() => handleFilterChange('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'backend' ? 'active' : ''}`}
            onClick={() => handleFilterChange('backend')}
          >
            Backend
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`}
            onClick={() => handleFilterChange('fullstack')}
          >
            Full Stack
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                {project.category !== 'backend' && (
                  <a 
                    href={project.projectUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-btn primary"
                  >
                    Ver Projeto
                  </a>
                )}
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-btn secondary"
                >
                  GitHub
                </a>
              </div>
              <div className="project-category">
                {project.category === 'frontend' && 'Frontend'}
                {project.category === 'backend' && 'Backend'}
                {project.category === 'fullstack' && 'Full Stack'}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={aboutSectionRef} className="about-section">
        <div ref={aboutContentRef} className="about-content">
          <h2 className="about-title">Sobre Mim</h2>
          <div className="about-text">
            <p className="interactive-paragraph">
              Me chamo <span className="highlight-word">Ricardo Roberto Macedo Filho</span>, tenho 
              <span className="highlight-word">18 anos</span> e atualmente estou cursando o 
              <span className="highlight-word">primeiro período de Engenharia de Software</span>. 
              Estudo <span className="highlight-word">desenvolvimento back-end</span> e 
              <span className="highlight-word">front-end</span> há aproximadamente 
              <span className="highlight-word">2 anos</span> e mantenho uma 
              <span className="highlight-word">rotina de estudos bastante ativa</span>, sempre buscando 
              aprofundar meus conhecimentos e evoluir como desenvolvedor.
            </p>
            <p className="interactive-paragraph">
              Tenho grande interesse em construir <span className="highlight-word">sistemas robustos e escaláveis</span>, 
              com foco especial em <span className="highlight-word">boas práticas de código</span>, 
              <span className="highlight-word">performance</span> e 
              <span className="highlight-word">organização</span>. Estou em 
              <span className="highlight-word">constante aprendizado</span> e aberto a 
              <span className="highlight-word">novas oportunidades</span> que me permitam crescer na área da tecnologia.
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
      </section>

      <section ref={skillsRef} className="skills-section">
        <h2 className="skills-title">Habilidades Técnicas</h2>
        
        <div className="skills-container">
          <div className="skill-category">
            <h3 className="category-title">Linguagens de Programação</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <span className="skill-name">Java</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Python</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">C</span>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Frameworks</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <span className="skill-name">Spring Boot</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Angular</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Next.js</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">React</span>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Front-end</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <span className="skill-name">HTML</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">CSS</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">JavaScript</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">TypeScript</span>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Bancos de Dados</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <span className="skill-name">PostgreSQL</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">MySQL</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Oracle</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">MongoDB</span>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Ferramentas</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <span className="skill-name">Postman</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Maven</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Docker</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Git</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={contactRef} className="contact-section">
        <h2 className="contact-title">Vamos Conversar?</h2>
        <p className="contact-subtitle">
          Estou sempre aberto a novas oportunidades e projetos interessantes
        </p>
        
        <div className="contact-links">
          <a 
            href="https://github.com/MaccedoFilho" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div className="contact-info">
              <h3>GitHub</h3>
              <p>Confira meus repositórios</p>
            </div>
          </a>

          <a 
            href="mailto:ricardomacedodev@gmail.com" 
            className="contact-link"
          >
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 4v16h24v-16h-24zm22 2l-10 6-10-6h20zm-20 12v-10.789l10 6.789 10-6.789v10.789h-20z"/>
              </svg>
            </div>
            <div className="contact-info">
              <h3>Email</h3>
              <p>Entre em contato direto</p>
            </div>
          </a>

          <a 
            href="https://www.linkedin.com/in/ricardomacedofilho/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452zm15.106-20.452h-20.454c-.979 0-1.771.774-1.771 1.729v20.542c0 .956.792 1.729 1.771 1.729h20.451c.978 0 1.771-.773 1.771-1.729v-20.542c0-.955-.793-1.729-1.771-1.729z"/>
              </svg>
            </div>
            <div className="contact-info">
              <h3>LinkedIn</h3>
              <p>Conecte-se comigo</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}

export default App