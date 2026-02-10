import React, { useEffect, useRef, memo } from 'react';

/**
 * BackgroundArt - "Fluence Emergence"
 * Optimized version: reduced particle count and memoized to prevent unnecessary re-renders.
 */
const BackgroundArt = memo(() => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: true });
        let animationFrameId;

        let width, height;
        let particles = [];
        let mouse = { x: undefined, y: undefined };

        // Dynamic particle count based on screen width for performance
        const getParticleCount = () => {
            const w = window.innerWidth;
            if (w < 768) return 80; // Mobile
            if (w < 1200) return 150; // Tablet/Small Laptop
            return 220; // Desktop
        };

        const fieldScale = 0.003;
        const speed = 0.4;

        const getAngle = (x, y, t) => {
            const time = t * 0.0002;
            return (
                Math.sin(x * fieldScale + time) +
                Math.sin(y * fieldScale * 1.2 + time * 0.8) +
                Math.sin((x + y) * fieldScale * 0.5 + time * 1.5)
            ) * Math.PI;
        };

        class Particle {
            constructor() {
                this.init();
            }

            init() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = 0;
                this.vy = 0;
                this.life = Math.random() * 200 + 100;
                this.maxLife = this.life;
                this.size = Math.random() * 1.5 + 0.5;
            }

            update(t, mouse) {
                const angle = getAngle(this.x, this.y, t);
                let targetVx = Math.cos(angle) * speed;
                let targetVy = Math.sin(angle) * speed;

                if (mouse.x !== undefined) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const distSq = dx * dx + dy * dy;
                    const radius = 120;

                    if (distSq < radius * radius) {
                        const dist = Math.sqrt(distSq);
                        const force = (radius - dist) / radius;
                        targetVx += (dx / dist) * force * 1.5;
                        targetVy += (dy / dist) * force * 1.5;
                    }
                }

                this.vx += (targetVx - this.vx) * 0.1;
                this.vy += (targetVy - this.vy) * 0.1;

                this.x += this.vx;
                this.y += this.vy;

                this.life--;

                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;

                if (this.life <= 0) {
                    this.init();
                }
            }

            draw(ctx, isDark) {
                const alpha = (Math.sin(this.life / this.maxLife * Math.PI) * 0.25);
                const color = isDark
                    ? `rgba(255, 255, 255, ${alpha})`
                    : `rgba(180, 20, 20, ${alpha * 0.35})`;

                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            const count = getParticleCount();
            particles = Array.from({ length: count }, () => new Particle());
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const render = (t) => {
            const isDark = document.documentElement.classList.contains('dark');

            ctx.fillStyle = isDark
                ? 'rgba(12, 12, 15, 0.12)'
                : 'rgba(247, 247, 247, 0.12)';
            ctx.fillRect(0, 0, width, height);

            particles.forEach(p => {
                p.update(t, mouse);
                p.draw(ctx, isDark);
            });

            animationFrameId = requestAnimationFrame(render);
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        resize();
        render(0);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 pointer-events-none"
        />
    );
});

export default BackgroundArt;
