
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../i18n';
import { useLocation } from 'react-router-dom';

interface SeoHeadProps {
  title?: string;
  description?: string;
  image?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({ title, description, image }) => {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const currentLang = i18n.language;

  // Base URL (replace with actual domain in production)
  const baseUrl = 'https://jxing.tech';
  
  // Construct canonical path without lang prefix if possible, or handle logic
  // Here we assume path contains language
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const routePath = LANGUAGES.some(l => l.code === pathSegments[0]) 
    ? pathSegments.slice(1).join('/') 
    : pathSegments.join('/');

  const pageTitle = title ? `${title} | JXING Tech` : 'JXING Tech - Digital Agency';
  const metaDescription = description || t('meta.description');

  return (
    <Helmet>
      <html lang={currentLang} dir={LANGUAGES.find(l => l.code === currentLang)?.dir || 'ltr'} />
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      
      {/* Canonical */}
      <link rel="canonical" href={`${baseUrl}/${currentLang}/${routePath}`} />

      {/* Hreflang Tags */}
      {LANGUAGES.map((lang) => (
        <link 
          key={lang.code} 
          rel="alternate" 
          hrefLang={lang.code} 
          href={`${baseUrl}/${lang.code}/${routePath}`} 
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en/${routePath}`} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:locale" content={currentLang} />
      {image && <meta property="og:image" content={image} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  );
};
