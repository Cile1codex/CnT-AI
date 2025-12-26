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
      <img
        src="/image.png"
        alt="CnT AI Logo"
        className="w-full h-full object-contain"
        loading="lazy"
      />
      <span className="santa-hat">🎅</span>
    </div>
  );
};