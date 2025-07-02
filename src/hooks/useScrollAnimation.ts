import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  staggerDelay?: number;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    
    if (!currentElement) return;

    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Add stagger animation to child elements
          const children = entry.target.querySelectorAll('.animate-on-scroll');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-in');
            }, index * (options.staggerDelay || 100));
          });
          
          if (options.triggerOnce && observerRef.current) {
            observerRef.current.unobserve(entry.target);
          }
        } else if (!options.triggerOnce) {
          setIsVisible(false);
          
          // Remove animation classes when out of view
          const children = entry.target.querySelectorAll('.animate-on-scroll');
          children.forEach((child) => {
            child.classList.remove('animate-in');
          });
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    observerRef.current.observe(currentElement);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [options.threshold, options.rootMargin, options.triggerOnce, options.staggerDelay]);

  return { elementRef, isVisible };
};

// Global scroll animation utility
export const initializeScrollAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Add stagger effect to children
          const children = entry.target.querySelectorAll('.animate-on-scroll');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-in');
            }, index * 100);
          });
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  // Observe all elements with animation classes
  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });

  return observer;
};