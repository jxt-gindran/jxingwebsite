
import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { Portfolio } from '../components/Portfolio';
import { Stats } from '../components/Stats';
import { FAQ } from '../components/FAQ';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useTranslation } from 'react-i18next';

export const CaseStudies: React.FC = () => {
  const { faqs } = useTranslatedData();
  const { t } = useTranslation();

  return (
    <>
      <PageHeader
        title={t('pages.caseStudies.title')}
        subtitle={t('pages.caseStudies.subtitle')}
        badge={t('pages.caseStudies.badge')}
      />
      <Portfolio />
      <Stats />
      <FAQ items={faqs.caseStudies} />
    </>
  );
};
