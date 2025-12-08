import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number; // in seconds
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "fit-content", 
  delay = 0, 
  direction = 'up',
  className = "" 
}) => {
  const { ref, isVisible } = useScrollReveal(0.15);

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translate-y-16';
      case 'down': return '-translate-y-16';
      case 'left': return 'translate-x-16';
      case 'right': return '-translate-x-16';
      default: return 'translate-y-16';
    }
  };

  return (
    <div ref={ref} style={{ width }} className={`relative overflow-hidden ${className}`}>
      <div
        style={{ 
          transitionDelay: `${delay}s`,
          transitionDuration: '0.8s' 
        }}
        className={`transform transition-all ease-out ${
          isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${getTransform()}`
        }`}
      >
        {children}
      </div>
    </div>
  );
};