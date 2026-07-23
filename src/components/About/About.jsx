import "./About.css";

import {
  FaServer,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";

import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCircle
} from "react-icons/fa";

import { FaJava, FaReact, FaDocker, FaGitAlt, FaGithub } from "react-icons/fa";

import {
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiPostgresql,
  SiRedux,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

import { MdSecurity } from "react-icons/md";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        {/* LEFT */}
        <div className="about-left" data-aos="fade-right">

    <div className="about-badge">
        <span className="badge-dot"></span>
        About Me
    </div>

    <h2 className="about-title">

        Building{" "}

        <span className="gradient-purple">
             secure APIs
        </span>

        ,

        <br/>

        scalable{" "}

        <span className="gradient-blue">
            backend systems
        </span>

        <br/>

        and practical{" "}

        <span className="gradient-green">
            full-stack{" "}
        </span>

        applications.

    </h2>

    <div className="title-line"></div>

    <p className="about-text">

        I'm <strong>Pritam Mandal</strong>, a passionate
        Java Backend Developer who enjoys designing clean,
        maintainable backend architectures and production-ready
        REST APIs.

    </p>

   <div className="feature-grid">

  <div className="feature-card backend-card">

    <div className="feature-icon backend-icon">
      <FaServer />
    </div>

    <h3>Backend Development</h3>

    <p>
      Build scalable Java backend services using modern Spring Boot architecture.
    </p>

    <ul>
      <li>Spring Boot</li>
      <li>REST APIs</li>
      <li>MVC Architecture</li>
    </ul>

  </div>

  <div className="feature-card security-card">

    <div className="feature-icon security-icon">
      <FaShieldAlt />
    </div>

    <h3>Authentication & Security</h3>

    <p>
      Secure APIs using JWT authentication and role-based authorization.
    </p>

    <ul>
      <li>JWT</li>
      <li>Spring Security</li>
      <li>Role Based Access</li>
    </ul>

  </div>

  <div className="feature-card deploy-card">

    <div className="feature-icon deploy-icon">
      <FaRocket />
    </div>

    <h3>Deployment</h3>

    <p>
      Production-ready applications deployed using modern cloud platforms.
    </p>

    <ul>
      <li>Render</li>
      <li>Vercel</li>
      <li>GitHub Actions</li>
    </ul>

  </div>

</div>
    <p className="about-text">

        My primary stack includes

        <span className="java">
            Java
        </span>,

        <span className="spring">
            Spring Boot
        </span>,

        <span className="security">
            Spring Security
        </span>,

        <span className="hibernate">
            Hibernate
        </span>,

        <span className="mysql">
            MySQL{" "}
        </span>

        and

        <span className="react">
            React
        </span>.

    </p>

    <p className="about-text">

        I enjoy solving real-world engineering problems through
        scalable backend design, authentication workflows,
        database optimization and complete deployment pipelines.

    </p>

</div>

        {/* RIGHT */}

        <div className="about-right">
            <div className="focus-card">

    <div className="status-pill">
        <span className="live-dot"></span>
        Available for Opportunities
    </div>

    <div className="profile-wrapper">

        <div className="profile-ring">
<img
    src="/Pritam_Mandal.png"
    alt="Pritam Mandal"
/>

        </div>

    </div>

    <h3 className="profile-name">
        Pritam Mandal
    </h3>

    <p className="profile-role">
        Java Backend Developer
    </p>

    <p className="profile-stack">
        Spring Boot • REST APIs • MySQL • React
    </p>

    <div className="divider"></div>

    <div className="focus-section">

        <h4>
            🚀 Current Focus
        </h4>

       <div className="focus-list">

    <div className="focus-item">
        <div className="focus-icon">✓</div>
        <span>Building production-ready backend APIs</span>
    </div>

    <div className="focus-item">
        <div className="focus-icon">✓</div>
        <span>Mastering Spring Security & JWT</span>
    </div>

    <div className="focus-item">
        <div className="focus-icon">✓</div>
        <span>Improving DSA & Problem Solving</span>
    </div>

    <div className="focus-item">
        <div className="focus-icon">✓</div>
        <span>Learning scalable system architecture</span>
    </div>

    <div className="focus-item">
        <div className="focus-icon">✓</div>
        <span>Developing production-ready full-stack apps</span>
    </div>

</div>

    </div>

    <div className="divider"></div>

  <div className="tech-pills">

    <span>☕ Java</span>

    <span>🌱 Spring Boot</span>

    <span>🔒 JWT</span>

    <span>🗄 MySQL</span>

    <span>⚛ React</span>

</div>

    <div className="divider"></div>

    <div className="location">

        📍 Howrah, West Bengal

    </div>

</div>

   <div className="stats-grid">

    <div className="stat-card purple">
        <h2>4+</h2>
        <h4>Major Projects</h4>
        <p>Production-ready applications</p>
    </div>

    <div className="stat-card blue">
        <h2>150+</h2>
        <h4>DSA Problems</h4>
        <p>LeetCode & Problem Solving</p>
    </div>

    <div className="stat-card green">
        <h2>Java</h2>
        <h4>Primary Stack</h4>
        <p>Backend Development</p>
    </div>

    <div className="stat-card orange">
        <h2>Spring</h2>
        <h4>Framework</h4>
        <p>REST APIs & Security</p>
    </div>

</div>

        </div>

      </div>
      
<div className="tech-ribbon">

  <div className="fade-left"></div>
  <div className="fade-right"></div>

  <div className="marquee">

  <div className="marquee-track">

  <FaJava />
  <SiSpringboot />
  <MdSecurity />
  <SiHibernate />
  <SiMysql />
  <SiPostgresql />
  <FaReact />
  <SiRedux />
  <SiJavascript />
  <SiTypescript />
  <FaDocker />
  <FaGitAlt />
  <FaGithub />

  {/* Duplicate */}

  <FaJava />
  <SiSpringboot />
  <MdSecurity />
  <SiHibernate />
  <SiMysql />
  <SiPostgresql />
  <FaReact />
  <SiRedux />
  <SiJavascript />
  <SiTypescript />
  <FaDocker />
  <FaGitAlt />
  <FaGithub />

</div>

  </div>

</div>

    </section>
  );
}

export default About;