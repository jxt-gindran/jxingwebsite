
import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { Button } from '../components/ui/Button';
import { FAQ } from '../components/FAQ';
import { FAQS } from '../constants';
import { Mail, MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader 
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
        badge={t('contact.badge')}
      />
      
      {/* Contact Section */}
      <section className="py-24 bg-white dark:bg-brand-oxford transition-colors duration-300">
        <div className="container mx-auto px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {/* Contact Card 1: Visit */}
            <div className="bg-brand-ghost dark:bg-slate-900 p-8 rounded-3xl border border-brand-oxford/5 dark:border-white/5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-brand-azure text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-azure/20">
                <MapPin size={28} />
              </div>
              <h3 className="text-lg font-bold text-brand-oxford dark:text-white mb-2">{t('contact.visitUs')}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Level 37, 2A, Q Sentral,<br/>
                KL Sentral, Malaysia
              </p>
            </div>

            {/* Contact Card 2: Email */}
            <div className="bg-brand-ghost dark:bg-slate-900 p-8 rounded-3xl border border-brand-oxford/5 dark:border-white/5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-brand-azure text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-azure/20">
                <Mail size={28} />
              </div>
              <h3 className="text-lg font-bold text-brand-oxford dark:text-white mb-2">{t('contact.emailUs')}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                hello@jxing.tech<br/>
                support@jxing.tech
              </p>
            </div>

            {/* Contact Card 3: Call */}
            <div className="bg-brand-ghost dark:bg-slate-900 p-8 rounded-3xl border border-brand-oxford/5 dark:border-white/5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-brand-azure text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-azure/20">
                <Phone size={28} />
              </div>
              <h3 className="text-lg font-bold text-brand-oxford dark:text-white mb-2">{t('contact.callUs')}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                +60 10-288 2827<br/>
                Mon-Fri 9am-6pm
              </p>
            </div>

            {/* Contact Card 4: WhatsApp */}
            <a 
              href="https://wa.me/60102882827" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-brand-ghost dark:bg-slate-900 p-8 rounded-3xl border border-brand-oxford/5 dark:border-white/5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-azure/30 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-azure text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-azure/20 group-hover:scale-110 transition-transform">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-lg font-bold text-brand-oxford dark:text-white mb-2">{t('contact.whatsapp')}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                {t('contact.startConversation')}<br/>
                {t('contact.quickChat')}
              </p>
            </a>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Form Section */}
            <div className="lg:w-2/3">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-oxford dark:text-white mb-4">{t('contact.sendMessage')}</h2>
                <p className="text-slate-500 dark:text-slate-400">{t('contact.formDesc')}</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-oxford dark:text-slate-300 ml-1">{t('contact.name')}</label>
                    <input type="text" placeholder={t('contact.namePlaceholder')} className="w-full px-6 py-4 rounded-xl bg-brand-ghost dark:bg-slate-900 border border-brand-timberwolf dark:border-slate-700 outline-none focus:border-brand-azure focus:bg-white dark:focus:bg-slate-800 transition-colors text-brand-oxford dark:text-white placeholder:text-slate-400" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-oxford dark:text-slate-300 ml-1">{t('contact.email')}</label>
                    <input type="email" placeholder={t('contact.emailPlaceholder')} className="w-full px-6 py-4 rounded-xl bg-brand-ghost dark:bg-slate-900 border border-brand-timberwolf dark:border-slate-700 outline-none focus:border-brand-azure focus:bg-white dark:focus:bg-slate-800 transition-colors text-brand-oxford dark:text-white placeholder:text-slate-400" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-oxford dark:text-slate-300 ml-1">{t('contact.phone')}</label>
                    <input type="tel" placeholder={t('contact.phonePlaceholder')} className="w-full px-6 py-4 rounded-xl bg-brand-ghost dark:bg-slate-900 border border-brand-timberwolf dark:border-slate-700 outline-none focus:border-brand-azure focus:bg-white dark:focus:bg-slate-800 transition-colors text-brand-oxford dark:text-white placeholder:text-slate-400" />
                  </div>
                   <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-oxford dark:text-slate-300 ml-1">{t('contact.subject')}</label>
                    <input type="text" placeholder={t('contact.subjectPlaceholder')} className="w-full px-6 py-4 rounded-xl bg-brand-ghost dark:bg-slate-900 border border-brand-timberwolf dark:border-slate-700 outline-none focus:border-brand-azure focus:bg-white dark:focus:bg-slate-800 transition-colors text-brand-oxford dark:text-white placeholder:text-slate-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-oxford dark:text-slate-300 ml-1">{t('contact.message')}</label>
                  <textarea rows={6} placeholder={t('contact.messagePlaceholder')} className="w-full px-6 py-4 rounded-xl bg-brand-ghost dark:bg-slate-900 border border-brand-timberwolf dark:border-slate-700 outline-none focus:border-brand-azure focus:bg-white dark:focus:bg-slate-800 transition-colors text-brand-oxford dark:text-white resize-none placeholder:text-slate-400"></textarea>
                </div>
                
                <div>
                  <Button variant="wipe">{t('contact.btnSend')}</Button>
                </div>
              </form>
            </div>

            {/* Info / Hours Section */}
            <div className="lg:w-1/3 space-y-8">
               <div className="bg-brand-oxford dark:bg-slate-800 p-8 rounded-3xl text-white">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                     <Clock size={20} className="text-brand-azure" />
                     {t('contact.workingHours')}
                  </h3>
                  <div className="space-y-4 text-sm text-slate-300">
                     <div className="flex justify-between border-b border-white/10 pb-2">
                        <span>Monday - Friday</span>
                        <span className="font-semibold text-white">9:00 AM - 6:00 PM</span>
                     </div>
                     <div className="flex justify-between border-b border-white/10 pb-2">
                        <span>Saturday</span>
                        <span className="font-semibold text-white">10:00 AM - 4:00 PM</span>
                     </div>
                     <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-semibold text-brand-robin">Closed</span>
                     </div>
                  </div>
               </div>
               
               {/* Map with Pulsing Markers */}
               <div className="rounded-3xl overflow-hidden h-[300px] border border-brand-oxford/10 dark:border-white/10 relative bg-slate-200 dark:bg-slate-700 group">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                    alt="Map Location" 
                  />
                  
                  {/* Marker 1: HQ */}
                  <div className="absolute top-[40%] left-[65%] group/marker">
                      <div className="relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-azure opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-azure border-2 border-white dark:border-brand-oxford"></span>
                          
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max bg-white dark:bg-brand-oxford text-xs rounded-lg shadow-xl p-3 opacity-0 group-hover/marker:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                              <p className="font-bold text-brand-oxford dark:text-white">{t('contact.map.hq.name')}</p>
                              <p className="text-slate-500">{t('contact.map.hq.location')}</p>
                              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white dark:border-t-brand-oxford"></div>
                          </div>
                      </div>
                  </div>

                  {/* Marker 2: Hub */}
                  <div className="absolute top-[45%] left-[70%] group/marker">
                      <div className="relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-robin opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-robin border-2 border-white dark:border-brand-oxford"></span>
                           {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max bg-white dark:bg-brand-oxford text-xs rounded-lg shadow-xl p-3 opacity-0 group-hover/marker:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                              <p className="font-bold text-brand-oxford dark:text-white">{t('contact.map.hub.name')}</p>
                              <p className="text-slate-500">{t('contact.map.hub.role')}</p>
                               <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white dark:border-t-brand-oxford"></div>
                          </div>
                      </div>
                  </div>

                   {/* Marker 3: Tech */}
                  <div className="absolute top-[30%] left-[20%] group/marker">
                      <div className="relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-vermilion opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-xanthous border-2 border-white dark:border-brand-oxford"></span>
                           {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max bg-white dark:bg-brand-oxford text-xs rounded-lg shadow-xl p-3 opacity-0 group-hover/marker:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                              <p className="font-bold text-brand-oxford dark:text-white">{t('contact.map.tech.name')}</p>
                              <p className="text-slate-500">{t('contact.map.tech.location')}</p>
                               <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white dark:border-t-brand-oxford"></div>
                          </div>
                      </div>
                  </div>

                  <div className="absolute inset-0 flex items-end justify-center pb-6 pointer-events-none">
                     <div className="bg-white text-brand-oxford font-bold px-6 py-2 rounded-full shadow-lg flex items-center gap-2 transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto">
                        <MapPin size={16} className="text-brand-azure" />
                        {t('contact.viewOnMap')}
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>
      
      <FAQ items={FAQS.contact} />
    </>
  );
};
