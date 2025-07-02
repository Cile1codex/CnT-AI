import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 will-change-transform btn-hover';
  
  const variantClasses = {
    primary: 'premium-button text-white shadow-lg hover:shadow-xl focus:ring-purple-500',
    secondary: 'bg-gradient-to-r from-indigo-800 to-indigo-700 text-white hover:from-indigo-900 hover:to-indigo-800 shadow-lg hover:shadow-xl focus:ring-indigo-700',
    outline: 'border-2 border-purple-400 text-purple-600 hover:bg-purple-50 hover:border-purple-500 focus:ring-purple-500 premium-card',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-base',
    md: 'px-6 py-3 text-lg',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      style={{ fontSize: '18px' }}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </button>
  );
};