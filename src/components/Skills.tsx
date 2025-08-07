import React from 'react';
import './Skills.css';

interface SkillsProps {
  skillsRef: React.RefObject<HTMLDivElement | null>;
}

const Skills: React.FC<SkillsProps> = ({ skillsRef }) => {
  return (
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
  );
};

export default Skills;