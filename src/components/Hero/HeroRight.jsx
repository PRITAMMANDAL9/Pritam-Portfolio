import "./Hero.css";

import HeroImageCard from "./HeroImageCard";
import TechOrbit from "./TechOrbit";

export default function HeroRight({
    orbitRef,
    cardRef,
    handleMouseMove,
    handleMouseLeave
}) {
    return (
        <div className="hero-right">

            <div
                ref={orbitRef}
                className="orbit-wrapper"
            >

                <TechOrbit />

                <HeroImageCard
                    cardRef={cardRef}
                    handleMouseMove={handleMouseMove}
                    handleMouseLeave={handleMouseLeave}
                    imageSrc="/Pritam_Mandal.png"
                    imageAlt="Pritam Mandal"
                />

            </div>

        </div>
    );
}