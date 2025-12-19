
import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { Blog } from '../components/Blog';
import { FAQ } from '../components/FAQ';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useTranslation } from 'react-i18next';

export const News: React.FC = () => {
  const { faqs } = useTranslatedData();
  const { t } = useTranslation();

  return (
    <>
      <PageHeader
        title={t('pages.news.title')}
        subtitle={t('pages.news.subtitle')}
        image="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2021&auto=format&fit=crop"
      />
      <Blog />
      <FAQ items={faqs.news} />
    </>
  );
};