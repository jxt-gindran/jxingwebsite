import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { useBooking } from './BookingContext';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { openBooking } = useBooking();
  const lang = i18n.language;

  // Generate path based on language (omit /en for default)
  const getPath = (path: string) => {
    return lang === 'en' ? path : `/${lang}${path}`;
  };

  const NAV_LINKS = [
    { label: t('nav.company'), href: '/company' },
    { label: t('nav.services'), href: '/services' },
    { label: t('nav.pricing'), href: '/pricing' },
    { label: t('nav.caseStudies'), href: '/case-studies' },
    { label: t('nav.news'), href: '/news' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const LogoMark = isDark
    ? "/images/branding/jxing_mark_white.png"
    : "/images/branding/jxing_mark_blue.png";

  const LogoText = isDark
    ? "/images/branding/jxing_logo_white.png"
    : "/images/branding/jxing_logo_blue.png";

  // Home link logic
  const homeLink = lang === 'en' ? '/' : `/${lang}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/80 dark:bg-brand-oxford/90 backdrop-blur-md shadow-sm border-b border-brand-oxford/5 dark:border-white/5' : 'py-6 bg-transparent'}`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to={homeLink} className="flex items-center gap-3 group" aria-label="JXING Tech Home">
          <div className="w-12 h-12 rounded-xl bg-transparent border border-brand-oxford/10 dark:border-white/10 flex items-center justify-center p-2.5 transition-colors group-hover:border-brand-azure dark:group-hover:border-brand-robin overflow-hidden">
            <img src={LogoMark} alt="JXING Mark" width="48" height="48" className="w-full h-full object-contain" />
          </div>
          <div className="h-8 flex items-center">
            <img src={LogoText} alt="JXING" width="120" height="32" className="h-full object-contain" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center bg-transparent border border-brand-oxford/10 dark:border-white/10 px-2 py-1.5 rounded-xl backdrop-blur-sm">
          {NAV_LINKS.map((link, index) => {
            const path = getPath(link.href);
            // Logic to check active link
            const currentPath = location.pathname;
            const isActive = currentPath === path || (path !== '/' && currentPath.startsWith(path));

            return (
              <Link
                key={index}
                to={path}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors border border-transparent ${isActive
                  ? 'bg-brand-ghost dark:bg-slate-800 border-brand-oxford/5 dark:border-white/5 text-brand-oxford dark:text-white'
                  : 'text-slate-600 dark:text-slate-300 hover:text-brand-oxford dark:hover:text-white hover:bg-brand-ghost/50 dark:hover:bg-slate-800/50'
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Action Button & Language (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="w-12 h-12 rounded-xl border border-brand-oxford/10 dark:border-white/10 text-brand-oxford dark:text-slate-300 flex items-center justify-center hover:bg-brand-ghost dark:hover:bg-slate-800 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Button variant="wipe" onClick={openBooking}>
            {t('nav.getInTouch')}
          </Button>

          <LanguageSwitcher />
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleDarkMode}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="w-12 h-12 rounded-xl border border-brand-oxford/10 dark:border-white/10 text-brand-oxford dark:text-slate-300 flex items-center justify-center hover:bg-brand-ghost dark:hover:bg-slate-800 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <LanguageSwitcher />

          <button
            className="w-12 h-12 flex items-center justify-center text-brand-oxford dark:text-white rounded-lg border border-brand-oxford/10 dark:border-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-brand-oxford border-b border-brand-ghost dark:border-slate-800 p-6 flex flex-col gap-4 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={index}
              to={getPath(link.href)}
              className="text-brand-oxford dark:text-white font-medium py-4 px-4 rounded-lg border border-transparent hover:border-brand-oxford/10 dark:hover:border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="wipe"
            className="w-full justify-center"
            onClick={() => {
              setMobileMenuOpen(false);
              openBooking();
            }}
          >
            {t('nav.getInTouch')}
          </Button>
        </div>
      )}
    </header>
  );
};