
import React from 'react';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { useTranslation } from 'react-i18next';
import { useBooking } from './BookingContext';

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const { openBooking } = useBooking();

  return (
    <section className="py-24 bg-white dark:bg-brand-oxford transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="mb-6">{t('home.about.badge')}</Badge>
          <h2 className="text-4xl lg:text-5xl font-semibold text-brand-oxford dark:text-white mb-6">
            {t('home.about.aeoTitle')}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed font-regular">
            {t('home.about.aeoDesc')}
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Website & E-Commerce */}
          <div className="hover-box p-8 rounded-3xl bg-transparent border border-brand-oxford/10 dark:border-white/10 hover:border-brand-azure dark:hover:border-brand-azure group transition-all duration-300">
            <div className="w-14 h-14 rounded-xl border border-brand-oxford/10 dark:border-white/10 flex items-center justify-center mb-8 group-hover:bg-brand-azure group-hover:border-brand-azure group-hover:text-white dark:text-slate-300 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 6L10 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M6.5 8.5L3 12L6.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M17.5 8.5L21 12L17.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-brand-oxford dark:text-white mb-2">{t('home.about.cards.web.title')}</h3>
            <p className="text-sm font-semibold text-brand-azure dark:text-brand-robin mb-3">{t('home.about.cards.web.subtitle')}</p>
            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-6 font-regular">
              {t('home.about.cards.web.desc')}
            </p>
          </div>

          {/* Card 2: Marketing and SEO Growth */}
          <div className="hover-box p-8 rounded-3xl bg-transparent border border-brand-oxford/10 dark:border-white/10 hover:border-brand-azure dark:hover:border-brand-azure group transition-all duration-300">
            <div className="w-14 h-14 rounded-xl border border-brand-oxford/10 dark:border-white/10 flex items-center justify-center mb-8 group-hover:bg-brand-azure group-hover:border-brand-azure group-hover:text-white dark:text-slate-300 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4724 20H4.1C3.76863 20 3.5 19.7314 3.5 19.4V9.6C3.5 9.26863 3.76863 9 4.1 9H6.86762C7.57015 9 8.22116 8.6314 8.5826 8.02899L11.293 3.51161C11.8779 2.53688 13.2554 2.44422 13.9655 3.33186C14.3002 3.75025 14.4081 4.30635 14.2541 4.81956L13.2317 8.22759C13.1162 8.61256 13.4045 9 13.8064 9H18.3815C19.7002 9 20.658 10.254 20.311 11.5262L18.4019 18.5262C18.1646 19.3964 17.3743 20 16.4724 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                <path d="M7 20L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-brand-oxford dark:text-white mb-2">{t('home.about.cards.marketing.title')}</h3>
            <p className="text-sm font-semibold text-brand-azure dark:text-brand-robin mb-3">{t('home.about.cards.marketing.subtitle')}</p>
            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-6 font-regular">
              {t('home.about.cards.marketing.desc')}
            </p>
          </div>

          {/* Card 3: Workflow Automation & AI Tools */}
          <div className="hover-box p-8 rounded-3xl bg-transparent border border-brand-oxford/10 dark:border-white/10 hover:border-brand-azure dark:hover:border-brand-azure group transition-all duration-300">
            <div className="w-14 h-14 rounded-xl border border-brand-oxford/10 dark:border-white/10 flex items-center justify-center mb-8 group-hover:bg-brand-azure group-hover:border-brand-azure group-hover:text-white dark:text-slate-300 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12C9.26752 12 12 9.36306 12 3C12 9.36306 14.7134 12 21 12C14.7134 12 12 14.7134 12 21C12 14.7134 9.26752 12 3 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-brand-oxford dark:text-white mb-2">{t('home.about.cards.automation.title')}</h3>
            <p className="text-sm font-semibold text-brand-azure dark:text-brand-robin mb-3">{t('home.about.cards.automation.subtitle')}</p>
            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-6 font-regular">
              {t('home.about.cards.automation.desc')}
            </p>
          </div>

          {/* CTA Card */}
          <div className="hover-box relative p-8 rounded-3xl bg-brand-azure text-white overflow-hidden flex flex-col justify-between min-h-[400px] border border-brand-azure shadow-lg shadow-brand-azure/20 group transition-all duration-300">
            <div className="relative z-20">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider mb-4 opacity-80 font-light">
                <span className="w-1.5 h-1.5 bg-white rounded-sm animate-pulse-gentle"></span>
                {t('home.about.cta.badge')}
              </div>
              <h3 className="text-3xl font-bold mb-4 leading-tight">
                {t('home.about.cta.title')}
              </h3>
            </div>

            {/* Person Image */}
            <div className="absolute bottom-0 left-0 w-full h-[85%] z-10 flex items-end justify-center pointer-events-none">
              <img
                src="/images/jay_xing.png"
                className="h-full object-contain object-bottom"
                alt="Jay Xing"
              />
            </div>

            <div className="relative z-20 mt-auto flex items-center justify-end w-full">
              <Button
                variant="wipe-white"
                className="shadow-lg hover:shadow-xl"
                onClick={openBooking}
              >
                {t('home.about.cta.btn')}
              </Button>
            </div>

            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-marian rounded-full blur-3xl opacity-50 z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
