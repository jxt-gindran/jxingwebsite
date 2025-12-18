
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from './ui/Badge';

const CERTIFICATIONS = [
  { name: 'AWS Partner Network', url: '/certifications/1.png' },
  { name: 'WordPress VIP', url: '/certifications/2.png' },
  { name: 'Google Ads', url: '/certifications/3.png' },
  { name: 'Customer.io Agency Partner', url: '/certifications/4.png' },
  { name: 'Google Analytics', url: '/certifications/5.png' },
  { name: 'Google Ads Search', url: '/certifications/6.png' },
  { name: 'Google Partner', url: '/certifications/7.png' },
  { name: 'HitPay', url: '/certifications/8.png' },
  { name: 'HubSpot', url: '/certifications/9.png' },
  { name: 'Meta Business Partner', url: '/certifications/10.png' },
  { name: 'Microsoft Partner', url: '/certifications/11.png' },
  { name: 'Mixpanel', url: '/certifications/12.png' },
  { name: 'PostHog', url: '/certifications/13.png' },
];

export const Certifications: React.FC = () => {
  const { t } = useTranslation();
  // We use 8 items to make them ~35% smaller than original 5
  const [itemsToShow, setItemsToShow] = useState(8);
  // Clone 2 sets of items for smooth infinite scrolling
  const displayItems = [...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS];
  // Start in the middle set
  const [currentIndex, setCurrentIndex] = useState(CERTIFICATIONS.length);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(3);
      else if (window.innerWidth < 1024) setItemsToShow(5);
      else setItemsToShow(8);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Use transitionEnd for a perfect infinite loop jump
  const handleTransitionEnd = () => {
    // If we've reached the last set, jump back to the middle set
    if (currentIndex >= CERTIFICATIONS.length * 2) {
      setIsAnimating(false);
      setCurrentIndex(currentIndex - CERTIFICATIONS.length);
    }
    // If we've reached the first set, jump forward to the middle set
    else if (currentIndex < CERTIFICATIONS.length) {
      setIsAnimating(false);
      setCurrentIndex(currentIndex + CERTIFICATIONS.length);
    }
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

  return (
    <section className="py-20 bg-brand-ghost dark:bg-brand-oxford border-t border-b border-brand-oxford/5 dark:border-white/5 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <Badge className="mb-4">{t('home.certifications.title')}</Badge>
            <h2 className="text-3xl font-bold text-brand-oxford dark:text-white sr-only">{t('home.certifications.title')}</h2>
          </div>

          {/* Manual Navigation */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous certification"
              className="w-10 h-10 rounded-full border border-brand-oxford/10 dark:border-white/10 flex items-center justify-center text-slate-500 hover:bg-brand-azure hover:text-white hover:border-brand-azure transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next certification"
              className="w-10 h-10 rounded-full border border-brand-oxford/10 dark:border-white/10 flex items-center justify-center text-slate-500 hover:bg-brand-azure hover:text-white hover:border-brand-azure transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Track Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={containerRef}
          onTouchStart={(e) => {
            const touchStart = e.touches[0].clientX;
            containerRef.current?.setAttribute('data-touch-start', touchStart.toString());
          }}
          onTouchEnd={(e) => {
            const touchEnd = e.changedTouches[0].clientX;
            const touchStart = parseFloat(containerRef.current?.getAttribute('data-touch-start') || '0');
            if (touchStart - touchEnd > 50) nextSlide();
            if (touchEnd - touchStart > 50) prevSlide();
          }}
        >
          <div
            className={`flex gap-4 ${isAnimating ? 'transition-transform duration-500 ease-in-out' : 'transition-none'}`}
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
          >
            {displayItems.map((item, index) => (
              <div
                key={`${index}`}
                className="flex-shrink-0"
                style={{ width: `calc(${100 / itemsToShow}% - ${(16 * (itemsToShow - 1)) / itemsToShow}px)` }}
              >
                <div className="relative aspect-[4/3] bg-white rounded-2xl p-4 flex items-center justify-center border border-brand-oxford/10 dark:border-white/5 shadow-sm hover:shadow-md hover:border-brand-azure/30 transition-all duration-300 group cursor-default overflow-hidden">
                  <img
                    src={item.url}
                    alt={`${item.name} Certification`}
                    className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105 group-hover:opacity-10"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Hover label - Slide up effect */}
                  <div className="absolute inset-x-0 bottom-0 py-2 bg-white/95 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center border-t border-brand-azure/10">
                    <span className="text-[9px] sm:text-[10px] font-bold text-brand-oxford text-center px-1 leading-tight line-clamp-2">
                      {item.name}
                    </span>
                  </div>

                  <span className="hidden text-center text-[10px] font-bold text-brand-oxford leading-tight">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
