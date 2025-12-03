import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-4 font-semibold text-sm tracking-wide transition-all duration-300 border border-transparent disabled:opacity-50 disabled:cursor-not-allowed sharp-edges";
  
  const variants = {
    primary: "bg-bc1-black text-white hover:bg-bc1-orange hover:text-white border-bc1-black hover:border-bc1-orange",
    secondary: "bg-bc1-orange text-white hover:bg-bc1-caramelDark",
    outline: "bg-transparent border-bc1-black text-bc1-black hover:bg-bc1-black hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      style={{ borderRadius: 0 }} // Explicitly square
      {...props}
    >
      {children}
    </button>
  );
};