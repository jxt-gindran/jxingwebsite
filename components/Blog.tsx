
import React, { useState, useMemo } from 'react';
import { Badge } from './ui/Badge';
import {
  ArrowRight,
  Search,
  User,
  Clock,
  Calendar,
  ChevronRight,
  TrendingUp,
  Mail,
  ArrowUpRight
} from 'lucide-react';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export const Blog: React.FC = () => {
  const { blogPosts } = useTranslatedData();
  const { t } = useTranslation();

  const [activeCategory, setActiveCategory] = useState(t('common.all'));

  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    const cats = [t('common.all'), ...Array.from(new Set(blogPosts.map(post => post.category)))];
    return cats;

  }, [blogPosts]);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = activeCategory === t('common.all') || post.category === activeCategory;

      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [blogPosts, activeCategory, searchQuery]);

  const featuredPosts = useMemo(() => blogPosts.filter(p => p.isFeatured).slice(0, 3), [blogPosts]);

  return (
    <section className="py-24 bg-brand-ghost dark:bg-brand-oxford/40 transition-colors duration-300">
      <div className="container mx-auto px-6">

        {/* Search and Filters Bar */}
        <div className="mb-12 bg-white dark:bg-brand-oxford dark:border dark:border-white/5 rounded-2xl p-4 lg:p-6 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder={t('blog.searchPlaceholder')}

              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-brand-ghost dark:bg-slate-900/50 border border-brand-oxford/5 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-azure/20 dark:text-white transition-all"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-hide">
            <span className="text-sm font-semibold text-slate-400 mr-2 whitespace-nowrap">{t('blog.categories')}:</span>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${activeCategory === cat
                  ? 'bg-brand-azure text-white shadow-lg shadow-brand-azure/30'
                  : 'bg-white dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 border border-brand-oxford/10 dark:border-white/10 hover:border-brand-azure/50'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Main Content: Blog Card Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">
                {t('blog.showingCount', { count: filteredPosts.length })}

              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredPosts.map((post, idx) => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="group bg-white dark:bg-brand-oxford dark:border dark:border-white/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
                  >
                    {/* Image Section */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 bg-brand-azure/90 backdrop-blur-md text-[10px] font-bold text-white rounded-lg uppercase tracking-wider">
                          {post.category}
                        </span>
                        {post.isFeatured && (
                          <span className="px-3 py-1 bg-amber-400 text-[10px] font-bold text-brand-oxford rounded-lg uppercase tracking-wider">
                            {t('common.featured')}

                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 lg:p-8 flex-1 flex flex-col">
                      <h3 className="text-xl lg:text-2xl font-bold text-brand-oxford dark:text-white mb-4 leading-tight group-hover:text-brand-azure transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-y-3 gap-x-4 mb-6 border-t border-brand-oxford/5 dark:border-white/5 pt-6 mt-auto">
                        <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          <User size={14} className="text-brand-azure" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          <Clock size={14} className="text-brand-azure" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          <Calendar size={14} className="text-brand-azure" />
                          {post.date}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {post.tags?.map(tag => (
                          <span key={tag} className="px-2 py-1 bg-brand-ghost dark:bg-slate-900/50 text-[10px] font-bold text-slate-400 rounded-md border border-brand-oxford/5 dark:border-white/10 uppercase tracking-tighter">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button className="w-full py-3 px-6 rounded-xl bg-brand-ghost dark:bg-slate-900/50 text-brand-azure dark:text-brand-robin font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-brand-azure group-hover:text-white transition-all duration-300">
                        {t('common.readMore')}

                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-slate-400">{t('blog.noArticles')}</p>
                <button
                  onClick={() => { setActiveCategory(t('common.all')); setSearchQuery(''); }}
                  className="mt-4 text-brand-azure font-bold hover:underline"
                >
                  {t('blog.clearFilters')}
                </button>

              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 space-y-8">

            {/* Featured Articles Card */}
            <div className="bg-white dark:bg-brand-oxford dark:border dark:border-white/5 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-azure/10 flex items-center justify-center text-brand-azure">
                  <TrendingUp size={20} />
                </div>
                <h3 className="font-bold text-brand-oxford dark:text-white">{t('blog.featuredArticles')}</h3>

              </div>
              <div className="space-y-6">
                {featuredPosts.map((post) => (
                  <div key={post.id} className="group cursor-pointer">
                    <h4 className="text-sm font-bold text-brand-oxford dark:text-white group-hover:text-brand-azure dark:group-hover:text-brand-robin transition-colors mb-2 leading-snug">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <span>{post.author}</span>
                      <span className="w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full"></span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-brand-azure rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-brand-azure/20">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('blog.stayUpdated')}</h3>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  {t('blog.subscribeDesc')}
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder={t('footer.emailPlaceholder')}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder:text-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                  <button className="w-full py-3 rounded-xl bg-white text-brand-azure font-bold text-sm hover:bg-brand-ghost transition-colors flex items-center justify-center gap-2 shadow-lg">
                    {t('blog.subscribe')}
                    <ArrowUpRight size={16} />
                  </button>
                </form>
                <p className="mt-4 text-[10px] text-white/50 text-center">
                  {t('blog.unsubscribeNote')}
                </p>

              </div>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
            </div>

            {/* Popular Topics */}
            <div className="bg-white dark:bg-brand-oxford dark:border dark:border-white/5 rounded-3xl p-8 shadow-sm">
              <h3 className="font-bold text-brand-oxford dark:text-white mb-6">{t('blog.popularTopics')}</h3>

              <div className="flex flex-wrap gap-2">
                {categories.filter(c => c !== t('common.all')).map((cat) => (

                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="px-3 py-2 rounded-lg bg-brand-ghost dark:bg-slate-900/50 text-[10px] font-bold text-slate-500 dark:text-slate-400 border border-brand-oxford/10 dark:border-white/10 hover:border-brand-azure hover:text-brand-azure transition-all"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

          </aside>
        </div>

      </div>
    </section>
  );
};
