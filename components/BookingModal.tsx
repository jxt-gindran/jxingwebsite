
import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useBooking } from './BookingContext';

export const BookingModal: React.FC = () => {
  const { isOpen, closeBooking } = useBooking();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-oxford/80 backdrop-blur-sm transition-opacity"
        onClick={closeBooking}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl h-[85vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up border border-white/10">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-oxford/5 dark:border-white/5 bg-white dark:bg-slate-900 z-10">
          <h3 className="text-lg font-bold text-brand-oxford dark:text-white">Book a Consultation</h3>
          <button 
            onClick={closeBooking}
            className="w-10 h-10 rounded-full bg-brand-ghost dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-brand-azure hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Iframe Container */}
        <div className="flex-1 w-full h-full bg-white dark:bg-slate-900 relative">
          <iframe
            src="https://cal.com/jxingtech/book-a-free-consult"
            className="w-full h-full border-0"
            allow="camera; microphone; autoplay; fullscreen"
            title="Book a Free Consult"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
