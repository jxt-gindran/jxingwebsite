
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();
  
  // Don't show breadcrumbs on home page
  if (location.pathname === '/' || location.pathname.match(/^\/[a-z]{2}$/)) return null;

  const pathnames = location.pathname.split('/').filter((x) => x);

  // Generate Breadcrumb Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": window.location.origin
      },
      ...pathnames.map((name, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' '),
        "item": `${window.location.origin}/${pathnames.slice(0, index + 1).join('/')}`
      }))
    ]
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      
      <nav aria-label="Breadcrumb" className="inline-flex mb-6">
        <ol className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium uppercase tracking-wider text-white">
          <li className="inline-flex items-center">
            <Link 
              to="/" 
              className="hover:text-brand-azure dark:hover:text-brand-robin transition-colors"
            >
              {t('common.home')}
            </Link>
          </li>
          
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            // Try to translate the segment using keys in breadcrumbs namespace, fallback to capitalized string
            // Skip translation logic for the lang prefix (first segment if length 2)
            const isLangPrefix = index === 0 && value.length === 2;
            
            if (isLangPrefix) return null;
            
            const translationKey = `breadcrumbs.${value}`;
            const displayName = t(translationKey, value.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())) as string;

            return (
              <li key={to} className="inline-flex items-center">
                <span className="mx-2 opacity-50">/</span>
                {isLast ? (
                  <span aria-current="page" className="opacity-80 cursor-default">
                    {displayName}
                  </span>
                ) : (
                  <Link 
                    to={to} 
                    className="hover:text-brand-azure dark:hover:text-brand-robin transition-colors"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
