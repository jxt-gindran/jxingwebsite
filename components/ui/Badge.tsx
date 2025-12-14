import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  dotColor?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '', dotColor = 'bg-brand-azure' }) => {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-transparent border border-brand-oxford/10 dark:border-white/10 text-brand-oxford dark:text-slate-300 text-xs font-light uppercase tracking-wider ${className}`}>
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping-slow absolute inline-flex h-full w-full rounded-full ${dotColor} opacity-75`}></span>
        <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`}></span>
      </span>
      {children}
    </div>
  );
};