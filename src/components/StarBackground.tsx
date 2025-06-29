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
  twinkleOffset: number;
}

export const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const colors = [
    '#A8E6CF', // Mint Green
    '#B8E3FF', // Sky Blue
    '#D4B8FF', // Soft Lavender
    '#FFFFFF', // White
    '#FFB8B8', // Faded Coral
  ];

  const createStar = (id: number, width: number, height: number): Star => {
    const baseOpacity = 0.3 + Math.random() * 0.4; // 30% to 70% for better visibility
    return {
      id,
      x: Math.random() * width,
      y: Math.random() * height,
      size: 2 + Math.random() * 4, // 2px to 6px
      opacity: baseOpacity,
      color: colors[Math.floor(Math.random() * colors.length)],
      velocityX: (Math.random() - 0.5) * 20, // Slower movement
      velocityY: (Math.random() - 0.5) * 20,
      twinkleSpeed: 0.001 + Math.random() * 0.002, // Slower twinkling
      scaleSpeed: 0.0005 + Math.random() * 0.001,
      baseOpacity,
      twinkleOffset: Math.random() * Math.PI * 2, // Random phase offset
    };
  };

  const initializeStars = (width: number, height: number) => {
    const area = width * height;
    let starCount = Math.floor(area / 8000); // More stars for better visibility
    
    // Ensure minimum and maximum star counts
    starCount = Math.max(50, Math.min(starCount, 200));
    
    starsRef.current = Array.from({ length: starCount }, (_, i) =>
      createStar(i, width, height)
    );
  };

  const updateStar = (star: Star, width: number, height: number, currentTime: number) => {
    // Drifting movement
    star.x += star.velocityX * 0.016; // Assuming ~60fps
    star.y += star.velocityY * 0.016;

    // Wrap around edges
    if (star.x < -star.size) star.x = width + star.size;
    if (star.x > width + star.size) star.x = -star.size;
    if (star.y < -star.size) star.y = height + star.size;
    if (star.y > height + star.size) star.y = -star.size;

    // Twinkling effect using sine wave
    const twinkle = Math.sin(currentTime * star.twinkleSpeed + star.twinkleOffset) * 0.3;
    star.opacity = Math.max(0.1, Math.min(0.9, star.baseOpacity + twinkle));
  };

  const drawStar = (ctx: CanvasRenderingContext2D, star: Star) => {
    ctx.save();
    
    // Set opacity and color
    ctx.globalAlpha = star.opacity;
    ctx.fillStyle = star.color;
    
    // Create glow effect
    ctx.shadowColor = star.color;
    ctx.shadowBlur = star.size * 2;
    
    // Draw the star
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size / 2, 0, Math.PI * 2);
    ctx.fill();
    
    // Add a brighter center
    ctx.shadowBlur = 0;
    ctx.globalAlpha = star.opacity * 1.5;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size / 4, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
  };

  const animate = (currentTime: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas with slight transparency for trail effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw stars
    starsRef.current.forEach(star => {
      updateStar(star, canvas.width, canvas.height, currentTime);
      drawStar(ctx, star);
    });

    lastTimeRef.current = currentTime;
    animationRef.current = requestAnimationFrame(animate);
  };

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { innerWidth, innerHeight } = window;
    const dpr = window.devicePixelRatio || 1;
    
    // Set actual size
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    
    // Scale back down using CSS
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    
    // Scale the drawing context
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    // Reinitialize stars for new dimensions
    initializeStars(innerWidth, innerHeight);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

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
        mixBlendMode: 'screen', // This helps with visibility on different backgrounds
      }}
      aria-hidden="true"
    />
  );
};