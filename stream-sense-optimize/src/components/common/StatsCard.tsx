
import React from 'react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
  className?: string;
  glowing?: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  change, 
  trend, 
  icon,
  className,
  glowing = false
}) => {
  return (
    <div className={cn(
      "glass-morphism p-4 transition-all",
      glowing && "animate-glow",
      className
    )}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-300">{title}</span>
        {icon && <div className="text-stream-purple">{icon}</div>}
      </div>
      <div className="flex items-baseline">
        <h3 className="text-2xl font-bold text-white">{value}</h3>
        {change && (
          <span className={cn(
            "ml-2 text-xs",
            trend === 'up' && "text-green-400",
            trend === 'down' && "text-red-400",
            trend === 'neutral' && "text-gray-400"
          )}>
            {change}
          </span>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
