import React from 'react';
import './About.css';

interface AboutProps {
  aboutSectionRef: React.RefObject<HTMLDivElement | null>;
  aboutContentRef: React.RefObject<HTMLDivElement | null>;
  cardsRef: React.RefObject<HTMLDivElement | null>;
  timelineRef: React.RefObject<HTMLDivElement | null>;
}

const About: React.FC<AboutProps> = ({ 
  aboutSectionRef, 
  aboutContentRef, 
  cardsRef, 
  timelineRef 
}) => {
  return (
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
  );
};

export default About;