
import React from 'react';
import { Hero } from '../components/Hero';
import { GlobalPresence } from '../components/GlobalPresence';
import { AboutSection } from '../components/AboutSection';
import { Certifications } from '../components/Certifications';
import { Services } from '../components/Services';
import { Stats } from '../components/Stats';
import { Portfolio } from '../components/Portfolio';
import { Team } from '../components/Team';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { useTranslatedData } from '../hooks/useTranslatedData';

export const Home: React.FC = () => {
  const { faqs } = useTranslatedData();

  return (
    <>
      <Hero />
      <GlobalPresence />
      <AboutSection />
      <Certifications />
      <Services />
      <Stats />
      <Portfolio />
      <Team />
      <Testimonials />
      <FAQ items={faqs.home} />
    </>
  );
};
