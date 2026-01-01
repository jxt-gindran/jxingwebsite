import React from 'react';

type BadgeVariant = 'default' | 'red' | 'green' | 'light';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  dotColor?: string;
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, { container: string; dot: string }> = {
  default: {
    container: 'bg-transparent border border-brand-oxford/10 dark:border-white/10 text-brand-oxford dark:text-slate-300',
    dot: 'bg-brand-azure'
  },
  red: {
    container: 'bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 text-red-700 dark:text-red-400',
    dot: 'bg-red-500'
  },
  green: {
    container: 'bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/50 text-green-700 dark:text-green-400',
    dot: 'bg-green-500'
  },
  light: {
    container: 'bg-white/20 border border-white/30 text-white',
    dot: 'bg-white'
  }
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = '',
  dotColor,
  variant = 'default'
}) => {
  const styles = variantStyles[variant];
  const finalDotColor = dotColor || styles.dot;

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-light uppercase tracking-wider ${styles.container} ${className}`}>
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping-slow absolute inline-flex h-full w-full rounded-full ${finalDotColor} opacity-75`}></span>
        <span className={`relative inline-flex rounded-full h-2 w-2 ${finalDotColor}`}></span>
      </span>
      {children}
    </div>
  );
};
