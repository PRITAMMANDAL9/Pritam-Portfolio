import "./Hero.css";

import StarField from "../StarField/StarField";

import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

import useHeroEffects from "./useHeroEffects";

export default function Hero() {

const {

    heroRef,
    orbitRef,
    cardRef,

    projectBtn,
    resumeBtn,

    magneticMove,
    magneticLeave,

    handleMouseMove,
    handleMouseLeave,

    handleHeroMouseMove,

    parallax

} = useHeroEffects();

    return (

        <section
            id="home"
            className="hero"
            ref={heroRef}
            onMouseMove={handleHeroMouseMove}
        >

            <div className="mouse-light"></div>

            <StarField/>

            <div className="hero-orb orb-1"></div>
            <div className="hero-orb orb-2"></div>
            <div className="hero-grid"></div>

            <div className="hero-container">

                <HeroLeft
                    projectBtn={projectBtn}
                    resumeBtn={resumeBtn}
                    magneticMove={magneticMove}
                    magneticLeave={magneticLeave}
                />

                <HeroRight
                    orbitRef={orbitRef}
                    cardRef={cardRef}
                    handleMouseMove={handleMouseMove}
                    handleMouseLeave={handleMouseLeave}
                />

            </div>

        </section>

    );

}