import "./Skills.css";

function Skills() {
  const skillGroups = [
    {
      title: "Backend",
      skills: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Hibernate",
        "REST APIs",
        "JWT",
        "WebSocket"
      ]
    },
    {
      title: "Frontend",
      skills: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap"
      ]
    },
    {
      title: "Database",
      skills: [
        "MySQL",
        "H2 Database"
      ]
    },
    {
      title: "Tools & Concepts",
      skills: [
        "Git",
        "GitHub",
        "Maven",
        "OOP",
        "DSA",
        "MVC",
        "Authentication",
        "Authorization"
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">

      <h2>Technical Skills</h2>

      <p className="skills-subtitle">
        Technologies and tools I use to build scalable backend and full-stack applications.
      </p>

      <div className="skills-grid"
       data-aos="zoom-in">

        {skillGroups.map((group, index) => (
          <div className="skill-card" key={index}>

            <h3>{group.title}</h3>

            <div className="skill-tags">

              {group.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;