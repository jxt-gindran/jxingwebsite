
import React from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { PageHeader } from '../components/ui/PageHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { CheckCircle2, ArrowRight, LayoutGrid } from 'lucide-react';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useBooking } from '../components/BookingContext';
import { useTranslation } from 'react-i18next';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { services } = useTranslatedData();
  const service = services.find(s => s.id === id);
  const { openBooking } = useBooking();
  const { i18n } = useTranslation();
  const lang = i18n.language;

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <PageHeader 
        title={service.title} 
        subtitle={service.description}
        badge="Service Category"
        image={service.image}
      />

      {/* Overview Section */}
      <section className="py-24 bg-white dark:bg-brand-oxford transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <Badge className="mb-6">Overview</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-oxford dark:text-white mb-6">
                About {service.title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8">
                {service.longDescription || service.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                 {service.benefits?.map((benefit, i) => (
                    <span key={i} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-ghost dark:bg-slate-800 text-sm font-medium text-brand-azure dark:text-brand-robin">
                       <CheckCircle2 size={14} /> {benefit}
                    </span>
                 ))}
              </div>

              <Button 
                variant="wipe"
                onClick={openBooking}
              >
                Get Started
              </Button>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-brand-oxford/10 dark:border-white/10 aspect-video">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services Grid (The "Plans" or Specific Offerings) */}
      <section className="py-24 bg-brand-ghost dark:bg-slate-950 transition-colors duration-300">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <Badge className="mb-6">Specific Offerings</Badge>
               <h2 className="text-3xl lg:text-4xl font-bold text-brand-oxford dark:text-white">
                  Browse Solutions
               </h2>
               <p className="text-slate-500 mt-4">Select a specific package to view details and pricing.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {service.subServices.map((sub) => (
                  <Link 
                     key={sub.id} 
                     to={`/${lang}/services/${service.id}/${sub.id}`}
                     className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-brand-oxford/10 dark:border-white/10 hover:border-brand-azure dark:hover:border-brand-robin hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                  >
                     <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-xl bg-brand-ghost dark:bg-slate-800 flex items-center justify-center text-brand-oxford dark:text-white group-hover:bg-brand-azure group-hover:text-white transition-colors">
                           <LayoutGrid size={24} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider bg-brand-ghost dark:bg-slate-800 px-3 py-1 rounded-lg text-slate-500">
                           {sub.priceType}
                        </span>
                     </div>
                     
                     <h3 className="text-xl font-bold text-brand-oxford dark:text-white mb-2">{sub.title}</h3>
                     <p className="text-sm font-medium text-brand-azure dark:text-brand-robin mb-4">{sub.tagline}</p>
                     
                     <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                        {sub.description}
                     </p>

                     <div className="mt-auto flex items-center gap-2 text-sm font-bold text-brand-oxford dark:text-white group-hover:gap-4 transition-all">
                        View Details <ArrowRight size={16} className="text-brand-azure dark:text-brand-robin" />
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>
    </>
  );
};
