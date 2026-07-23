import { useEffect, useRef } from "react";
import "./StarField.css";

export default function StarField() {

    const canvasRef = useRef(null);

    useEffect(() => {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");


        let width;
        let height;

        let animationId;
        let shootingTimeout;

        const STAR_COUNT = 220;
        const PARTICLE_COUNT = 35;

const stars = [];
const particles = [];
const shootingStars = [];
const floatingParticles = [];
const FLOATING_COUNT = 60;

resize();
for (let i = 0; i < FLOATING_COUNT; i++) {

    floatingParticles.push({

        x: Math.random() * width,

        y: Math.random() * height,

        radius: Math.random() * 2 + 1,

        speed: Math.random() * 0.4 + 0.1,

        alpha: Math.random() * 0.4 + 0.2,

        color:

            Math.random() > 0.5

                ? "#8B5CF6"

                : "#3B82F6"

    });

}

        function resize() {

            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;

        }

        resize();

        window.addEventListener("resize", resize);


        /* ===================================
                    STARS
        =================================== */

        for (let i = 0; i < STAR_COUNT; i++) {

            stars.push({

                x: Math.random() * width,

                y: Math.random() * height,

                radius: Math.random() * 2 + 0.5,

                alpha: Math.random(),

                twinkle: Math.random() * 0.02 + 0.005,

                speed: Math.random() * 0.2 + 0.05

            });

        }

        /* ===================================
                 NEBULA PARTICLES
        =================================== */

        for (let i = 0; i < PARTICLE_COUNT; i++) {

            particles.push({

                x: Math.random() * width,

                y: Math.random() * height,

                radius: Math.random() * 120 + 80,

                alpha: Math.random() * 0.06 + 0.03,

                color:

                    Math.random() > 0.5

                        ? "139,92,246"

                        : "59,130,246",

                speedX: (Math.random() - 0.5) * 0.08,

                speedY: (Math.random() - 0.5) * 0.08

            });

        }

        /* ===================================
                 SHOOTING STARS
        =================================== */

        function createShootingStar() {

            shootingStars.push({

                x: Math.random() * width,

                y: Math.random() * height * 0.35,

                length: 150 + Math.random() * 120,

                speed: 12 + Math.random() * 8,

                life: 0

            });

        }

        function scheduleShootingStar() {

            createShootingStar();

            shootingTimeout = setTimeout(

                scheduleShootingStar,

                5000 + Math.random() * 3000

            );

        }

        scheduleShootingStar();

        /* ===================================
                    ANIMATION
        =================================== */

        function animate() {

            ctx.clearRect(0, 0, width, height);

            /* ---------- Nebula ---------- */

            particles.forEach(p => {

                p.x += p.speedX;
                p.y += p.speedY;

                if (p.x < -100) p.x = width + 100;
                if (p.x > width + 100) p.x = -100;

                if (p.y < -100) p.y = height + 100;
                if (p.y > height + 100) p.y = -100;

                const gradient = ctx.createRadialGradient(

                    p.x,
                    p.y,
                    0,

                    p.x,
                    p.y,
                    p.radius

                );

                gradient.addColorStop(

                    0,

                    `rgba(${p.color},${p.alpha})`

                );

                gradient.addColorStop(

                    1,

                    "rgba(0,0,0,0)"

                );

                ctx.fillStyle = gradient;

                ctx.beginPath();

                ctx.arc(

                    p.x,

                    p.y,

                    p.radius,

                    0,

                    Math.PI * 2

                );

                ctx.fill();

            });


/* ---------- floatingParticles ---------- */

            floatingParticles.forEach(p => {

    p.y -= p.speed;

    if (p.y < -20) {

        p.y = height + 20;

        p.x = Math.random() * width;

    }

    ctx.beginPath();

    ctx.arc(

        p.x,

        p.y,

        p.radius,

        0,

        Math.PI * 2

    );

    ctx.fillStyle = p.color;

    ctx.shadowColor = p.color;

    ctx.shadowBlur = 20;

    ctx.globalAlpha = p.alpha;

    ctx.fill();

    ctx.globalAlpha = 1;

});

            /* ---------- Stars ---------- */

            stars.forEach(star => {

                star.alpha += star.twinkle;

                if (

                    star.alpha >= 1 ||

                    star.alpha <= 0.2

                ) {

                    star.twinkle *= -1;

                }

                star.y += star.speed;

                if (star.y > height) {

                    star.y = -10;

                    star.x = Math.random() * width;

                }

                ctx.beginPath();

                ctx.arc(

                    star.x,

                    star.y,

                    star.radius,

                    0,

                    Math.PI * 2

                );

                ctx.fillStyle =

                    `rgba(255,255,255,${star.alpha})`;

                ctx.shadowColor = "#8B5CF6";

                ctx.shadowBlur = 10;

                ctx.fill();

            });

            /* ---------- Shooting Stars ---------- */

            for (

                let i = shootingStars.length - 1;

                i >= 0;

                i--

            ) {

                const s = shootingStars[i];

                s.x += s.speed;

                s.y += s.speed * 0.45;

                s.life++;

                const gradient = ctx.createLinearGradient(

                    s.x,

                    s.y,

                    s.x - s.length,

                    s.y - s.length * 0.45

                );

                gradient.addColorStop(

                    0,

                    "rgba(255,255,255,.95)"

                );

                gradient.addColorStop(

                    .3,

                    "rgba(139,92,246,.8)"

                );

                gradient.addColorStop(

                    1,

                    "rgba(255,255,255,0)"

                );

                ctx.beginPath();

                ctx.moveTo(s.x, s.y);

                ctx.lineTo(

                    s.x - s.length,

                    s.y - s.length * 0.45

                );

                ctx.strokeStyle = gradient;

                ctx.lineWidth = 2;

                ctx.shadowBlur = 18;

                ctx.shadowColor = "#8B5CF6";

                ctx.stroke();

                if (s.life > 70) {

                    shootingStars.splice(i, 1);

                }

            }

            animationId = requestAnimationFrame(animate);


        }

        animate();
        /* ===================================
                    CLEANUP
        =================================== */

        return () => {

            cancelAnimationFrame(animationId);

            clearTimeout(shootingTimeout);

            window.removeEventListener(

                "resize",

                resize

            );

        };


    }, []);

    return (

        <canvas

            ref={canvasRef}

            className="star-field"
    

        />

    );

}