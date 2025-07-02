import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  threshold?: number;
  staggerDelay?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animationType = 'slideUp',
  delay = 0,
  threshold = 0.1,
  staggerDelay = 0,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ 
    threshold, 
    triggerOnce: true,
    delay: delay + staggerDelay
  });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-500 ease-out';
    const cubicBezier = 'transition-all duration-500 cubic-bezier(0.25, 1, 0.5, 1)';
    
    if (!isVisible) {
      switch (animationType) {
        case 'slideUp':
          return `${cubicBezier} opacity-0 translate-y-5`;
        case 'slideLeft':
          return `${cubicBezier} opacity-0 translate-x-5`;
        case 'slideRight':
          return `${cubicBezier} opacity-0 -translate-x-5`;
        case 'scale':
          return `${cubicBezier} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }
    
    return `${cubicBezier} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{ 
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
};

// Specialized components for different content types
export const AnimatedHeading: React.FC<{
  children: ReactNode;
  className?: string;
  level?: 1 | 2 | 3;
  delay?: number;
}> = ({ children, className = '', level = 2, delay = 0 }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <AnimatedSection animationType="slideUp" delay={delay} className={className}>
      <Tag className={className}>{children}</Tag>
    </AnimatedSection>
  );
};

export const AnimatedText: React.FC<{
  children: ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => {
  return (
    <AnimatedSection animationType="slideUp" delay={delay} className={className}>
      {children}
    </AnimatedSection>
  );
};

export const AnimatedCard: React.FC<{
  children: ReactNode;
  className?: string;
  delay?: number;
  index?: number;
}> = ({ children, className = '', delay = 0, index = 0 }) => {
  const staggerDelay = index * 150; // 150ms stagger between cards
  
  return (
    <AnimatedSection 
      animationType="slideUp" 
      delay={delay} 
      staggerDelay={staggerDelay}
      className={className}
    >
      {children}
    </AnimatedSection>
  );
};