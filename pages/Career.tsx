
import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { MapPin, Plus, ArrowRight } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Link } from 'react-router-dom';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useTranslation } from 'react-i18next';

export const Career: React.FC = () => {
  const { careerOpenings } = useTranslatedData();
  const { t } = useTranslation();

  return (
    <>
      <PageHeader 
        title={t('pages.career.title')} 
        subtitle={t('pages.career.subtitle')}
        badge={t('pages.career.badge')}
      />

      {/* Current Openings */}
      <section className="py-24 bg-brand-ghost dark:bg-brand-oxford transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <Badge className="bg-brand-azure/10 text-brand-azure border-none" dotColor="bg-brand-azure">{t('pages.career.applyBadge')}</Badge>
             <h2 className="text-4xl lg:text-5xl font-semibold text-brand-oxford dark:text-white mt-6">{t('pages.career.openingsTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {careerOpenings.map((job, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 p-10 rounded-3xl border border-brand-oxford/10 dark:border-white/10 hover:border-brand-azure dark:hover:border-brand-azure transition-all duration-300 hover:-translate-y-1 group shadow-sm hover:shadow-md">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-4 py-1.5 rounded-lg border border-brand-oxford/10 dark:border-white/10 text-xs font-medium text-brand-azure dark:text-brand-robin flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-azure dark:bg-brand-robin"></span>
                    {job.type}
                  </span>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                    <MapPin size={16} />
                    {job.location}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-oxford dark:text-white mb-4">{job.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
                  {job.description}
                </p>

                <button className="flex items-center gap-3 text-sm font-bold text-brand-oxford dark:text-white hover:text-brand-azure dark:hover:text-brand-robin transition-colors group/btn">
                  <div className="w-10 h-10 rounded-lg bg-brand-azure text-white flex items-center justify-center transition-transform group-hover/btn:scale-110">
                    <Plus size={20} />
                  </div>
                  {t('pages.career.learnMore')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-24 bg-white dark:bg-[#0B1121] transition-colors duration-300 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="lg:w-1/2 relative z-10">
              <Badge className="mb-6">{t('pages.career.oppsBadge')}</Badge>
              <h2 className="text-4xl lg:text-6xl font-bold text-brand-oxford dark:text-white mb-8 leading-tight">
                {t('pages.career.joinTitle')}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-10 max-w-md">
                {t('pages.career.joinDesc')}
              </p>
              
              <Link to="/contact">
                <div className="inline-flex items-center gap-4 group cursor-pointer">
                   <div className="w-12 h-12 rounded-full bg-brand-azure text-white flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg shadow-brand-azure/30">
                      <ArrowRight size={20} />
                   </div>
                   <span className="font-bold text-brand-oxford dark:text-white group-hover:text-brand-azure dark:group-hover:text-brand-robin transition-colors">{t('pages.career.contactBtn')}</span>
                </div>
              </Link>
            </div>

            <div className="lg:w-1/2 relative">
               {/* Stylized Team Image */}
               <div className="relative">
                  {/* Abstract Gradients behind the team */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-ghost via-white to-brand-ghost dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 rounded-full blur-3xl -z-10 opacity-80"></div>
                  
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                    alt="Innovative Team" 
                    className="w-full relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  />
               </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
