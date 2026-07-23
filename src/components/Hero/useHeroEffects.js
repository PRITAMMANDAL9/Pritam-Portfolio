import { useRef, useState } from "react";

export default function useHeroEffects() {

    const heroRef = useRef(null);
    const orbitRef = useRef(null);
    const cardRef = useRef(null);

    const projectBtn = useRef(null);
    const resumeBtn = useRef(null);

    const [parallax, setParallax] = useState({
        x: 0,
        y: 0,
    });

    // ============================
    // Magnetic Buttons
    // ============================

    const magneticMove = (e, ref) => {

        const btn = ref.current;

        if (!btn) return;

        const rect = btn.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const moveX = (x - rect.width / 2) * 0.2;
        const moveY = (y - rect.height / 2) * 0.2;

        btn.style.transform = `translate(${moveX}px, ${moveY}px)`;

    };

    const magneticLeave = (ref) => {

        if (!ref.current) return;

        ref.current.style.transform = "translate(0,0)";

    };

    // ============================
    // Hero Image Tilt
    // ============================

    const handleMouseMove = (e) => {

        if (!heroRef.current || !cardRef.current) return;

        const heroRect = heroRef.current.getBoundingClientRect();

        const mouseX = e.clientX - heroRect.width / 2;
        const mouseY = e.clientY - heroRect.height / 2;

        const card = cardRef.current;

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 6;
        const rotateX = -((y - centerY) / centerY) * 6;

       card.style.transform = `
    perspective(1400px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
`;
        const glow = card.querySelector(".hero-glow");

        if (glow) {

            glow.style.left = `${x}px`;
            glow.style.top = `${y}px`;
            glow.style.opacity = "1";

        }

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
        card.style.setProperty("--glowOpacity", "1");

    };

    const handleMouseLeave = () => {

        if (!cardRef.current) return;

        cardRef.current.style.transform =
            "perspective(1400px) rotateX(0deg) rotateY(0deg)";

        const glow =
            cardRef.current.querySelector(".hero-glow");

        if (glow) {

            glow.style.opacity = "0";

        }

        cardRef.current.style.setProperty(
            "--glowOpacity",
            "0"
        );

    };

    // ============================
    // Hero Section Mouse Movement
    // ============================

    const handleHeroMouseMove = (e) => {

        if (!heroRef.current) return;

        const heroRect =
            heroRef.current.getBoundingClientRect();

        const mouseX =
            e.clientX - heroRect.width / 2;

        const mouseY =
            e.clientY - heroRect.height / 2;

            const grid =
    heroRef.current.querySelector(".hero-grid");

const orb1 =
    heroRef.current.querySelector(".orb-1");

const orb2 =
    heroRef.current.querySelector(".orb-2");

        const light =
            heroRef.current.querySelector(".mouse-light");

            if(grid){

    grid.style.transform =

        `translate3d(

            ${mouseX * 0.005}px,

            ${mouseY * 0.005}px,

            0

        )`;

}

if(orb1){

    orb1.style.transform =

        `translate3d(

            ${mouseX * 0.012}px,

            ${mouseY * 0.012}px,

            0

        )`;

}

if(orb2){

    orb2.style.transform =

        `translate3d(

            ${mouseX * 0.015}px,

            ${mouseY * 0.015}px,

            0

        )`;

}



        if (light) {

            light.style.left =
                `${e.clientX - heroRect.left}px`;

            light.style.top =
                `${e.clientY - heroRect.top}px`;

        }

        if (orbitRef.current) {

            orbitRef.current.style.transform = `
translate3d(
    ${mouseX * 0.025}px,
    ${mouseY * 0.025}px,
    0
)
`;

        }

    };

    return {

        heroRef,
        orbitRef,
        cardRef,

        projectBtn,
        resumeBtn,

        magneticMove,
        magneticLeave,

        handleMouseMove,
        handleMouseLeave,

        handleHeroMouseMove

        };

}