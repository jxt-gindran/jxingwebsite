
import React from 'react';
import { Badge } from './Badge';
import { Breadcrumbs } from './Breadcrumbs';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  image?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  badge,
  // Standardized Circuit Board / Tech Hero Image
  image = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
}) => {
  return (
    <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden bg-brand-oxford">
      
      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-30" 
        />
        {/* Dark Overlay for text contrast */}
        <div className="absolute inset-0 bg-brand-oxford/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-oxford/20 to-transparent"></div>
        
        {/* 2. The Subtle Gradient Fade (Pink/Purple) at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-fuchsia-900/60 via-purple-900/20 to-transparent mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col">
        {/* 3. Breadcrumbs: Top-Left Positioned */}
        <div className="absolute top-0 left-6 lg:left-6">
          <Breadcrumbs />
        </div>

        <div className="flex flex-col items-center text-center mt-12">
          {badge && (
            <div className="flex justify-center mb-6">
              <Badge className="bg-white/10 text-white border-white/20">{badge}</Badge>
            </div>
          )}
          
          {/* 4. Heading: Large, White, High-Contrast */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg max-w-4xl">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* 5. The Curved Fade (Concave Cut-out) */}
      {/* Reduced Height to fit tighter */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          className="relative block w-full h-[60px] lg:h-[100px]" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          {/* Using current text color to match the section below (ghost or oxford depending on theme) */}
          <path 
            d="M0,120 L0,60 Q600,150 1200,60 L1200,120 Z" 
            className="fill-brand-ghost dark:fill-brand-oxford transition-colors duration-300"
          ></path>
        </svg>
      </div>
    </section>
  );
};
