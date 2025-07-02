import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  threshold?: number;
  staggerChildren?: boolean;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animationType = 'slideUp',
  delay = 0,
  threshold = 0.1,
  staggerChildren = false,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ 
    threshold, 
    triggerOnce: true,
    staggerDelay: staggerChildren ? 150 : 0
  });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (animationType) {
        case 'slideUp':
          return `${baseClasses} opacity-0 translate-y-10`;
        case 'slideLeft':
          return `${baseClasses} opacity-0 translate-x-10`;
        case 'slideRight':
          return `${baseClasses} opacity-0 -translate-x-10`;
        case 'scale':
          return `${baseClasses} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
};