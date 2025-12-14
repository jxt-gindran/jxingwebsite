
import React, { useState } from 'react';
import { X, CheckCircle2, FileText, User, Mail, Phone } from 'lucide-react';
import { Button } from './ui/Button';
import { useTranslation } from 'react-i18next';

interface QuoteItem {
  id: string;
  title: string;
  price: string;
  priceType: string;
  notes?: string;
}

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: QuoteItem[];
  onSuccess: () => void;
}

export const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({ isOpen, onClose, items, onSuccess }) => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onSuccess();
        onClose();
        setIsSuccess(false); // Reset for next time
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-sans">
      <div 
        className="absolute inset-0 bg-brand-oxford/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-2xl bg-white dark:bg-brand-oxford rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up border border-white/10">
        
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-brand-oxford/5 dark:border-white/5 bg-white dark:bg-slate-900 z-10">
          <h3 className="text-xl font-bold text-brand-oxford dark:text-white">{t('pages.pricing.modalTitle')}</h3>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-brand-ghost dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-brand-azure hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[70vh] bg-white dark:bg-brand-oxford">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-6 animate-fade-in-up">
                <CheckCircle2 size={40} />
              </div>
              <h4 className="text-2xl font-bold text-brand-oxford dark:text-white mb-2">{t('pages.pricing.successTitle')}</h4>
              <p className="text-slate-500 dark:text-slate-400">{t('pages.pricing.successDesc')}</p>
            </div>
          ) : (
            <>
              <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                 {t('pages.pricing.modalDesc')}
              </p>

              {/* Summary of Selected Items */}
              <div className="bg-brand-ghost dark:bg-slate-900 rounded-2xl p-6 mb-8 border border-brand-oxford/5 dark:border-white/5">
                <div className="flex items-center justify-between mb-4">
                   <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Selected Services ({items.length})</h4>
                   <FileText size={16} className="text-slate-400" />
                </div>
                <div className="space-y-3 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                  {items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start text-sm pb-2 border-b border-brand-oxford/5 dark:border-white/5 last:border-0 last:pb-0">
                      <div>
                         <span className="font-semibold text-brand-oxford dark:text-white block">{item.title}</span>
                         {item.notes && <span className="text-xs text-slate-500 italic block mt-0.5">Note: {item.notes}</span>}
                      </div>
                      <span className="text-brand-azure dark:text-brand-robin font-mono font-medium">RM{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-brand-oxford dark:text-slate-300 ml-1">
                      <User size={14} className="text-brand-azure" />
                      {t('pages.pricing.nameLabel')}
                    </label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-brand-ghost dark:bg-slate-950 border border-brand-timberwolf dark:border-slate-700 outline-none focus:border-brand-azure dark:focus:border-brand-robin text-brand-oxford dark:text-white transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-brand-oxford dark:text-slate-300 ml-1">
                      <Phone size={14} className="text-brand-azure" />
                      {t('pages.pricing.phoneLabel')}
                    </label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-brand-ghost dark:bg-slate-950 border border-brand-timberwolf dark:border-slate-700 outline-none focus:border-brand-azure dark:focus:border-brand-robin text-brand-oxford dark:text-white transition-colors" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-brand-oxford dark:text-slate-300 ml-1">
                    <Mail size={14} className="text-brand-azure" />
                    {t('pages.pricing.emailLabel')}
                  </label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl bg-brand-ghost dark:bg-slate-950 border border-brand-timberwolf dark:border-slate-700 outline-none focus:border-brand-azure dark:focus:border-brand-robin text-brand-oxford dark:text-white transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-oxford dark:text-slate-300 ml-1">{t('pages.pricing.notesLabel')}</label>
                  <textarea rows={3} className="w-full px-4 py-3 rounded-xl bg-brand-ghost dark:bg-slate-950 border border-brand-timberwolf dark:border-slate-700 outline-none focus:border-brand-azure dark:focus:border-brand-robin text-brand-oxford dark:text-white resize-none transition-colors"></textarea>
                </div>

                <div className="pt-4">
                  <Button variant="wipe" className="w-full justify-center py-4 text-lg" disabled={isSubmitting}>
                    {isSubmitting ? t('pages.pricing.submitting') : t('pages.pricing.requestQuote')}
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
