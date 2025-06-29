import React from 'react';

export const StarBackgroundCSS: React.FC = () => {
  // Generate random stars with different properties
  const generateStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const colors = ['#A8E6CF', '#B8E3FF', '#D4B8FF', '#FFFFFF', '#FFB8B8'];
      const size = 2 + Math.random() * 4; // 2px to 6px
      const opacity = 0.2 + Math.random() * 0.4; // 20% to 60%
      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const animationDuration = 3 + Math.random() * 5; // 3-8 seconds
      const animationDelay = Math.random() * 2; // 0-2 seconds delay

      return {
        id: i,
        size,
        opacity,
        color,
        left,
        top,
        animationDuration,
        animationDelay,
      };
    });
  };

  const stars = generateStars(150); // Adjust count based on screen size

  return (
    <>
      <style>{`
        @keyframes starDrift {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: var(--star-opacity);
          }
          25% {
            transform: translate(10px, -15px) scale(1.1);
            opacity: calc(var(--star-opacity) * 0.7);
          }
          50% {
            transform: translate(-5px, -25px) scale(0.9);
            opacity: var(--star-opacity);
          }
          75% {
            transform: translate(-15px, -10px) scale(1.05);
            opacity: calc(var(--star-opacity) * 0.8);
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: var(--star-opacity);
          }
        }

        @keyframes starTwinkle {
          0%, 100% {
            opacity: var(--star-opacity);
          }
          50% {
            opacity: calc(var(--star-opacity) * 0.3);
          }
        }

        @keyframes starFloat {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(120deg);
          }
          66% {
            transform: translateY(5px) rotate(240deg);
          }
          100% {
            transform: translateY(0px) rotate(360deg);
          }
        }

        .star {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(0.5px);
          box-shadow: 0 0 6px currentColor;
        }

        .star-drift {
          animation: starDrift var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
        }

        .star-twinkle {
          animation: starTwinkle calc(var(--duration) * 0.7) ease-in-out infinite;
          animation-delay: var(--delay);
        }

        .star-float {
          animation: starFloat var(--duration) linear infinite;
          animation-delay: var(--delay);
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .star {
            animation: none !important;
          }
        }

        /* Performance optimization for smaller screens */
        @media (max-width: 768px) {
          .star:nth-child(n+100) {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .star:nth-child(n+50) {
            display: none;
          }
        }
      `}</style>

      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        {stars.map((star, index) => {
          const animationType = ['star-drift', 'star-twinkle', 'star-float'][index % 3];
          
          return (
            <div
              key={star.id}
              className={`star ${animationType}`}
              style={{
                '--star-opacity': star.opacity,
                '--duration': `${star.animationDuration}s`,
                '--delay': `${star.animationDelay}s`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                left: `${star.left}%`,
                top: `${star.top}%`,
                backgroundColor: star.color,
                color: star.color,
              } as React.CSSProperties}
            />
          );
        })}
      </div>
    </>
  );
};