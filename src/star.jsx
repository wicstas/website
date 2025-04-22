import { useEffect, useRef } from "react";

export default function StarCanvas({ starCount = 100 }) {
const canvasRef = useRef(null);

useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const stars = [];
    const resize = () => {
    const { width, height } = canvas.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;


    const seed = 42;
    let s = seed % 2147483647;
    if (s <= 0) s += 2147483646;
    const random = () => (s = (s * 16807) % 2147483647) / 2147483647;
    
    // Re-generate stars inside new dimensions
    stars.length = 0;
    for (let i = 0; i < starCount; i++) {
        stars.push({
        x: random() * width,
        y: random() * height,
        r: random() * 1.5 + 0.5,
        alpha: random(),
        });
    }
    };
    resize();

    const draw = () => {
    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
    }
    requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
}, [starCount, canvasRef]);

return (
    <canvas ref={canvasRef} className="w-full h-full block" />
);
}