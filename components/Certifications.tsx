
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from './ui/Badge';

const CERTIFICATIONS = [
  { name: 'Posthog', url: 'https://logo.clearbit.com/posthog.com' },
  { name: 'Google Partner', url: 'https://logo.clearbit.com/google.com' },
  { name: 'Google Ads', url: 'https://logo.clearbit.com/ads.google.com' },
  { name: 'Google Analytics', url: 'https://logo.clearbit.com/analytics.google.com' },
  { name: 'Meta Certified', url: 'https://logo.clearbit.com/meta.com' },
  { name: 'Customer.io', url: 'https://logo.clearbit.com/customer.io' },
  { name: 'Hitpay', url: 'https://logo.clearbit.com/hitpayapp.com' },
  { name: 'Microsoft Solutions', url: 'https://logo.clearbit.com/microsoft.com' },
  { name: 'AWS Certified', url: 'https://logo.clearbit.com/aws.amazon.com' },
  { name: 'HubSpot', url: 'https://logo.clearbit.com/hubspot.com' },
  { name: 'GitHub', url: 'https://logo.clearbit.com/github.com' },
  { name: 'Stripe Partner', url: 'https://logo.clearbit.com/stripe.com' },
  { name: 'WordPress VIP', url: 'https://logo.clearbit.com/wordpress.com' },
  { name: 'Solutions Partner', url: 'https://logo.clearbit.com/partner.microsoft.com' },
];

export const Certifications: React.FC = () => {
  const { t } = useTranslation();
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(5);
  const [isPaused, setIsPaused] = useState(false);
  
  // Ref to handle drag/swipe gestures if needed in future, currently handling clicks
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(2);
      else if (window.innerWidth < 1024) setItemsToShow(3);
      else setItemsToShow(5);
    };
    
    // Initial call
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setStartIndex((prev) => (prev + 1) % CERTIFICATIONS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setStartIndex((prev) => (prev - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length);
  }, []);

  // Auto-rotation logic
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 3000); // Rotate every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

  // Calculate visible items based on current index using modular arithmetic for infinite loop effect
  const visibleItems = [];
  for (let i = 0; i < itemsToShow; i++) {
    const index = (startIndex + i) % CERTIFICATIONS.length;
    visibleItems.push({ ...CERTIFICATIONS[index], key: `${index}-${i}` }); // Unique key for rendering
  }

  return (
    <section className="py-20 bg-brand-ghost dark:bg-brand-oxford border-t border-b border-brand-oxford/5 dark:border-white/5 transition-colors duration-300">
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

        {/* Carousel Track */}
        <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            ref={containerRef}
            // Basic touch support for mobile swipe
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
            <div className="flex gap-6 transition-all duration-500 ease-in-out">
                {visibleItems.map((item) => (
                    <div 
                        key={item.key} 
                        className="flex-1 min-w-0"
                        style={{ flexBasis: `${100 / itemsToShow}%` }}
                    >
                        <div className="aspect-square bg-white rounded-3xl p-8 flex items-center justify-center border border-brand-oxford/10 dark:border-white/5 shadow-sm hover:shadow-lg hover:border-brand-azure/50 hover:-translate-y-1 transition-all duration-300 group cursor-default">
                            <img 
                                src={item.url} 
                                alt={`${item.name} Certification`}
                                className="w-full h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                onError={(e) => {
                                    // Fallback to text if image fails
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            {/* Fallback Text */}
                            <span className="hidden text-center text-sm font-bold text-brand-oxford text-wrap leading-tight">
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
