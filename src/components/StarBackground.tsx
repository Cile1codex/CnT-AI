import React, { useEffect, useRef } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  velocityX: number;
  velocityY: number;
  twinkleSpeed: number;
  scaleSpeed: number;
  baseOpacity: number;
}

export const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();
  const timeRef = useRef<number>(0);

  const colors = [
    '#A8E6CF', // Mint Green
    '#B8E3FF', // Sky Blue
    '#D4B8FF', // Soft Lavender
    '#FFFFFF', // White
    '#FFB8B8', // Faded Coral
  ];

  const createStar = (id: number, width: number, height: number): Star => {
    const baseOpacity = 0.2 + Math.random() * 0.4; // 20% to 60%
    return {
      id,
      x: Math.random() * width,
      y: Math.random() * height,
      size: 2 + Math.random() * 4, // 2px to 6px
      opacity: baseOpacity,
      color: colors[Math.floor(Math.random() * colors.length)],
      velocityX: (Math.random() - 0.5) * 0.5, // Slow drift
      velocityY: (Math.random() - 0.5) * 0.5,
      twinkleSpeed: 0.5 + Math.random() * 1.5, // Twinkling speed
      scaleSpeed: 0.3 + Math.random() * 0.4, // Scale variation speed
      baseOpacity,
    };
  };

  const initializeStars = (width: number, height: number) => {
    const area = width * height;
    const starCount = Math.floor(area / 10000); // Approximately 1 star per 100px²
    
    starsRef.current = Array.from({ length: starCount }, (_, i) =>
      createStar(i, width, height)
    );
  };

  const updateStar = (star: Star, width: number, height: number, deltaTime: number) => {
    // Drifting movement
    star.x += star.velocityX * deltaTime * 0.01;
    star.y += star.velocityY * deltaTime * 0.01;

    // Wrap around edges
    if (star.x < -star.size) star.x = width + star.size;
    if (star.x > width + star.size) star.x = -star.size;
    if (star.y < -star.size) star.y = height + star.size;
    if (star.y > height + star.size) star.y = -star.size;

    // Twinkling effect
    const twinkle = Math.sin(timeRef.current * star.twinkleSpeed * 0.001) * 0.3;
    star.opacity = Math.max(0.1, star.baseOpacity + twinkle);

    // Subtle scale variation
    const scaleVariation = Math.sin(timeRef.current * star.scaleSpeed * 0.001) * 0.2;
    star.size = (2 + Math.random() * 4) * (1 + scaleVariation * 0.1);
  };

  const drawStar = (ctx: CanvasRenderingContext2D, star: Star) => {
    ctx.save();
    ctx.globalAlpha = star.opacity;
    ctx.fillStyle = star.color;
    
    // Create a subtle glow effect
    ctx.shadowColor = star.color;
    ctx.shadowBlur = star.size * 0.5;
    
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size / 2, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
  };

  const animate = (currentTime: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const deltaTime = currentTime - timeRef.current;
    timeRef.current = currentTime;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw stars
    starsRef.current.forEach(star => {
      updateStar(star, canvas.width, canvas.height, deltaTime);
      drawStar(ctx, star);
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { innerWidth, innerHeight } = window;
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    // Reinitialize stars for new dimensions
    initializeStars(innerWidth, innerHeight);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set initial canvas size
    handleResize();

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Handle window resize
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'transparent',
      }}
      aria-hidden="true"
    />
  );
};