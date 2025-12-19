
import React from 'react';
import { Badge } from './ui/Badge';
import { useTranslation } from 'react-i18next';
import { CountUp } from './ui/CountUp';

export const Stats: React.FC = () => {
   const { t } = useTranslation();

   return (
      <section className="py-24 bg-brand-ghost dark:bg-slate-950 transition-colors duration-300">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <Badge>{t('home.stats.badge')}</Badge>
               <h2 className="text-4xl lg:text-5xl font-semibold text-brand-oxford dark:text-white mt-6">{t('home.stats.title')}</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

               {/* Left Image */}
               <div className="hover-box lg:col-span-4 rounded-3xl overflow-hidden h-full min-h-[300px] border border-brand-oxford/10 dark:border-white/10">
                  <img
                     src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop"
                     className="w-full h-full object-cover"
                     alt="working"
                  />
               </div>

               {/* Middle Stats Grid */}
               <div className="lg:col-span-4 grid grid-cols-1 gap-6">
                  {/* Stat 1: Projects Delivered */}
                  <div className="hover-box bg-transparent border border-brand-oxford/10 dark:border-white/10 p-10 rounded-3xl h-full flex flex-col justify-center hover:border-brand-vermilion dark:hover:border-brand-vermilion group transition-all duration-300">
                     <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-sm bg-brand-azure animate-pulse-gentle"></span>
                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-brand-vermilion transition-colors">{t('home.stats.projects')}</span>

                     </div>
                     <div className="mb-4">
                        <div className="text-6xl font-bold text-brand-oxford dark:text-white">
                           <CountUp end={43} suffix="+" />
                        </div>
                     </div>
                     <p className="text-slate-500 dark:text-slate-400 text-sm font-regular">{t('home.stats.stat1Desc')}</p>
                  </div>

                  {/* Stat 2: Client Retention */}
                  <div className="hover-box bg-transparent border border-brand-oxford/10 dark:border-white/10 p-10 rounded-3xl h-full flex flex-col justify-center hover:border-brand-vermilion dark:hover:border-brand-vermilion group transition-all duration-300">
                     <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-sm bg-brand-azure animate-pulse-gentle"></span>
                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-brand-vermilion transition-colors">{t('home.stats.retention')}</span>

                     </div>
                     <div className="mb-4">
                        <div className="text-6xl font-bold text-brand-oxford dark:text-white">
                           <CountUp end={92} suffix="%" />
                        </div>
                     </div>
                     <p className="text-slate-500 dark:text-slate-400 text-sm font-regular">{t('home.stats.stat2Desc')}</p>
                  </div>

                  {/* Stat 3: Hours Saved */}
                  <div className="hover-box bg-transparent border border-brand-oxford/10 dark:border-white/10 p-10 rounded-3xl h-full flex flex-col justify-center hover:border-brand-vermilion dark:hover:border-brand-vermilion group transition-all duration-300">
                     <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-sm bg-brand-azure animate-pulse-gentle"></span>
                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-brand-vermilion transition-colors">{t('home.stats.hours')}</span>

                     </div>
                     <div className="mb-4">
                        <div className="text-6xl font-bold text-brand-oxford dark:text-white">
                           <CountUp end={1200} suffix="+" />
                        </div>
                     </div>
                     <p className="text-slate-500 dark:text-slate-400 text-sm font-regular">{t('home.stats.stat3Desc')}</p>
                  </div>
               </div>

               {/* Right Image */}
               <div className="hover-box lg:col-span-4 rounded-3xl overflow-hidden h-full min-h-[400px] relative border border-brand-oxford/10 dark:border-white/10">
                  <img
                     src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop"
                     className="w-full h-full object-cover"
                     alt="team high five"
                  />
                  <div className="absolute top-8 right-8 animate-spin-slow">
                     <svg className="w-24 h-24 text-white" viewBox="0 0 100 100">
                        <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                        <text width="500">
                           <textPath href="#curve" className="text-[11px] font-bold uppercase tracking-widest fill-current">
                              {t('home.stats.circleText')}
                           </textPath>
                        </text>
                     </svg>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-sm"></div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
};
