
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  variant?: 'default' | 'light';
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, variant = 'default' }) => {
  const location = useLocation();
  const { t } = useTranslation();

  // Don't show breadcrumbs on home page (only when auto-generating)
  if (!items && (location.pathname === '/' || location.pathname.match(/^\/[a-z]{2}$/))) return null;

  // Auto-generate from path if no items provided
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbItems: BreadcrumbItem[] = items || [
    { label: t('common.home'), href: '/' },
    ...pathnames
      .filter((value, index) => !(index === 0 && value.length === 2)) // Skip lang prefix
      .map((value, index, arr) => {
        const to = `/${pathnames.slice(0, pathnames.indexOf(value) + 1).join('/')}`;
        const isLast = index === arr.length - 1;
        const translationKey = `breadcrumbs.${value}`;
        const displayName = t(translationKey, value.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())) as string;

        return {
          label: displayName,
          href: isLast ? undefined : to
        };
      })
  ];

  // Generate Breadcrumb Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `${window.location.origin}${item.href}` : undefined
    }))
  };

  const containerClasses = variant === 'light'
    ? 'bg-white/10 backdrop-blur-md border border-white/10 text-white'
    : 'bg-brand-oxford/5 dark:bg-white/10 backdrop-blur-md border border-brand-oxford/10 dark:border-white/10 text-brand-oxford dark:text-white';

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      <nav aria-label="Breadcrumb" className="inline-flex mb-6">
        <ol className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider ${containerClasses}`}>
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;

            return (
              <li key={index} className="inline-flex items-center">
                {index > 0 && <span className="mx-2 opacity-50">/</span>}
                {isLast || !item.href ? (
                  <span aria-current={isLast ? "page" : undefined} className="opacity-80 cursor-default">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="hover:text-brand-azure dark:hover:text-brand-robin transition-colors"
                  >
                    {item.label}
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
