
import React, { useState } from 'react';
import { Badge } from './ui/Badge';
import { Plus } from 'lucide-react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTranslatedData } from '../hooks/useTranslatedData';

export const Services: React.FC = () => {
  const { services } = useTranslatedData();
  const [activeService, setActiveService] = useState<string>(services[0].id);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <section className="py-24 bg-brand-oxford dark:bg-slate-950 text-white overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6">

        {/* 1. Centered Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Badge className="bg-white/10 dark:bg-slate-800/50 border-white/10 text-white" dotColor="bg-brand-azure">
              {t('services.badge')}
            </Badge>
          </div>
          <h2 className="text-4xl lg:text-6xl font-semibold">{t('services.aeoTitle')}</h2>

        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Side - Sticky Image Container */}
          {/* Changed aspect-ratio to fixed large height to make image "full section" */}
          <div className="lg:w-1/2 lg:sticky lg:top-32 h-fit">
            <div className="hover-box relative rounded-3xl overflow-hidden min-h-[400px] lg:h-[700px] shadow-2xl border border-white/10 w-full">
              {services.map((service) => (
                <img
                  key={service.id}
                  src={service.image}
                  alt={service.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeService === service.id ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}

              {/* Floating Button on Image */}
              <div className="absolute bottom-8 right-8 rtl:right-auto rtl:left-8">
                {/* 3. Changed icon to arrow-right */}
                <Button variant="circle" icon="arrow-right" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-brand-oxford" />
              </div>
            </div>
          </div>

          {/* Right Side - Accordion List */}
          <div className="lg:w-1/2">
            <div className="flex flex-col">
              {services.map((service) => {
                const isActive = activeService === service.id;
                return (
                  <div
                    key={service.id}
                    className={`hover-box group border-b border-white/10 transition-all duration-300 ${isActive ? 'pb-8 pt-8' : 'py-8 cursor-pointer hover:pl-4 rtl:hover:pl-0 rtl:hover:pr-4'}`}
                    onClick={() => setActiveService(service.id)}
                  >
                    <div className="flex items-center justify-between">
                      <h2 className={`text-2xl lg:text-3xl font-medium transition-colors ${isActive ? 'text-brand-vermilion' : 'text-slate-400 group-hover:text-white'}`}>
                        {service.title}
                      </h2>
                      <span className={`transition-transform duration-300 ${isActive ? 'rotate-45 text-brand-vermilion' : 'text-slate-500'}`}>
                        <Plus size={24} />
                      </span>
                    </div>

                    <div className={`grid transition-all duration-300 ease-in-out overflow-hidden ${isActive ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p className="text-slate-400 leading-relaxed mb-6 max-w-md font-regular">
                          {service.description}
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          {/* Render Navigation Items as Tag Pills */}
                          {service.tags && service.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 rounded-lg border border-white/20 text-xs text-slate-300 hover:border-brand-vermilion hover:text-brand-vermilion transition-colors cursor-default">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* 4. Centered Footer Button */}
        <div className="mt-20 flex justify-center">
          <Link to={`/${lang}/services`}>
            <Button variant="wipe" className="text-white border-white/10">
              {t('services.viewAll')}
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};
