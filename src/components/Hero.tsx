import React from 'react';
import './Hero.css';

interface HeroProps {
  nameRef: React.RefObject<HTMLDivElement | null>;
  descriptionRef: React.RefObject<HTMLDivElement | null>;
  showTooltip: boolean;
  tooltipContent: string;
  tooltipPosition: { x: number; y: number };
  tooltipRef: React.RefObject<HTMLDivElement | null>;
  handleMouseEnter: (e: React.MouseEvent, content: string) => void;
  handleMouseLeave: () => void;
}

const Hero: React.FC<HeroProps> = ({
  nameRef,
  descriptionRef,
  showTooltip,
  tooltipContent,
  tooltipPosition,
  tooltipRef,
  handleMouseEnter,
  handleMouseLeave
}) => {
  return (
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
  );
};

export default Hero;