
import React from 'react';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Testimonials } from '../components/Testimonials';
import { PageHeader } from '../components/ui/PageHeader';
import { useTranslation } from 'react-i18next';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { CountUp } from '../components/ui/CountUp';
import { useBooking } from '../components/BookingContext';

export const Company: React.FC = () => {
  const { t } = useTranslation();
  const { companyStats, companyValues } = useTranslatedData();
  const { openBooking } = useBooking();

  return (
    <>
      <PageHeader 
        title={t('company.title')}
        subtitle={t('company.subtitle')}
        badge="About Us"
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="pt-12 pb-24 bg-brand-ghost dark:bg-brand-oxford transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <Badge className="mb-6">{t('company.aboutBadge')}</Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-brand-oxford dark:text-white mb-8 leading-tight">
                {t('company.aboutTitle')}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg mb-6 font-light">
                {t('company.aboutDesc1')}
              </p>
              <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed mb-12">
                {t('company.aboutDesc2')}
              </p>
            </div>

            {/* Right Brochure CTA */}
            <div className="relative">
               {/* Removed justify-center to allow text to sit at the top */}
               <div className="bg-brand-azure rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl group min-h-[320px] flex flex-col">
                  <div className="relative z-10 md:max-w-[60%]">
                     <p className="text-sm font-medium opacity-80 mb-2">{t('company.brochureTagline')}</p>
                     <h3 className="text-3xl font-bold mb-8 md:mb-0">{t('company.brochureTitle')}</h3>
                  </div>
                  
                  {/* Laptop Mockup Image */}
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                    alt="Brochure Preview" 
                    className="absolute -bottom-10 -right-10 w-72 h-56 object-cover rounded-lg shadow-lg transform rotate-[-8deg] group-hover:rotate-0 transition-all duration-500 rtl:right-auto rtl:left-[-10px] rtl:rotate-[8deg]"
                  />

                   {/* Button moved to left */}
                   <div className="absolute bottom-10 left-8 md:left-12 z-20 rtl:left-auto rtl:right-8 rtl:md:right-12">
                        <Button variant="wipe-white" className="shadow-lg">{t('company.brochureBtn')}</Button>
                   </div>
               </div>
            </div>

          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 mt-24 border-t border-brand-oxford/10 dark:border-white/10 pt-12">
             {companyStats.map((stat, i) => {
                // Extract number and suffix from value string (e.g. "25+" -> 25 and "+")
                const numValue = parseInt(stat.value, 10);
                const suffix = stat.value.replace(/[0-9]/g, '');

                return (
                  <div key={i} className={`flex flex-col items-center lg:items-start ${i !== 0 ? 'border-l border-brand-oxford/10 dark:border-white/10 pl-8 rtl:pl-0 rtl:pr-8 rtl:border-l-0 rtl:border-r' : ''}`}>
                     <div className="flex items-center gap-2 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-azure"></span>
                        <span className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide text-center lg:text-left">{stat.label}</span>
                     </div>
                     <div className="text-4xl lg:text-6xl font-bold text-brand-oxford dark:text-white">
                        <CountUp end={isNaN(numValue) ? 0 : numValue} suffix={suffix} />
                     </div>
                  </div>
                );
             })}
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="py-20 bg-white dark:bg-[#0B1121] transition-colors duration-300">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="bg-brand-ghost dark:bg-slate-900 p-10 rounded-3xl border border-brand-oxford/5 dark:border-white/5 transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-brand-oxford dark:text-white mb-4">{t('company.vision')}</h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                     {t('company.visionDesc')}
                  </p>
               </div>
               <div className="bg-brand-ghost dark:bg-slate-900 p-10 rounded-3xl border border-brand-oxford/5 dark:border-white/5 transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-brand-oxford dark:text-white mb-4">{t('company.mission')}</h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                     {t('company.missionDesc')}
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-24 bg-[#050B20] text-white relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-marian/10 to-transparent pointer-events-none"></div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
               <div className="flex justify-center mb-6">
                 <Badge className="bg-white/5 text-white border-white/10" dotColor="bg-brand-azure">{t('company.valuesBadge')}</Badge>
               </div>
               <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">{t('company.valuesTitle')}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {companyValues.map((val, idx) => (
                  <div key={idx} className="bg-[#111C35] border border-white/5 p-8 rounded-3xl hover:border-brand-robin/30 hover:bg-[#152242] transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col justify-start">
                     <h3 className="text-xl font-bold mb-4 text-brand-robin group-hover:text-white transition-colors">{val.title}</h3>
                     <p className="text-slate-300 text-sm leading-relaxed font-light">
                        {val.description}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <Testimonials />

      <section className="py-24 relative overflow-hidden">
         <div className="absolute inset-0">
            <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
               alt="Team hands" 
               className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-oxford/80"></div>
         </div>
         
         <div className="container mx-auto px-6 relative z-10 text-center">
            <Badge className="bg-white/10 text-white border-white/20 mb-6">{t('contact.badge')}</Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-10 max-w-3xl mx-auto leading-tight">
               {t('company.ctaTitle')}
            </h2>
            <Button 
               variant="wipe-white" 
               icon="arrow-right"
               onClick={openBooking}
            >
               {t('common.getStarted')}
            </Button>
         </div>
      </section>
    </>
  );
};
