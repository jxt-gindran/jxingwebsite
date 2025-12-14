import React, { useState, useEffect, useMemo } from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { Button } from '../components/ui/Button';
import { Check, Plus, Minus, Trash2, ShoppingBag, Edit3, ArrowRight, RefreshCcw, Wallet } from 'lucide-react';
import { FAQ } from '../components/FAQ';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useBooking } from '../components/BookingContext';
import { QuoteRequestModal } from '../components/QuoteRequestModal';
import { SeoHead } from '../components/SeoHead';

interface QuoteItem {
  id: string; // unique combo of categoryId-subId
  subId: string;
  categoryId: string;
  title: string;
  price: string;
  priceType: string;
  notes?: string;
}

export const Pricing: React.FC = () => {
  const { services, faqs } = useTranslatedData();
  const { t, i18n } = useTranslation();
  const { openBooking } = useBooking();
  const lang = i18n.language;

  // Initialize state from LocalStorage if available
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>(() => {
    try {
      const saved = localStorage.getItem('jxing_quote_items');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [activeCategory, setActiveCategory] = useState<string>(services[0]?.id || 'website-solutions');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  
  // Custom Notes editing state
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [tempNote, setTempNote] = useState("");

  // Persist to LocalStorage whenever items change
  useEffect(() => {
    localStorage.setItem('jxing_quote_items', JSON.stringify(quoteItems));
  }, [quoteItems]);

  // Calculate Totals: Split into Upfront/One-time and Monthly
  const totals = useMemo(() => {
    return quoteItems.reduce((acc, item) => {
      // Remove commas and convert to number
      const numericPrice = parseInt(item.price.replace(/,/g, ''), 10) || 0;
      
      // Determine if it's a monthly/recurring cost
      // Keywords based on JXING Pricing PDF: "Month", "Mo", "Subscription", "Retainer"
      const type = item.priceType.toLowerCase();
      const isRecurring = type.includes('month') || type.includes('mo') || type.includes('subscription') || type.includes('retainer');

      if (isRecurring) {
        acc.monthly += numericPrice;
      } else {
        acc.upfront += numericPrice;
      }
      return acc;
    }, { upfront: 0, monthly: 0 });
  }, [quoteItems]);

  // Helper to map category to brand color theme (Azure, Indigo, Teal, etc from guidelines)
  const getCategoryColor = (id: string) => {
    switch (id) {
      case 'website-solutions': return 'text-brand-azure bg-brand-azure/5 border-brand-azure/20 dark:bg-brand-azure/10 dark:border-brand-azure/30';
      case 'professional-services': return 'text-brand-marian bg-brand-marian/5 border-brand-marian/20 dark:bg-brand-marian/20 dark:border-brand-marian/30 dark:text-blue-300';
      case 'growth-seo': return 'text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-300';
      case 'social-media': return 'text-pink-600 bg-pink-50 border-pink-200 dark:bg-pink-900/20 dark:border-pink-800 dark:text-pink-300';
      case 'performance-ads': return 'text-orange-600 bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800 dark:text-orange-300';
      case 'automation-workflow': return 'text-brand-robin bg-brand-robin/5 border-brand-robin/20 dark:bg-brand-robin/10 dark:border-brand-robin/30 dark:text-teal-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  const getAccentColor = (id: string) => {
    switch(id) {
        case 'website-solutions': return 'bg-brand-azure';
        case 'professional-services': return 'bg-brand-marian';
        case 'growth-seo': return 'bg-emerald-600';
        case 'social-media': return 'bg-pink-600';
        case 'performance-ads': return 'bg-orange-600';
        case 'automation-workflow': return 'bg-brand-robin';
        default: return 'bg-brand-azure';
    }
  }

  const toggleItem = (category: any, sub: any) => {
    const id = `${category.id}-${sub.id}`;
    const exists = quoteItems.find(i => i.id === id);

    if (exists) {
      setQuoteItems(prev => prev.filter(i => i.id !== id));
    } else {
      setQuoteItems(prev => [...prev, {
        id,
        categoryId: category.id,
        subId: sub.id,
        title: sub.title,
        price: sub.price,
        priceType: sub.priceType,
        notes: ''
      }]);
      setIsSidebarOpen(true); // Open sidebar on first add
    }
  };

  const updateItemNote = (id: string, note: string) => {
    setQuoteItems(prev => prev.map(item => item.id === id ? { ...item, notes: note } : item));
  };

  const removeItem = (id: string) => {
    setQuoteItems(prev => prev.filter(i => i.id !== id));
  };

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 180; // adjusted for sticky header + sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // ScrollSpy for active category
  useEffect(() => {
    const handleScroll = () => {
      const offsets = services.map(s => {
        const el = document.getElementById(s.id);
        return { id: s.id, offset: el ? el.offsetTop : 0 };
      });

      const currentScroll = window.scrollY + 300; // Offset for spy
      for (let i = offsets.length - 1; i >= 0; i--) {
        if (currentScroll >= offsets[i].offset) {
          setActiveCategory(offsets[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [services]);

  // Format currency
  const fmt = (num: number) => num.toLocaleString('en-US');

  return (
    <>
      <SeoHead 
        title={t('pages.pricing.heroTitle')}
        description={t('pages.pricing.heroSubtitle')}
      />

      <PageHeader 
        title={t('pages.pricing.heroTitle')} 
        subtitle={t('pages.pricing.heroSubtitle')}
        badge={t('pages.pricing.badge')}
        image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
      />
      
      <div className="relative min-h-screen bg-brand-ghost dark:bg-brand-oxford transition-colors duration-300">
        
        {/* Sticky Category Navigation */}
        <div className="sticky top-[82px] lg:top-[82px] z-40 bg-white/95 dark:bg-brand-oxford/95 backdrop-blur-md border-b border-brand-oxford/5 dark:border-white/5 shadow-sm transition-all duration-300">
           <div className="container mx-auto px-6 overflow-x-auto hide-scrollbar">
              <div className="flex items-center gap-2 py-4 min-w-max">
                 {services.map((service) => (
                    <button
                       key={service.id}
                       onClick={() => scrollToCategory(service.id)}
                       className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border whitespace-nowrap ${
                          activeCategory === service.id
                             ? `${getCategoryColor(service.id)} shadow-sm scale-105`
                             : 'border-transparent text-slate-500 hover:text-brand-oxford dark:hover:text-white hover:bg-brand-ghost dark:hover:bg-slate-800'
                       }`}
                    >
                       {service.title}
                    </button>
                 ))}
              </div>
           </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          {/* Main Layout: Service List (Left) + Floating Sidebar (Right) */}
          {/* Changed items-start to items-stretch for sticky sidebar to work */}
          <div className="flex flex-col lg:flex-row gap-8 items-stretch relative">
             
             {/* LEFT COLUMN: Service Grids */}
             <div className="w-full lg:w-3/4 space-y-24 pb-24">
                {services.map((service) => (
                   <div key={service.id} id={service.id} className="scroll-mt-48">
                      
                      {/* Section Header */}
                      <div className="flex items-start gap-4 mb-8">
                         <div className={`w-1.5 h-10 rounded-full mt-1 ${getAccentColor(service.id)}`}></div>
                         <div>
                            <h2 className="text-3xl font-bold text-brand-oxford dark:text-white tracking-tight">{service.title}</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-2xl">{service.description}</p>
                         </div>
                      </div>

                      {/* Cards Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                         {service.subServices.map((sub) => {
                            const itemId = `${service.id}-${sub.id}`;
                            const isSelected = quoteItems.some(i => i.id === itemId);

                            return (
                               <div 
                                  key={sub.id} 
                                  className={`relative bg-white dark:bg-slate-900 rounded-3xl p-6 border transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-xl group ${
                                     isSelected 
                                        ? `border-${getAccentColor(service.id).replace('bg-', '')}-500 ring-2 ring-${getAccentColor(service.id).replace('bg-', '')}-500 shadow-md` 
                                        : 'border-brand-oxford/10 dark:border-white/10'
                                  }`}
                               >
                                  {isSelected && (
                                     <div className={`absolute top-4 right-4 text-white p-1 rounded-full ${getAccentColor(service.id)} shadow-lg animate-fade-in`}>
                                        <Check size={16} strokeWidth={3} />
                                     </div>
                                  )}

                                  <div className="mb-4">
                                     <span className="text-[11px] font-bold uppercase tracking-widest bg-brand-ghost dark:bg-slate-800 text-slate-500 px-2 py-1.5 rounded-md border border-brand-oxford/5 dark:border-white/5">
                                        {sub.priceType}
                                     </span>
                                  </div>

                                  <h3 className="text-xl font-bold text-brand-oxford dark:text-white leading-tight mb-2 group-hover:text-brand-azure dark:group-hover:text-brand-robin transition-colors">{sub.title}</h3>
                                  <p className="text-xs font-medium text-slate-400 dark:text-slate-500 mb-6 min-h-[40px] italic">{sub.tagline}</p>

                                  <div className="mb-6 flex items-baseline gap-1">
                                     <span className="text-sm font-semibold text-slate-400">RM</span>
                                     <span className={`text-4xl font-bold text-brand-oxford dark:text-white`}>{sub.price}</span>
                                  </div>

                                  <ul className="space-y-3 mb-8 flex-1">
                                     {sub.benefits.slice(0, 3).map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                           <div className={`mt-0.5 rounded-full p-0.5 ${getCategoryColor(service.id).split(' ')[1]}`}>
                                              <Check size={12} className={getCategoryColor(service.id).split(' ')[0]} strokeWidth={3} />
                                           </div>
                                           <span className="text-xs leading-relaxed font-medium">{benefit}</span>
                                        </li>
                                     ))}
                                  </ul>

                                  <div className="mt-auto space-y-3">
                                     <button 
                                        onClick={() => toggleItem(service, sub)}
                                        className={`w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                                           isSelected 
                                              ? 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-300 dark:border-red-900'
                                              : `${getAccentColor(service.id)} text-white shadow-lg shadow-brand-azure/20 hover:shadow-xl hover:scale-[1.02]`
                                        }`}
                                     >
                                        {isSelected ? (
                                           <><Minus size={16} /> {t('pages.pricing.removeFromQuote')}</>
                                        ) : (
                                           <><Plus size={16} /> {t('pages.pricing.addToPlan')}</>
                                        )}
                                     </button>

                                     <Link 
                                        to={`/${lang}/services/${service.id}/${sub.id}`} 
                                        className="flex items-center justify-center gap-1 text-xs font-bold text-slate-400 hover:text-brand-azure dark:hover:text-brand-robin transition-colors uppercase tracking-wider"
                                     >
                                        {t('pages.pricing.viewDetails')} <ArrowRight size={14} className="ml-1" />
                                     </Link>
                                  </div>
                               </div>
                            );
                         })}
                      </div>
                   </div>
                ))}
             </div>

             {/* RIGHT COLUMN: Floating Sidebar */}
             <div className={`
                fixed inset-x-0 bottom-0 z-50 lg:static lg:z-auto lg:w-1/4 lg:block
                ${isSidebarOpen ? 'block' : 'hidden lg:block'}
             `}>
                {/* STICKY CONTAINER: Top offset allows it to float nicely under the nav */}
                <div className="sticky top-48">
                    <div className="bg-white dark:bg-slate-800 lg:rounded-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] lg:shadow-xl border-t lg:border border-brand-oxford/10 dark:border-white/10 max-h-[80vh] lg:max-h-[calc(100vh-200px)] flex flex-col overflow-hidden transition-all duration-300 w-full">
                   
                       {/* Sidebar Header */}
                       <div className="p-6 border-b border-brand-oxford/5 dark:border-white/5 flex items-center justify-between bg-brand-oxford text-white lg:rounded-t-3xl">
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white backdrop-blur-sm">
                                <ShoppingBag size={20} />
                             </div>
                             <div>
                                <h3 className="font-bold leading-none">{t('pages.pricing.yourPlan')}</h3>
                                <span className="text-xs text-slate-300 font-light">{quoteItems.length} services selected</span>
                             </div>
                          </div>
                          <button className="lg:hidden text-white/70 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
                             <Minus size={24} />
                          </button>
                       </div>

                       {/* Items List */}
                       <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50 dark:bg-slate-900/50 custom-scrollbar">
                          {quoteItems.length === 0 ? (
                             <div className="text-center py-12 text-slate-400 px-4">
                                <ShoppingBag size={48} className="mx-auto mb-4 opacity-20 text-brand-azure" />
                                <p className="text-sm font-medium">{t('pages.pricing.emptyQuote')}</p>
                             </div>
                          ) : (
                             quoteItems.map((item) => (
                                <div key={item.id} className="bg-white dark:bg-brand-oxford p-4 rounded-xl border border-brand-oxford/5 dark:border-white/5 shadow-sm group hover:border-brand-azure/30 transition-colors">
                                   <div className="flex justify-between items-start mb-2">
                                      <h4 className="font-bold text-sm text-brand-oxford dark:text-white line-clamp-2 leading-tight">{item.title}</h4>
                                      <button onClick={() => removeItem(item.id)} className="text-slate-300 hover:text-red-500 transition-colors p-1">
                                         <Trash2 size={14} />
                                      </button>
                                   </div>
                                   <div className="flex justify-between items-center text-xs text-slate-500 mb-3">
                                      <span className="uppercase tracking-wider font-semibold text-[10px]">{item.priceType}</span>
                                      <span className="font-mono font-bold text-brand-azure dark:text-brand-robin">RM{item.price}</span>
                                   </div>
                                   
                                   {/* Notes Area */}
                                   {editingItemId === item.id ? (
                                      <div className="mt-2 animate-fade-in">
                                         <textarea 
                                            autoFocus
                                            className="w-full text-xs p-2 rounded-lg bg-brand-ghost dark:bg-slate-900 border border-brand-azure outline-none resize-none text-brand-oxford dark:text-white"
                                            rows={2}
                                            value={tempNote}
                                            onChange={(e) => setTempNote(e.target.value)}
                                            onBlur={() => {
                                               updateItemNote(item.id, tempNote);
                                               setEditingItemId(null);
                                            }}
                                            placeholder={t('pages.pricing.customNotesPlaceholder')}
                                         />
                                      </div>
                                   ) : (
                                      <div 
                                         onClick={() => {
                                            setEditingItemId(item.id);
                                            setTempNote(item.notes || "");
                                         }}
                                         className="mt-2 text-xs p-2 rounded-lg bg-brand-ghost dark:bg-slate-900/50 border border-transparent hover:border-brand-oxford/10 cursor-pointer flex items-start gap-2 text-slate-500 group-hover:bg-brand-ghost/80 dark:group-hover:bg-slate-800 transition-colors"
                                      >
                                         <Edit3 size={12} className="shrink-0 mt-0.5 opacity-50" />
                                         <span className={item.notes ? "text-brand-oxford dark:text-slate-300 font-medium" : "italic opacity-50"}>
                                            {item.notes || t('pages.pricing.customNotesPlaceholder')}
                                         </span>
                                      </div>
                                   )}
                                </div>
                             ))
                          )}
                       </div>

                       {/* Footer CTA & Totals */}
                       <div className="p-6 border-t border-brand-oxford/5 dark:border-white/5 bg-white dark:bg-slate-900 rounded-b-3xl">
                          
                          {/* Pricing Breakdown */}
                          {(totals.upfront > 0 || totals.monthly > 0) && (
                            <div className="mb-6 space-y-3 border-b border-brand-oxford/5 dark:border-white/5 pb-6">
                                {totals.upfront > 0 && (
                                    <div className="flex justify-between items-center text-sm">
                                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                                            <Wallet size={16} className="text-brand-marian dark:text-brand-robin" />
                                            <span className="font-medium">{t('pages.pricing.upfrontTotal')}</span>
                                        </div>
                                        <span className="font-bold text-brand-oxford dark:text-white text-lg">RM {fmt(totals.upfront)}</span>
                                    </div>
                                )}
                                {totals.monthly > 0 && (
                                    <div className="flex justify-between items-center text-sm">
                                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                                            <RefreshCcw size={16} className="text-brand-azure" />
                                            <span className="font-medium">{t('pages.pricing.monthlyTotal')}</span>
                                        </div>
                                        <span className="font-bold text-brand-azure text-lg">RM {fmt(totals.monthly)}/mo</span>
                                    </div>
                                )}
                            </div>
                          )}

                          <Button 
                             variant="wipe" 
                             className="w-full justify-center py-4 text-[16px]"
                             disabled={quoteItems.length === 0}
                             onClick={() => setIsRequestModalOpen(true)}
                          >
                             {t('pages.pricing.requestQuote')}
                          </Button>
                       </div>
                    </div>
                </div>
             </div>

             {/* Mobile Fab to Toggle Sidebar */}
             {!isSidebarOpen && quoteItems.length > 0 && (
                <div className="fixed bottom-6 right-6 lg:hidden z-50 animate-fade-in-up">
                   <button 
                      onClick={() => setIsSidebarOpen(true)}
                      className="w-16 h-16 rounded-full bg-brand-azure text-white shadow-2xl flex items-center justify-center relative hover:scale-110 transition-transform"
                   >
                      <ShoppingBag size={24} />
                      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                         {quoteItems.length}
                      </span>
                   </button>
                </div>
             )}

          </div>
        </div>
      </div>

      <FAQ items={faqs.pricing} />

      <QuoteRequestModal 
         isOpen={isRequestModalOpen}
         onClose={() => setIsRequestModalOpen(false)}
         items={quoteItems}
         onSuccess={() => {
            // Keep items in localStorage for reference during consultation
            openBooking();
         }}
      />
    </>
  );
};