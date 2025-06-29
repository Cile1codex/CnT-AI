import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circular background */}
        <circle
          cx="100"
          cy="100"
          r="100"
          fill="url(#circularGradient)"
        />
        
        {/* Decorative arcs */}
        <path
          d="M 30 100 A 70 70 0 0 1 100 30"
          stroke="url(#arcGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,3"
          opacity="0.6"
        />
        
        <path
          d="M 170 100 A 70 70 0 0 1 100 170"
          stroke="url(#arcGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,3"
          opacity="0.6"
        />
        
        {/* Main arc with text */}
        <path
          id="textPath"
          d="M 50 100 A 50 50 0 1 1 150 100"
          fill="none"
        />
        
        <text className="text-[8px] fill-cyan-400 font-medium">
          <textPath href="#textPath" startOffset="0%">
            custom automation solutions • integration systems • 
          </textPath>
        </text>
        
        {/* CnT text */}
        <text
          x="100"
          y="110"
          textAnchor="middle"
          className="fill-white font-bold text-[42px]"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          CnT
        </text>
        
        {/* Decorative dots */}
        <circle cx="60" cy="60" r="2" fill="#00bcd4" opacity="0.8" />
        <circle cx="140" cy="60" r="2" fill="#00bcd4" opacity="0.6" />
        <circle cx="60" cy="140" r="2" fill="#00bcd4" opacity="0.7" />
        <circle cx="140" cy="140" r="2" fill="#00bcd4" opacity="0.9" />
        <circle cx="100" cy="40" r="1.5" fill="#00bcd4" opacity="0.5" />
        <circle cx="160" cy="100" r="1.5" fill="#00bcd4" opacity="0.8" />
        
        {/* Gradient definitions */}
        <defs>
          <radialGradient id="circularGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>
          
          <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00bcd4" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};