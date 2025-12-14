
import React from 'react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { FAQ } from '../components/FAQ';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/ui/PageHeader';
import { useTranslation } from 'react-i18next';
import { useTranslatedData } from '../hooks/useTranslatedData';

export const ServicesPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { services, faqs } = useTranslatedData();
  const lang = i18n.language;

  // Retrieve translation array for why choose us
  const whyChooseItems = t('services.whyChooseList', { returnObjects: true }) as { title: string; desc: string }[];

  return (
    <>
      <PageHeader 
        title={t('services.title')} 
        subtitle={t('pages.servicesPage.subtitle')}
        badge={t('services.badge')}
      />

      {/* 2. Innovative Digital Solution Services */}
      <section className="py-24 bg-brand-ghost dark:bg-brand-oxford transition-colors duration-300">
        <div className="container mx-auto px-6">
          
          <div className="text-center mb-20">
             <Badge className="mb-6">{t('services.badge')}</Badge>
             <h2 className="text-4xl lg:text-5xl font-semibold text-brand-oxford dark:text-white">
               {t('services.innovativeTitle')}
             </h2>
          </div>

          <div className="flex flex-col gap-16">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                  
                  {/* Text Card */}
                  <div className={`bg-white dark:bg-slate-900 p-10 rounded-3xl border border-brand-oxford/10 dark:border-white/10 flex flex-col justify-center items-start transition-all duration-300 hover:-translate-y-1 hover:border-brand-azure dark:hover:border-brand-robin group shadow-sm hover:shadow-md ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                     <div className="w-14 h-14 rounded-2xl bg-brand-ghost dark:bg-slate-800 border border-brand-oxford/5 dark:border-white/5 flex items-center justify-center mb-6 text-brand-azure dark:text-brand-robin group-hover:bg-brand-azure group-hover:text-white transition-colors">
                        {/* Placeholder Icon */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:scale-110">
                           <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                           <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                           <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                     </div>
                     
                     <h3 className="text-2xl font-bold text-brand-oxford dark:text-white mb-3">{service.title}</h3>

                     {/* Tags / Badges */}
                     <div className="flex flex-wrap gap-2 mb-6">
                        {service.tags.map((tag, i) => (
                           <span key={i} className="px-3 py-1 rounded-lg bg-brand-ghost dark:bg-slate-800 text-xs font-semibold text-brand-azure dark:text-brand-robin border border-brand-oxford/5 dark:border-white/5">
                              {tag}
                           </span>
                        ))}
                     </div>

                     <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                        {service.description}
                     </p>

                     {/* Detailed Offerings List (Using SubServices as source) */}
                     <div className="space-y-4 mb-8 w-full">
                        {service.subServices.slice(0, 3).map((sub, idx) => (
                           <div key={idx} className="flex gap-4 items-start">
                              <div className="mt-1 min-w-[16px] w-4 h-4 rounded-full bg-brand-azure/10 dark:bg-brand-robin/10 text-brand-azure dark:text-brand-robin flex items-center justify-center shrink-0 animate-pulse-gentle">
                                 <CheckCircle2 size={12} />
                              </div>
                              <div>
                                 <h4 className="text-sm font-bold text-brand-oxford dark:text-white">{sub.title}</h4>
                                 <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed mt-0.5">{sub.tagline}</p>
                              </div>
                           </div>
                        ))}
                     </div>

                     <div className="mt-auto pt-6 border-t border-brand-oxford/5 dark:border-white/5 w-full">
                       <Link to={`/${lang}/services/${service.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-brand-azure dark:text-brand-robin hover:gap-3 transition-all rtl:hover:gap-3 rtl:flex-row-reverse">
                          <div className="w-8 h-8 rounded-full bg-brand-azure/10 dark:bg-brand-robin/10 flex items-center justify-center">
                             <ArrowRight size={14} className="rtl:rotate-180" />
                          </div>
                          {t('common.learnMore')}
                       </Link>
                     </div>
                  </div>

                  {/* Image Card */}
                  <div className={`relative rounded-3xl overflow-hidden min-h-[400px] border border-brand-oxford/10 dark:border-white/10 group ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                     <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-brand-oxford/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="py-24 bg-white dark:bg-[#0B1121] relative overflow-hidden">
         {/* Big Background Text */}
         <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-30 dark:opacity-10">
            <span className="text-[8rem] lg:text-[12rem] font-bold text-brand-ghost leading-none whitespace-nowrap">
               {t('services.whyChooseBg')}
            </span>
         </div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="flex justify-center mb-4">
               <Badge>{t('services.whyChooseBadge')}</Badge>
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold text-brand-oxford dark:text-white text-center mb-20">
               {t('services.whyChooseTitle')}
            </h2>

            <div className="flex flex-col lg:flex-row gap-16 items-center">
               
               {/* Left Image */}
               <div className="lg:w-1/2 relative">
                  <div className="rounded-3xl overflow-hidden border border-brand-oxford/10 dark:border-white/10 shadow-2xl shadow-brand-oxford/5">
                     <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                        alt="Team collaboration" 
                        className="w-full h-full object-cover"
                     />
                  </div>
                  {/* Decorative Element */}
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand-ghost dark:bg-slate-800 rounded-full blur-3xl -z-10"></div>
               </div>

               {/* Right Content List */}
               <div className="lg:w-1/2 space-y-10">
                  {Array.isArray(whyChooseItems) && whyChooseItems.map((item, idx) => (
                    <div className="flex gap-6 group" key={idx}>
                       <div className="text-2xl font-bold text-brand-azure/30 dark:text-brand-robin/30 mt-1 group-hover:text-brand-azure dark:group-hover:text-brand-robin transition-colors">
                         {`0${idx + 1}.`}
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-brand-oxford dark:text-white mb-3 group-hover:text-brand-azure dark:group-hover:text-brand-robin transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                             {item.desc}
                          </p>
                          <div className="h-px w-full bg-brand-oxford/10 dark:bg-white/10 mt-8 group-hover:bg-brand-azure/30 transition-colors"></div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      <FAQ items={faqs.services} />
    </>
  );
};
