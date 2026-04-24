import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const containerSizes = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-12 h-12 rounded-xl',
    lg: 'w-16 h-16 rounded-2xl',
    xl: 'w-24 h-24 rounded-[2.5rem]'
  };

  const fontSizes = {
    sm: 'text-xs',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-4xl'
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Icon portion matching the green squircle */}
      <div className={`${containerSizes[size]} bg-gradient-to-b from-[#3a7233] to-[#1a3b16] flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_6px_-1px_rgba(0,0,0,0.3)] border border-[#4a8a41]/30`}>
        <span className={`${fontSizes[size]} text-white font-black tracking-[-0.08em] drop-shadow-md`}>
          bc1
        </span>
      </div>
    </div>
  );
};
