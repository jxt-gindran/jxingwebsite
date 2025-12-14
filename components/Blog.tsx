
import React from 'react';
import { Badge } from './ui/Badge';
import { ArrowRight } from 'lucide-react';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useTranslation } from 'react-i18next';

export const Blog: React.FC = () => {
  const { blogPosts } = useTranslatedData();
  const { t } = useTranslation();
  const featured = blogPosts.find(p => p.isFeatured);
  const list = blogPosts.filter(p => !p.isFeatured);

  return (
    <section className="py-24 bg-brand-ghost dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <Badge>{t('home.blog.badge')}</Badge>
          <h2 className="text-4xl lg:text-5xl font-semibold text-brand-oxford dark:text-white mt-6">{t('home.blog.title')}</h2>
        </div>

        {featured && (
          <div className="mb-12 group cursor-pointer transition-all duration-300 hover:-translate-y-1">
             <div className="rounded-3xl overflow-hidden aspect-[21/9] mb-6 relative border border-brand-oxford/10 dark:border-white/10">
               <img 
                 src={featured.image} 
                 alt={featured.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute top-8 left-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-4 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-brand-oxford dark:text-white border border-brand-oxford/10 dark:border-white/10">
                  {featured.category}
               </div>
             </div>
             <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
               <span>{featured.category}</span>
               <span className="w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-sm"></span>
               <span>{featured.date}</span>
             </div>
             <div className="flex items-end justify-between">
                <h3 className="text-2xl lg:text-3xl font-bold text-brand-oxford dark:text-white max-w-2xl leading-snug group-hover:text-brand-azure dark:group-hover:text-brand-robin transition-colors">
                  {featured.title}
                </h3>
                <button className="w-12 h-12 rounded-xl bg-transparent border border-brand-oxford/10 dark:border-white/10 text-brand-azure dark:text-brand-robin flex items-center justify-center group-hover:border-brand-azure group-hover:text-brand-azure transition-colors">
                  <ArrowRight size={20} />
                </button>
             </div>
             <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm line-clamp-2 max-w-3xl font-regular">
               {t('home.blog.featuredDesc')}
             </p>
          </div>
        )}

        <div className="space-y-8">
           {list.map((post, idx) => (
             <div key={post.id || idx} className="flex flex-col md:flex-row gap-8 py-8 border-t border-brand-oxford/10 dark:border-slate-800 group cursor-pointer transition-all duration-300 hover:-translate-y-1">
                <div className="md:w-[240px] aspect-[4/3] rounded-2xl overflow-hidden shrink-0 border border-brand-oxford/10 dark:border-white/10">
                  <img src={post.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={post.title} />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                   <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                     <span className="text-brand-azure dark:text-brand-robin">{post.category}</span>
                     <span className="w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-sm"></span>
                     <span>{post.date}</span>
                   </div>
                   <h3 className="text-xl font-bold text-brand-oxford dark:text-white mb-2 group-hover:text-brand-azure dark:group-hover:text-brand-robin transition-colors">{post.title}</h3>
                </div>
                <div className="flex items-center">
                   <div className="w-12 h-12 rounded-xl border border-brand-oxford/10 dark:border-white/10 flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:border-brand-azure group-hover:text-brand-azure dark:group-hover:border-brand-robin dark:group-hover:text-brand-robin transition-colors">
                      <ArrowRight size={18} />
                   </div>
                </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
};
