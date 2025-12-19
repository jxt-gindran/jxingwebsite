
import React, { useState, useEffect } from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { MapPin, Plus, ArrowRight, X, Clock, Calendar, Briefcase, ChevronRight } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Link } from 'react-router-dom';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { CareerOpening } from '../types';

export const Career: React.FC = () => {
  const { careerOpenings } = useTranslatedData();
  const { t } = useTranslation();
  const [selectedJob, setSelectedJob] = useState<CareerOpening | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedJob]);

  return (
    <>
      <PageHeader
        title={t('pages.career.title')}
        subtitle={t('pages.career.subtitle')}
        badge={t('pages.career.badge')}
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Current Openings */}
      <section className="py-24 bg-brand-ghost dark:bg-brand-oxford transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <Badge className="bg-brand-azure/10 text-brand-azure border-none mb-4" dotColor="bg-brand-azure">{t('pages.career.applyBadge')}</Badge>
              <h2 className="text-4xl lg:text-6xl font-bold text-brand-oxford dark:text-white leading-tight">{t('pages.career.openingsTitle')}</h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm text-lg italic">
              "{t('pages.career.quote')}"
            </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {careerOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 p-8 lg:p-12 rounded-[2.5rem] border border-brand-oxford/5 dark:border-white/5 hover:border-brand-azure/30 dark:hover:border-brand-robin/30 transition-all duration-500 group shadow-sm hover:shadow-xl hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-10">
                  <span className="px-4 py-1.5 rounded-lg bg-brand-ghost dark:bg-slate-800 text-brand-azure dark:text-brand-robin border border-brand-oxford/5 dark:border-white/5 uppercase tracking-widest text-[10px] font-bold">
                    {job.type}
                  </span>
                  <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-sm font-medium">
                    <MapPin size={16} className="text-brand-azure" />
                    {job.location}
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-brand-oxford dark:text-white mb-6 group-hover:text-brand-azure dark:group-hover:text-brand-robin transition-colors">{job.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-12 line-clamp-3">
                  {job.description}
                </p>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="flex items-center gap-4 text-sm font-bold text-brand-oxford dark:text-white transition-all group/btn"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-azure text-white flex items-center justify-center transition-all group-hover/btn:bg-brand-oxford dark:group-hover/btn:bg-white dark:group-hover/btn:text-brand-oxford group-hover/btn:rotate-90">
                    <Plus size={24} />
                  </div>
                  <span className="relative">
                    {t('pages.career.learnMore')}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-azure transition-all group-hover/btn:w-full"></span>
                  </span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-24 bg-white dark:bg-brand-oxford transition-colors duration-300 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-brand-oxford dark:bg-slate-900 rounded-[3.5rem] p-12 lg:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-azure/10 to-transparent"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-robin/5 blur-[100px] rounded-full"></div>

            <div className="lg:w-1/2 relative z-10 text-white">
              <Badge className="mb-8 bg-white/10 text-brand-robin border-white/10 tracking-widest uppercase font-bold">{t('pages.career.oppsBadge')}</Badge>
              <h2 className="text-4xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
                {t('pages.career.joinTitle')}
              </h2>
              <p className="text-slate-400 text-xl leading-relaxed mb-12 max-w-md">
                {t('pages.career.joinDesc')}
              </p>

              <Link to="/contact">
                <Button variant="wipe-white" className="gap-3 h-16 px-10 rounded-2xl text-lg">
                  {t('pages.career.contactBtn')}
                </Button>
              </Link>
            </div>

            <div className="lg:w-1/2 relative z-10 w-full">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-azure to-brand-robin rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                  alt="Innovative Team"
                  className="w-full relative rounded-3xl shadow-2xl transition-all duration-700 aspect-[4/3] object-cover grayscale group-hover:grayscale-0"
                />

                {/* Floating stats badge */}
                <div className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-2xl border border-brand-oxford/5 dark:border-white/5 animate-bounce-slow">
                  <div className="text-3xl font-bold text-brand-azure mb-1">98%</div>
                  <div className="text-[10px] font-bold text-brand-oxford dark:text-slate-400 uppercase tracking-[0.2em]">{t('pages.career.happinessScore')}</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-oxford/90 backdrop-blur-md"
              onClick={() => setSelectedJob(null)}
            ></motion.div>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden border border-white/10 flex flex-col md:flex-row"
            >
              {/* Main Content Area */}
              <div className="flex-1 p-8 lg:p-16 overflow-y-auto no-scrollbar">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="md:hidden absolute top-6 right-6 w-10 h-10 rounded-full bg-brand-ghost dark:bg-slate-800 flex items-center justify-center text-slate-500"
                >
                  <X size={20} />
                </button>

                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-6">
                    <Badge className="bg-brand-azure/10 text-brand-azure border-none">{t('pages.career.hiringNow')}</Badge>

                    <div className="h-1 w-1 rounded-full bg-slate-300"></div>
                    <span className="text-slate-400 text-sm font-medium">{selectedJob.type}</span>
                  </div>
                  <h2 className="text-4xl lg:text-6xl font-bold text-brand-oxford dark:text-white mb-8 tracking-tight">{selectedJob.title}</h2>
                  <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
                    {selectedJob.description}
                  </p>
                </div>

                <div className="space-y-12">
                  {selectedJob.responsibilities && (
                    <div>
                      <h4 className="text-xl font-bold text-brand-oxford dark:text-white mb-8 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-azure/10 text-brand-azure flex items-center justify-center">
                          <Briefcase size={20} />
                        </div>
                        {t('pages.career.keyResponsibilities')}
                      </h4>

                      <ul className="grid grid-cols-1 gap-6">
                        {selectedJob.responsibilities.map((item, i) => (
                          <li key={i} className="flex gap-4 text-slate-500 dark:text-slate-400">
                            <div className="mt-1.5 flex-shrink-0">
                              <ChevronRight size={18} className="text-brand-azure" />
                            </div>
                            <span className="text-base leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedJob.requirements && (
                    <div>
                      <h4 className="text-xl font-bold text-brand-oxford dark:text-white mb-8 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-robin/10 text-brand-robin flex items-center justify-center">
                          <BadgeCheck size={20} />
                        </div>
                        {t('pages.career.requirements')}
                      </h4>

                      <ul className="grid grid-cols-1 gap-6">
                        {selectedJob.requirements.map((item, i) => (
                          <li key={i} className="flex gap-4 text-slate-500 dark:text-slate-400">
                            <div className="mt-1.5 flex-shrink-0">
                              <ChevronRight size={18} className="text-brand-robin" />
                            </div>
                            <span className="text-base leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar Info Area */}
              <div className="w-full md:w-[400px] bg-brand-ghost dark:bg-slate-800/50 p-8 lg:p-12 border-l border-brand-oxford/5 dark:border-white/5 flex flex-col">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="hidden md:flex self-end w-12 h-12 rounded-full bg-white dark:bg-slate-800 items-center justify-center text-slate-400 hover:text-brand-azure dark:hover:text-brand-robin shadow-sm transition-colors mb-12"
                >
                  <X size={24} />
                </button>

                <div className="space-y-10 mb-auto">
                  <div className="flex gap-5 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-brand-azure flex-shrink-0 border border-brand-oxford/5">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1.5">{t('pages.career.location')}</p>

                      <p className="text-brand-oxford dark:text-white font-bold text-lg">{selectedJob.location}</p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-brand-azure flex-shrink-0 border border-brand-oxford/5">
                      <Clock size={28} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1.5">{t('pages.career.workingHours')}</p>

                      <p className="text-brand-oxford dark:text-white font-bold text-lg">{selectedJob.hours || "09:00 am - 06:00 pm"}</p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-brand-azure flex-shrink-0 border border-brand-oxford/5">
                      <Calendar size={28} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1.5">{t('pages.career.type')}</p>

                      <p className="text-brand-oxford dark:text-white font-bold text-lg">{selectedJob.type}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-10 border-t border-brand-oxford/5 dark:border-white/5 space-y-4">
                  <Button variant="wipe" className="w-full h-16 rounded-2xl text-lg gap-3 font-bold">
                    {t('common.applyNow')}
                  </Button>

                  <p className="text-center text-[10px] font-bold text-slate-400 px-4 uppercase tracking-widest">
                    {t('pages.career.responseNote')}
                  </p>

                </div>
              </div>
            </motion.div>
          </div >
        )}
      </AnimatePresence >
    </>
  );
};

// Internal icon for list check
const BadgeCheck = ({ size, className }: { size: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
