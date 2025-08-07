import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

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

    return (
    <div ref={containerRef} className="app">
      <Hero
        nameRef={nameRef}
        descriptionRef={descriptionRef}
        showTooltip={showTooltip}
        tooltipContent={tooltipContent}
        tooltipPosition={tooltipPosition}
        tooltipRef={tooltipRef}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />

      <Projects
        projectsRef={projectsRef}
        activeFilter={activeFilter}
        handleFilterChange={handleFilterChange}
      />

      <About
        aboutSectionRef={aboutSectionRef}
        aboutContentRef={aboutContentRef}
        cardsRef={cardsRef}
        timelineRef={timelineRef}
      />

      <Skills skillsRef={skillsRef} />

      <Contact contactRef={contactRef} />
    </div>
  )
}

export default App