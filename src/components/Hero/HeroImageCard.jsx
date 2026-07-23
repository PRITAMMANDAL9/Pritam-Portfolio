import "./Hero.css";

export default function HeroImageCard({
    cardRef,
    handleMouseMove,
    handleMouseLeave,
    imageSrc = "/Pritam_Mandal.png",
    imageAlt = "Pritam Mandal"
}) {
    return (
        <div
            ref={cardRef}
            className="hero-image-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="hero-inner">

                <div className="hero-glow"></div>

                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="hero-image"
                    loading="eager"
                    draggable="false"
                />

            </div>
        </div>
    );
}