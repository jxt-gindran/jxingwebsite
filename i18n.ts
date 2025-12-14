
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const LANGUAGES = [
  { code: 'en', name: 'English', dir: 'ltr', flag: '🇺🇸' },
  { code: 'ms', name: 'Bahasa Melayu', dir: 'ltr', flag: '🇲🇾' },
  { code: 'zh', name: '中文 (简体)', dir: 'ltr', flag: '🇨🇳' },
  { code: 'hi', name: 'हिन्दी', dir: 'ltr', flag: '🇮🇳' },
  { code: 'es', name: 'Español', dir: 'ltr', flag: '🇪🇸' },
  { code: 'ar', name: 'العربية', dir: 'rtl', flag: '🇸🇦' },
];

const resources = {
  en: {
    translation: {
      common: {
        learnMore: "Learn More",
        viewAll: "View All",
        getStarted: "Get Started",
        readMore: "Read More",
        applyNow: "Apply Now",
        home: "Home",
        selectLanguage: "Select Language",
        popular: "POPULAR",
        submit: "Submit Request"
      },
      nav: {
        company: 'Company',
        services: 'Services',
        pricing: 'Pricing Plans',
        caseStudies: 'Case Studies',
        news: 'News',
        contact: 'Contact',
        getInTouch: 'Get In Touch'
      },
      breadcrumbs: {
        company: "Company",
        services: "Services",
        pricing: "Pricing",
        "case-studies": "Case Studies",
        news: "News",
        contact: "Contact",
        career: "Career",
        "privacy-policy": "Privacy Policy",
        "terms-of-service": "Terms of Service"
      },
      hero: {
        title_static: 'Outpace Your Competition.',
        title_prefix: 'Built for Digital',
        satisfied_customers: 'satisfied customers',
        dynamic: [
          {
            word: "Dominance",
            badges: [
              "Rank #1 on Google Search",
              "Own Your Market Niche",
              "Build Unshakeable Brand Authority"
            ]
          },
          {
            word: "Performance",
            badges: [
              "Sub-Second Page Load Speeds",
              "Seamless Mobile Experience",
              "Enterprise-Grade Cyber Security"
            ]
          },
          {
            word: "Revenue",
            badges: [
              "High-Converting Sales Funnels",
              "Automated Lead Generation",
              "Maximize Ad Spend ROI"
            ]
          }
        ]
      },
      home: {
        globalPresence: {
          title: "Global Client Presence",
          clients: {
            c1: "Integrated payment infrastructure for global scaling.",
            c2: "Banking-as-a-Service platform development.",
            c3: "Renewable energy data visualization dashboard.",
            c4: "Smart city logistics automation systems.",
            c5: "Cross-border e-commerce solution.",
            c6: "Enterprise cyber security auditing tools."
          }
        },
        about: {
          badge: "Who we are",
          title: "Your partners for digital success",
          desc: "We are a dedicated team focused on helping businesses grow through practical and measurable digital solutions. Our strengths are in building high performing websites, driving traffic through digital marketing and SEO, and improving operations with workflow automation and AI tools. Every solution we deliver is designed to help you save time, reach more customers, and grow with confidence.",
          cards: {
            web: {
              title: "Website and E Commerce Solutions",
              subtitle: "Professional websites built to convert.",
              desc: "Launch a high performing business website or online store designed to build trust, capture leads, and support your growth. Everything is fully managed under one subscription."
            },
            marketing: {
              title: "Marketing and SEO Growth",
              subtitle: "Be discovered. Get leads. Grow consistently.",
              desc: "From content and social media to SEO and performance ads, we help you reach the right audience and turn visibility into measurable business results."
            },
            automation: {
              title: "Workflow and AI Automation",
              subtitle: "Save time with smarter systems.",
              desc: "Automate repetitive work, connect your tools, and streamline operations with custom workflows and AI powered solutions."
            }
          },
          cta: {
            badge: "Need help",
            title: "Free advice. Book call back",
            btn: "Let's Talk"
          }
        },
        certifications: {
          title: "Certified & Featured By"
        },
        portfolio: {
          badge: "Selected works",
          title: "Our finished projects",
          desc: "Read how we've helped some of the biggest brands transform their business.",
          viewAll: "View All Works"
        },
        team: {
          badge: "Our expert crew",
          title: "Meet the leadership team",
          desc: "We are all passionate and committed to deliver high quality services to our clients."
        },
        stats: {
          badge: "Why choose us",
          title: "Results that we sucessfully deliver",
          projects: "projects delivered",
          retention: "client retention",
          hours: "hours saved",
          stat1Desc: "Our work has helped clients increase lead flow and achieve measurable online growth across multiple industries.",
          stat2Desc: "A strong retention rate built on consistent monthly improvements and clear, transparent reporting.",
          stat3Desc: "Automation and workflow systems have helped clients save significant operational hours and reduce manual work.",
          circleText: "Business Development Solution IT"
        },
        testimonials: {
          largeText: "testimonials",
          badge: "Hear from customer"
        },
        blog: {
          badge: "Recent post",
          title: "Latest news and industry insights",
          featuredDesc: "We bring deep, functional expertise, but are known for our holistic perspective: we capture value across boundaries."
        },
        faq: {
          badge: "FAQ",
          title: "Frequently Asked Questions",
          desc: "Can't find the answer you're looking for? Reach out to our customer support team."
        }
      },
      contact: {
        title: "Get in Touch",
        subtitle: "Have a project in mind? We'd love to hear from you.",
        badge: "Contact Us",
        visitUs: "Visit Us",
        emailUs: "Email Us",
        callUs: "Call Us",
        whatsapp: "WhatsApp",
        startConversation: "Start a conversation",
        quickChat: "Quick chat on WhatsApp",
        sendMessage: "Send us a message",
        formDesc: "Fill out the form below and we will get back to you within 24 hours.",
        name: "Name",
        namePlaceholder: "John Doe",
        email: "Email",
        emailPlaceholder: "john@example.com",
        phone: "Phone",
        phonePlaceholder: "+60 10-288 2827",
        subject: "Subject",
        subjectPlaceholder: "Project Inquiry",
        message: "Message",
        messagePlaceholder: "Tell us about your project...",
        btnSend: "Send Message",
        workingHours: "Working Hours",
        viewOnMap: "View on Map",
        map: {
            hq: { name: "Global HQ", role: "Headquarters", location: "Kuala Lumpur, Malaysia" },
            hub: { name: "Regional Hub", role: "Operations", location: "Singapore" },
            tech: { name: "Tech Center", role: "R&D", location: "San Francisco, USA" }
        }
      },
      company: {
        title: "We are JXING",
        subtitle: "A team of expert designers, web developers and marketers delivering digital success.",
        aboutBadge: "About JXING Tech Group",
        aboutTitle: "Practical, measurable, and scalable technology.",
        aboutDesc1: "JXING Tech is a digital solutions company that helps businesses grow through practical, measurable, and scalable technology.",
        aboutDesc2: "We believe that digital growth should be simple, affordable, and achievable for every business.",
        brochureTitle: "Download a company brochure",
        brochureTagline: "• Just starting out?",
        brochureBtn: "Get A Copy",
        vision: "Our Vision",
        visionDesc: "To become the most trusted and innovative digital growth partner for businesses across Southeast Asia and beyond.",
        mission: "Our Mission",
        missionDesc: "To help businesses accelerate their digital success through scalable web solutions, e commerce innovation, AI powered automation, and data driven marketing.",
        valuesTitle: "Our Core Values",
        valuesBadge: "Our Culture",
        ctaTitle: "We are committed to delivering only the best"
      },
      services: {
        badge: "Our services",
        title: "Digital services to grow your business",
        viewAll: "View All Services",
        innovativeTitle: "Innovative digital solution services",
        whyChooseBadge: "Why choose us",
        whyChooseTitle: "Reimagined user experiences",
        whyChooseBg: "why choose us",
        whyChooseList: [
          { title: "Customized Solutions", desc: "Building strong media connections to elevate your brand's visibility and credibility through tailored strategies." },
          { title: "Data-Driven Approach", desc: "We utilize advanced analytics to guide every decision, ensuring your growth is measurable and sustainable." },
          { title: "Expert Support", desc: "Our team of industry veterans provides 24/7 support to ensure your digital operations never miss a beat." }
        ]
      },
      footer: {
        tellUs: 'Tell us about your project',
        letsTalk: "Let's talk",
        writeToUs: 'Write to us',
        insightTitle: 'Get the latest inspiration & insights',
        emailPlaceholder: 'Your Email...',
        works: 'Works',
        expertise: 'Expertise',
        about: 'About',
        team: 'Team',
        awards: 'Awards',
        blog: 'Blog',
        careers: 'Careers',
        partnerships: 'Partnerships',
        contact: 'Contact',
        headOffice: 'Head office',
        copyright: '© 2024 JXING Tech Group Sdn. Bhd. All rights reserved. Powered with ❤️ from JXING Tech',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        followUs: 'Follow Us'
      },
      pages: {
        serviceDetail: {
          badge: "Service Detail",
          overviewBadge: "Overview",
          aboutTitle: "About this Service",
          whyChooseBadge: "Why Choose This",
          benefitsTitle: "Key Benefits",
          whatYouGetBadge: "What You Get",
          deliverablesTitle: "Service Deliverables",
          deliverablesFallback: "Specific deliverables tailored to your needs.",
          benefitsFallback: "Details coming soon...",
          viewAll: "View All Services"
        },
        caseStudies: {
          title: "Case Studies",
          subtitle: "Explore how we have helped clients across various industries achieve their digital goals.",
          badge: "Our Work"
        },
        news: {
          title: "Latest News",
          subtitle: "Insights, trends, and updates from the world of digital innovation and design.",
          badge: "Blog"
        },
        career: {
          title: "Career",
          subtitle: "By joining our team, you'll have the opportunity to work on cutting projects, leverage the latest technologies, and make a real impact.",
          badge: "Home • Career",
          applyBadge: "Apply now",
          openingsTitle: "Current openings",
          learnMore: "Learn More",
          oppsBadge: "Opportunities with us",
          joinTitle: "Join our innovative team",
          joinDesc: "If you are unable to find a suitable opening please do not worry. We are always up to discover new talents, kindly mail us your resume and portfolio link to",
          contactBtn: "Contact Now"
        },
        pricing: {
          heroTitle: "Build Your Digital Growth Plan",
          heroSubtitle: "Select services, customize features, and request a tailored quote.",
          badge: "Pricing & Plans",
          addToPlan: "Add to Plan",
          added: "Added",
          removeFromQuote: "Remove",
          yourPlan: "Your Growth Plan",
          requestQuote: "Request Quote & Consult",
          customNotesPlaceholder: "Add specific notes (e.g. number of pages)...",
          estInvestment: "Est. Investment",
          emptyQuote: "Select services from the list to build your custom plan.",
          viewDetails: "View Details",
          modalTitle: "Finalize Your Request",
          modalDesc: "Review your selected services and provide your contact details. We'll discuss the specifics during your consultation.",
          nameLabel: "Full Name",
          emailLabel: "Work Email",
          phoneLabel: "Phone Number",
          notesLabel: "Additional Project Context",
          submitting: "Submitting...",
          successTitle: "Request Received!",
          successDesc: "Redirecting you to our booking calendar...",
          upfrontTotal: "Upfront / One-time",
          monthlyTotal: "Monthly Recurring"
        },
        notFound: {
          title: "Oops! Page not found",
          desc: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
          backHome: "Back to Home"
        },
        servicesPage: {
          subtitle: "Innovative digital solutions designed to help you grow, optimize, and succeed in a competitive landscape."
        }
      },
      legal: {
        privacy: {
          title: "Privacy Policy",
          subtitle: "We are committed to protecting your personal information and your right to privacy.",
          intro: "Last updated: January 01, 2024"
        },
        terms: {
          title: "Terms of Service",
          subtitle: "Please read these terms and conditions carefully before using our service.",
          intro: "Last updated: January 01, 2024"
        }
      },
      meta: { description: "JXING Tech is a digital solutions company." },
      data: {
        // Dynamic data keys populated in useTranslatedData via constants
      }
    }
  },
  ms: { translation: { /* ... */ } },
  zh: { translation: { /* ... */ } },
  hi: { translation: { /* ... */ } },
  es: { translation: { /* ... */ } },
  ar: { translation: { /* ... */ } },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ms', 'zh', 'hi', 'es', 'ar'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
