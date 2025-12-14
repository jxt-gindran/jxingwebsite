
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PageHeader } from '../components/ui/PageHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useBooking } from '../components/BookingContext';
import { useTranslation } from 'react-i18next';

export const SubServiceDetail: React.FC = () => {
  const { id, subId } = useParams<{ id: string; subId: string }>();
  const { services } = useTranslatedData();
  const { openBooking } = useBooking();
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const service = services.find(s => s.id === id);
  const subService = service?.subServices.find(s => s.id === subId);

  if (!service || !subService) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <PageHeader 
        title={subService.title} 
        subtitle={subService.tagline}
        badge={service.title} // Show parent category as badge
        image={service.image}
      />

      {/* Detail Content */}
      <section className="py-24 bg-white dark:bg-brand-oxford transition-colors duration-300">
        <div className="container mx-auto px-6">
          
          <div className="mb-8">
             <Link to={`/${lang}/services/${id}`} className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-brand-azure transition-colors">
                <ArrowLeft size={16} /> Back to {service.title}
             </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Content: Description & Benefits */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-brand-oxford dark:text-white mb-6">Service Overview</h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-10">
                {subService.description}
              </p>

              <div className="bg-brand-ghost dark:bg-slate-900 rounded-3xl p-8 border border-brand-oxford/10 dark:border-white/10 mb-10">
                 <h3 className="text-xl font-bold text-brand-oxford dark:text-white mb-6">Key Benefits</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {subService.benefits.map((benefit, i) => (
                       <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 size={20} className="text-brand-azure dark:text-brand-robin shrink-0" />
                          <span className="text-slate-600 dark:text-slate-300 font-medium">{benefit}</span>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="mb-10">
                 <h3 className="text-2xl font-bold text-brand-oxford dark:text-white mb-6">Deliverables</h3>
                 <ul className="space-y-4">
                    {subService.deliverables.map((item, i) => (
                       <li key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-ghost dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-brand-oxford/5">
                          <span className="font-mono text-brand-azure dark:text-brand-robin font-bold">0{i+1}.</span>
                          <span className="text-brand-oxford dark:text-slate-200">{item}</span>
                       </li>
                    ))}
                 </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/10 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-700/30">
                 <h4 className="font-bold text-yellow-800 dark:text-yellow-500 mb-2">Terms of Service</h4>
                 <p className="text-sm text-yellow-700 dark:text-yellow-600/80">{subService.terms}</p>
              </div>
            </div>

            {/* Right Sidebar: Pricing Card */}
            <div className="lg:w-1/3 lg:sticky lg:top-32">
               <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl border border-brand-oxford/10 dark:border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3">
                     <div className="w-20 h-20 bg-brand-azure/5 rounded-full blur-2xl"></div>
                  </div>

                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">{subService.priceType}</p>
                  <div className="flex items-baseline gap-1 mb-6">
                     <span className="text-4xl lg:text-5xl font-bold text-brand-oxford dark:text-white">RM {subService.price}</span>
                  </div>

                  <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                     Ready to move forward? Book a consultation to discuss your specific requirements and get started.
                  </p>

                  <Button 
                    variant="wipe" 
                    className="w-full justify-center py-4 text-lg"
                    onClick={openBooking}
                  >
                    Book Consultation
                  </Button>
                  
                  <div className="mt-6 text-center">
                     <Link to="/contact" className="text-sm text-brand-azure hover:underline">Or contact sales team</Link>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
