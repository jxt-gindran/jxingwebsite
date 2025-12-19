
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
        submit: "Submit Request",
        all: "All",
        featured: "Featured"
      },

      meta: {
        description: "JXING Tech is a leading digital agency in Malaysia specializing in web development, e-commerce, AI automation, and performance marketing. We help businesses achieve digital dominance."
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
        help: "Help & Support",
        "privacy-policy": "Privacy Policy",
        "terms-of-service": "Terms of Service"
      },
      hero: {
        title_static: 'Outpace Your Competition.',
        title_prefix: 'Built for Digital',
        title_suffix: '',
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
          aeoTitle: "How does JXING Tech accelerate your digital growth?",
          aeoDesc: "We combine high-performance website development with AI-driven workflow automation and strategic marketing solutions to eliminate business bottlenecks. Our focus is on delivering scalable digital experiences that maximize ROI and drive long-term dominance in your industry.",

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
          featuredDesc: "We bring deep, functional expertise, but are known for our holistic perspective: we capture value across boundaries.",
          categories: "Categories",
          noArticles: "No articles found matching your criteria.",
          featuredArticles: "Featured Articles",
          stayUpdated: "Stay Updated",
          popularTopics: "Popular Topics",
          subscribe: "Subscribe",
          searchPlaceholder: "Search articles...",
          showingCount: "Showing {{count}} articles",
          clearFilters: "Clear all filters",
          subscribeDesc: "Subscribe to our newsletter for monthly digital growth tips and industry insights.",
          unsubscribeNote: "Unsubscribe anytime. We respect your privacy."
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
        hoursLong: "Monday - Friday",
        hoursShort: "9:00 AM - 6:00 PM",
        saturday: "Saturday",
        sunday: "Sunday",
        closed: "Closed",
        monFriHours: "Mon-Fri 9am-6pm",
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
        aeoTitle: "Unlock Your Growth with Our Core Digital Solutions",

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
        serviceLinks: {
          webEcom: "Website & E-Commerce",
          marketing: "Marketing & Growth",
          automation: "Workflow Automation",
          seo: "SEO & AI Integration"
        },

        works: 'Works',
        expertise: 'Expertise',
        about: 'About',
        team: 'Team',
        awards: 'Awards',
        company: "Company",
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
          viewAll: "View All Services",
          overview: "Overview",
          specificOfferings: "Specific Offerings",
          selectPackage: "Select a specific package to view details and pricing."
        },

        caseStudies: {
          title: "Case Studies",
          subtitle: "Explore how we have helped clients across various industries achieve their digital goals.",
          badge: "Our Work"
        },
        news: {
          title: "Latest News",
          subtitle: "Insights, trends, and updates from the world of digital innovation and design.",
          badge: "Blog",
          sidebarTitle: "Stay Updated"
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
          contactBtn: "Contact Now",
          quote: "We're scaling fast and looking for digital pioneers to help us outpace the competition.",
          keyResponsibilities: "Key Responsibilities",
          requirements: "Requirements",
          responseNote: "Response within 48 hours",
          happinessScore: "Happiness Score",
          hiringNow: "Hiring Now",
          location: "Location",
          workingHours: "Working Hours",
          type: "Type"
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
          subtitle: "Innovative digital solutions designed to help you grow, optimize, and succeed in a competitive landscape.",
          overview: "Service Overview",
          keyBenefits: "Key Benefits",
          deliverables: "Deliverables",
          terms: "Terms of Service",
          contactSales: "Or contact sales team"
        }

      },
      help: {
        title: "Help & Support",
        subtitle: "How can we help you today? Reach out to our experts or access your client resources.",
        bookConsultation: "Book a Consultation",
        scheduleNow: "Schedule Now",
        clientDashboard: "Client Dashboard",
        clientLogin: "Client Login",
        instantAssistance: "Instant Assistance",
        supportExcellence: "Support Excellence & SLAs",
        standardHours: "Standard Support Hours",
        standardHoursDesc: "Monday to Friday: 9:00 AM - 6:00 PM (GMT+8). Closed on weekends and public holidays.",
        sla: "Service Level Agreements (SLA)",
        slaDesc: "Enterprise clients enjoy dedicated response times based on their contract (8x5, 8x6, or 24x7 critical coverage).",
        contractTiers: "Contract Tiers",
        whatsAppChat: "Start WhatsApp Chat"
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

      data: {
        // Dynamic data keys populated in useTranslatedData via constants
      }
    }
  },
  ms: {
    translation: {
      common: {
        learnMore: "Ketahui Lebih Lanjut",
        viewAll: "Lihat Semua",
        getStarted: "Mula Sekarang",
        readMore: "Baca Lebih Lanjut",
        applyNow: "Mohon Sekarang",
        home: "Laman Utama",
        selectLanguage: "Pilih Bahasa",
        popular: "POPULAR",
        submit: "Hantar Permintaan"
      },
      meta: {
        description: "JXING Tech adalah agensi digital terkemuka di Malaysia yang mengkhusus dalam pembangunan web, e-dagang, automasi AI, dan pemasaran prestasi."
      },

      nav: {
        company: 'Syarikat',
        services: 'Perkhidmatan',
        pricing: 'Pelan Harga',
        caseStudies: 'Kajian Kes',
        news: 'Berita',
        contact: 'Hubungi',
        getInTouch: 'Hubungi Kami'
      },
      breadcrumbs: {
        company: "Syarikat",
        services: "Perkhidmatan",
        pricing: "Harga",
        "case-studies": "Kajian Kes",
        news: "Berita",
        contact: "Hubungi",
        career: "Kerjaya",
        help: "Bantuan & Sokongan",
        "privacy-policy": "Dasar Privasi",
        "terms-of-service": "Terma Perkhidmatan"
      },
      hero: {
        title_static: 'Tandingi Pesaing Anda.',
        title_prefix: 'Dibina untuk',
        title_suffix: '',
        satisfied_customers: 'pelanggan berpuas hati',

        dynamic: [
          {
            word: "Dominasi",
            badges: [
              "Ranking #1 di Carian Google",
              "Kuasai Pasaran Niche Anda",
              "Bina Autoriti Jenama Yang Kukuh"
            ]
          },
          {
            word: "Prestasi",
            badges: [
              "Kelajuan Muat Halaman Sub-Saat",
              "Pengalaman Mudah Alih Lancar",
              "Keselamatan Siber Gred Enterprise"
            ]
          },
          {
            word: "Hasil",
            badges: [
              "Corong Jualan Berkonversi Tinggi",
              "Penjanaan Lead Automatik",
              "Maksimumkan ROI Iklan"
            ]
          }
        ]
      },
      home: {
        globalPresence: {
          title: "Kehadiran Pelanggan Global",
          clients: {
            c1: "Infrastruktur pembayaran bersepadu untuk skala global.",
            c2: "Pembangunan platform Perbankan-sebagai-Perkhidmatan.",
            c3: "Papan pemuka visualisasi data tenaga boleh diperbaharui.",
            c4: "Sistem automasi logistik bandar pintar.",
            c5: "Penyelesaian e-dagang rentas sempadan.",
            c6: "Alat pengauditan keselamatan siber perusahaan."
          }
        },
        about: {
          badge: "Siapa kami",
          title: "Rakan kongsi kejayaan digital anda",
          desc: "Kami adalah pasukan berdedikasi yang fokus membantu perniagaan berkembang melalui penyelesaian digital yang praktikal dan boleh diukur. Kekuatan kami adalah dalam membina laman web berprestasi tinggi, memacu trafik melalui pemasaran digital dan SEO, serta meningkatkan operasi dengan automasi aliran kerja dan alat AI. Setiap penyelesaian yang kami sampaikan direka untuk membantu anda menjimatkan masa, menjangkau lebih ramai pelanggan, dan berkembang dengan yakin.",
          aeoTitle: "Bagaimanakah JXING Tech memacu pertumbuhan digital anda?",
          aeoDesc: "Kami menggabungkan pembangunan laman web berprestasi tinggi dengan automasi aliran kerja yang dipacu AI dan penyelesaian pemasaran strategik untuk menghapuskan kekangan perniagaan. Fokus kami adalah pada penyampaian pengalaman digital yang boleh diskala yang memaksimumkan ROI dan memacu dominasi jangka panjang dalam industri anda.",

          cards: {
            web: {
              title: "Penyelesaian Laman Web dan E-Dagang",
              subtitle: "Laman web profesional yang dibina untuk menukar.",
              desc: "Lancarkan laman web perniagaan atau kedai dalam talian berprestasi tinggi yang direka untuk membina kepercayaan, menangkap lead, dan menyokong pertumbuhan anda. Semuanya diuruskan sepenuhnya di bawah satu langganan."
            },
            marketing: {
              title: "Pemasaran dan Pertumbuhan SEO",
              subtitle: "Ditemui. Dapatkan lead. Berkembang secara konsisten.",
              desc: "Dari kandungan dan media sosial hingga SEO dan iklan prestasi, kami membantu anda menjangkau audiens yang tepat dan menukar keterlihatan kepada hasil perniagaan yang boleh diukur."
            },
            automation: {
              title: "Automasi Aliran Kerja dan AI",
              subtitle: "Jimatkan masa dengan sistem yang lebih pintar.",
              desc: "Automasikan kerja berulang, sambungkan alat anda, dan lancarkan operasi dengan aliran kerja tersuai dan penyelesaian dikuasakan AI."
            }
          },
          cta: {
            badge: "Perlukan bantuan",
            title: "Nasihat percuma. Tempah panggilan balik",
            btn: "Jom Bincang"
          }
        },
        certifications: {
          title: "Disahkan & Dipaparkan Oleh"
        },
        portfolio: {
          badge: "Karya terpilih",
          title: "Projek siap kami",
          desc: "Baca bagaimana kami telah membantu beberapa jenama terbesar mengubah perniagaan mereka.",
          viewAll: "Lihat Semua Karya"
        },
        team: {
          badge: "Pasukan pakar kami",
          title: "Kenali pasukan kepimpinan",
          desc: "Kami semua bersemangat dan komited untuk memberikan perkhidmatan berkualiti tinggi kepada pelanggan kami."
        },
        stats: {
          badge: "Kenapa pilih kami",
          title: "Hasil yang berjaya kami sampaikan",
          projects: "projek dihantar",
          retention: "pengekalan pelanggan",
          hours: "jam dijimatkan",
          stat1Desc: "Kerja kami telah membantu pelanggan meningkatkan aliran lead dan mencapai pertumbuhan dalam talian yang boleh diukur merentasi pelbagai industri.",
          stat2Desc: "Kadar pengekalan yang kukuh dibina atas penambahbaikan bulanan yang konsisten dan pelaporan yang jelas serta telus.",
          stat3Desc: "Sistem automasi dan aliran kerja telah membantu pelanggan menjimatkan masa operasi yang ketara dan mengurangkan kerja manual.",
          circleText: "Pembangunan Perniagaan Penyelesaian IT"
        },
        testimonials: {
          largeText: "testimoni",
          badge: "Dengar dari pelanggan"
        },
        blog: {
          badge: "Hantaran terkini",
          title: "Berita terkini dan wawasan industri",
          featuredDesc: "Kami membawa kepakaran fungsional yang mendalam, tetapi dikenali dengan perspektif holistik kami: kami menangkap nilai merentasi sempadan."
        },
        faq: {
          badge: "Soalan Lazim",
          title: "Soalan Yang Kerap Ditanya",
          desc: "Tidak jumpa jawapan yang anda cari? Hubungi pasukan sokongan pelanggan kami."
        }
      },
      contact: {
        title: "Hubungi Kami",
        subtitle: "Ada idea projek? Kami ingin mendengar daripada anda.",
        badge: "Hubungi Kami",
        visitUs: "Lawati Kami",
        emailUs: "Emel Kami",
        callUs: "Hubungi Kami",
        whatsapp: "WhatsApp",
        startConversation: "Mulakan perbualan",
        quickChat: "Sembang pantas di WhatsApp",
        sendMessage: "Hantar mesej kepada kami",
        formDesc: "Isi borang di bawah dan kami akan kembali kepada anda dalam masa 24 jam.",
        name: "Nama",
        namePlaceholder: "Ali bin Abu",
        email: "Emel",
        emailPlaceholder: "ali@example.com",
        phone: "Telefon",
        phonePlaceholder: "+60 10-288 2827",
        subject: "Subjek",
        subjectPlaceholder: "Pertanyaan Projek",
        message: "Mesej",
        messagePlaceholder: "Beritahu kami tentang projek anda...",
        btnSend: "Hantar Mesej",
        workingHours: "Waktu Bekerja",
        viewOnMap: "Lihat di Peta",
        map: {
          hq: { name: "Ibu Pejabat Global", role: "Ibu Pejabat", location: "Kuala Lumpur, Malaysia" },
          hub: { name: "Hab Serantau", role: "Operasi", location: "Singapura" },
          tech: { name: "Pusat Teknologi", role: "R&D", location: "San Francisco, USA" }
        }
      },
      company: {
        title: "Kami adalah JXING",
        subtitle: "Pasukan pereka pakar, pembangun web dan pemasar yang memberikan kejayaan digital.",
        aboutBadge: "Tentang JXING Tech Group",
        aboutTitle: "Teknologi praktikal, boleh diukur, dan berskala.",
        aboutDesc1: "JXING Tech adalah syarikat penyelesaian digital yang membantu perniagaan berkembang melalui teknologi praktikal, boleh diukur, dan berskala.",
        aboutDesc2: "Kami percaya bahawa pertumbuhan digital haruslah mudah, mampu milik, dan boleh dicapai untuk setiap perniagaan.",
        brochureTitle: "Muat turun brosur syarikat",
        brochureTagline: "• Baru bermula?",
        brochureBtn: "Dapatkan Salinan",
        vision: "Visi Kami",
        visionDesc: "Untuk menjadi rakan kongsi pertumbuhan digital yang paling dipercayai dan inovatif untuk perniagaan di seluruh Asia Tenggara dan seterusnya.",
        mission: "Misi Kami",
        missionDesc: "Untuk membantu perniagaan mempercepatkan kejayaan digital mereka melalui penyelesaian web berskala, inovasi e-dagang, automasi dikuasakan AI, dan pemasaran berpandukan data.",
        valuesTitle: "Nilai Teras Kami",
        valuesBadge: "Budaya Kami",
        ctaTitle: "Kami komited untuk memberikan hanya yang terbaik"
      },
      services: {
        badge: "Perkhidmatan kami",
        title: "Perkhidmatan digital untuk mengembangkan perniagaan anda",
        viewAll: "Lihat Semua Perkhidmatan",
        aeoTitle: "Buka Pertumbuhan Anda dengan Penyelesaian Digital Teras Kami",

        innovativeTitle: "Perkhidmatan penyelesaian digital inovatif",
        whyChooseBadge: "Kenapa pilih kami",
        whyChooseTitle: "Pengalaman pengguna yang dibayangkan semula",
        whyChooseBg: "kenapa pilih kami",
        whyChooseList: [
          { title: "Penyelesaian Tersuai", desc: "Membina hubungan media yang kukuh untuk meningkatkan keterlihatan dan kredibiliti jenama anda melalui strategi yang disesuaikan." },
          { title: "Pendekatan Berpandukan Data", desc: "Kami menggunakan analisis canggih untuk memandu setiap keputusan, memastikan pertumbuhan anda boleh diukur dan mampan." },
          { title: "Sokongan Pakar", desc: "Pasukan veteran industri kami menyediakan sokongan 24/7 untuk memastikan operasi digital anda tidak pernah terlepas." }
        ]
      },
      footer: {
        tellUs: 'Beritahu kami tentang projek anda',
        letsTalk: "Jom bincang",
        writeToUs: 'Tulis kepada kami',
        insightTitle: 'Dapatkan inspirasi & wawasan terkini',
        emailPlaceholder: 'Emel Anda...',
        serviceLinks: {
          webEcom: "Laman Web & E-Dagang",
          marketing: "Pemasaran & Pertumbuhan",
          automation: "Automasi Aliran Kerja",
          seo: "Integrasi SEO & AI"
        },

        works: 'Karya',
        expertise: 'Kepakaran',
        about: 'Tentang',
        team: 'Pasukan',
        awards: 'Anugerah',
        company: "Syarikat",
        blog: 'Blog',
        careers: 'Kerjaya',
        partnerships: 'Kerjasama',
        contact: 'Hubungi',
        headOffice: 'Ibu pejabat',
        copyright: '© 2024 JXING Tech Group Sdn. Bhd. Hak cipta terpelihara. Dikuasakan dengan ❤️ dari JXING Tech',
        privacy: 'Dasar Privasi',
        terms: 'Terma Perkhidmatan',
        followUs: 'Ikuti Kami'
      },
      pages: {
        serviceDetail: {
          badge: "Butiran Perkhidmatan",
          overviewBadge: "Gambaran Keseluruhan",
          aboutTitle: "Tentang Perkhidmatan ini",
          whyChooseBadge: "Kenapa Pilih Ini",
          benefitsTitle: "Manfaat Utama",
          whatYouGetBadge: "Apa Yang Anda Dapat",
          deliverablesTitle: "Hasil Serahan Perkhidmatan",
          deliverablesFallback: "Hasil serahan khusus yang disesuaikan dengan keperluan anda.",
          benefitsFallback: "Butiran akan datang...",
          viewAll: "Lihat Semua Perkhidmatan",
          overview: "Gambaran Keseluruhan",
          specificOfferings: "Tawaran Khusus",
          selectPackage: "Pilih pakej khusus untuk melihat butiran dan harga."
        },

        caseStudies: {
          title: "Kajian Kes",
          subtitle: "Terokai bagaimana kami telah membantu pelanggan merentasi pelbagai industri mencapai matlamat digital mereka.",
          badge: "Kerja Kami"
        },
        news: {
          title: "Berita Terkini",
          subtitle: "Wawasan, trend, dan kemas kini dari dunia inovasi digital dan reka bentuk.",
          badge: "Blog"
        },
        career: {
          title: "Kerjaya",
          subtitle: "Dengan menyertai pasukan kami, anda akan berpeluang bekerja pada projek canggih, memanfaatkan teknologi terkini, dan membuat impak sebenar.",
          badge: "Laman Utama • Kerjaya",
          applyBadge: "Mohon sekarang",
          openingsTitle: "Kekosongan semasa",
          learnMore: "Ketahui Lebih Lanjut",
          oppsBadge: "Peluang bersama kami",
          joinTitle: "Sertai pasukan inovatif kami",
          joinDesc: "Jika anda tidak dapat mencari kekosongan yang sesuai, jangan risau. Kami sentiasa bersedia untuk menemui bakat baru, sila emelkan resume dan pautan portfolio anda ke",
          contactBtn: "Hubungi Sekarang"
        },
        pricing: {
          heroTitle: "Bina Pelan Pertumbuhan Digital Anda",
          heroSubtitle: "Pilih perkhidmatan, sesuaikan ciri, dan minta sebut harga tersuai.",
          badge: "Harga & Pelan",
          addToPlan: "Tambah ke Pelan",
          added: "Ditambah",
          removeFromQuote: "Buang",
          yourPlan: "Pelan Pertumbuhan Anda",
          requestQuote: "Minta Sebut Harga & Rundingan",
          customNotesPlaceholder: "Tambah nota khusus (cth: bilangan halaman)...",
          estInvestment: "Anggaran Pelaburan",
          emptyQuote: "Pilih perkhidmatan dari senarai untuk membina pelan tersuai anda.",
          viewDetails: "Lihat Butiran",
          modalTitle: "Muktamadkan Permintaan Anda",
          modalDesc: "Semak perkhidmatan pilihan anda dan berikan butiran hubungan anda. Kami akan membincangkan butiran khusus semasa rundingan.",
          nameLabel: "Nama Penuh",
          emailLabel: "Emel Kerja",
          phoneLabel: "Nombor Telefon",
          notesLabel: "Konteks Projek Tambahan",
          submitting: "Sedang menghantar...",
          successTitle: "Permintaan Diterima!",
          successDesc: "Mengalihkan anda ke kalendar tempahan kami...",
          upfrontTotal: "Pendahuluan / One-time",
          monthlyTotal: "Berulang Bulanan"
        },
        notFound: {
          title: "Aduh! Halaman tidak dijumpai",
          desc: "Halaman yang anda cari mungkin telah dibuang, nama ditukar, atau sementara tidak tersedia.",
          backHome: "Kembali ke Laman Utama"
        },
        servicesPage: {
          subtitle: "Penyelesaian digital inovatif yang direka untuk membantu anda berkembang, mengoptimumkan, dan berjaya dalam landskap yang kompetitif.",
          overview: "Gambaran Keseluruhan Perkhidmatan",
          keyBenefits: "Faedah Utama",
          deliverables: "Hasil Kerja",
          terms: "Syarat Perkhidmatan",
          contactSales: "Atau hubungi pasukan jualan"
        }
      },
      help: {

        title: "Bantuan & Sokongan",
        subtitle: "Bagaimana kami boleh membantu anda hari ini? Hubungi pakar kami atau akses sumber pelanggan anda.",
        bookConsultation: "Tempah Konsultasi",
        scheduleNow: "Jadualkan Sekarang",
        clientDashboard: "Papan Pemuka Pelanggan",
        clientLogin: "Log Masuk Pelanggan",
        instantAssistance: "Bantuan Segera",
        supportExcellence: "Kecemerlangan Sokongan & SLA",
        standardHours: "Waktu Sokongan Standard",
        standardHoursDesc: "Isnin hingga Jumaat: 9:00 AM - 6:00 PM (GMT+8). Tutup pada hujung minggu dan cuti umum.",
        sla: "Perjanjian Tahap Perkhidmatan (SLA)",
        slaDesc: "Pelanggan perusahaan menikmati masa maklum balas khusus berdasarkan kontrak mereka (8x5, 8x6, atau liputan kritikal 24x7).",
        contractTiers: "Tahap Kontrak",
        whatsAppChat: "Mula Sembang WhatsApp"
      },

      legal: {

        privacy: {
          title: "Dasar Privasi",
          subtitle: "Kami komited untuk melindungi maklumat peribadi anda dan hak privasi anda.",
          intro: "Kemas kini terakhir: 01 Januari 2024"
        },
        terms: {
          title: "Terma Perkhidmatan",
          subtitle: "Sila baca terma dan syarat ini dengan teliti sebelum menggunakan perkhidmatan kami.",
          intro: "Kemas kini terakhir: 01 Januari 2024"
        }
      },

      data: {
        services: {
          "website-solutions": {
            title: "Penyelesaian Laman Web",
            description: "Laman web berprestasi tinggi yang direka untuk membina kepercayaan, menangkap lead, dan berskala dengan perniagaan anda."
          },
          "automation-workflow": {
            title: "Automasi & Aliran Kerja",
            description: "Hapuskan kerja manual dan tingkatkan kecekapan dengan automasi perniagaan dipacu AI."
          },
          "growth-seo": {
            title: "SEO Dipacu Pertumbuhan",
            description: "Kuasai keputusan carian dan pacu trafik organik mampan dengan strategi SEO berasaskan data."
          },
          "performance-ads": {
            title: "Pengurusan Iklan Prestasi",
            description: "Tukarkan perbelanjaan iklan kepada hasil dengan kempen berasaskan data di Google, Meta, dan TikTok."
          },
          "social-media": {
            title: "Pengurusan Media Sosial",
            description: "Bina komuniti yang setia dan kekalkan kehadiran profesional yang aktif di semua platform sosial utama."
          },
          "professional-services": {
            title: "Perkhidmatan Profesional",
            description: "Konsultasi pakar, audit, dan penyelenggaraan untuk membantu memastikan operasi digital anda berjalan pada prestasi puncak."
          }
        },
        companyStats: {
          "0": { label: "tahun pengalaman bekerja" },
          "1": { label: "staf berkelayakan" },
          "2": { label: "projek disiapkan" }
        }
      }

    }
  },
  hi: {
    translation: {
      common: {
        learnMore: "और जानें",
        viewAll: "सभी देखें",
        getStarted: "शुरू करें",
        readMore: "अधिक पढ़ें",
        applyNow: "अभी आवेदन करें",
        home: "होम",
        selectLanguage: "भाषा चुनें",
        popular: "लोकप्रिय",
        submit: "अनुरोध सबमिट करें"
      },
      meta: {
        description: "JXING Tech मलेशिया में एक अग्रणी डिजिटल एजेंसी है जो वेब विकास, ई-कॉमर्स, AI ऑटोमेशन और प्रदर्शन विपणन में विशेषज्ञता रखती है।"
      },

      nav: {
        company: 'कंपनी',
        services: 'सेवाएं',
        pricing: 'मूल्य निर्धारण योजनाएं',
        caseStudies: 'केस स्टडीज',
        news: 'समाचार',
        contact: 'संपर्क करें',
        getInTouch: 'संपर्क में रहें'
      },
      breadcrumbs: {
        company: "कंपनी",
        services: "सेवाएं",
        pricing: "मूल्य निर्धारण",
        "case-studies": "केस स्टडीज",
        news: "समाचार",
        contact: "संपर्क",
        career: "करियर",
        "privacy-policy": "गोपनीयता नीति",
        "terms-of-service": "सेवा की शर्तें"
      },
      hero: {
        title_static: 'अपने प्रतिस्पर्धियों से आगे निकलें।',
        title_prefix: 'डिजिटल',
        title_suffix: 'के लिए निर्मित',

        satisfied_customers: 'संतुष्ट ग्राहक',
        dynamic: [
          {
            word: "प्रभुत्व",
            badges: [
              "Google खोज पर #1 रैंक",
              "अपने बाजार क्षेत्र का स्वामित्व",
              "अटूट ब्रांड अधिकार बनाएं"
            ]
          },
          {
            word: "प्रदर्शन",
            badges: [
              "उप-सेकंड पृष्ठ लोड गति",
              "सहज मोबाइल अनुभव",
              "उद्यम-ग्रेड साइबर सुरक्षा"
            ]
          },
          {
            word: "राजस्व",
            badges: [
              "उच्च-परिवर्तन बिक्री फ़नल",
              "स्वचालित लीड जनरेशन",
              "विज्ञापन खर्च ROI को अधिकतम करें"
            ]
          }
        ]
      },
      home: {
        globalPresence: {
          title: "वैश्विक ग्राहक उपस्थिति",
          clients: {
            c1: "वैश्विक स्केलिंग के लिए एकीकृत भुगतान बुनियादी ढांचा।",
            c2: "बैंकिंग-एज़-ए-सर्विस प्लेटफ़ॉर्म विकास।",
            c3: "अक्षय ऊर्जा डेटा विज़ुअलाइज़ेशन डैशबोर्ड।",
            c4: "स्मार्ट सिटी लॉजिस्टिक्स स्वचालन प्रणाली।",
            c5: "सीमा पार ई-कॉमर्स समाधान।",
            c6: "उद्यम साइबर सुरक्षा ऑडिटिंग उपकरण।"
          }
        },
        about: {
          badge: "हम कौन हैं",
          title: "डिजिटल सफलता के लिए आपके भागीदार",
          desc: "हम एक समर्पित टीम हैं जो व्यावहारिक और मापने योग्य डिजिटल समाधानों के माध्यम से व्यवसायों को बढ़ने में मदद करने पर केंद्रित है। हमारी ताकत उच्च प्रदर्शन वाली वेबसाइट बनाने, डिजिटल मार्केटिंग और एसईओ के माध्यम से ट्रैफ़िक चलाने, और वर्कफ़्लो स्वचालन और एआई टूल के साथ संचालन में सुधार करने में है। हमारे द्वारा दिया जाने वाला हर समाधान आपको समय बचाने, अधिक ग्राहकों तक पहुंचने और विश्वास के साथ बढ़ने में मदद करने के लिए डिज़ाइन किया गया है।",
          aeoTitle: "JXING Tech आपकी डिजिटल वृद्धि को कैसे गति देता है?",
          aeoDesc: "हम व्यावसायिक बाधाओं को दूर करने के लिए AI-संचालित वर्कफ़्लो ऑटोमेशन और रणनीतिक मार्केटिंग समाधानों के साथ उच्च-प्रदर्शन वेबसाइट विकास को जोड़ते हैं। हमारा ध्यान स्केलेबल डिजिटल अनुभव प्रदान करने पर है जो ROI को अधिकतम करते हैं और आपके उद्योग में दीर्घकालिक प्रभुत्व को बढ़ावा देते हैं।",

          cards: {
            web: {
              title: "वेबसाइट और ई-कॉमर्स समाधान",
              subtitle: "कन्वर्ट करने के लिए बनाई गई पेशेवर वेबसाइटें।",
              desc: "विश्वास बनाने, लीड हासिल करने और आपके विकास का समर्थन करने के लिए डिज़ाइन की गई उच्च प्रदर्शन वाली व्यावसायिक वेबसाइट या ऑनलाइन स्टोर लॉन्च करें। सब कुछ एक सदस्यता के तहत पूरी तरह से प्रबंधित है।"
            },
            marketing: {
              title: "मार्केटिंग और एसईओ विकास",
              subtitle: "खोजे जाएं। लीड प्राप्त करें। लगातार बढ़ें।",
              desc: "सामग्री और सोशल मीडिया से लेकर एसईओ और प्रदर्शन विज्ञापनों तक, हम आपको सही दर्शकों तक पहुंचने और दृश्यता को मापने योग्य व्यावसायिक परिणामों में बदलने में मदद करते हैं।"
            },
            automation: {
              title: "वर्कफ़्लो और एआई स्वचालन",
              subtitle: "स्मार्ट सिस्टम के साथ समय बचाएं।",
              desc: "कस्टम वर्कफ़्लो और एआई संचालित समाधानों के साथ दोहराव वाले काम को स्वचालित करें, अपने टूल कनेक्ट करें, और संचालन को सुव्यवस्थित करें।"
            }
          },
          cta: {
            badge: "मदद की ज़रूरत है",
            title: "मुफ्त सलाह। कॉल बैक बुक करें",
            btn: "चलो बात करते हैं"
          }
        },
        certifications: {
          title: "द्वारा प्रमाणित और प्रदर्शित"
        },
        portfolio: {
          badge: "चयनित कार्य",
          title: "हमारी पूरी की गई परियोजनाएं",
          desc: "पढ़ें कि हमने कुछ सबसे बड़े ब्रांडों को उनके व्यवसाय को बदलने में कैसे मदद की है।",
          viewAll: "सभी कार्य देखें"
        },
        team: {
          badge: "हमारी विशेषज्ञ टीम",
          title: "नेतृत्व टीम से मिलें",
          desc: "हम सभी अपने ग्राहकों को उच्च गुणवत्ता वाली सेवाएं देने के लिए भावुक और प्रतिबद्ध हैं।"
        },
        stats: {
          badge: "हमें क्यों चुनें",
          title: "परिणाम जो हम सफलतापूर्वक देते हैं",
          projects: "परियोजनाएं दी गईं",
          retention: "ग्राहक प्रतिधारण",
          hours: "बचाए गए घंटे",
          stat1Desc: "हमारे काम ने ग्राहकों को लीड प्रवाह बढ़ाने और कई उद्योगों में मापने योग्य ऑनलाइन विकास प्राप्त करने में मदद की है।",
          stat2Desc: "लगातार मासिक सुधार और स्पष्ट, पारदर्शी रिपोर्टिंग पर निर्मित एक मजबूत प्रतिधारण दर।",
          stat3Desc: "स्वचालन और वर्कफ़्लो सिस्टम ने ग्राहकों को महत्वपूर्ण परिचालन घंटों को बचाने और मैनुअल काम को कम करने में मदद की है।",
          circleText: "व्यापार विकास समाधान आईटी"
        },
        testimonials: {
          largeText: "प्रशंसापत्र",
          badge: "ग्राहक से सुनें"
        },
        blog: {
          badge: "हालिया पोस्ट",
          title: "नवीनतम समाचार और उद्योग अंतर्दृष्टि",
          featuredDesc: "हम गहरी, कार्यात्मक विशेषज्ञता लाते हैं, लेकिन हमारे समग्र दृष्टिकोण के लिए जाने जाते हैं: हम सीमाओं के पार मूल्य पर कब्जा करते हैं。",
          categories: "श्रेणियां",
          noArticles: "आपके मानदंडों से मेल खाने वाला कोई लेख नहीं मिला।",
          featuredArticles: "विशेष लेख",
          stayUpdated: "अपडेट रहें",
          popularTopics: "लोकप्रिय विषय",
          subscribe: "सब्सक्राइब करें",
          searchPlaceholder: "लेख खोजें...",
          showingCount: "{{count}} लेख दिखाए जा रहे हैं",
          clearFilters: "सभी फ़िल्टर साफ़ करें",
          subscribeDesc: "मासिक डिजिटल विकास युक्तियों और उद्योग अंतर्दृष्टि के लिए हमारे न्यूज़लेटर की सदस्यता लें।",
          unsubscribeNote: "कभी भी अनसब्सक्राइब करें। हम आपकी गोपनीयता का सम्मान करते हैं।"
        },

        faq: {
          badge: "सामान्य प्रश्न",
          title: "अक्सर पूछे जाने वाले प्रश्न",
          desc: "वह उत्तर नहीं मिल रहा है जिसे आप ढूंढ रहे हैं? हमारी ग्राहक सहायता टीम से संपर्क करें।"
        }
      },
      contact: {
        title: "संपर्क में रहें",
        subtitle: "दिमाग में कोई प्रोजेक्ट है? हमें आपसे सुनना अच्छा लगेगा।",
        badge: "संपर्क करें",
        visitUs: "हम से मिलें",
        emailUs: "हमें ईमेल करें",
        callUs: "हमें कॉल करें",
        whatsapp: "व्हाट्सएप",
        startConversation: "बातचीत शुरू करें",
        quickChat: "व्हाट्सएप पर त्वरित चैट",
        sendMessage: "हमें संदेश भेजें",
        formDesc: "नीचे दिया गया फॉर्म भरें और हम 24 घंटे के भीतर आपसे संपर्क करेंगे।",
        name: "नाम",
        namePlaceholder: "जॉन डो",
        email: "ईमेल",
        emailPlaceholder: "john@example.com",
        phone: "फ़ोन",
        phonePlaceholder: "+60 10-288 2827",
        subject: "विषय",
        subjectPlaceholder: "परियोजना पूछताछ",
        message: "संदेश",
        messagePlaceholder: "हमें अपने प्रोजेक्ट के बारे में बताएं...",
        btnSend: "संदेश भेजें",
        workingHours: "काम के घंटे",
        viewOnMap: "मानचित्र पर देखें",
        map: {
          hq: { name: "वैश्विक मुख्यालय", role: "मुख्यालय", location: "कुआलालंपुर, मलेशिया" },
          hub: { name: "क्षेत्रीय हब", role: "संचालन", location: "सिंगापुर" },
          tech: { name: "तकनीकी केंद्र", role: "R&D", location: "सैन फ्रांसिस्को, यूएसए" }
        }
      },
      company: {
        title: "हम JXING हैं",
        subtitle: "डिजिटल सफलता प्रदान करने वाले विशेषज्ञ डिजाइनरों, वेब डेवलपर्स और मार्केटर्स की एक टीम।",
        aboutBadge: "JXING Tech Group के बारे में",
        aboutTitle: "व्यावहारिक, मापने योग्य और स्केलेबल तकनीक।",
        aboutDesc1: "JXING Tech एक डिजिटल समाधान कंपनी है जो व्यावहारिक, मापने योग्य और स्केलेबल तकनीक के माध्यम से व्यवसायों को बढ़ने में मदद करती है।",
        aboutDesc2: "हमारा मानना है कि डिजिटल विकास हर व्यवसाय के लिए सरल, किफायती और प्राप्त करने योग्य होना चाहिए।",
        brochureTitle: "कंपनी ब्रोशर डाउनलोड करें",
        brochureTagline: "• अभी शुरुआत कर रहे हैं?",
        brochureBtn: "एक प्रति प्राप्त करें",
        vision: "हमारी दृष्टि",
        visionDesc: "दक्षिण पूर्व एशिया और उससे आगे के व्यवसायों के लिए सबसे भरोसेमंद और अभिनव डिजिटल विकास भागीदार बनना।",
        mission: "हमारा मिशन",
        missionDesc: "व्यवसायों को स्केलेबल वेब समाधान, ई-कॉमर्स नवाचार, एआई संचालित स्वचालन और डेटा संचालित विपणन के माध्यम से अपनी डिजिटल सफलता में तेजी लाने में मदद करना।",
        valuesTitle: "हमारा मूल मूल्य",
        valuesBadge: "हमारी संस्कृति",
        ctaTitle: "हम केवल सर्वश्रेष्ठ देने के लिए प्रतिबद्ध हैं"
      },
      services: {
        badge: "हमारी सेवाएं",
        title: "आपके व्यवसाय को बढ़ाने के लिए डिजिटल सेवाएं",
        viewAll: "सभी सेवाएं देखें",
        aeoTitle: "हमारे मुख्य डिजिटल समाधानों के साथ अपनी वृद्धि को अनलॉक करें",

        innovativeTitle: "अभिनव डिजिटल समाधान सेवाएं",
        whyChooseBadge: "हमें क्यों चुनें",
        whyChooseTitle: "पुनर्कल्पित उपयोगकर्ता अनुभव",
        whyChooseBg: "हमें क्यों चुनें",
        whyChooseList: [
          { title: "अनुकूलित समाधान", desc: "अनुरूप रणनीतियों के माध्यम से अपने ब्रांड की दृश्यता और विश्वसनीयता को बढ़ाने के लिए मजबूत मीडिया कनेक्शन बनाना।" },
          { title: "डेटा-संचालित दृष्टिकोण", desc: "हम हर निर्णय का मार्गदर्शन करने के लिए उन्नत एनालिटिक्स का उपयोग करते हैं, यह सुनिश्चित करते हुए कि आपका विकास मापने योग्य और टिकाऊ है।" },
          { title: "विशेषज्ञ समर्थन", desc: "हमारी उद्योग के दिग्गजों की टीम यह सुनिश्चित करने के लिए 24/7 सहायता प्रदान करती है कि आपके डिजिटल संचालन कभी भी न चूकें।" }
        ]
      },
      footer: {
        tellUs: 'हमें अपने प्रोजेक्ट के बारे में बताएं',
        letsTalk: "चलो बात करते हैं",
        writeToUs: 'हमें लिखें',
        insightTitle: 'नवीनतम प्रेरणा और अंतर्दृष्टि प्राप्त करें',
        emailPlaceholder: 'आपका ईमेल...',
        serviceLinks: {
          webEcom: "वेबसाइट और ई-कॉमर्स",
          marketing: "मार्केटिंग और ग्रोथ",
          automation: "वर्कफ़्लो ऑटोमेशन",
          seo: "SEO और AI एकीकरण"
        },

        works: 'कार्य',
        expertise: 'विशेषज्ञता',
        about: 'के बारे में',
        team: 'टीम',
        awards: 'पुरस्कार',
        blog: 'ब्लॉग',
        careers: 'करियर',
        partnerships: 'साझेदारी',
        contact: 'संपर्क',
        headOffice: 'प्रधान कार्यालय',
        copyright: '© 2024 JXING Tech Group Sdn. Bhd. सर्वाधिकार सुरक्षित। JXING Tech से ❤️ के साथ संचालित',
        privacy: 'गोपनीयता नीति',
        terms: 'सेवा की शर्तें',
        workingHours: "काम के घंटे",
        hoursLong: "सोमवार - शुक्रवार",
        hoursShort: "9:00 AM - 6:00 PM",
        saturday: "शनिवार",
        sunday: "रविवार",
        closed: "बंद",
        monFriHours: "सोम-शुक्र 9am-6pm",
        viewOnMap: "मानचित्र पर देखें",
        followUs: 'हमारा अनुसरण करें'

      },
      pages: {
        serviceDetail: {
          badge: "सेवा विवरण",
          overviewBadge: "अवलोकन",
          aboutTitle: "इस सेवा के बारे में",
          whyChooseBadge: "इसे क्यों चुनें",
          benefitsTitle: "मुख्य लाभ",
          whatYouGetBadge: "आपको क्या मिलता है",
          deliverablesTitle: "सेवा वितरण",
          deliverablesFallback: "आपकी आवश्यकताओं के अनुरूप विशिष्ट वितरण।",
          benefitsFallback: "विवरण जल्द ही आ रहा है...",
          viewAll: "सभी सेवाएं देखें",
          overview: "अवलोकन",
          specificOfferings: "विशिष्ट पेशकश",
          selectPackage: "विवरण और मूल्य निर्धारण देखने के लिए एक विशिष्ट पैकेज चुनें।"
        },

        caseStudies: {
          title: "केस स्टडीज",
          subtitle: "जानें कि हमने विभिन्न उद्योगों के ग्राहकों को उनके डिजिटल लक्ष्यों को प्राप्त करने में कैसे मदद की है।",
          badge: "हमारा काम"
        },
        news: {
          title: "नवीनतम समाचार",
          subtitle: "डिजिटल नवाचार और डिजाइन की दुनिया से अंतर्दृष्टि, रुझान और अपडेट।",
          badge: "ब्लॉग",
          sidebarTitle: "अपडेट रहें"
        },

        career: {
          title: "करियर",
          subtitle: "हमारी टीम में शामिल होकर, आपको अत्याधुनिक परियोजनाओं पर काम करने, नवीनतम तकनीकों का लाभ उठाने और वास्तविक प्रभाव डालने का अवसर मिलेगा।",
          badge: "होम • करियर",
          applyBadge: "अभी आवेदन करें",
          openingsTitle: "वर्तमान उद्घाटन",
          learnMore: "और जानें",
          oppsBadge: "हमारे साथ अवसर",
          joinDesc: "यदि आपको कोई उपयुक्त रिक्ति नहीं मिल रही है तो कृपया चिंता न करें। हम हमेशा नई प्रतिभाओं को खोजने के लिए तैयार हैं, कृपया अपना बायोडाटा और पोर्टफोलियो लिंक हमें मेल करें",
          contactBtn: "अभी संपर्क करें",
          quote: "हम तेजी से बढ़ रहे हैं और अपनी प्रतिस्पर्धा से आगे निकलने में हमारी मदद करने के लिए डिजिटल अग्रदूतों की तलाश कर रहे हैं।",
          keyResponsibilities: "मुख्य जिम्मेदारियां",
          requirements: "आवश्यकताएं",
          responseNote: "48 घंटों के भीतर प्रतिक्रिया",
          happinessScore: "खुशी स्कोर",
          hiringNow: "अभी भर्ती",
          location: "स्थान",
          workingHours: "काम के घंटे",
          type: "प्रकार"
        },

        pricing: {
          heroTitle: "अपनी डिजिटल विकास योजना बनाएं",
          heroSubtitle: "सेवाएं चुनें, सुविधाओं को अनुकूलित करें, और एक सिलवाया गया उद्धरण का अनुरोध करें।",
          badge: "मूल्य निर्धारण और योजनाएं",
          addToPlan: "योजना में जोड़ें",
          added: "जोड़ा गया",
          removeFromQuote: "निकालें",
          yourPlan: "आपकी विकास योजना",
          requestQuote: "उद्धरण और परामर्श का अनुरोध करें",
          customNotesPlaceholder: "विशिष्ट नोट्स जोड़ें (जैसे पृष्ठों की संख्या)...",
          estInvestment: "अनुमानित निवेश",
          emptyQuote: "अपनी कस्टम योजना बनाने के लिए सूची से सेवाओं का चयन करें।",
          viewDetails: "विवरण देखें",
          modalTitle: "अपने अनुरोध को अंतिम रूप दें",
          modalDesc: "अपनी चयनित सेवाओं की समीक्षा करें और अपना संपर्क विवरण प्रदान करें। हम अपने परामर्श के दौरान बारीकियों पर चर्चा करेंगे।",
          nameLabel: "पूरा नाम",
          emailLabel: "कार्य ईमेल",
          phoneLabel: "फ़ोन नंबर",
          notesLabel: "अतिरिक्त परियोजना संदर्भ",
          submitting: "सबमिट कर रहा है...",
          successTitle: "अनुरोध प्राप्त हुआ!",
          successDesc: "आपको हमारे बुकिंग कैलेंडर पर पुनर्निर्देशित किया जा रहा है...",
          upfrontTotal: "अग्रिम / एक बार",
          monthlyTotal: "मासिक आवर्ती"
        },
        notFound: {
          desc: "जिस पृष्ठ को आप खोज रहे हैं वह हटा दिया गया हो सकता है, उसका नाम बदल दिया गया हो, या अस्थायी रूप से अनुपलब्ध हो।",
          backHome: "होम पर वापस"
        },
        servicesPage: {
          subtitle: "अभिनव डिजिटल समाधान आपको बढ़ने, अनुकूलित करने और प्रतिस्पर्धी परिदृश्य में सफल होने में मदद करने के लिए डिज़ाइन किए गए हैं।",
          overview: "सेवा अवलोकन",
          keyBenefits: "मुख्य लाभ",
          deliverables: "वितरण योग्य",
          terms: "सेवा की शर्तें",
          contactSales: "या बिक्री टीम से संपर्क करें"
        },
        help: {
          title: "सहायता और समर्थन",
          subtitle: "आज हम आपकी कैसे मदद कर सकते हैं? हमारे विशेषज्ञों से संपर्क करें या अपने ग्राहक संसाधनों तक पहुँचें।",
          bookConsultation: "परामर्श बुक करें",
          scheduleNow: "अभी शेड्यूल करें",
          clientDashboard: "क्लाइंट डैशबोर्ड",
          clientLogin: "क्लाइंट लॉगिन",
          instantAssistance: "तत्काल सहायता",
          supportExcellence: "समर्थन उत्कृष्टता और SLA",
          standardHours: "मानक समर्थन घंटे",
          standardHoursDesc: "सोमवार से शुक्रवार: 09:00 AM - 06:00 PM (GMT+8)। सप्ताहांत और सार्वजनिक छुट्टियों पर बंद।",
          sla: "सेवा स्तर समझौते (SLA)",
          slaDesc: "एंटरप्राइज ग्राहकों को उनके अनुबंध (8x5, 8x6, या 24x7 महत्वपूर्ण कवरेज) के आधार पर समर्पित प्रतिक्रिया समय मिलता है।",
          contractTiers: "अनुबंध स्तर",
          whatsAppChat: "व्हाट्सएप चैट शुरू करें"
        }
      },

      legal: {
        privacy: {
          title: "गोपनीयता नीति",
          subtitle: "हम आपकी व्यक्तिगत जानकारी और आपके गोपनीयता के अधिकार की रक्षा के लिए प्रतिबद्ध हैं।",
          intro: "अंतिम अद्यतन: 01 जनवरी 2024"
        },
        terms: {
          title: "सेवा की शर्तें",
          subtitle: "हमारी सेवा का उपयोग करने से पहले कृपया इन नियमों और शर्तों को ध्यान से पढ़ें।",
          intro: "अंतिम अद्यतन: 01 जनवरी 2024"
        }
      },

      data: {
        services: {
          "website-solutions": {
            title: "वेबसाइट समाधान",
            description: "विश्वास बनाने, लीड हासिल करने और आपके व्यवसाय के साथ विस्तार करने के लिए डिज़ाइन की गई उच्च-प्रदर्शन वेबसाइटें।"
          },
          "automation-workflow": {
            title: "स्वचालन और कार्यप्रवाह",
            description: "मैन्युअल कार्य को समाप्त करें और AI-संचालित व्यावसायिक स्वचालन के साथ दक्षता बढ़ाएं।"
          },
          "growth-seo": {
            title: "विकास-संचालित एसईओ",
            description: "खोज परिणामों पर हावी हों और डेटा-आधारित एसईओ रणनीतियों के साथ स्थायी जैविक ट्रैफ़िक चलाएं।"
          },
          "performance-ads": {
            title: "प्रदर्शन विज्ञापन प्रबंधन",
            description: "Google, Meta और TikTok पर डेटा-संचालन अभियानों के साथ विज्ञापन खर्च को राजस्व में बदलें।"
          },
          "social-media": {
            title: "सोशल मीडिया प्रबंधन",
            description: "एक वफादार समुदाय बनाएं और सभी प्रमुख सोशल प्लेटफॉर्म पर एक सक्रिय, पेशेवर उपस्थिति बनाए रखें।"
          },
          "professional-services": {
            title: "पेशेवर सेवाएं",
            description: "विशेषज्ञ परामर्श, ऑडिट और रखरखाव आपके डिजिटल संचालन को चरम प्रदर्शन पर चलाने के लिए।"
          }
        },
        companyStats: {
          "0": { label: "वर्षों का कार्य अनुभव" },
          "1": { label: "योग्य कर्मचारी" },
          "2": { label: "पूरी की गई परियोजनाएं" }
        }
      }

    }
  },
  es: {
    translation: {
      common: {
        learnMore: "Aprenda más",
        viewAll: "Ver todo",
        getStarted: "Empezar",
        readMore: "Leer más",
        applyNow: "Aplica ya",
        home: "Inicio",
        selectLanguage: "Seleccionar idioma",
        popular: "POPULAR",
        submit: "Enviar solicitud"
      },
      meta: {
        description: "JXING Tech es una agencia digital líder en Malasia especializada en desarrollo web, comercio electrónico, automatización con IA y marketing de rendimiento."
      },

      nav: {
        company: 'Empresa',
        services: 'Servicios',
        pricing: 'Planes de precios',
        caseStudies: 'Casos de estudio',
        news: 'Noticias',
        contact: 'Contacto',
        getInTouch: 'Ponerse en contacto'
      },
      breadcrumbs: {
        company: "Empresa",
        services: "Servicios",
        pricing: "Precios",
        "case-studies": "Casos de estudio",
        news: "Noticias",
        contact: "Contacto",
        career: "Carrera",
        "privacy-policy": "Política de privacidad",
        "terms-of-service": "Términos de servicio"
      },
      hero: {
        title_static: 'Supere a su competencia.',
        title_prefix: 'Construido para',
        title_suffix: '',
        satisfied_customers: 'clientes satisfechos',

        dynamic: [
          {
            word: "el Dominio",

            badges: [
              "Rango #1 en la búsqueda de Google",
              "Poseer su nicho de mercado",
              "Construir autoridad de marca inquebrantable"
            ]
          },
          {
            word: "el Rendimiento",

            badges: [
              "Velocidades de carga de página de subsegundos",
              "Experiencia móvil perfecta",
              "Ciberseguridad de grado empresarial"
            ]
          },
          {
            word: "los Ingresos",

            badges: [
              "Embudos de ventas de alta conversión",
              "Generación de leads automatizada",
              "Maximizar el ROI de la inversión publicitaria"
            ]
          }
        ]
      },
      home: {
        globalPresence: {
          title: "Presencia global de clientes",
          clients: {
            c1: "Infraestructura de pago integrada para escalar globalmente.",
            c2: "Desarrollo de plataforma de banca como servicio.",
            c3: "Panel de visualización de datos de energía renovable.",
            c4: "Sistemas de automatización logística de ciudades inteligentes.",
            c5: "Solución de comercio electrónico transfronterizo.",
            c6: "Herramientas de auditoría de ciberseguridad empresarial."
          }
        },
        about: {
          badge: "Quienes somos",
          title: "Sus socios para el éxito digital",
          desc: "Somos un equipo dedicado enfocado en ayudar a las empresas a crecer a través de soluciones digitales prácticas y medibles. Nuestras fortalezas están en la construcción de sitios web de alto rendimiento, impulsando el tráfico a través del marketing digital y SEO, y mejorando las operaciones con automatización del flujo de trabajo y herramientas de IA. Cada solución que entregamos está diseñada para ayudarlo a ahorrar tiempo, llegar a más clientes y crecer con confianza.",
          aeoTitle: "¿Cómo acelera JXING Tech su crecimiento digital?",
          aeoDesc: "Combinamos el desarrollo de sitios web de alto rendimiento con la automatización del flujo de trabajo impulsada por IA y soluciones de marketing estratégicas para eliminar los cuellos de botella empresariales. Nos enfocamos en entregar experiencias digitales escalables que maximizan el ROI e impulsan el dominio a largo plazo en su industria.",

          cards: {
            web: {
              title: "Sitios web y soluciones de comercio electrónico",
              subtitle: "Sitios web profesionales creados para convertir.",
              desc: "Lance un sitio web comercial de alto rendimiento o una tienda en línea diseñada para generar confianza, captar clientes potenciales y apoyar su crecimiento. Todo está totalmente gestionado bajo una suscripción."
            },
            marketing: {
              title: "Marketing y crecimiento SEO",
              subtitle: "Sea descubierto. Obtenga clientes potenciales. Crezca constantemente.",
              desc: "Desde contenido y redes sociales hasta SEO y anuncios de rendimiento, lo ayudamos a llegar a la audiencia adecuada y convertir la visibilidad en resultados comerciales medibles."
            },
            automation: {
              title: "Flujo de trabajo y automatización de IA",
              subtitle: "Ahorre tiempo con sistemas más inteligentes.",
              desc: "Automatice el trabajo repetitivo, conecte sus herramientas y agilice las operaciones con flujos de trabajo personalizados y soluciones impulsadas por IA."
            }
          },
          cta: {
            badge: "Necesita ayuda",
            title: "Asesoramiento gratuito. Reserve una devolución de llamada",
            btn: "Hablemos"
          }
        },
        blog: {
          badge: "Entradas recientes",
          title: "Últimas noticias y conocimientos de la industria",
          featuredDesc: "Aportamos una profunda experiencia funcional, pero somos conocidos por nuestra perspectiva holística: capturamos valor más allá de las fronteras.",
          categories: "Categorías",
          noArticles: "No se encontraron artículos que coincidan con sus criterios.",
          featuredArticles: "Artículos Destacados",
          stayUpdated: "Mantente al día",
          popularTopics: "Temas Populares",
          subscribe: "Suscribirse",
          searchPlaceholder: "Buscar artículos...",
          showingCount: "Mostrando {{count}} artículos",
          clearFilters: "Limpiar filtros",
          subscribeDesc: "Suscríbete a nuestro boletín para recibir consejos mensuales de crecimiento digital.",
          unsubscribeNote: "Darse de baja en cualquier momento. Respetamos su privacidad."
        },

        certifications: {
          title: "Certificado y destacado por"
        },
        portfolio: {
          badge: "Obras seleccionadas",
          title: "Nuestros proyectos terminados",
          desc: "Lea cómo hemos ayudado a algunas de las marcas más grandes a transformar su negocio.",
          viewAll: "Ver todos los trabajos"
        },
        team: {
          badge: "Nuestro equipo de expertos",
          title: "Conozca al equipo de liderazgo",
          desc: "Todos somos apasionados y estamos comprometidos a brindar servicios de alta calidad a nuestros clientes."
        },
        stats: {
          badge: "Por qué elegirnos",
          title: "Resultados que entregamos con éxito",
          projects: "proyectos entregados",
          retention: "retención de clientes",
          hours: "horas ahorradas",
          stat1Desc: "Nuestro trabajo ha ayudado a los clientes a aumentar el flujo de clientes potenciales y lograr un crecimiento en línea medible en múltiples industrias.",
          stat2Desc: "Una fuerte tasa de retención basada en mejoras mensuales consistentes e informes claros y transparentes.",
          stat3Desc: "Los sistemas de automatización y flujo de trabajo han ayudado a los clientes a ahorrar horas operativas significativas y reducir el trabajo manual.",
          circleText: "Solución de desarrollo empresarial TI"
        },
        testimonials: {
          largeText: "testimonios",
          badge: "Escuchar al cliente"
        },

        faq: {
          badge: "Preguntas más frecuentes",
          title: "Preguntas frecuentes",
          desc: "¿No encuentra la respuesta que busca? Comuníquese con nuestro equipo de atención al cliente."
        }
      },
      contact: {
        title: "Ponerse en contacto",
        subtitle: "¿Tiene un proyecto en mente? Nos encantaría saber de usted.",
        badge: "Contáctenos",
        visitUs: "Visítenos",
        emailUs: "Envíenos un correo electrónico",
        callUs: "Llámenos",
        whatsapp: "WhatsApp",
        startConversation: "Iniciar una conversación",
        quickChat: "Chat rápido en WhatsApp",
        sendMessage: "Envíenos un mensaje",
        formDesc: "Complete el formulario a continuación y nos pondremos en contacto con usted dentro de las 24 horas.",
        name: "Nombre",
        namePlaceholder: "Juan Pérez",
        email: "Correo electrónico",
        emailPlaceholder: "juan@example.com",
        phone: "Teléfono",
        phonePlaceholder: "+60 10-288 2827",
        subject: "Asunto",
        subjectPlaceholder: "Consulta del proyecto",
        message: "Mensaje",
        messagePlaceholder: "Cuéntanos sobre tu proyecto...",
        btnSend: "Enviar mensaje",
        workingHours: "Horas de trabajo",
        viewOnMap: "Ver en el mapa",
        map: {
          hq: { name: "Sede mundial", role: "Sede central", location: "Kuala Lumpur, Malasia" },
          hub: { name: "Centro regional", role: "Operaciones", location: "Singapur" },
          tech: { name: "Centro tecnológico", role: "I + D", location: "San Francisco, EE. UU." }
        }
      },
      company: {
        title: "Somos JXING",
        subtitle: "Un equipo de diseñadores expertos, desarrolladores web y especialistas en marketing que ofrecen éxito digital.",
        aboutBadge: "Acerca de JXING Tech Group",
        aboutTitle: "Tecnología práctica, medible y escalable.",
        aboutDesc1: "JXING Tech es una empresa de soluciones digitales que ayuda a las empresas a crecer a través de tecnología práctica, medible y escalable.",
        aboutDesc2: "Creemos que el crecimiento digital debe ser simple, asequible y alcanzable para todas las empresas.",
        brochureTitle: "Descargar un folleto de la empresa",
        brochureTagline: "• ¿Acaba de empezar?",
        brochureBtn: "Obtener una copia",
        vision: "Nuestra visión",
        visionDesc: "Convertirse en el socio de crecimiento digital más confiable e innovador para empresas en el sudeste asiático y más allá.",
        mission: "Nuestra misión",
        missionDesc: "Ayudar a las empresas a acelerar su éxito digital a través de soluciones web escalables, innovación en comercio electrónico, automatización impulsada por IA y marketing basado en datos.",
        valuesTitle: "Nuestros valores fundamentales",
        valuesBadge: "Nuestra cultura",
        ctaTitle: "Estamos comprometidos a ofrecer solo lo mejor"
      },
      services: {
        badge: "Nuestros servicios",
        title: "Servicios digitales para hacer crecer su negocio",
        viewAll: "Ver todos los servicios",
        aeoTitle: "Desbloquee su crecimiento con nuestras soluciones digitales principales",

        innovativeTitle: "Servicios de soluciones digitales innovadoras",
        whyChooseBadge: "Por qué elegirnos",
        whyChooseTitle: "Experiencias de usuario reinventadas",
        whyChooseBg: "por qué elegirnos",
        whyChooseList: [
          { title: "Soluciones personalizadas", desc: "Construyendo conexiones de medios sólidas para elevar la visibilidad y credibilidad de su marca a través de estrategias personalizadas." },
          { title: "Enfoque basado en datos", desc: "Utilizamos análisis avanzados para guiar cada decisión, asegurando que su crecimiento sea medible y sostenible." },
          { title: "Soporte experto", desc: "Nuestro equipo de veteranos de la industria brinda soporte 24/7 para garantizar que sus operaciones digitales nunca pierdan el ritmo." }
        ]
      },
      footer: {
        tellUs: 'Cuéntanos sobre tu proyecto',
        letsTalk: "Hablemos",
        writeToUs: 'Escríbenos',
        insightTitle: 'Obtenga la última inspiración y conocimientos',
        emailPlaceholder: 'Tu correo electrónico...',
        serviceLinks: {
          webEcom: "Sitio Web y Comercio Electrónico",
          marketing: "Marketing y Crecimiento",
          automation: "Automatización de Flujos de Trabajo",
          seo: "Integración de SEO e IA"
        },

        works: 'Trabajos',
        expertise: 'Experiencia',
        about: 'Acerca de',
        team: 'Equipo',
        awards: 'Premios',
        blog: 'Blog',
        careers: 'Carreras',
        partnerships: 'Asociaciones',
        contact: 'Contacto',
        headOffice: 'Oficina central',
        copyright: '© 2024 JXING Tech Group Sdn. Bhd. Todos los derechos reservados. Desarrollado con ❤️ por JXING Tech',
        privacy: 'Política de privacidad',
        terms: 'Términos de servicio',
        workingHours: "Horas de trabajo",
        hoursLong: "Lunes - Viernes",
        hoursShort: "9:00 AM - 6:00 PM",
        saturday: "Sábado",
        sunday: "Domingo",
        closed: "Cerrado",
        monFriHours: "Lun-Vie 9am-6pm",
        viewOnMap: "Ver en el Mapa",
        followUs: 'Síguenos'

      },
      pages: {
        serviceDetail: {
          badge: "Detalle del servicio",
          overviewBadge: "Descripción general",
          aboutTitle: "Acerca de este servicio",
          whyChooseBadge: "Por qué elegir esto",
          benefitsTitle: "Beneficios clave",
          whatYouGetBadge: "Lo que obtienes",
          deliverablesTitle: "Entregables del servicio",
          deliverablesFallback: "Entregables específicos adaptados a sus necesidades.",
          benefitsFallback: "Detalles próximamente...",
          viewAll: "Ver todos los servicios",
          overview: "Resumen",
          specificOfferings: "Ofertas Específicas",
          selectPackage: "Seleccione un paquete específico para ver detalles y precios."
        },

        caseStudies: {
          title: "Casos de estudio",
          subtitle: "Explore cómo hemos ayudado a clientes de diversas industrias a lograr sus objetivos digitales.",
          badge: "Nuestro trabajo"
        },
        news: {
          title: "Últimas noticias",
          subtitle: "Perspectivas, tendencias y actualizaciones del mundo de la innovación digital y el diseño.",
          badge: "Blog"
        },
        career: {
          title: "Carrera",
          subtitle: "Al unirse a nuestro equipo, tendrá la oportunidad de trabajar en proyectos de vanguardia, aprovechar las últimas tecnologías y generar un impacto real.",
          badge: "Inicio • Carrera",
          applyBadge: "Aplica ya",
          openingsTitle: "Aperturas actuales",
          learnMore: "Aprenda más",
          oppsBadge: "Oportunidades con nosotros",
          joinDesc: "Si no puede encontrar una vacante adecuada, no se preocupe. Siempre estamos dispuestos a descubrir nuevos talentos, por favor envíenos su currículum y enlace de cartera a",
          contactBtn: "Contactar ahora",
          quote: "Estamos escalando rápido y buscando pioneros digitales que nos ayuden a superar a la competencia.",
          keyResponsibilities: "Responsabilidades Clave",
          requirements: "Requisitos",
          responseNote: "Respuesta en menos de 48 horas",
          happinessScore: "Puntuación de Felicidad",
          hiringNow: "Contratando Ahora",
          location: "Ubicación",
          workingHours: "Horas de Trabajo",
          type: "Tipo"
        },

        pricing: {
          heroTitle: "Construya su plan de crecimiento digital",
          heroSubtitle: "Seleccione servicios, personalice características y solicite una cotización personalizada.",
          badge: "Precios y planes",
          addToPlan: "Agregar al plan",
          added: "Agregado",
          removeFromQuote: "Eliminar",
          yourPlan: "Su plan de crecimiento",
          requestQuote: "Solicitar cotización y consulta",
          customNotesPlaceholder: "Agregar notas específicas (por ejemplo, número de páginas)...",
          estInvestment: "Inversión est.",
          emptyQuote: "Seleccione servicios de la lista para crear su plan personalizado.",
          viewDetails: "Ver detalles",
          modalTitle: "Finalice su solicitud",
          modalDesc: "Revise sus servicios seleccionados y proporcione sus datos de contacto. Discutiremos los detalles durante nuestra consulta.",
          nameLabel: "Nombre completo",
          emailLabel: "Correo electrónico del trabajo",
          phoneLabel: "Número de teléfono",
          notesLabel: "Contexto adicional del proyecto",
          submitting: "Enviando...",
          successTitle: "¡Solicitud recibida!",
          successDesc: "Redirigiéndole a nuestro calendario de reservas...",
          upfrontTotal: "Por adelantado / Única vez",
          monthlyTotal: "Mensual recurrente"
        },
        notFound: {
          desc: "Es posible que la página que está buscando haya sido eliminada, se haya cambiado su nombre o no esté disponible temporalmente.",
          backHome: "Volver a Inicio"
        },
        servicesPage: {
          subtitle: "Soluciones digitales innovadoras diseñadas para ayudarlo a crecer, optimizar y tener éxito en un panorama competitivo.",
          overview: "Resumen del Servicio",
          keyBenefits: "Beneficios Clave",
          deliverables: "Entregables",
          terms: "Términos del Servicio",
          contactSales: "O contactar equipo de ventas"
        },
        help: {
          title: "Ayuda y Soporte",
          subtitle: "¿Cómo podemos ayudarte hoy? Contacta a nuestros expertos o accede a tus recursos de cliente.",
          bookConsultation: "Reservar una Consulta",
          scheduleNow: "Programar Ahora",
          clientDashboard: "Panel de Cliente",
          clientLogin: "Inicio de Sesión de Cliente",
          instantAssistance: "Asistencia Instantánea",
          supportExcellence: "Excelencia en Soporte y SLA",
          standardHours: "Horario de Soporte Estándar",
          standardHoursDesc: "Lunes a Viernes: 9:00 AM – 6:00 PM (GMT+8). Cerrado fines de semana y festivos.",
          sla: "Acuerdos de Nivel de Servicio (SLA)",
          slaDesc: "Los clientes empresariales disfrutan de tiempos de respuesta dedicados basados en su contrato (8x5, 8x6 o cobertura crítica 24x7).",
          contractTiers: "Niveles de Contrato",
          whatsAppChat: "Iniciar Chat de WhatsApp"
        }
      },

      legal: {
        privacy: {
          title: "Política de privacidad",
          subtitle: "Estamos comprometidos a proteger su información personal y su derecho a la privacidad.",
          intro: "Última actualización: 01 de enero de 2024"
        },
        terms: {
          title: "Términos de servicio",
          subtitle: "Lea atentamente estos términos y condiciones antes de utilizar nuestro servicio.",
          intro: "Última actualización: 01 de enero de 2024"
        }
      },

      data: {
        services: {
          "website-solutions": {
            title: "Soluciones de Sitios Web",
            description: "Sitios web de alto rendimiento diseñados para generar confianza, captar clientes potenciales y escalar con su negocio."
          },
          "automation-workflow": {
            title: "Automatización y Flujo de Trabajo",
            description: "Elimine el trabajo manual y escale la eficiencia con la automatización empresarial impulsada por IA."
          },
          "growth-seo": {
            title: "SEO Impulsado por el Crecimiento",
            description: "Domine los resultados de búsqueda e impulse el tráfico orgánico sostenible con estrategias de SEO basadas en datos."
          },
          "performance-ads": {
            title: "Gestión de Anuncios de Rendimiento",
            description: "Convierta el gasto en publicidad en ingresos con campañas basadas en datos en Google, Meta y TikTok."
          },
          "social-media": {
            title: "Gestión de Redes Sociales",
            description: "Construya una comunidad leal y mantenga una presencia profesional y activa en todas las principales plataformas sociales."
          },
          "professional-services": {
            title: "Servicios Profesionales",
            description: "Consultoría experta, auditorías y mantenimiento para mantener sus operaciones digitales funcionando al máximo rendimiento."
          }
        },
        companyStats: {
          "0": { label: "años de experiencia laboral" },
          "1": { label: "personal calificado" },
          "2": { label: "projek completados" }
        }
      }

    }
  },
  ar: {
    translation: {
      common: {
        learnMore: "اعرف المزيد",
        viewAll: "عرض الكل",
        getStarted: "ابدأ",
        readMore: "اقرأ المزيد",
        applyNow: "قدم الآن",
        home: "الصفحة الرئيسية",
        selectLanguage: "اختر اللغة",
        popular: "شائع",
        submit: "إرسال طلب"
      },
      meta: {
        description: "JXING Tech هي وكالة رقمية رائدة في ماليزيا متخصصة في تطوير الويب والتجارة الإلكترونية وأتمتة الذكاء الاصطناعي والتسويق الأدائي."
      },

      nav: {
        company: 'الشركة',
        services: 'الخدمات',
        pricing: 'خطط التسعير',
        caseStudies: 'دراسات الحالة',
        news: 'الأخبار',
        contact: 'اتصل',
        getInTouch: 'تواصل معنا'
      },
      breadcrumbs: {
        company: "الشركة",
        services: "الخدمات",
        pricing: "التسعير",
        "case-studies": "دراسات الحالة",
        news: "الأخبار",
        contact: "اتصل",
        career: "وظائف",
        "privacy-policy": "سياسة الخصوصية",
        "terms-of-service": "شروط الخدمة"
      },
      hero: {
        title_static: 'تفوق على منافسيك.',
        title_prefix: 'بنيت ل',
        title_suffix: '',

        satisfied_customers: 'عملاء راضين',
        dynamic: [
          {
            word: "الهيمنة",
            badges: [
              "المرتبة رقم 1 في بحث Google",
              "امتلك تخصص السوق الخاص بك",
              "بناء سلطة العلامة التجارية التي لا تتزعزع"
            ]
          },
          {
            word: "الأداء",
            badges: [
              "سرعات تحميل الصفحات أقل من الثانية",
              "تجربة جوال سلسة",
              "أمن سيبراني من مستوى المؤسسات"
            ]
          },
          {
            word: "الإيرادات",
            badges: [
              "مسارات مبيعات عالية التحويل",
              "توليد العملاء المحتملين الآلي",
              "تعظيم عائد الاستثمار في الإنفاق الإعلاني"
            ]
          }
        ]
      },
      home: {
        globalPresence: {
          title: "حضور العملاء العالميين",
          clients: {
            c1: "بنية تحتية متكاملة للدفع للتوسع العالمي.",
            c2: "تطوير منصة الخدمات المصرفية كخدمة.",
            c3: "لوحة معلومات تصور بيانات الطاقة المتجددة.",
            c4: "أنظمة أتمتة لوجستيات المدينة الذكية.",
            c5: "حل التجارة الإلكترونية عبر الحدود.",
            c6: "أدوات تدقيق الأمن السيبراني للمؤسسات."
          }
        },
        about: {
          badge: "من نحن",
          title: "شركاؤك للنجاح الرقمي",
          desc: "نحن فريق مخصص يركز على مساعدة الشركات على النمو من خلال حلول رقمية عملية وقابلة للقياس. تكمن نقاط قوتنا في بناء مواقع ويب عالية الأداء، وجذب حركة المرور من خلال التسويق الرقمي وتحسين محركات البحث، وتحسين العمليات باستخدام أتمتة سير العمل وأدوات الذكاء الاصطناعي. تم تصميم كل حل نقدمه لمساعدتك على توفير الوقت والوصول إلى المزيد من العملاء والنمو بثقة.",
          aeoTitle: "كيف تسرع JXING Tech نموك الرقمي؟",
          aeoDesc: "نحن نجمع بين تطوير المواقع عالية الأداء وأتمتة سير العمل المدعومة بالذكاء الاصطناعي وحلول التسويق الاستراتيجية للقضاء على اختناقات الأعمال. تركيزنا ينصب على تقديم تجارب رقمية قابلة للتطوير تزيد من العائد على الاستثمار وتدفع بالهيمنة طويلة الأمد في صنعتك.",

          cards: {
            web: {
              title: "حلول المواقع والتجارة الإلكترونية",
              subtitle: "مواقع ويب احترافية مصممة للتحويل.",
              desc: "أطلق موقعًا تجاريًا عالي الأداء أو متجرًا عبر الإنترنت مصممًا لبناء الثقة والتقاط العملاء المحتملين ودعم نموك. كل شيء يدار بالكامل تحت اشتراك واحد."
            },
            marketing: {
              title: "التسويق ونمو تحسين محركات البحث",
              subtitle: "كن مكتشفًا. احصل على عملاء متوقعين. انمو باستمرار.",
              desc: "من المحتوى ووسائل التواصل الاجتماعي إلى تحسين محركات البحث وإعلانات الأداء، نساعدك في الوصول إلى الجمهور المناسب وتحويل الرؤية إلى نتائج أعمال قابلة للقياس."
            },
            automation: {
              title: "سير العمل وأتمتة الذكاء الاصطناعي",
              subtitle: "وفر الوقت مع أنظمة أكثر ذكاءً.",
              desc: "أتمتة العمل المتكرر، وربط أدواتك، وتبسيط العمليات من خلال سير عمل مخصص وحلول مدعومة بالذكاء الاصطناعي."
            }
          },
          cta: {
            badge: "بحاجة للمساعدة",
            title: "نصيحة مجانية. احجز مكالمة عودة",
            btn: "لنتحدث"
          }
        },
        certifications: {
          title: "معتمد ومميز بواسطة"
        },
        portfolio: {
          badge: "أعمال مختارة",
          title: "مشاريعنا المنجزة",
          desc: "اقرأ كيف ساعدنا بعضًا من أكبر العلامات التجارية على تحويل أعمالهم.",
          viewAll: "عرض جميع الأعمال"
        },
        team: {
          badge: "فريق خبرائنا",
          title: "تعرف على فريق القيادة",
          desc: "نحن جميعًا متحمسون وملتزمون بتقديم خدمات عالية الجودة لعملائنا."
        },
        stats: {
          badge: "لماذا تختارنا",
          title: "النتائج التي نقدمها بنجاح",
          projects: "مشاريع تم تسليمها",
          retention: "الاحتفاظ بالعملاء",
          hours: "ساعات تم توفيرها",
          stat1Desc: "ساعد عملنا العملاء على زيادة تدفق العملاء المحتملين وتحقيق نمو عبر الإنترنت قابل للقياس عبر صناعات متعددة.",
          stat2Desc: "معدل احتفاظ قوي مبني على تحسينات شهرية متسقة وتقارير واضحة وشفافة.",
          stat3Desc: "ساعدت أنظمة الأتمتة وسير العمل العملاء على توفير ساعات تشغيل كبيرة وتقليل العمل اليدوي.",
          circleText: "تطوير الأعمال حل تكنولوجيا المعلومات"
        },
        testimonials: {
          largeText: "الشهادات",
          badge: "استمع من العميل"
        },
      },
      blog: {
        badge: "أحدث المقالات",
        title: "آخر الأخبار ورؤى الصناعة",
        featuredDesc: "نحن نجلب خبرة وظيفية عميقة، ولكننا معروفون بمنظورنا الشامل: نحن نقتنص القيمة عبر الحدود.",
        categories: "التصنيفات",
        noArticles: "لم يتم العثور على مقالات تطابق معاييرك.",
        featuredArticles: "مقالات مميزة",
        stayUpdated: "ابقَ على اطلاع",
        popularTopics: "مواضيع شائعة",
        subscribe: "اشتراك",
        searchPlaceholder: "بحث عن مقالات...",
        showingCount: "عرض {{count}} مقالات",
        clearFilters: "مسح جميع الفلاتر",
        subscribeDesc: "اشترك في نشرتنا الإخبارية للحصول على نصائح شهرية للنمو الرقمي ورؤى الصناعة.",
        unsubscribeNote: "إلغاء الاشتراك في أي وقت. نحن نحترم خصوصيتك."
      },

      faq: {
        badge: "الأسئلة الشائعة",
        title: "أسئلة مكررة",
        desc: "لا يمكنك العثور على الإجابة التي تبحث عنها؟ تواصل مع فريق دعم العملاء لدينا."
      }
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "هل لديك مشروع في الاعتبار؟ نود أن نسمع منك.",
      badge: "اتصل بنا",
      visitUs: "قم بزيارتنا",
      emailUs: "راسلنا عبر البريد الإلكتروني",
      callUs: "اتصل بنا",
      whatsapp: "WhatsApp",
      startConversation: "ابدأ محادثة",
      quickChat: "دردشة سريعة على WhatsApp",
      sendMessage: "أرسل لنا رسالة",
      formDesc: "املأ النموذج أدناه وسنعاود الاتصال بك في غضون 24 ساعة.",
      name: "الاسم",
      namePlaceholder: "جون دو",
      email: "البريد الإلكتروني",
      emailPlaceholder: "john@example.com",
      phone: "الهاتف",
      phonePlaceholder: "+60 10-288 2827",
      subject: "الموضوع",
      subjectPlaceholder: "استفسار عن مشروع",
      message: "الرسالة",
      messagePlaceholder: "أخبرنا عن مشروعك...",
      btnSend: "إرسال رسالة",
      workingHours: "ساعات العمل",
      viewOnMap: "عرض على الخريطة",
      map: {
        hq: { name: "المقر الرئيسي العالمي", role: "المقر الرئيسي", location: "كوالالمبور، ماليزيا" },
        hub: { name: "المركز الإقليمي", role: "العمليات", location: "سنغافورة" },
        tech: { name: "المركز التقني", role: "البحث والتطوير", location: "سان فرانسيسكو، الولايات المتحدة الأمريكية" }
      }
    },
    company: {
      title: "نحن JXING",
      subtitle: "فريق من الخبراء المصممين ومطوري الويب والمسوقين الذين يقدمون النجاح الرقمي.",
      aboutBadge: "حول JXING Tech Group",
      aboutTitle: "تكنولوجيا عملية وقابلة للقياس وقابلة للتطوير.",
      aboutDesc1: "JXING Tech هي شركة حلول رقمية تساعد الشركات على النمو من خلال تكنولوجيا عملية وقابلة للقياس وقابلة للتطوير.",
      aboutDesc2: "نؤمن بأن النمو الرقمي يجب أن يكون بسيطًا وبأسعار معقولة ويمكن تحقيقه لكل شركة.",
      brochureTitle: "تحميل كتيب الشركة",
      brochureTagline: "• هل بدأت للتو؟",
      brochureBtn: "احصل على نسخة",
      vision: "رؤيتنا",
      visionDesc: "أن نصبح شريك النمو الرقمي الأكثر ثقة وابتكارًا للشركات في جميع أنحاء جنوب شرق آسيا وخارجها.",
      mission: "مهمتنا",
      missionDesc: "لمساعدة الشركات على تسريع نجاحها الرقمي من خلال حلول الويب القابلة للتطوير، وابتكار التجارة الإلكترونية، والأتمتة المدعومة بالذكاء الاصطناعي، والتسويق القائم على البيانات.",
      valuesTitle: "قيمنا الأساسية",
      valuesBadge: "ثقافتنا",
      ctaTitle: "نحن ملتزمون بتقديم الأفضل فقط"
    },
    services: {
      badge: "خدماتنا",
      title: "أتمتة الذكاء الاصطناعي وخدمات الويب لتنمية عملك",
      viewAll: "عرض جميع الخدمات",
      aeoTitle: "أطلق العنان لنموك مع حلولنا الرقمية الأساسية",

      innovativeTitle: "خدمات الحلول الرقمية المبتكرة",
      whyChooseBadge: "لماذا تختارنا",
      whyChooseTitle: "تجارب مستخدم مُعاد تصورها",
      whyChooseBg: "لماذا تختارنا",
      whyChooseList: [
        { title: "حلول مخصصة", desc: "بناء اتصالات إعلامية قوية لرفع مستوى رؤية علامتك التجارية ومصداقيتها من خلال استراتيجيات مصممة خصيصًا." },
        { title: "نهج قائم على البيانات", desc: "نحن نستخدم التحليلات المتقدمة لتوجيه كل قرار، مما يضمن أن نموك قابل للقياس ومستدام." },
        { title: "دعم الخبراء", desc: "يوفر فريقنا من قدامى المحاربين في الصناعة دعمًا على مدار الساعة طوال أيام الأسبوع لضمان عدم تفويت عملياتك الرقمية لأي لحظة." }
      ]
    },
    footer: {
      tellUs: 'أخبرنا عن مشروعك',
      letsTalk: "لنتحدث",
      writeToUs: 'اكتب إلينا',
      insightTitle: 'احصل على أحدث الإلهام والرؤى',
      emailPlaceholder: 'بريدك الإلكتروني...',
      serviceLinks: {
        webEcom: "المواقع والتجارة الإلكترونية",
        marketing: "التسويق والنمو",
        automation: "أتمتة سير العمل",
        seo: "تكامل SEO والذكاء الاصطناعي"
      },

      works: 'أعمال',
      expertise: 'خبرة',
      about: 'حول',
      team: 'فريق',
      awards: 'جوائز',
      blog: 'مدونة',
      careers: 'وظائف',
      partnerships: 'شراكات',
      contact: 'اتصل',
      headOffice: 'المكتب الرئيسي',
      copyright: '© 2024 JXING Tech Group Sdn. Bhd. جميع الحقوق محفوظة. مدعوم بـ ❤️ من JXING Tech',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      workingHours: "ساعات العمل",
      hoursLong: "الاثنين - الجمعة",
      hoursShort: "9:00 صباحاً - 6:00 مساءً",
      saturday: "السبت",
      sunday: "الأحد",
      closed: "مغلق",
      monFriHours: "الاثنين-الجمعة 9ص-6م",
      viewOnMap: "عرض على الخريطة",
      followUs: 'تابعنا'

    },
    pages: {
      serviceDetail: {
        badge: "تفاصيل الخدمة",
        overviewBadge: "نظرة عامة",
        aboutTitle: "حول هذه الخدمة",
        whyChooseBadge: "لماذا تختار هذا",
        benefitsTitle: "الفوائد الرئيسية",
        whatYouGetBadge: "ما ستحصل عليه",
        deliverablesTitle: "تسليمات الخدمة",
        deliverablesFallback: "تسليمات محددة مصممة لاحتياجاتك.",
        benefitsFallback: "التفاصيل قادمة قريبا...",
        viewAll: "عرض جميع الخدمات",
        overview: "نظرة عامة",
        specificOfferings: "العروض المحددة",
        selectPackage: "اختر حزمة محددة لعرض التفاصيل والأسعار."
      },

      caseStudies: {
        title: "دراسات الحالة",
        subtitle: "استكشف كيف ساعدنا العملاء عبر مختلف الصناعات على تحقيق أهدافهم الرقمية.",
        badge: "عملنا"
      },
      news: {
        title: "آخر الأخبار",
        subtitle: "رؤى واتجاهات وتحديثات من عالم الابتكار الرقمي والتصميم.",
        badge: "مدونة",
        sidebarTitle: "ابقَ على اطلاع"
      },

      career: {
        title: "وظائف",
        subtitle: "من خلال الانضمام إلى فريقنا، ستتاح لك الفرصة للعمل في مشاريع متطورة، والاستفادة من أحدث التقنيات، وإحداث تأثير حقيقي.",
        badge: "الصفحة الرئيسية • وظائف",
        applyBadge: "قدم الآن",
        openingsTitle: "الوظائف الحالية",
        learnMore: "اعرف المزيد",
        oppsBadge: "الفرص معنا",
        joinDesc: "إذا لم تتمكن من العثور على وظيفة شاغرة مناسبة، فلا تقلق. نحن دائما على استعداد لاكتشاف مواهب جديدة، يرجى إرسال سيرتك الذاتية ورابط محفظتك إلينا عبر البريد الإلكتروني إلى",
        contactBtn: "اتصل الآن",
        quote: "نحن نتوسع بسرعة ونبحث عن رواد رقميين لمساعدتنا في التفوق على المنافسين.",
        keyResponsibilities: "المسؤوليات الرئيسية",
        requirements: "المتطلبات",
        responseNote: "رد خلال 48 ساعة",
        happinessScore: "مؤشر السعادة",
        hiringNow: "توظيف الآن",
        location: "الموقع",
        workingHours: "ساعات العمل",
        type: "النوع"
      },

      pricing: {
        heroTitle: "بناء خطة النمو الرقمي الخاصة بك",
        heroSubtitle: "اختر الخدمات، وخصص الميزات، واطلب عرض أسعار مخصصًا.",
        badge: "التسعير والخطط",
        addToPlan: "أضف إلى الخطة",
        added: "تمت الإضافة",
        removeFromQuote: "إزالة",
        yourPlan: "خطة النمو الخاصة بك",
        requestQuote: "طلب عرض أسعار واستشارة",
        customNotesPlaceholder: "أضف ملاحظات محددة (مثل عدد الصفحات)...",
        estInvestment: "الاستثمار المقدر",
        emptyQuote: "اختر الخدمات من القائمة لبناء خطتك المخصصة.",
        viewDetails: "عرض التفاصيل",
        modalTitle: "إنهاء طلبك",
        modalDesc: "راجع خدماتك المختارة وقدم تفاصيل الاتصال الخاصة بك. سنناقش التفاصيل خلال استشارتنا.",
        nameLabel: "الاسم الكامل",
        emailLabel: "بريد العمل",
        phoneLabel: "رقم الهاتف",
        notesLabel: "سياق المشروع الإضافي",
        submitting: "جار الإرسال...",
        successTitle: "تم استلام الطلب!",
        successDesc: "إعادة توجيهك إلى تقويم الحجز الخاص بنا...",
        upfrontTotal: "مقدمًا / لمرة واحدة",
        monthlyTotal: "شهرية متكررة"
      },
      desc: "الصفحة التي تبحث عنها قد تم حذفها، أو تغيير اسمها، أو غير متاحة مؤقتا.",
      backHome: "العودة إلى الصفحة الرئيسية"
    },
    servicesPage: {
      subtitle: "حلول رقمية مبتكرة مصممة لمساعدتك على النمو والتحسين والنجاح في مشهد تنافسي.",
      overview: "نظرة عامة على الخدمة",
      keyBenefits: "الفوائد الرئيسية",
      deliverables: "المخرجات",
      terms: "شروط الخدمة",
      contactSales: "أو اتصل بفريق المبيعات"
    },
    help: {
      title: "المساعدة والدعم",
      subtitle: "كيف يمكننا مساعدتك اليوم؟ تواصل مع خبرائنا أو ادخل إلى موارد العملاء الخاصة بك.",
      bookConsultation: "حجز استشارة",
      scheduleNow: "جدولة الآن",
      clientDashboard: "لوحة تحكم العميل",
      clientLogin: "دخول العميل",
      instantAssistance: "مساعدة فورية",
      supportExcellence: "التميز في الدعم واتفاقيات مستوى الخدمة",
      standardHours: "ساعات الدعم القياسية",
      standardHoursDesc: "الاثنين إلى الجمعة: 9:00 صباحاً – 6:00 مساءً (GMT+8). مغلق في عطلات نهاية الأسبوع والعطلات الرسمية.",
      sla: "اتفاقيات مستوى الخدمة (SLA)",
      slaDesc: "يتمتع عملاء المؤسسات بأوقات استجابة مخصصة بناءً على عقدهم (8x5 أو 8x6 أو تغطية حرجة على مدار الساعة طوال أيام الأسبوع).",
      contractTiers: "مستويات العقد",
      whatsAppChat: "بدء دردشة واتساب"
    },

    legal: {
      privacy: {
        title: "سياسة الخصوصية",
        subtitle: "نحن ملتزمون بحماية معلوماتك الشخصية وحقك في الخصوصية.",
        intro: "آخر تحديث: 01 يناير 2024"
      },
      terms: {
        title: "شروط الخدمة",
        subtitle: "يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدمتنا.",
        intro: "آخر تحديث: 01 يناير 2024"
      }
    },

    data: {
      services: {
        "website-solutions": {
          title: "حلول المواقع الإلكترونية",
          description: "مواقع ويب عالية الأداء مصممة لبناء الثقة، وجذب العملاء المحتملين، والتوسع مع عملك."
        },
        "automation-workflow": {
          title: "الأتمتة وسير العمل",
          description: "تخلص من العمل اليدوي وقم بزيادة الكفاءة من خلال أتمتة الأعمال المدعومة بالذكاء الاصطناعي."
        },
        "growth-seo": {
          title: "تحسين محركات البحث المدفوع بالنمو",
          description: "سيطر على نتائج البحث وقم بزيادة حركة المرور العضوية المستدامة من خلال استراتيجيات تحسين محركات البحث القائمة على البيانات."
        },
        "performance-ads": {
          title: "إدارة الإعلانات الأدائية",
          description: "حول الإنفاق الإعلاني إلى إيرادات من خلال حملات قائمة على البيانات على Google و Meta و TikTok."
        },
        "social-media": {
          title: "إدارة وسائل التواصل الاجتماعي",
          description: "ابنِ مجتمعًا مخلصًا وحافظ على حضور احترافي ونشط عبر جميع المنصات الاجتماعية الرئيسية."
        },
        "professional-services": {
          title: "الخدمات المهنية",
          description: "استشارات الخبراء والتدقيق والصيانة للحفاظ على سير عملياتك الرقمية بأعلى أداء."
        }
      },
      companyStats: {
        "0": { label: "سنوات من الخبرة العملية" },
        "1": { label: "موظفون مؤهلون" },
        "2": { label: "مشاريع مكتملة" }
      }
    }
  },
  zh: {
    translation: {
      common: {
        learnMore: "了解更多",
        viewAll: "查看全部",
        getStarted: "开始使用",
        readMore: "阅读更多",
        applyNow: "立即申请",
        home: "首页",
        selectLanguage: "选择语言",
        popular: "热门",
        submit: "提交请求"
      },
      meta: {
        description: "JXING Tech 是马来西亚领先的数字代理机构，专注于网站开发、电子商务、AI自动化和效果营销。"
      },

      nav: {
        company: '公司',
        services: '服务',
        pricing: '价格方案',
        caseStudies: '案例研究',
        news: '新闻',
        contact: '联系我们',
        getInTouch: '保持联系'
      },
      breadcrumbs: {
        company: "公司",
        services: "服务",
        pricing: "价格",
        "case-studies": "案例研究",
        news: "新闻",
        contact: "联系我们",
        career: "职业生涯",
        "privacy-policy": "隐私政策",
        "terms-of-service": "服务条款"
      },
      hero: {
        title_static: '超越您的竞争对手。',
        title_prefix: '为您的',
        title_suffix: '而构建',

        satisfied_customers: '满意的客户',
        dynamic: [
          {
            word: "数字化主导地位",

            badges: [
              "谷歌搜索排名第一",
              "占据您的市场利基",
              "建立不可动摇的品牌权威"
            ]
          },
          {
            word: "卓越表现",

            badges: [
              "亚秒级页面加载速度",
              "无缝移动体验",
              "企业级网络安全"
            ]
          },
          {
            word: "业务收入",

            badges: [
              "高转化率销售漏斗",
              "自动化潜在客户生成",
              "最大化广告支出回报率"
            ]
          }
        ]
      },
      home: {
        globalPresence: {
          title: "全球客户分布",
          clients: {
            c1: "用于全球扩展的综合支付基础设施。",
            c2: "银行即服务平台开发。",
            c3: "可再生能源数据可视化仪表板。",
            c4: "智慧城市物流自动化系统。",
            c5: "跨境电子商务解决方案。",
            c6: "企业网络安全审计工具。"
          }
        },
        about: {
          badge: "我们是谁",
          title: "您的数字成功合作伙伴",
          desc: "我们要是一个致力于通过实用且可衡量的数字解决方案帮助企业发展的团队。我们的优势在于建立高性能网站、通过数字营销和SEO推动流量，以及利用工作流自动化和AI工具改善运营。我们需要提供的每一个解决方案都旨在帮助您节省时间、接触更多客户并充满信心地成长。",
          aeoTitle: "JXING Tech 如何加速您的数字化增长？",
          aeoDesc: "我们将高性能网站开发与人工智能驱动的工作流程自动化和战略营销解决方案相结合，以消除业务瓶颈。我们的重点是提供可扩展的数字化体验，最大限度地提高投资回报率，并推动您在行业中的长期主导地位。",

          cards: {
            web: {
              title: "网站和电子商务解决方案",
              subtitle: "专为转化而构建的专业网站。",
              desc: "启动一个旨在建立信任、获取潜在客户并支持您增长的高性能商业网站或在线商店。一切都在一个订阅下完全管理。"
            },
            marketing: {
              title: "营销和SEO增长",
              subtitle: "被发现。获取潜在客户。持续增长。",
              desc: "从内容和社交媒体到SEO和效果广告，我们帮助您触达正确的受众，并将可见性转化为可衡量的业务成果。"
            },
            automation: {
              title: "工作流和AI自动化",
              subtitle: "用更智能的系统节省时间。",
              desc: "通过自定义工作流和AI驱动的解决方案，自动化重复性工作，连接您的工具，并简化运营。"
            }
          },
          cta: {
            badge: "需要帮助",
            title: "免费咨询。预约回电",
            btn: "让我们谈谈"
          }
        },
        certifications: {
          title: "认证 & 推荐由"
        },
        portfolio: {
          badge: "精选作品",
          title: "我们完成的项目",
          desc: "阅读我们如何帮助一些最大的品牌转型业务。",
          viewAll: "查看所有作品"
        },
        team: {
          badge: "我们的专家团队",
          title: "认识领导团队",
          desc: "我们都充满激情，致力于为客户提供高质量的服务。"
        },
        stats: {
          badge: "为什么选择我们",
          title: "我们成功交付的成果",
          projects: "交付的项目",
          retention: "客户留存率",
          hours: "节省的时间",
          stat1Desc: "我们的工作帮助客户在多个行业增加了潜在客户流量并实现了可衡量的在线增长。",
          stat2Desc: "建立在持续每月的改进和清晰、透明的报告基础上的强大留存率。",
          stat3Desc: "自动化和工作流系统帮助客户节省了大量的运营时间并减少了手工工作。",
          circleText: "业务发展 解决方案 IT"
        },
        testimonials: {
          largeText: "客户感言",
          badge: "听听客户怎么说"
        },
        blog: {
          badge: "最新文章",
          title: "最新新闻和行业见解",
          featuredDesc: "我们带来深厚的职能专长，但也以我们的整体视角而闻名：我们跨越界限获取价值。"
        },
        faq: {
          badge: "常见问题",
          title: "经常问的问题",
          desc: "找不到您要找的答案？联系我们的客户支持团队。"
        }
      },
      contact: {
        title: "取得联系",
        subtitle: "有项目想法吗？我们要很高兴收到您的来信。",
        badge: "联系我们",
        visitUs: "拜访我们",
        emailUs: "给我们发邮件",
        callUs: "致电我们",
        whatsapp: "WhatsApp",
        startConversation: "开始对话",
        quickChat: "WhatsApp 快速聊天",
        sendMessage: "给我们发消息",
        formDesc: "填写下面的表格，我们将在24小时内回复您。",
        name: "姓名",
        namePlaceholder: "张三",
        email: "电子邮件",
        emailPlaceholder: "zhangsan@example.com",
        phone: "电话",
        phonePlaceholder: "+60 10-288 2827",
        subject: "主题",
        subjectPlaceholder: "项目咨询",
        message: "信息",
        messagePlaceholder: "告诉我们要关于您的项目...",
        btnSend: "发送信息",
        workingHours: "工作时间",
        viewOnMap: "在地图上查看",
        map: {
          hq: { name: "全球总部", role: "总部", location: "吉隆坡，马来西亚" },
          hub: { name: "区域中心", role: "运营", location: "新加坡" },
          tech: { name: "技术中心", role: "研发", location: "旧金山，美国" }
        }
      },
      company: {
        title: "我们是 JXING",
        subtitle: "一群致力于提供数字成功的专家设计师、Web开发人员和营销人员。",
        aboutBadge: "关于 JXING Tech Group",
        aboutTitle: "实用、可衡量且可扩展的技术。",
        aboutDesc1: "JXING Tech 是一家数字解决方案公司，通过实用、可衡量且可扩展的技术帮助企业发展。",
        aboutDesc2: "我们要相信，对于每个企业来说，数字增长应该是简单、负担得起且可以实现的。",
        brochureTitle: "下载公司宣传册",
        brochureTagline: "• 刚开始？",
        brochureBtn: "获取副本",
        vision: "我们的愿景",
        visionDesc: "成为东南亚及其他地区企业最值得信赖和最具创新性的数字增长合作伙伴。",
        mission: "我们的使命",
        missionDesc: "通过可扩展的Web解决方案、电子商务创新、AI驱动的自动化和数据驱动的营销，帮助企业加速其数字成功。",
        valuesTitle: "我们的核心价值观",
        valuesBadge: "我们的文化",
        ctaTitle: "我们要致力于只提供最好的"
      },
      services: {
        badge: "我们的服务",
        title: "发展您业务的数字服务",
        viewAll: "查看所有服务",
        aeoTitle: "通过我们的核心数字化解决方案释放您的增长潜力",

        innovativeTitle: "创新数字解决方案服务",
        whyChooseBadge: "为什么选择我们",
        whyChooseTitle: "重构用户体验",
        whyChooseBg: "为什么选择我们",
        whyChooseList: [
          { title: "定制解决方案", desc: "建立强大的媒体连接，通过量身定制的策略提升您品牌的知名度和可信度。" },
          { title: "数据驱动方法", desc: "我们要利用高级分析来指导每一个决策，确保您的增长是可衡量和可持续的。" },
          { title: "专家支持", desc: "我们的行业资深团队提供24/7支持，确保您的数字运营永不停歇。" }
        ]
      },
      blog: {
        badge: "近期文章",
        title: "最新消息与行业洞察",
        featuredDesc: "我们带来深厚的专业知识，但以整体视角著称：我们跨越界限捕捉价值。",
        categories: "分类",
        noArticles: "未找到符合您搜索条件的文章。",
        featuredArticles: "推荐文章",
        stayUpdated: "保持更新",
        popularTopics: "热门话题",
        subscribe: "订阅",
        searchPlaceholder: "搜索文章...",
        showingCount: "正在显示 {{count}} 篇文章",
        clearFilters: "清除所有过滤",
        subscribeDesc: "订阅我们的邮件列表，获取每月数字增长技巧和行业洞察。",
        unsubscribeNote: "随时可以退订。我们尊重您的隐私。"
      },

      footer: {
        tellUs: '告诉我们要关于您的项目',
        letsTalk: "让我们谈谈",
        writeToUs: '写信给我们',
        insightTitle: '获取最新灵感和见解',
        emailPlaceholder: '您的电子邮件...',
        serviceLinks: {
          webEcom: "网站与电子商务",
          marketing: "营销与增长",
          automation: "工作流自动化",
          seo: "SEO 与 AI 集成"
        },

        works: '作品',
        expertise: '专长',
        about: '关于',
        team: '团队',
        awards: '奖项',
        blog: '博客',
        careers: '职业',
        partnerships: '合作伙伴',
        contact: '联系',
        headOffice: '总办事处',
        copyright: '© 2024 JXING Tech Group Sdn. Bhd. 保留所有权利。由 JXING Tech 用 ❤️ 提供支持',
        privacy: '隐私政策',
        terms: '服务条款',
        workingHours: "工作时间",
        hoursLong: "周一 - 周五",
        hoursShort: "9:00 AM - 6:00 PM",
        saturday: "周六",
        sunday: "周日",
        closed: "休息",
        monFriHours: "周一至周五 9am-6pm",
        viewOnMap: "在地图上查看",
        followUs: '关注我们'

      },
      pages: {
        serviceDetail: {
          badge: "服务详情",
          overviewBadge: "概览",
          aboutTitle: "关于此服务",
          whyChooseBadge: "为什么选择此服务",
          benefitsTitle: "主要优势",
          whatYouGetBadge: "您将获得什么",
          deliverablesTitle: "服务交付物",
          deliverablesFallback: "根据您的需求量身定制的具体交付物。",
          benefitsFallback: "详情即将推出...",
          viewAll: "查看所有服务",
          overview: "概览",
          specificOfferings: "具体产品",
          selectPackage: "选择特定套餐以查看详细信息和价格。"
        },

        caseStudies: {
          title: "案例研究",
          subtitle: "探索我们如何帮助各行各业的客户实现其数字目标。",
          badge: "我们的工作"
        },
        news: {
          title: "最新新闻",
          subtitle: "来自数字创新和设计世界的见解、趋势和更新。",
          badge: "博客",
          sidebarTitle: "保持更新"
        },

        career: {
          title: "职业生涯",
          subtitle: "通过加入我们的团队，您将有机会从事尖端项目，利用最新技术，并产生真正的影响。",
          badge: "首页 • 职业",
          applyBadge: "立即申请",
          openingsTitle: "当前职位空缺",
          learnMore: "了解更多",
          oppsBadge: "与我们的机会",
          joinDesc: "如果您找不到合适的职位空缺，请不要担心。我们要总是乐于发掘新的人才，请将您的简历和作品集链接邮寄给我们",
          contactBtn: "立即联系",
          quote: "我们正在快速扩张，寻找数字先驱来帮助我们超越竞争对手。",
          keyResponsibilities: "主要职责",
          requirements: "任职要求",
          responseNote: "48小时内回复",
          happinessScore: "幸福指数",
          hiringNow: "正在招聘",
          location: "地点",
          workingHours: "工作时间",
          type: "职位类型"
        },

        pricing: {
          heroTitle: "制定您的数字增长计划",
          heroSubtitle: "选择服务，自定义功能，并请求量身定制的报价。",
          badge: "价格和方案",
          addToPlan: "添加到计划",
          added: "已添加",
          removeFromQuote: "移除",
          yourPlan: "您的增长计划",
          requestQuote: "请求报价和咨询",
          customNotesPlaceholder: "添加具体说明（例如页面数量）...",
          estInvestment: "预计投资",
          emptyQuote: "从列表中选择服务以制定您的自定义计划。",
          viewDetails: "查看详情",
          modalTitle: "完成您的请求",
          modalDesc: "查看您选择的服务并提供您的联系方式。我们将在咨询期间讨论具体细节。",
          nameLabel: "全名",
          emailLabel: "工作邮箱",
          phoneLabel: "电话号码",
          notesLabel: "其他项目背景",
          submitting: "正在提交...",
          successTitle: "请求已收到！",
          successDesc: "正在将您重定向到我们的预订日历...",
          upfrontTotal: "预付 / 一次性",
          monthlyTotal: "月度经常性"
        },
        notFound: {
          title: "哎呀！找不到页面",
          desc: "您正在寻找的页面可能已被移除、名称已更改或暂时不可用。",
          backHome: "返回首页"
        },
        servicesPage: {
          subtitle: "创新的数字化解决方案，旨在帮助您在竞争激烈的环境中成长、优化并取得成功。",
          overview: "服务概览",
          keyBenefits: "主要优势",
          deliverables: "交付成果",
          terms: "服务条款",
          contactSales: "或联系销售团队"
        },
        help: {
          title: "帮助与支持",
          subtitle: "今天我们能为您提供什么帮助？联系我们的专家或访问您的客户资源。",
          bookConsultation: "预约咨询",
          scheduleNow: "立即预约",
          clientDashboard: "客户控制面板",
          clientLogin: "客户登录",
          instantAssistance: "即时协助",
          supportExcellence: "卓越支持与服务质量协议",
          standardHours: "标准支持时间",
          standardHoursDesc: "周一至周五：09:00 AM - 06:00 PM (GMT+8)。周末及公共假期休息。",
          sla: "服务等级协议 (SLA)",
          slaDesc: "企业客户根据其合同享受专属响应时间（8x5、8x6 或 24x7 关键覆盖）。",
          contractTiers: "合同层级",
          whatsAppChat: "开始 WhatsApp 聊天"
        },
      },

      legal: {
        privacy: {
          title: "隐私政策",
          subtitle: "我们致力于保护您的个人信息和您的隐私权。",
          intro: "最后更新：2024年1月1日"
        },
        terms: {
          title: "服务条款",
          subtitle: "在使用我们的服务之前，请仔细阅读这些条款和条件。",
          intro: "最后更新：2024年1月1日"
        }
      },

      data: {
        services: {
          "website-solutions": {
            title: "网站解决方案",
            description: "旨在建立信任、获取潜在客户并随您的业务扩展的高性能网站。"
          },
          "automation-workflow": {
            title: "自动化与工作流",
            description: "通过人工智能驱动的业务自动化消除手动工作并提高效率。"
          },
          "growth-seo": {
            title: "增长驱动型 SEO",
            description: "通过以数据为导向的 SEO 策略主导搜索结果并推动可持续的有机流量。"
          },
          "performance-ads": {
            title: "效果广告管理",
            description: "通过 Google、Meta 和 TikTok 上以数据为导向的营销活动，将广告支出转化为收入。"
          },
          "social-media": {
            title: "社交媒体管理",
            description: "建立忠诚的社区，并在所有主要的社交平台上保持活跃、专业的形象。"
          },
          "professional-services": {
            title: "专业服务",
            description: "专家咨询、审计和维护，确保您的数字业务以最佳性能运行。"
          }
        },
        companyStats: {
          "0": { label: "年工作经验" },
          "1": { label: "合格员工" },
          "2": { label: "已完成项目" }
        }
      }
    }
  }
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

