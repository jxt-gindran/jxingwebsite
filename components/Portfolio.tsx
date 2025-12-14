
import React from 'react';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useTranslation } from 'react-i18next';

export const Portfolio: React.FC = () => {
  const { projects } = useTranslatedData();
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white dark:bg-brand-oxford transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16">
           <div>
             <Badge className="mb-6">{t('home.portfolio.badge')}</Badge>
             <h2 className="text-4xl lg:text-5xl font-semibold text-brand-oxford dark:text-white">{t('home.portfolio.title')}</h2>
           </div>
           <p className="text-right text-xs text-slate-500 dark:text-slate-400 max-w-[200px] hidden lg:block font-light">
             {t('home.portfolio.desc')}
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, idx) => (
            <div key={project.id || idx} className="group relative rounded-3xl overflow-hidden aspect-[16/10] cursor-pointer border border-brand-oxford/10 dark:border-white/10 transition-all duration-300 hover:-translate-y-1">
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
               
               <div className="absolute bottom-0 left-0 right-0 p-10">
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-slate-300 text-sm font-medium">{project.category}</p>
               </div>

               {/* Center Logo Placeholder */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <Button variant="circle" icon="arrow-up-right" className="scale-125 bg-white/20 backdrop-blur-md border-white/50 text-white" />
               </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
           <Button variant="outline" icon="arrow-right" className="text-xs font-bold uppercase tracking-wider px-8">
             {t('home.portfolio.viewAll')}
           </Button>
        </div>
      </div>
    </section>
  );
};
