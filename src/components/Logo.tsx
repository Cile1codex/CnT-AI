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

  const hatSizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-11 h-11',
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <img
        src="/image.png"
        alt="CnT AI Logo"
        className="w-full h-full object-contain"
        loading="lazy"
      />
      <img
        src="/santa-hat.png"
        alt="Santa Hat"
        className={`${hatSizeClasses[size]} absolute -top-2 -right-2 pointer-events-none santa-hat-png`}
        style={{ transform: 'rotate(25deg)' }}
        loading="lazy"
      />
    </div>
  );
};