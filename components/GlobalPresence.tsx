
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Badge } from './ui/Badge';
import { Cpu, Globe, Zap, ArrowRight } from 'lucide-react';

interface ClientLocation {
  id: string;
  name: string;
  location: string;
  logo: string;
  top: string;
  left: string;
}

// Standardized coordinates for a full width 2:1 Equirectangular map
const CLIENTS: ClientLocation[] = [
  {
    id: 'c1',
    name: 'TechStart Inc',
    location: 'San Francisco, USA',
    logo: 'https://logo.clearbit.com/stripe.com',
    top: '44%',
    left: '14%'
  },
  {
    id: 'c2',
    name: 'FinNova Ltd',
    location: 'London, UK',
    logo: 'https://cdn.brandfetch.io/idQH6e1xMu/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    top: '22%',
    left: '55%'
  },
  {
    id: 'c3',
    name: 'Green Energy',
    location: 'Berlin, Germany',
    logo: 'https://logo.clearbit.com/siemens.com',
    top: '33%',
    left: '52%'
  },
  {
    id: 'c4',
    name: 'Future Systems',
    location: 'Dubai, UAE',
    logo: 'https://logo.clearbit.com/emirates.com',
    top: '51%',
    left: '62%'
  },
  {
    id: 'c5',
    name: 'APAC Trade',
    location: 'Singapore',
    logo: 'https://logo.clearbit.com/shopee.com',
    top: '63%',
    left: '75%'
  },
  {
    id: 'c6',
    name: 'CyberShield',
    location: 'Sydney, Australia',
    logo: 'https://logo.clearbit.com/atlassian.com',
    top: '83%',
    left: '87%'
  },
];

export const GlobalPresence: React.FC = () => {
  const { t } = useTranslation();
  const [activeClient, setActiveClient] = useState<string | null>(null);

  return (
    <section className="relative bg-brand-ghost dark:bg-brand-oxford pt-4 pb-24 transition-colors duration-300 overflow-visible z-40">
      <div className="container mx-auto px-6">


        {/* Section Header */}
        <div className="text-center mb-8 relative z-10">
          <Badge className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-brand-oxford/5 dark:border-white/5 shadow-sm">{t('home.globalPresence.title')}</Badge>
        </div>

        {/* Map Container - Hovering Effect */}
        <div className="relative w-full aspect-[2/1] max-w-6xl mx-auto">

          {/* Map Image */}
          {/* Using opacity and blend modes to create the 'transparent' look requested */}
          <img
            src="/world-map.svg"
            alt="World Map"
            className="w-full h-full object-contain opacity-20 dark:opacity-30 dark:brightness-0 dark:invert transition-all duration-500"
          />

          {/* Interactive Layer */}
          <div className="absolute inset-0 z-20">
            {CLIENTS.map((client) => (
              <div
                key={client.id}
                className="absolute w-0 h-0 flex items-center justify-center"
                style={{ top: client.top, left: client.left }}
              >
                <div
                  className="relative group/marker cursor-pointer"
                  onMouseEnter={() => setActiveClient(client.id)}
                  onMouseLeave={() => setActiveClient(null)}
                >
                  {/* Pulsing Marker - Dark Blue (Brand Marian) */}
                  <span className="relative flex h-4 w-4 lg:h-5 lg:w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-marian dark:bg-brand-robin opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 lg:h-5 lg:w-5 bg-brand-marian dark:bg-brand-robin border-2 border-white dark:border-brand-oxford shadow-lg"></span>
                  </span>

                  {/* Hover Tooltip */}
                  <div
                    className={`
                      absolute left-1/2 -translate-x-1/2 bottom-full mb-4 w-72 
                      bg-white/90 dark:bg-brand-oxford/90 backdrop-blur-md 
                      rounded-2xl shadow-xl border border-brand-oxford/5 dark:border-white/10 
                      transition-all duration-300 origin-bottom z-50 overflow-hidden
                      ${activeClient === client.id ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'}
                    `}
                  >
                    <div className="p-5">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-sm border border-slate-100 shrink-0 flex items-center justify-center">
                          <img src={client.logo} alt={client.name} className="w-full h-full object-contain rounded-lg" />
                        </div>
                        <div>
                          <h4 className="font-bold text-brand-oxford dark:text-white text-sm leading-tight mb-1">
                            {client.name}
                          </h4>
                          <div className="flex items-center gap-1.5 text-[11px] font-medium text-brand-azure dark:text-brand-robin uppercase tracking-wide">
                            <Globe size={10} />
                            {client.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-slate-500 dark:text-slate-300 leading-relaxed font-light border-t border-brand-oxford/5 dark:border-white/5 pt-3">
                        {t(`home.globalPresence.clients.${client.id}`)}
                      </p>
                    </div>

                    {/* Tooltip Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-[8px] border-transparent border-t-white/90 dark:border-t-brand-oxford/90"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer Text & Header */}
        <div className="text-center mt-12 relative z-10">


          <p className="text-sm text-slate-400 dark:text-slate-500 font-light">
            Trusted by leading companies in 25+ countries worldwide.
          </p>
        </div>

      </div>
    </section>
  );
};

