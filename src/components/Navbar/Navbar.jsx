import "./Navbar.css";
import {
  FaUser,
  FaCode,
  FaFolderOpen,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: "-80px 0px -35% 0px",
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "about", label: "About Me", icon: <FaUser /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
    { id: "projects", label: "Projects", icon: <FaFolderOpen /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <header className="site-header">
      <nav className="navbar">
        {/* LEFT BRAND */}
        <a href="#home" className="nav-brand">
          <div className="brand-icon">
            <span>{"</>"}</span>
          </div>

          <div className="brand-text">
            <h3>PRITAM</h3>
            <p>Java Backend Developer</p>
          </div>
        </a>

        {/* CENTER NAV */}
        <div className="nav-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
            >
              <span className="nav-link-icon">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        {/* RIGHT CTA */}
        <a href="/Pritam_Mandal.pdf" download className="resume-btn">
          <FaDownload />
          <span>Download Resume</span>
        </a>
      </nav>
    </header>
  );
}

export default Navbar;