
import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { Button } from '../components/ui/Button';
import { FAQ } from '../components/FAQ';
import { FAQS } from '../constants';
import {
    LifeBuoy,
    BookOpen,
    ShieldCheck,
    LayoutDashboard,
    Clock,
    MessageCircle,
    Calendar,
    Lock,
    Headphones
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useBooking } from '../components/BookingContext';

export const Help: React.FC = () => {
    const { t } = useTranslation();
    const { openBooking } = useBooking();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="bg-brand-ghost dark:bg-brand-oxford transition-colors duration-300">
            <PageHeader
                title={t('pages.help.title')}
                subtitle={t('pages.help.subtitle')}
                image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop"
            />


            <section className="py-24">
                <div className="container mx-auto px-6">

                    {/* Main Channels */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
                    >
                        {/* Consultation Card */}
                        <motion.div variants={itemVariants} className="group bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-brand-oxford/5 dark:border-white/5 shadow-xl shadow-brand-oxford/5 flex flex-col items-start transition-all hover:-translate-y-2">
                            <div className="w-16 h-16 rounded-2xl bg-brand-azure/10 text-brand-azure flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Calendar size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-oxford dark:text-white mb-4">{t('pages.help.bookConsultation')}</h3>

                            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                                Schedule a 1-on-1 session with our strategists to discuss new projects, feature requests, or business growth roadmaps.
                            </p>
                            <Button variant="wipe" onClick={openBooking} className="mt-auto">{t('pages.help.scheduleNow')}</Button>

                        </motion.div>

                        {/* Dashboard Support Card */}
                        <motion.div variants={itemVariants} className="group bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-brand-oxford/5 dark:border-white/5 shadow-xl shadow-brand-oxford/5 flex flex-col items-start transition-all hover:-translate-y-2">
                            <div className="w-16 h-16 rounded-2xl bg-brand-robin/10 text-brand-robin flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <LayoutDashboard size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-oxford dark:text-white mb-4">{t('pages.help.clientDashboard')}</h3>

                            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                                Active clients can log in to their dashboard to submit support tickets, track project progress, and access technical resources.
                            </p>
                            <Button variant="outline" className="mt-auto group-hover:bg-brand-oxford group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-brand-oxford transition-all">{t('pages.help.clientLogin')}</Button>

                        </motion.div>

                        {/* Quick Chat Card */}
                        <motion.div variants={itemVariants} className="group bg-brand-oxford dark:bg-slate-800 p-10 rounded-[2.5rem] text-white shadow-xl flex flex-col items-start transition-all hover:-translate-y-2">
                            <div className="w-16 h-16 rounded-2xl bg-brand-azure text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <MessageCircle size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{t('pages.help.instantAssistance')}</h3>

                            <p className="text-slate-300 mb-8 leading-relaxed">
                                Need a quick answer? Connect with our support representatives instantly via WhatsApp for general inquiries.
                            </p>
                            <a
                                href="https://wa.me/60102882827"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-flex items-center gap-2 font-bold text-brand-robin hover:text-white transition-colors"
                            >
                                {t('pages.help.whatsAppChat')} <Calendar size={18} />

                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Support Hours & SLA */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-brand-oxford dark:text-white mb-8">{t('pages.help.supportExcellence')}</h2>

                            <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 leading-relaxed">
                                We believe in providing reliable, tier-based support that aligns with your business criticality. Our standard operations ensure coverage during peak business hours, while our enterprise contracts offer around-the-clock peace of mind.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4 p-6 rounded-3xl bg-white dark:bg-slate-900/50 border border-brand-oxford/5 dark:border-white/5">
                                    <div className="w-12 h-12 rounded-xl bg-brand-azure/10 text-brand-azure flex-shrink-0 flex items-center justify-center">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-oxford dark:text-white mb-1">{t('pages.help.standardHours')}</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">{t('pages.help.standardHoursDesc')}</p>

                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 rounded-3xl bg-white dark:bg-slate-900/50 border border-brand-oxford/5 dark:border-white/5">
                                    <div className="w-12 h-12 rounded-xl bg-brand-robin/10 text-brand-robin flex-shrink-0 flex items-center justify-center">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-oxford dark:text-white mb-1">{t('pages.help.sla')}</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">{t('pages.help.slaDesc')}</p>

                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* SLA Comparison table / cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-brand-oxford p-10 rounded-[3rem] text-white relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <LifeBuoy size={120} />
                            </div>

                            <h3 className="text-2xl font-bold mb-8 relative z-10">{t('pages.help.contractTiers')}</h3>


                            <div className="space-y-4 relative z-10">
                                {[
                                    { tier: "8x5 Support", desc: "Standard Business Hours Coverage", subtitle: "Ideal for growth-stage businesses." },
                                    { tier: "8x6 Support", desc: "Mon-Sat Coverage", subtitle: "Added support for weekend operations." },
                                    { tier: "24x7 Support", desc: "Critical Infrastructure Coverage", subtitle: "Round-the-clock monitoring and response." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/10 transition-colors">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-bold text-brand-robin">{item.tier}</span>
                                            <Lock size={14} className="text-slate-400" />
                                        </div>
                                        <p className="text-sm font-semibold mb-1">{item.desc}</p>
                                        <p className="text-xs text-slate-400">{item.subtitle}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 p-6 rounded-2xl bg-brand-azure/20 border border-brand-azure/30">
                                <p className="text-sm italic text-slate-200">
                                    "Specialized support tiers are assigned based on your service agreement. For information regarding your current tier, please refer to your master service agreement (MSA)."
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Reusing existing FAQ component if available or generic one */}
            <FAQ items={FAQS.contact} />
        </div>
    );
};
