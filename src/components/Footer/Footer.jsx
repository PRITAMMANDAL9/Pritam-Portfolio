import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <footer className="footer">

      <h3>PRITAM <span>MANDAL</span></h3>

      <p>
        Java Backend Developer | Spring Boot | REST APIs
      </p>

      <div className="footer-links">

        <a
          href="https://github.com/PRITAMMANDAL9"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="YOUR_LINKEDIN_URL"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://leetcode.com/u/PRITAM4423/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode />
        </a>

      </div>

     <div className="footer-bottom">
  Built with React, CSS & ❤️ by Pritam Mandal
</div>
    </footer>
  );
}

export default Footer;