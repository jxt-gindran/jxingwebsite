
import React, { useState, useEffect } from 'react';
import { Badge } from './ui/Badge';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTranslatedData } from '../hooks/useTranslatedData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();
  const { testimonials } = useTranslatedData();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]); // Added dependency

  return (
    <section className="py-24 bg-brand-ghost dark:bg-brand-oxford overflow-hidden relative transition-colors duration-300">
      
      {/* Background Decoration - Large Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none">
         <span className="text-[10rem] lg:text-[18rem] font-bold text-white/40 dark:text-slate-900/50 leading-none">{t('home.testimonials.largeText')}</span>
      </div>

      {/* Gradient Blob for Glassmorphism to sit on top of */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[400px] bg-gradient-to-r from-brand-azure/30 via-brand-robin/30 to-brand-marian/30 rounded-full blur-3xl -z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
         <div className="flex justify-center mb-12">
            <Badge>{t('home.testimonials.badge')}</Badge>
         </div>
         
         <div className="max-w-4xl mx-auto">
            {/* Slider Container */}
            <div className="relative min-h-[400px] flex items-center">
              
              {/* Slides */}
              <div className="w-full overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-out" 
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((item) => (
                    <div key={item.id} className="w-full flex-shrink-0 px-4">
                      
                      {/* DARK GLASSMORPHISM CARD */}
                      <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-10 lg:p-14 rounded-3xl shadow-2xl flex flex-col items-center text-center relative transition-all duration-300 hover:-translate-y-1">
                        
                        {/* Stars - Retained Yellow */}
                        <div className="flex gap-1 mb-8 text-brand-xanthous">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={24} fill="currentColor" className="stroke-none" />
                          ))}
                        </div>

                        {/* Quote - Light Text for Dark Glass */}
                        <h3 className="text-2xl lg:text-4xl font-medium text-white leading-tight mb-8">
                          "{item.quote}"
                        </h3>
                        
                        {/* Author */}
                        <div className="flex flex-col items-center gap-1 mb-8">
                           <p className="text-lg font-bold text-white">{item.author}</p>
                           <p className="text-sm text-slate-300 font-light">{item.role}</p>
                        </div>

                        {/* Metric Pill - Glass Style */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold backdrop-blur-sm">
                           <div className="w-2 h-2 rounded-full bg-brand-azure animate-pulse-gentle shadow-[0_0_8px_rgba(0,125,235,0.8)]"></div>
                           {item.metric}
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons (Desktop) */}
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 hidden lg:flex w-12 h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/10 items-center justify-center text-white hover:bg-brand-azure hover:border-brand-azure transition-all shadow-lg z-20"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 hidden lg:flex w-12 h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/10 items-center justify-center text-white hover:bg-brand-azure hover:border-brand-azure transition-all shadow-lg z-20"
              >
                <ArrowRight size={20} />
              </button>

            </div>

            {/* Dots (Mobile) */}
            <div className="flex justify-center gap-2 mt-8 lg:hidden">
               {testimonials.map((_, idx) => (
                 <button 
                   key={idx}
                   onClick={() => setCurrentIndex(idx)}
                   className={`w-2.5 h-2.5 rounded-full transition-all ${currentIndex === idx ? 'bg-brand-azure w-6' : 'bg-slate-300/50'}`}
                 />
               ))}
            </div>
         </div>

      </div>
    </section>
  );
};
