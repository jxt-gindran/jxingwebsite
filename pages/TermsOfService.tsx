
import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { useTranslation } from 'react-i18next';

export const TermsOfService: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader
        title={t('legal.terms.title')}
        subtitle={t('legal.terms.subtitle')}
        badge="Legal"
      />

      <section className="py-24 bg-white dark:bg-brand-oxford transition-colors duration-300">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8">
              {t('legal.terms.intro')}
            </p>

            <h3 className="text-2xl font-bold text-brand-oxford dark:text-white mb-4">1. Terms</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              By accessing the website at jxingtech.my, you are agreeing to be bound by these terms of service, all applicable laws and regulations,
              and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms,
              you are prohibited from using or accessing this site.
            </p>

            <h3 className="text-2xl font-bold text-brand-oxford dark:text-white mb-4">2. Use License</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              Permission is granted to temporarily download one copy of the materials (information or software) on JXING Tech's website for personal,
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on JXING Tech's website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
            </p>

            <h3 className="text-2xl font-bold text-brand-oxford dark:text-white mb-4">3. Disclaimer</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              The materials on JXING Tech's website are provided on an 'as is' basis. JXING Tech makes no warranties, expressed or implied,
              and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability,
              fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h3 className="text-2xl font-bold text-brand-oxford dark:text-white mb-4">4. Limitations</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              In no event shall JXING Tech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit,
              or due to business interruption) arising out of the use or inability to use the materials on JXING Tech's website.
            </p>

            <h3 className="text-2xl font-bold text-brand-oxford dark:text-white mb-4">5. Governing Law</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of Malaysia and you irrevocably
              submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h3 className="text-2xl font-bold text-brand-oxford dark:text-white mb-4">6. Service Specific Terms</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-brand-oxford dark:text-white mb-2">Website & Software Development</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  Full ownership of the website or software source code transfers to the client only upon full payment of the agreed fees.
                  Payments are milestone-based (typically 40/40/20) or upfront for smaller packages. Fees exclude government taxes, copywriting, and advanced SEO unless specified.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-brand-oxford dark:text-white mb-2">Subscription & Retainer Services (SEO, Social, Ads)</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  Monthly services such as SEO, Social Media Management, and Maintenance are billed on a recurring subscription basis.
                  Cancellations require a 30-day written notice. All creative assets designed during the term belong to the client after payment.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-brand-oxford dark:text-white mb-2">Performance Advertising</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  Management fees do not include the advertising budget (ad spend) payable directly to platforms like Google or Meta.
                  We require a minimum 3-month engagement to allow for data gathering and campaign optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
