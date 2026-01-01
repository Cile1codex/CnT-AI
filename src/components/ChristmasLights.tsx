import React, { useEffect, useState } from 'react';

export const ChristmasLights: React.FC = () => {
  const [lights, setLights] = useState<Array<{ color: string; delay: number }>>([]);

  useEffect(() => {
    // Create realistic warm Christmas light colors
    const lightColors = [
      '#FFD700', // Warm gold
      '#FF6B35', // Warm red-orange
      '#C1121F', // Deep red
      '#4A9D5F', // Forest green
      '#FFA500', // Warm orange
      '#FFD700', // Gold (repeated for more warm tones)
      '#FF6B35', // Warm red-orange (repeated)
      '#4A9D5F', // Green (repeated)
    ];

    const generatedLights = Array.from({ length: 40 }, (_, i) => ({
      color: lightColors[i % lightColors.length],
      delay: Math.random() * 2,
    }));

    setLights(generatedLights);
  }, []);

  return (
    <>
      {/* Top string of lights */}
      <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none h-12">
        <svg className="w-full h-full" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.6))' }}>
          {/* Wire/string */}
          <path
            d={`M 0 8 Q ${window.innerWidth / 8} 20, ${window.innerWidth / 4} 8 T ${window.innerWidth / 2} 8 T ${(3 * window.innerWidth) / 4} 8 T ${window.innerWidth} 8`}
            fill="none"
            stroke="#2d3436"
            strokeWidth="2"
          />

          {/* Light bulbs */}
          {lights.map((light, index) => {
            const x = (index / lights.length) * window.innerWidth;
            const y = 8 + (Math.sin((index * Math.PI) / 4) * 12);

            return (
              <g key={index}>
                {/* Wire connection */}
                <line
                  x1={x}
                  y1={y}
                  x2={x}
                  y2={y + 15}
                  stroke="#2d3436"
                  strokeWidth="1.5"
                />

                {/* Light bulb glow */}
                <circle
                  cx={x}
                  cy={y + 15}
                  r="8"
                  fill={light.color}
                  opacity="0.3"
                  className="christmas-light-glow"
                  style={{
                    animation: `twinkle ${2 + light.delay}s ease-in-out infinite`,
                    animationDelay: `${light.delay}s`,
                  }}
                >
                  <animate
                    attributeName="r"
                    values="8;12;8"
                    dur={`${2 + light.delay}s`}
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Light bulb */}
                <ellipse
                  cx={x}
                  cy={y + 18}
                  rx="4"
                  ry="6"
                  fill={light.color}
                  className="christmas-light"
                  style={{
                    animation: `twinkle ${2 + light.delay}s ease-in-out infinite`,
                    animationDelay: `${light.delay}s`,
                  }}
                />

                {/* Bulb cap */}
                <rect
                  x={x - 3}
                  y={y + 12}
                  width="6"
                  height="4"
                  fill="#4a5568"
                  rx="1"
                />

                {/* Shine/reflection */}
                <ellipse
                  cx={x - 1.5}
                  cy={y + 16}
                  rx="1.5"
                  ry="2"
                  fill="white"
                  opacity="0.6"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Mobile-friendly simpler version */}
      <style>{`
        @media (max-width: 768px) {
          .christmas-light-glow {
            display: none;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
            filter: brightness(1);
          }
          50% {
            opacity: 0.6;
            filter: brightness(1.5);
          }
        }
      `}</style>
    </>
  );
};
