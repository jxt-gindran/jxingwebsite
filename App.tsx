
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate, Outlet, useParams } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SeoHead } from './components/SeoHead';
import { GlobalScrollAnimations } from './components/GlobalScrollAnimations';
import { useTranslation } from 'react-i18next';
import './i18n'; // Import i18n config
import { LANGUAGES } from './i18n';
import { BookingProvider } from './components/BookingContext';
import { BookingModal } from './components/BookingModal';

// Pages
import { Home } from './pages/Home';
import { Company } from './pages/Company';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetail } from './pages/ServiceDetail';
import { SubServiceDetail } from './pages/SubServiceDetail';
import { CaseStudies } from './pages/CaseStudies';
import { News } from './pages/News';
import { Contact } from './pages/Contact';
import { Pricing } from './pages/Pricing';
import { Career } from './pages/Career';
import { NotFound } from './pages/NotFound';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { Help } from './pages/Help';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout component to handle language logic for routes
const Layout = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLang = (lang && LANGUAGES.some(l => l.code === lang)) ? lang : 'en';

    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang);
    }

    const dir = LANGUAGES.find(l => l.code === currentLang)?.dir || 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = currentLang;
  }, [lang, i18n]);

  return (
    <div className="min-h-screen bg-brand-ghost dark:bg-brand-oxford font-sans text-brand-oxford dark:text-white transition-colors duration-300 selection:bg-brand-azure selection:text-white">
      <SeoHead />
      <Navbar />
      <GlobalScrollAnimations />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

// Define routes configuration to avoid duplication between root and lang paths
const routeConfig = [
  { index: true, element: <Home /> },
  { path: "company", element: <Company /> },
  { path: "services", element: <ServicesPage /> },
  { path: "services/:id", element: <ServiceDetail /> },
  { path: "services/:id/:subId", element: <SubServiceDetail /> },
  { path: "pricing", element: <Pricing /> },
  { path: "case-studies", element: <CaseStudies /> },
  { path: "news", element: <News /> },
  { path: "contact", element: <Contact /> },
  { path: "career", element: <Career /> },
  { path: "help", element: <Help /> },
  { path: "privacy-policy", element: <PrivacyPolicy /> },
  { path: "terms-of-service", element: <TermsOfService /> },
  { path: "*", element: <NotFound /> },
];

function App() {
  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <HelmetProvider>
      <BookingProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Root Path (Default English) */}
            <Route path="/" element={<Layout />}>
              {routeConfig.map((route, i) => (
                <Route key={`root-${i}`} {...route} />
              ))}
            </Route>

            {/* Language Prefixed Paths */}
            <Route path="/:lang" element={<Layout />}>
              {routeConfig.map((route, i) => (
                <Route key={`lang-${i}`} {...route} />
              ))}
            </Route>
          </Routes>
          <BookingModal />
        </Router>
      </BookingProvider>
    </HelmetProvider>
  );
}

export default App;
