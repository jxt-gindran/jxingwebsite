
import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { useTranslation } from 'react-i18next';

export const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader
        title={t('legal.privacy.title')}
        subtitle={t('legal.privacy.subtitle')}
        badge="Legal"
      />

      <section className="py-24 bg-white dark:bg-brand-oxford transition-colors duration-300">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8">
              {t('legal.privacy.intro')}
            </p>

            <h3 className="text-2xl font-bold text-brand-oxford dark:text-white mb-4">1. Introduction</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              Welcome to JXING Tech ("Company", "we", "our", "us"). We operate the website jxingtech.my (the "Service").
              Our Privacy Policy governs your visit to jxingtech.my, and explains how we collect, safeguard and disclose information that results from your use of our Service.
            </p>

            <h3 className="text-2xl font-bold text-brand-oxford dark:text-white mb-4">2. Information Collection and Use</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
              Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.
            </p>

            <h3 className="text-2xl font-bold text-brand-oxford dark:text-white mb-4">3. Types of Data Collected</h3>
            <h4 className="text-xl font-semibold text-brand-oxford dark:text-white mb-2">Personal Data</h4>
            <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
              While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data").
              Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number, Address, State, Province, ZIP/Postal code, City.
            </p>

            <h3 className="text-2xl font-bold text-brand-oxford dark:text-white mb-4">4. Use of Data</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              JXING Tech uses the collected data for various purposes:
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
              </ul>
            </p>

            <h3 className="text-2xl font-bold text-brand-oxford dark:text-white mb-4">5. Contact Us</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us by email: <strong>hello@jxingtech.my</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
