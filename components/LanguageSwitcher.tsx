
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { LANGUAGES } from '../i18n';
import { useNavigate, useLocation } from 'react-router-dom';

export const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);

    // Logic to update URL path:
    // 1. If switching TO 'en', remove language prefix.
    // 2. If switching FROM 'en' TO other, add prefix.
    // 3. If switching FROM other TO other, replace prefix.

    const currentPath = location.pathname;
    const segments = currentPath.split('/').filter(Boolean);

    // Check if the first segment is a known language code
    const firstIsLang = LANGUAGES.some(l => l.code === segments[0]);

    if (firstIsLang) {
      if (langCode === 'en') {
        // Remove prefix (e.g., /ms/about -> /about)
        segments.shift();
      } else {
        // Replace prefix (e.g., /ms/about -> /zh/about)
        segments[0] = langCode;
      }
    } else {
      // No prefix exists (we are currently on default 'en' routes)
      if (langCode !== 'en') {
        // Add prefix (e.g., /about -> /ms/about)
        segments.unshift(langCode);
      }
      // If langCode IS 'en', do nothing (stay on /about)
    }

    const newPath = `/${segments.join('/')}`;
    navigate(newPath);
    setIsOpen(false);

    // Update document direction and lang attribute
    const dir = LANGUAGES.find(l => l.code === langCode)?.dir || 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = langCode;
  };

  // Close click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 w-12 h-12 justify-center rounded-lg border border-brand-oxford/10 dark:border-white/10 hover:bg-brand-ghost dark:hover:bg-slate-800 transition-colors bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
        aria-label={t('common.selectLanguage')}
      >
        <span className="text-2xl leading-none">{currentLang.flag}</span>
        <ChevronDown size={14} className={`text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-brand-oxford border border-brand-oxford/10 dark:border-white/10 rounded-xl shadow-xl overflow-hidden z-50 animate-fade-in">
          <div className="max-h-80 overflow-y-auto">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-brand-ghost dark:hover:bg-slate-800 transition-colors ${i18n.language === lang.code ? 'bg-brand-azure/10 text-brand-azure font-semibold' : 'text-brand-oxford dark:text-slate-200'}`}
              >
                <span className="text-xl leading-none">{lang.flag}</span>
                <span className="flex-1 text-left">{lang.name}</span>
                {i18n.language === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-brand-azure"></div>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
