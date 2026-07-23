import "./Hero.css";
import HeroButtons from "./HeroButtons";

export default function HeroLeft({
    projectBtn,
    resumeBtn,
    magneticMove,
    magneticLeave,
}) {
    return (
        <div className="hero-left">

            <span className="hero-badge">
                👋 Hello, I'm
            </span>

            <h1 className="hero-title">
                Pritam Mandal
            </h1>

            <h2 className="hero-role">
                Java Full Stack Developer
            </h2>

            <p className="hero-description">
                I build secure, scalable backend systems and
                modern full-stack applications using Java,
                Spring Boot, Spring Security and React.
            </p>

            <div className="hero-status">
                <span className="status-dot"></span>
                Available for Full-Time Opportunities
            </div>

            <HeroButtons
                projectBtn={projectBtn}
                resumeBtn={resumeBtn}
                magneticMove={magneticMove}
                magneticLeave={magneticLeave}
            />

        </div>
    );
}