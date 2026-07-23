import "./Contact.css";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h2>Contact Me</h2>

      <p className="contact-subtitle">
        Open to Java Backend Developer, Spring Boot and Full-Stack opportunities.
      </p>

      <div className="contact-container">

      <div className="contact-card"
      data-aos="flip-left"
      >
  <FaEnvelope className="contact-icon" />

  <h3>Email</h3>

  <a href="mailto:pritammandal452003@gmail.com">
    Send Email
  </a>
</div>

      <div className="contact-card">
  <FaGithub className="contact-icon" />

  <h3>GitHub</h3>

  <a
    href="https://github.com/PRITAMMANDAL9"
    target="_blank"
    rel="noreferrer"
  >
    View Profile
  </a>
</div>
<div className="contact-card">
<FaLinkedin className="contact-icon" />
<h3>LinkedIn</h3>
<a
  href="https://www.linkedin.com/in/pritam-mandal-57a199256/"
  target="_blank"
  rel="noreferrer"
>
  View Profile
</a>
</div>

      <div className="contact-card">
  <SiLeetcode className="contact-icon" />

  <h3>LeetCode</h3>

  <a
    href="https://leetcode.com/u/PRITAM4423/"
    target="_blank"
    rel="noreferrer"
  >
    View Profile
  </a>
</div>

      </div>

    </section>
  );
}

export default Contact;