import React, { useState, useEffect } from 'react';
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
  // Standardized Tech Hero Image
  image = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax calculations for content only
  const contentTranslate = scrollY * 0.15;
  const opacity = Math.max(0, 1 - scrollY / 600);

  return (
    <section className="relative w-full pt-32 lg:pt-40 pb-16 bg-white dark:bg-brand-oxford transition-colors duration-300 overflow-visible">
      <div className="container mx-auto px-6">
        <div className="relative w-full min-h-[400px] lg:min-h-[520px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-oxford/5 dark:border-white/5">

          {/* 1. Background Image - Fixed Position */}
          <div
            className="absolute inset-0 z-0"
            style={{ opacity: opacity }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500"
              style={{
                backgroundImage: `url(${image})`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center'
              }}
            />
            {/* Dark Overlay for text contrast */}
            <div className="absolute inset-0 bg-brand-oxford/50 mix-blend-multiply"></div>
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-oxford/30 via-transparent to-brand-oxford/60"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-brand-azure/20 via-transparent to-transparent mix-blend-screen"></div>
          </div>

          {/* 2. Content Layer */}
          <div
            className="relative z-10 w-full h-full min-h-[400px] lg:min-h-[520px] p-8 lg:p-16 flex flex-col justify-between"
            style={{
              transform: `translateY(${contentTranslate}px)`,
              opacity: opacity
            }}
          >
            {/* Top: Breadcrumbs */}
            <div className="flex justify-start">
              <Breadcrumbs />
            </div>

            {/* Bottom: Heading and Subtitle */}
            <div className="max-w-4xl">
              <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tight drop-shadow-2xl">
                {title}
              </h1>

              {subtitle && (
                <p className="text-lg lg:text-xl text-slate-200 max-w-2xl leading-relaxed font-light drop-shadow-md">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
