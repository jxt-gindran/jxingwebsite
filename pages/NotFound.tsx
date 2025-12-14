
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useTranslation } from 'react-i18next';

export const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-brand-ghost dark:bg-brand-oxford transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-[10rem] lg:text-[14rem] font-bold text-brand-azure/10 dark:text-white/5 leading-none select-none">
          404
        </h1>
        <div className="relative -mt-16 lg:-mt-24">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-oxford dark:text-white mb-6">
            {t('pages.notFound.title')}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto mb-10 text-lg">
            {t('pages.notFound.desc')}
          </p>
          <Link to="/">
            <Button variant="wipe">
              {t('pages.notFound.backHome')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};