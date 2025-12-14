
import React from 'react';
import { Badge } from './ui/Badge';
import { Plus } from 'lucide-react';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useTranslation } from 'react-i18next';

export const Team: React.FC = () => {
  const { team } = useTranslatedData();
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-brand-ghost dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-start mb-16">
           <div>
             <Badge className="mb-6">{t('home.team.badge')}</Badge>
             <h2 className="text-4xl lg:text-5xl font-semibold text-brand-oxford dark:text-white">{t('home.team.title')}</h2>
           </div>
           <p className="text-right text-xs text-slate-500 dark:text-slate-400 max-w-[250px] hidden lg:block pt-8 font-light">
             {t('home.team.desc')}
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
             <div key={member.id || idx} className="relative group rounded-3xl overflow-hidden bg-white dark:bg-brand-oxford aspect-[3/4] border border-brand-oxford/10 dark:border-white/10 transition-all duration-300 hover:-translate-y-1">
                <img 
                   src={member.image} 
                   alt={member.name} 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 group-hover:opacity-60 transition-opacity"></div>
                
                <div className="absolute bottom-8 left-8">
                   <h3 className="text-xl font-bold text-white">{member.name}</h3>
                   <p className="text-xs text-slate-300 uppercase tracking-wider mt-1">{member.role}</p>
                </div>

                <div className="absolute bottom-8 right-8">
                   <button className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-brand-azure hover:border-brand-azure transition-colors">
                      <Plus size={16} />
                   </button>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};
