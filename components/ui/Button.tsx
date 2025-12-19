import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'circle' | 'outline' | 'link' | 'wipe' | 'wipe-white';
  icon?: 'arrow-right' | 'arrow-up-right' | null;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon = null,
  className = '',
  ...props
}) => {
  // Base rounded-xl for consistent rounded rect shape
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 font-semibold text-[15px] rounded-xl";

  const variants = {
    // Primary: Ghost azure outline that fills on hover
    primary: "bg-transparent border border-brand-azure/30 dark:border-brand-azure/40 text-brand-azure dark:text-brand-robin hover:bg-brand-azure hover:text-white dark:hover:bg-brand-robin dark:hover:text-brand-oxford shadow-sm hover:shadow-md pl-6 pr-4 py-3",

    // Secondary: Ghost gray outline
    secondary: "bg-transparent border border-brand-oxford/10 dark:border-white/10 text-brand-oxford dark:text-white hover:border-brand-azure dark:hover:border-brand-robin hover:text-brand-azure dark:hover:text-brand-robin px-6 py-3",

    // Circle: Ghost outline squircle
    circle: "bg-transparent border border-brand-oxford/10 dark:border-white/10 hover:border-brand-azure dark:hover:border-brand-robin text-brand-oxford dark:text-white hover:text-brand-azure dark:hover:text-brand-robin w-12 h-12 flex items-center justify-center p-0 rounded-xl",

    outline: "bg-transparent border border-brand-oxford/10 dark:border-white/10 text-brand-oxford dark:text-white hover:border-brand-azure dark:hover:border-brand-robin px-6 py-3",

    link: "text-brand-oxford dark:text-white hover:text-brand-azure dark:hover:text-brand-robin px-0 py-0 border-none",

    // Wipe: Ghost outline that wipes fill (for light/dark backgrounds)
    wipe: "relative overflow-hidden bg-transparent border border-brand-oxford/10 dark:border-white/10 text-brand-oxford dark:text-white rounded-xl p-1.5 transition-all duration-300 hover:border-brand-azure dark:hover:border-brand-robin group",

    // Wipe White: Ghost outline that wipes fill (for colored backgrounds like Brand Azure)
    "wipe-white": "relative overflow-hidden bg-transparent border border-white/30 text-white rounded-xl p-1.5 transition-all duration-300 hover:border-white group",
  };

  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const IconComponent = icon === 'arrow-right' ? ArrowRight : icon === 'arrow-up-right' ? ArrowUpRight : null;

  if (variant === 'wipe' || variant === 'wipe-white') {
    const Icon = IconComponent || ArrowRight;
    const isWhite = variant === 'wipe-white';

    // Directional classes - using logical properties for automatic RTL support
    const containerClasses = 'ps-1.5 pe-6';
    const wipePosClasses = 'start-0';

    // Color logic
    const wipeBg = isWhite ? 'bg-white' : 'bg-brand-azure dark:bg-brand-robin';
    const iconBg = isWhite
      ? 'bg-white text-brand-azure'
      : 'bg-brand-azure text-white dark:bg-brand-robin dark:text-brand-oxford';
    const hoverText = isWhite
      ? 'group-hover:text-brand-azure'
      : 'group-hover:text-white dark:group-hover:text-brand-oxford';

    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${containerClasses} ${className}`}
        {...props}
      >
        {/* Wipe Background */}
        <span className={`absolute ${wipePosClasses} top-0 bottom-0 w-12 rounded-lg ${wipeBg} transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-full`}></span>

        <span className="relative z-10 flex items-center gap-3">
          <span className={`flex items-center justify-center w-10 h-10 rounded-lg group-hover:bg-transparent transition-colors duration-300 ${iconBg}`}>
            <Icon size={20} className={isRTL ? 'rotate-180' : ''} />
          </span>
          <span className={`font-semibold text-[15px] tracking-wide transition-colors duration-300 ${hoverText}`}>
            {children}
          </span>
        </span>
      </button>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className={variant === 'primary' ? 'me-3' : ''}>{children}</span>
      {IconComponent && (
        <span className={`
          ${variant === 'circle' ? '' : ''}
          ${variant === 'primary' ? 'w-6 h-6 rounded-md bg-brand-azure/10 dark:bg-brand-robin/10 text-brand-azure dark:text-brand-robin flex items-center justify-center group-hover:bg-white group-hover:text-brand-azure transition-colors' : 'ms-2'}
        `}>
          <IconComponent size={variant === 'circle' ? 20 : 16} className={isRTL ? 'rotate-180' : ''} />
        </span>
      )}
    </button>
  );
};
