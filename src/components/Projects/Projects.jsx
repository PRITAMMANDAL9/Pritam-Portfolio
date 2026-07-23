import "./Projects.css";

function Projects() {
  const projects = [
    {
      featured: true,
      category: "FULL-STACK REAL-TIME APP",
      title: "🚀 ChatX — Real-Time Messaging Platform",
      description:
        "Production-ready real-time chat application deployed on Render with secure authentication, live messaging workflows and persistent message storage.",
      highlights: [
        "JWT authentication and Spring Security based access control",
        "Public chat, private messaging, typing indicators and online presence",
        "WebSocket + STOMP powered real-time communication with MySQL persistence"
      ],
      tech: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "WebSocket",
        "JWT",
        "MySQL",
        "JavaScript",
        "Render"
      ],
      status: "Production Ready",
      github: "https://github.com/PRITAMMANDAL9/RealTimeChatApplication",
      live: "https://chatx-bp6v.onrender.com/login"
    },
    {
      category: "BACKEND REST API",
      title: "Demo Social Media REST API",
      description:
        "Backend API system for a social media platform supporting authentication, posts, comments and likes using Spring Boot and Hibernate.",
      highlights: [
        "Designed RESTful APIs for users, posts, comments and like management",
        "Integrated authentication and authorization with Spring Security",
        "Structured backend using layered architecture with JPA/Hibernate"
      ],
      tech: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Hibernate",
        "MySQL",
        "REST API"
      ],
      github: "https://github.com/PRITAMMANDAL9"
    },
    {
      category: "JAVA MANAGEMENT SYSTEM",
      title: "BikeTrax",
      description:
        "Vehicle management and tracking platform designed to manage bike records, maintenance workflows and backend data handling operations.",
      highlights: [
        "Managed bike records and maintenance-related workflow operations",
        "Implemented CRUD-based backend services with Spring Boot",
        "Used MySQL for structured data storage and management"
      ],
      tech: ["Java", "Spring Boot", "MySQL"],
      github: "https://github.com/PRITAMMANDAL9"
    },
    {
      category: "TASK MANAGEMENT API",
      title: "Todo Management Service",
      description:
        "Task management backend service for creating, updating and tracking user-specific todos with RESTful API architecture.",
      highlights: [
        "Built CRUD APIs for task creation, update and status tracking",
        "Designed backend endpoints for user-specific task management",
        "Structured service and persistence layers using Spring Boot + MySQL"
      ],
      tech: ["Java", "Spring Boot", "REST API", "MySQL"],
      github: "https://github.com/PRITAMMANDAL9"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-header" data-aos="fade-up">
        <h2>Projects</h2>
        <p className="projects-subtitle">
          A collection of backend and full-stack applications demonstrating
          real-world development skills in Java, Spring Boot, REST APIs,
          authentication, real-time communication and deployment.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className={`project-card ${project.featured ? "featured-card" : ""}`}
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="project-top">
              <span className="project-category">{project.category}</span>

              {project.featured && (
                <span className="featured-badge">🏆 Featured Project</span>
              )}
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">{project.description}</p>

            {project.featured && (
              <div className="project-status">
                <span>🌐 Live Deployment</span>
                <span>✅ {project.status}</span>
              </div>
            )}

            <div className="project-highlights">
              <h4>Key Highlights</h4>
              <ul>
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-tech">
              {project.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>

            <div className="project-actions">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  Live Demo
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-btn secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;