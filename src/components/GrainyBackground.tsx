"use client";

import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    color: { r: number; g: number; b: number };
    twinkleSpeed: number;
    twinkleOffset: number;
}

export const GrainyBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const setSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        // Premium color palette
        const colors = [
            { r: 139, g: 92, b: 246 },   // Purple
            { r: 59, g: 130, b: 246 },   // Blue
            { r: 6, g: 182, b: 212 },    // Cyan
            { r: 168, g: 85, b: 247 },   // Violet
            { r: 236, g: 72, b: 153 },   // Pink
            { r: 255, g: 255, b: 255 },  // White
        ];

        // Initialize particles
        const initParticles = () => {
            const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 12000));
            particlesRef.current = [];

            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particlesRef.current.push({
                    x,
                    y,
                    baseX: x,
                    baseY: y,
                    size: Math.random() * 2 + 0.5,
                    speedX: (Math.random() - 0.5) * 0.3,
                    speedY: (Math.random() - 0.5) * 0.3,
                    opacity: Math.random() * 0.5 + 0.2,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    twinkleSpeed: Math.random() * 0.02 + 0.01,
                    twinkleOffset: Math.random() * Math.PI * 2,
                });
            }
        };

        setSize();
        window.addEventListener('resize', setSize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        let time = 0;

        const animate = () => {
            time += 0.016; // ~60fps
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const particles = particlesRef.current;
            const mouse = mouseRef.current;
            const mouseRadius = 200;

            // Update and draw particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Twinkle effect
                const twinkle = Math.sin(time * p.twinkleSpeed * 60 + p.twinkleOffset) * 0.3 + 0.7;
                const currentOpacity = p.opacity * twinkle;

                // Mouse interaction - particles gently move away
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouseRadius && dist > 0) {
                    const force = (mouseRadius - dist) / mouseRadius;
                    const angle = Math.atan2(dy, dx);
                    p.x -= Math.cos(angle) * force * 3;
                    p.y -= Math.sin(angle) * force * 3;
                } else {
                    // Slowly return to base position with drift
                    p.x += p.speedX;
                    p.y += p.speedY;

                    // Boundary wrapping
                    if (p.x > canvas.width + 50) p.x = -50;
                    if (p.x < -50) p.x = canvas.width + 50;
                    if (p.y > canvas.height + 50) p.y = -50;
                    if (p.y < -50) p.y = canvas.height + 50;
                }

                // Draw particle with glow
                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
                gradient.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentOpacity})`);
                gradient.addColorStop(0.4, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentOpacity * 0.4})`);
                gradient.addColorStop(1, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0)`);

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Core particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentOpacity})`;
                ctx.fill();
            }

            // Draw connections (constellation effect)
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        const opacity = (1 - dist / 100) * 0.15;

                        // Gradient line
                        const grad = ctx.createLinearGradient(
                            particles[i].x, particles[i].y,
                            particles[j].x, particles[j].y
                        );
                        grad.addColorStop(0, `rgba(${particles[i].color.r}, ${particles[i].color.g}, ${particles[i].color.b}, ${opacity})`);
                        grad.addColorStop(1, `rgba(${particles[j].color.r}, ${particles[j].color.g}, ${particles[j].color.b}, ${opacity})`);

                        ctx.beginPath();
                        ctx.strokeStyle = grad;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw mouse glow
            if (mouse.x > 0 && mouse.y > 0) {
                const mouseGlow = ctx.createRadialGradient(
                    mouse.x, mouse.y, 0,
                    mouse.x, mouse.y, 300
                );
                mouseGlow.addColorStop(0, 'rgba(139, 92, 246, 0.08)');
                mouseGlow.addColorStop(0.5, 'rgba(59, 130, 246, 0.03)');
                mouseGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
                ctx.fillStyle = mouseGlow;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setSize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <>
            {/* Particle Canvas */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 z-[-2] pointer-events-none"
            />

            {/* Static Background Orbs */}
            <div className="fixed inset-0 z-[-3] overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-600/8 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/8 rounded-full blur-[130px]" />
                <div className="absolute top-[40%] left-[50%] w-[40%] h-[40%] bg-cyan-500/5 rounded-full blur-[100px]" />
            </div>

            {/* Grid Overlay */}
            <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

            {/* Dark Vignette */}
            <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_70%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />

            {/* Noise Texture */}
            <div className="fixed inset-0 z-[-1] h-screen w-full pointer-events-none opacity-[0.02]">
                <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <filter id="noiseFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>
        </>
    );
};
