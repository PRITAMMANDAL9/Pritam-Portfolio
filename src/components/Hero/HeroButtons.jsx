import "./Hero.css";

import {
    FaArrowRight,
    FaDownload
} from "react-icons/fa";


export default function HeroButtons({
    projectBtn,
    resumeBtn,
    magneticMove,
    magneticLeave,
}) {
    return (
        <div className="hero-buttons">

          <button
    ref={projectBtn}
    className="primary-btn"
    onMouseMove={(e)=>magneticMove(e,projectBtn)}
    onMouseLeave={()=>magneticLeave(projectBtn)}
    onClick={()=>{
        document
            .getElementById("projects")
            ?.scrollIntoView({
                behavior:"smooth"
            });
    }}
>

    <span>View Projects</span>

    <FaArrowRight className="btn-icon"/>

</button>

            <button
    ref={resumeBtn}
    className="secondary-btn"
    onMouseMove={(e)=>magneticMove(e,resumeBtn)}
    onMouseLeave={()=>magneticLeave(resumeBtn)}
    onClick={()=>{
        window.open("/Pritam_Mandal.pdf","_blank");
    }}
>

    <span>Download Resume</span>

    <FaDownload className="btn-icon"/>

</button>

        </div>
    );
}