
import React from 'react';
import { cn } from '@/lib/utils';

interface GlowingBorderProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

const GlowingBorder: React.FC<GlowingBorderProps> = ({ 
  children, 
  className,
  intensity = 'medium'
}) => {
  const glowIntensity = {
    low: 'shadow-[0_0_10px_rgba(155,135,245,0.3)]',
    medium: 'shadow-[0_0_15px_rgba(155,135,245,0.5)]',
    high: 'shadow-[0_0_20px_rgba(155,135,245,0.7)]',
  };

  return (
    <div className={cn(
      "relative rounded-xl overflow-hidden",
      glowIntensity[intensity],
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-stream-purple/20 to-transparent opacity-50" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlowingBorder;
