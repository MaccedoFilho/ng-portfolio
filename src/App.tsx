import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './App.css'

function App() {
  const nameRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipContent, setTooltipContent] = useState('')
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      
      tl.fromTo(nameRef.current, 
        { 
          opacity: 0, 
          scale: 0.8,
          y: 30
        },
        { 
          opacity: 1, 
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        }
      )
      
      .to({}, { duration: 0.5 })
      
      .to(nameRef.current, {
        x: -200,
        duration: 0.8,
        ease: "power2.inOut"
      })
      
      .fromTo(descriptionRef.current,
        {
          opacity: 0,
          x: 300,
          scale: 0.9
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out"
        },
        "<"
      )

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
    </div>
  )
}

export default App