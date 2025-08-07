import React from 'react';
import './Projects.css';

interface ProjectsProps {
  projectsRef: React.RefObject<HTMLDivElement | null>;
  activeFilter: string;
  handleFilterChange: (filter: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projectsRef, activeFilter, handleFilterChange }) => {
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
      title: "remzy",
      description: "Site intuitivo com design moderno e ferramentas avançadas para uma experiência do usuário envolvente.",
      category: "frontend",
      technologies: ["TypeScript", "React", "CSS"],
      icon: "💻",
      githubUrl: "https://github.com/MaccedoFilho/remzy",
      projectUrl: "https://www.remzy.com.br/"
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
      projectUrl: "https://masteobras.com/"
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'todos' || project.category === activeFilter
  );

  return (
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
  );
};

export default Projects;