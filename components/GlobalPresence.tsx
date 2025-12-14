
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Badge } from './ui/Badge';
import { Cpu, Globe } from 'lucide-react';

interface ClientLocation {
  id: string;
  name: string;
  location: string;
  logo: string;
  top: string;
  left: string;
}

// Adjusted coordinates to fit the cropped map view
// The view is zoomed in, so percentages are relative to the viewport container
const CLIENTS: ClientLocation[] = [
  { 
    id: 'c1', 
    name: 'TechStart Inc', 
    location: 'San Francisco, USA', 
    logo: 'https://logo.clearbit.com/stripe.com', 
    top: '35%', 
    left: '15%' 
  },
  { 
    id: 'c2', 
    name: 'FinNova Ltd', 
    location: 'London, UK', 
    logo: 'https://logo.clearbit.com/revolut.com', 
    top: '22%', 
    left: '48%' 
  },
  { 
    id: 'c3', 
    name: 'Green Energy', 
    location: 'Berlin, Germany', 
    logo: 'https://logo.clearbit.com/siemens.com', 
    top: '24%', 
    left: '52%' 
  },
  { 
    id: 'c4', 
    name: 'Future Systems', 
    location: 'Dubai, UAE', 
    logo: 'https://logo.clearbit.com/emirates.com', 
    top: '42%', 
    left: '62%' 
  },
  { 
    id: 'c5', 
    name: 'APAC Trade', 
    location: 'Singapore', 
    logo: 'https://logo.clearbit.com/shopee.com', 
    top: '55%', 
    left: '78%' 
  },
  { 
    id: 'c6', 
    name: 'CyberShield', 
    location: 'Sydney, Australia', 
    logo: 'https://logo.clearbit.com/atlassian.com', 
    top: '78%', 
    left: '92%' 
  },
];

export const GlobalPresence: React.FC = () => {
  const { t } = useTranslation();
  const [activeClient, setActiveClient] = useState<string | null>(null);

  return (
    <section className="relative bg-brand-ghost dark:bg-brand-oxford -mt-32 lg:-mt-48 pt-0 pb-24 z-10 transition-colors duration-300">
      
      {/* Inline Styles for Tech Animations */}
      <style>{`
        @keyframes scan-line {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
        .animate-scan {
          animation: scan-line 6s linear infinite;
        }
        .bg-tech-grid {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(6, 182, 212, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.08) 1px, transparent 1px);
        }
      `}</style>

      <div className="container mx-auto px-6">
        
        {/* Map Container (Tech Monitor Look) */}
        <div className="relative w-full aspect-[16/9] lg:aspect-[2.8/1] rounded-3xl overflow-hidden bg-[#020617] border border-cyan-900/30 shadow-[0_0_40px_rgba(6,182,212,0.1)] group isolate">
          
          {/* Title Positioned Inside to clear the Video Overlap */}
          <div className="absolute top-32 lg:top-40 left-0 right-0 text-center z-30 pointer-events-none">
             <Badge className="bg-[#020617]/60 text-cyan-400 border-cyan-900/50 backdrop-blur-md shadow-lg" dotColor="bg-cyan-400">{t('home.globalPresence.title')}</Badge>
          </div>

          {/* Tech Grid Background */}
          <div className="absolute inset-0 bg-tech-grid pointer-events-none"></div>
          
          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#020617_100%)] pointer-events-none z-10"></div>

          {/* Map Wrapper (Cropped: UK to Tasmania) */}
          {/* We scale the PNG up and position it to crop top/bottom */}
          <div className="absolute w-full h-[140%] left-0 -top-[15%] pointer-events-none">
             
            {/* Map Image */}
            <div className="w-full h-full p-4 lg:p-16 opacity-30 drop-shadow-[0_0_3px_rgba(6,182,212,0.5)]">
               <img 
                 src="/download.png" 
                 alt="World Map" 
                 className="w-full h-full object-cover"
               />
            </div>
            
            {/* Interactive Layer */}
            <div className="absolute inset-0 pointer-events-auto">
              {CLIENTS.map((client) => (
                <div 
                  key={client.id}
                  className="absolute w-0 h-0 flex items-center justify-center"
                  style={{ top: client.top, left: client.left }}
                >
                  <div className="relative group/marker cursor-pointer w-6 h-6 flex items-center justify-center">
                    {/* Tech Marker Styles */}
                    <div className="absolute inset-0 border border-cyan-500/40 rounded-full animate-[spin_4s_linear_infinite]"></div>
                    <div className="absolute inset-1 border border-cyan-400/60 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] z-10 transition-transform duration-300 group-hover/marker:scale-150"></div>

                    {/* Tooltip */}
                    <div 
                      className={`
                        absolute left-1/2 -translate-x-1/2 bottom-full mb-4 w-64 lg:w-72 bg-[#0B1221] text-cyan-50 backdrop-blur-md rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] p-0 border border-cyan-500/20 transition-all duration-300 origin-bottom z-[60] overflow-hidden
                        ${activeClient === client.id ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'}
                        /* Mobile: show on active/hover */
                        group-hover/marker:opacity-100 group-hover/marker:scale-100 group-hover/marker:translate-y-0
                      `}
                      onMouseEnter={() => setActiveClient(client.id)}
                      onMouseLeave={() => setActiveClient(null)}
                    >
                      {/* Tooltip Header Line */}
                      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                      
                      <div className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-white p-1 border border-white/10 shrink-0">
                            <img src={client.logo} alt={client.name} className="w-full h-full object-contain rounded-md" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white text-sm leading-tight flex items-center gap-2">
                              {client.name}
                              <Cpu size={12} className="text-cyan-400" />
                            </h4>
                            <p className="text-[10px] text-cyan-400 uppercase font-mono tracking-wider mb-2">{client.location}</p>
                            <p className="text-xs text-slate-400 leading-snug">
                               {t(`home.globalPresence.clients.${client.id}`)}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Tooltip Arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-[6px] border-transparent border-t-cyan-500/20"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scanner Effect */}
          <div className="absolute inset-x-0 h-16 bg-gradient-to-b from-cyan-500/10 to-transparent top-0 animate-scan z-0 pointer-events-none border-t border-cyan-400/20 shadow-[0_-5px_10px_rgba(6,182,212,0.2)]"></div>

          {/* HUD Overlay Elements */}
          <div className="absolute top-4 right-6 flex items-center gap-2 text-cyan-500/40 font-mono text-[10px] z-20 select-none">
             <div className="flex gap-1">
                <span className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse"></span>
                <span className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse delay-75"></span>
                <span className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse delay-150"></span>
             </div>
             LIVE NETWORK
          </div>
          
          <div className="absolute bottom-4 left-6 flex items-center gap-2 text-cyan-900/60 font-mono text-[10px] z-20 select-none border border-cyan-900/30 px-2 py-1 rounded">
             <Globe size={10} />
             <span>GLOBAL_COVERAGE: ACTIVE</span>
          </div>

          {/* Decorative Corner Brackets */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-cyan-500/30 rounded-tl-lg pointer-events-none"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-cyan-500/30 rounded-tr-lg pointer-events-none"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-cyan-500/30 rounded-bl-lg pointer-events-none"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-cyan-500/30 rounded-br-lg pointer-events-none"></div>

          {/* Video Overlap Gradient at Top - Visual blend for the section above */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-brand-ghost dark:from-brand-oxford to-transparent pointer-events-none z-30 opacity-90"></div>

        </div>
      </div>
    </section>
  );
};
