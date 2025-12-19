import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
   const { t, i18n } = useTranslation();
   const lang = i18n.language;

   return (
      <footer className="bg-brand-oxford dark:bg-[#020617] text-white pt-24 pb-8 overflow-hidden transition-colors duration-300">
         <div className="container mx-auto px-6">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
               <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">{t('footer.tellUs')}</p>
                  <h2 className="text-6xl lg:text-8xl font-bold tracking-tight mb-8">{t('footer.letsTalk')}</h2>
                  <a href="mailto:hello@jxingtech.my" className="text-brand-robin hover:text-white transition-colors text-lg inline-flex items-center gap-2 font-medium">
                     {t('footer.writeToUs')} <ArrowRight size={18} className="rtl:rotate-180" />
                  </a>
               </div>

               <div className="hover-box bg-[#1e293b]/50 dark:bg-slate-800/50 p-10 rounded-3xl backdrop-blur-sm border border-white/5">
                  <h3 className="text-xl font-bold mb-6">{t('footer.insightTitle')}</h3>
                  <div className="flex bg-white dark:bg-slate-900 rounded-xl p-1.5 pl-6 rtl:pl-1.5 rtl:pr-6 transition-colors border border-transparent focus-within:border-brand-robin">
                     <input
                        type="email"
                        placeholder={t('footer.emailPlaceholder')}
                        aria-label={t('footer.emailPlaceholder')}
                        className="flex-1 bg-transparent text-brand-oxford dark:text-white outline-none placeholder:text-slate-400"
                     />
                     <button
                        aria-label="Subscribe to newsletter"
                        className="w-10 h-10 rounded-lg bg-brand-azure flex items-center justify-center text-white hover:bg-brand-marian transition-colors rtl:rotate-180"
                     >
                        <ArrowRight size={16} />
                     </button>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-t border-white/10">
               <div>
                  <h4 className="font-bold mb-6 text-slate-200">{t('footer.works')}</h4>
                  <ul className="space-y-4 text-slate-400 text-sm font-light">
                     <li><Link to={`/${lang}/services`} className="hover:text-white py-2 inline-block transition-colors">{t('footer.expertise')}</Link></li>
                     <li><Link to={`/${lang}/company`} className="hover:text-white py-2 inline-block transition-colors">{t('footer.about')}</Link></li>
                     <li><Link to={`/${lang}/career`} className="hover:text-white py-2 inline-block transition-colors">{t('footer.careers')}</Link></li>
                     <li><Link to={`/${lang}/case-studies`} className="hover:text-white py-2 inline-block transition-colors">{t('nav.caseStudies')}</Link></li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold mb-6 text-slate-200">{t('nav.services')}</h4>
                  <ul className="space-y-2 text-slate-400 text-xs font-light">
                     <li><Link to={`/${lang}/services/website-design`} className="hover:text-white hover:pl-1 transition-all">{t('footer.serviceLinks.webEcom')}</Link></li>
                     <li><Link to={`/${lang}/services/marketing`} className="hover:text-white hover:pl-1 transition-all">{t('footer.serviceLinks.marketing')}</Link></li>
                     <li><Link to={`/${lang}/services/automation`} className="hover:text-white hover:pl-1 transition-all">{t('footer.serviceLinks.automation')}</Link></li>
                     <li><Link to={`/${lang}/services/seo`} className="hover:text-white hover:pl-1 transition-all">{t('footer.serviceLinks.seo')}</Link></li>
                  </ul>

               </div>
               <div>
                  <h4 className="font-bold mb-6 text-slate-200">{t('footer.company')}</h4>
                  <ul className="space-y-4 text-slate-400 text-sm font-light">
                     <li><Link to={`/${lang}/help`} className="hover:text-white py-2 inline-block transition-colors">{t('breadcrumbs.help')}</Link></li>
                     <li><Link to={`/${lang}/contact`} className="hover:text-white py-2 inline-block transition-colors">{t('footer.contact')}</Link></li>
                     <li><Link to={`/${lang}/privacy-policy`} className="hover:text-white py-2 inline-block transition-colors">{t('footer.privacy')}</Link></li>
                  </ul>
               </div>
               <div className="md:col-span-1">
                  <h4 className="font-bold mb-6 text-slate-200">{t('footer.headOffice')}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 font-light hover:text-white transition-colors">
                     <a href="https://www.google.com/maps/search/?api=1&query=JXING+Tech+Group+Sdn.+Bhd.+Level+37,+2A,+Q+Sentral" target="_blank" rel="noopener noreferrer">
                        Level 37, Q Sentral, Jalan Stesen Sentral 2, <br />
                        Kuala Lumpur, 50470, Malaysia
                     </a>
                  </p>
                  <p className="text-slate-400 text-sm font-light py-2">
                     <a href="mailto:hello@jxingtech.my" className="hover:text-white transition-colors">hello@jxingtech.my</a>
                  </p>
                  <p className="text-brand-robin text-sm mt-2 font-medium py-2">
                     <a href="tel:+60102882827" className="hover:text-white transition-colors">+60 10-288 2827</a>
                  </p>
               </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-slate-500 font-light">
               <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-center md:text-left">
                  <p className="py-2">{t('footer.copyright')}</p>
                  <div className="flex gap-4">
                     <Link to={`/${lang}/terms-of-service`} className="hover:text-white py-2">{t('footer.terms')}</Link>
                  </div>
               </div>
               <div className="flex gap-6 mt-4 md:mt-0">
                  <span className="text-slate-400 hidden lg:inline py-2">{t('footer.followUs')}</span>
                  <a href="#" aria-label="Facebook" className="hover:text-white p-2">Facebook</a>
                  <a href="#" aria-label="Instagram" className="hover:text-white p-2">Instagram</a>
                  <a href="#" aria-label="Youtube" className="hover:text-white p-2">Youtube</a>
                  <a href="#" aria-label="TikTok" className="hover:text-white p-2">Tiktok</a>
               </div>
            </div>
         </div>
      </footer>
   );
};