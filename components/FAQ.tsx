
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Badge } from './ui/Badge';
import { useTranslation } from 'react-i18next';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export const FAQ: React.FC<FAQProps> = ({ items, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useTranslation();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-20 bg-white dark:bg-brand-oxford transition-colors duration-300 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/3">
            <Badge className="mb-6">{t('home.faq.badge')}</Badge>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand-oxford dark:text-white mb-6">
              {t('home.faq.title')}
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              {t('home.faq.desc')}
            </p>
          </div>
          
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {items.map((item, index) => (
                <div 
                  key={index} 
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    openIndex === index 
                      ? 'border-brand-azure bg-brand-ghost/50 dark:bg-slate-800/50' 
                      : 'border-brand-timberwolf dark:border-slate-700 bg-transparent'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex items-center justify-between w-full p-6 text-left"
                  >
                    <span className={`font-semibold text-lg ${openIndex === index ? 'text-brand-azure dark:text-brand-robin' : 'text-brand-oxford dark:text-white'}`}>
                      {item.question}
                    </span>
                    <span className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-brand-azure text-white' : 'bg-transparent text-slate-500'}`}>
                      {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
