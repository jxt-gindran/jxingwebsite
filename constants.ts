
import { ServiceItem, ProjectItem, TeamMember, BlogPost, CareerOpening } from './types';

export const NAV_LINKS = [
  { label: 'Company', href: '/company' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing Plans', href: '/pricing' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'website-solutions',
    title: 'Website Solutions',
    description: 'High-performance websites designed to build trust, capture leads, and scale with your business.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    tags: ['Corporate', 'E-Commerce', 'Custom Web App'],
    longDescription: "In the digital economy, your website is your headquarters. We build pixel-perfect, lightning-fast, and secure websites that don't just look good—they work. From corporate portfolios to complex e-commerce engines, our solutions are engineered for conversion and reliability.",
    benefits: [
      "Mobile-first responsive design",
      "Sub-second loading speeds",
      "Enterprise-grade security",
      "Conversion-optimized layouts"
    ],
    offerings: [],
    subServices: [
      {
        id: 'corporate-website',
        title: 'Corporate Website',
        tagline: 'Build credibility fast.',
        description: 'A professional 4-6 page website designed to establish your brand authority and capture inquiries.',
        price: '988',
        priceType: 'One-time',
        benefits: ['Instant Credibility', 'Lead Capture Ready', 'Mobile Optimized'],
        deliverables: [
          'Custom UI/UX Design (4-6 Pages)',
          'Responsive Mobile Layout',
          'Contact Form & WhatsApp Integration',
          'Basic SEO Setup',
          '1 Year Hosting & SSL Included'
        ],
        terms: '50% deposit, 50% upon launch. Content provided by client.'
      },
      {
        id: 'basic-ecommerce',
        title: 'Basic E-Commerce Website',
        tagline: 'Sell online confidently.',
        description: 'A robust online store setup allowing you to sell products, manage inventory, and process payments securely.',
        price: '3,888',
        priceType: 'Starting at',
        benefits: ['Secure Payments', 'Easy Inventory Management', 'Sales Dashboard'],
        deliverables: [
          'Store Setup (Up to 50 Products)',
          'Payment Gateway Integration (FPX/Cards)',
          'Shopping Cart & Checkout System',
          'Order Management System',
          'Admin Training Session'
        ],
        terms: '40/40/20 milestone payment structure.'
      },
      {
        id: 'ecommerce-plus',
        title: 'E-Commerce Plus Website',
        tagline: 'Scale your online empire.',
        description: 'An advanced e-commerce solution with automation, loyalty programs, and advanced analytics for growing brands.',
        price: '5,888',
        priceType: 'Starting at',
        benefits: ['Customer Retention Tools', 'Automated Marketing', 'Advanced Analytics'],
        deliverables: [
          'Unlimited Product Listings',
          'Loyalty & Rewards System',
          'Abandoned Cart Recovery',
          'Advanced Sales Analytics',
          'Multi-currency Support'
        ],
        terms: 'Custom quote required for high-volume catalogs.'
      }
    ]
  },
  {
    id: 'automation-workflow',
    title: 'Automation & Workflow',
    description: 'Eliminate manual work and scale efficiency with AI-powered business automation.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    tags: ['AI Agents', 'CRM Sync', 'Process Auto'],
    longDescription: "Your team is wasting time on data entry. We build custom automations that connect your apps, manage your leads, and handle customer queries automatically, 24/7.",
    benefits: [
      "Reduced operational costs",
      "Zero human error",
      "24/7 productivity",
      "Scalable operations"
    ],
    offerings: [],
    subServices: [
      {
        id: 'automation-starter',
        title: 'Workflow Automation Starter',
        tagline: 'Connect your apps.',
        description: 'Simple linear automations to connect forms to email, CRM, or Sheets.',
        price: '888',
        priceType: 'One-time',
        benefits: ['Save Time', 'No Data Entry', 'Instant Alerts'],
        deliverables: [
          '1 Complex Workflow Setup',
          'Integration of 3 Apps (e.g. Web-Sheet-Email)',
          'Error Handling Setup',
          'Handover Documentation'
        ],
        terms: 'Software subscription costs excluded (e.g. Zapier).'
      },
      {
        id: 'business-process',
        title: 'Business Process Automation',
        tagline: 'Systemize your operations.',
        description: 'Custom build for complex logic, multi-step approvals, and data synchronization.',
        price: '3,888',
        priceType: 'Starting at',
        benefits: ['Custom Logic', 'Staff Efficiency', 'Standardized Process'],
        deliverables: [
          'Process Mapping Consultation',
          '3-5 Connected Workflows',
          'Dashboard Creation',
          'Staff Training Session',
          '30 Days Support'
        ],
        terms: 'Quote based on complexity.'
      },
      {
        id: 'telephony-ai',
        title: 'Telephony & Communication AI',
        tagline: 'Never miss a call.',
        description: 'Deploy AI agents to answer calls, qualify leads on WhatsApp, and book appointments.',
        price: '4,888',
        priceType: 'Setup Fee',
        benefits: ['24/7 Availability', 'Instant Response', 'Lower Staff Cost'],
        deliverables: [
          'AI Voice Agent Configuration',
          'WhatsApp Bot Setup',
          'Knowledge Base Training',
          'CRM Integration',
          'Call Routing Logic'
        ],
        terms: 'Usage fees apply for telephony minutes.'
      },
      {
        id: 'automation-retainer',
        title: 'Automation-as-a-Service',
        tagline: 'Continuous improvement.',
        description: 'Monthly support to build, fix, and optimize workflows as your business evolves.',
        price: '1,500',
        priceType: 'Monthly',
        benefits: ['On-demand Builds', 'Monitoring', 'Optimization'],
        deliverables: [
          'Unlimited Workflow Tweaks',
          'New Build Requests (up to 10 hrs)',
          'API Maintenance',
          'System Monitoring'
        ],
        terms: 'Min 3 months.'
      }
    ]
  },
  {
    id: 'growth-seo',
    title: 'Growth-Driven SEO',
    description: 'Dominate search results and drive sustainable organic traffic with data-led SEO strategies.',
    image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop',
    tags: ['SEO Setup', 'Monthly Growth', 'Authority Building'],
    longDescription: "Stop paying for every click. Our Growth-Driven SEO services build long-term assets that generate free, high-intent traffic to your site. We combine technical excellence with high-quality content to signal authority to Google.",
    benefits: [
      "Long-term traffic asset",
      "Higher brand credibility",
      "Lower cost-per-acquisition",
      "High-intent lead generation"
    ],
    offerings: [],
    subServices: [
      {
        id: 'seo-standard',
        title: 'SEO Standard Audit & Setup',
        tagline: 'The foundation of visibility.',
        description: 'Essential technical setup and on-page optimization to get your site indexed and ranking for core terms.',
        price: '688',
        priceType: 'One-time',
        benefits: ['Google Indexing', 'Local Visibility', 'Keyword Foundation'],
        deliverables: [
          'Google Search Console Setup',
          'Sitemap Submission',
          'Keyword Mapping (20 Terms)',
          'Meta Title & Description Optimization',
          'Heading Structure Fixes'
        ],
        terms: 'One-time project.'
      },
      {
        id: 'seo-plus',
        title: 'SEO Plus (Monthly)',
        tagline: 'Consistent traffic growth.',
        description: 'Ongoing content creation and optimization to steadily climb search rankings and capture more market share.',
        price: '1,308',
        priceType: 'Monthly',
        benefits: ['Rising Rankings', 'Fresh Content', 'Link Building'],
        deliverables: [
          'Advanced Keyword Research',
          '3 Optimized Blog Posts/Month',
          '5 High-Quality Backlinks/Month',
          'Technical Error Fixes',
          'Monthly Performance Dashboard'
        ],
        terms: 'Minimum 3-month engagement recommended.'
      },
      {
        id: 'seo-advanced',
        title: 'SEO Advanced (Retainer)',
        tagline: 'Dominate your niche.',
        description: 'Aggressive authority building strategy for competitive markets, focusing on topic clusters and high-DR backlinks.',
        price: '1,888',
        priceType: 'Monthly',
        benefits: ['Market Leadership', 'Authority Content', 'Aggressive Growth'],
        deliverables: [
          'Comprehensive Topic Clustering',
          '5 Premium Content Pieces/Month',
          'Competitor De-positioning Strategy',
          '10+ High-Authority Backlinks',
          'Quarterly Strategy Review'
        ],
        terms: '6-month commitment for best results.'
      }
    ]
  },
  {
    id: 'performance-ads',
    title: 'Performance Ads Management',
    description: 'Turn ad spend into revenue with data-driven campaigns on Google, Meta, and TikTok.',
    image: 'https://images.unsplash.com/photo-1557838433-441f9c7423f8?q=80&w=2036&auto=format&fit=crop',
    tags: ['PPC', 'Paid Social', 'Retargeting'],
    longDescription: "Stop guessing with your marketing budget. Our performance ads team uses precise targeting and A/B testing to ensure every dollar spent brings you closer to a sale. We focus on ROAS (Return on Ad Spend).",
    benefits: [
      "Immediate traffic",
      "Precise audience targeting",
      "Scalable lead generation",
      "Measurable ROI"
    ],
    offerings: [],
    subServices: [
      {
        id: 'starter-ads',
        title: 'Starter Ads Management',
        tagline: 'Launch your first campaign.',
        description: 'Perfect for businesses new to paid ads. We set up and manage your first funnel.',
        price: '888',
        priceType: 'Per Platform/Mo',
        benefits: ['Fast Launch', 'Pixel Setup', 'Basic Optimization'],
        deliverables: [
          'Campaign Setup & Structure',
          'Ad Copywriting & Basic Design',
          'Pixel/Tracking Installation',
          'Weekly Optimization',
          'Monthly Report'
        ],
        terms: 'Ad spend paid directly to platform. Min 3 months.'
      },
      {
        id: 'growth-ads',
        title: 'Growth Ads Management',
        tagline: 'Optimize for conversions.',
        description: 'Advanced management including retargeting and A/B testing to lower CPA.',
        price: '1,288',
        priceType: 'Per Platform/Mo',
        benefits: ['Lower CPA', 'Retargeting', 'Creative Testing'],
        deliverables: [
          'Unlimited Campaign Structures',
          'Retargeting Campaigns',
          'A/B Testing (Creatives/Audiences)',
          'Conversion Rate Optimization advice',
          'Bi-Weekly Reporting'
        ],
        terms: 'Ad spend paid directly to platform.'
      },
      {
        id: 'scale-ads',
        title: 'Scale Ads (Multi-Platform)',
        tagline: 'Dominate everywhere.',
        description: 'Omnichannel strategy synchronized across Google, Meta, and others for maximum impact.',
        price: '1,888',
        priceType: 'Per Month',
        benefits: ['Omnichannel Reach', 'Full Funnel', 'High Volume'],
        deliverables: [
          'Cross-Platform Strategy (Google + Meta)',
          'Full-Funnel Architecture',
          'Advanced Audience Segmentation',
          'Weekly Strategy Calls',
          'Real-time Dashboard'
        ],
        terms: 'For ad budgets exceeding RM10k/month.'
      }
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    description: 'Build a loyal community and maintain an active, professional presence across all major social platforms.',
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1974&auto=format&fit=crop',
    tags: ['Brand Awareness', 'Content Creation', 'Community Mgmt'],
    longDescription: "Your customers are on social media. Are you? We handle everything from creative design and copywriting to scheduling and community engagement, ensuring your brand stays top-of-mind.",
    benefits: [
      "Consistent brand voice",
      "Professional visual identity",
      "Time saved on content creation",
      "Increased audience engagement"
    ],
    offerings: [],
    subServices: [
      {
        id: 'social-visibility',
        title: 'Social Visibility Plan',
        tagline: 'Stay active, stay relevant.',
        description: 'Maintenance package to keep your feed active with professional content.',
        price: '588',
        priceType: 'Per Platform/Mo',
        benefits: ['Consistent Presence', 'Professional Look', 'Stress-Free'],
        deliverables: [
          '12 Posts Per Month',
          'Professional Graphic Design',
          'Caption Copywriting',
          'Hashtag Strategy',
          'Scheduling & Posting'
        ],
        terms: 'Content calendar approved 1 week prior to month start.'
      },
      {
        id: 'social-growth',
        title: 'Social Growth Plan',
        tagline: 'Grow your following.',
        description: 'Enhanced strategy focused on increasing reach, engagement, and follower count.',
        price: '1,088',
        priceType: 'Per Platform/Mo',
        benefits: ['Audience Growth', 'High Engagement', 'Viral Potential'],
        deliverables: [
          '20 Posts Per Month (Inc. 4 Reels/TikToks)',
          'Community Engagement (Reply to comments)',
          'Stories Strategy',
          'Monthly Growth Report',
          'Trend Jacking'
        ],
        terms: '30-day cancellation notice.'
      }
    ]
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    description: 'Expert consultation, audits, and maintenance to keep your digital operations running at peak performance.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    tags: ['Consulting', 'Audits', 'Maintenance'],
    longDescription: "Technology moves fast. Our Professional Services provide the expertise you need to navigate complexity, fix root-cause issues, and ensure your digital infrastructure is secure, updated, and aligned with your business goals.",
    benefits: [
      "Expert strategic guidance",
      "Proactive security monitoring",
      "Data-backed decision making",
      "Technical debt reduction"
    ],
    offerings: [],
    subServices: [
      {
        id: 'strategy-consultation',
        title: 'Digital Strategy Consultation',
        tagline: 'Clarity before execution.',
        description: 'A dedicated 1-on-1 session to map out your digital roadmap, identify growth gaps, and optimize ROI.',
        price: '888',
        priceType: 'Per Session',
        benefits: ['Clear Roadmap', 'Risk Reduction', 'Expert Insight'],
        deliverables: [
          '60-Minute Deep Dive Call',
          'Current State Audit',
          'Strategic Growth Roadmap PDF',
          'Technology Stack Recommendation'
        ],
        terms: 'Full payment required prior to booking.'
      },
      {
        id: 'seo-audit',
        title: 'SEO Deep Dive Audit',
        tagline: 'Uncover hidden barriers.',
        description: 'A comprehensive technical and content audit to understand why you aren\'t ranking and how to fix it.',
        price: '488',
        priceType: 'Per Audit',
        benefits: ['Actionable Fixes', 'Competitor Insight', 'Traffic Unlocking'],
        deliverables: [
          'Technical SEO Health Check',
          'Backlink Profile Analysis',
          'Keyword Gap Analysis',
          '15-Page Findings Report',
          'Priority Action List'
        ],
        terms: 'One-time fee. Confidential report.'
      },
      {
        id: 'maintenance-support',
        title: 'Website Maintenance & Support',
        tagline: 'Peace of mind guaranteed.',
        description: 'Ongoing care for your website ensuring it stays online, secure, and up-to-date without you lifting a finger.',
        price: '688',
        priceType: 'Monthly',
        benefits: ['Uptime Monitoring', 'Security Patching', 'Priority Support'],
        deliverables: [
          'Weekly Plugin/Core Updates',
          'Daily Cloud Backups',
          '24/7 Uptime Monitoring',
          'Security Scanning',
          'Monthly Health Report'
        ],
        terms: 'No lock-in contract. 30-day cancellation notice.'
      }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: '1',
    title: 'UI/UX Design Platform',
    category: 'Advanced Analytics',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Social Media Campaigns',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Content Marketing Suite',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'SEO & Marketing Tools',
    category: 'Advanced Analytics',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop'
  }
];

export const TEAM: TeamMember[] = [
  { id: '1', name: 'Marvin Jones', role: 'CEO - Founder', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop' },
  { id: '2', name: 'Arlene Bell', role: 'Chief Marketing', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop' },
  { id: '3', name: 'Guy Hawkins', role: 'Executive Admin', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '10 Essential SEO Strategies for SMEs in 2024',
    category: 'SEO',
    date: 'Dec 15, 2024',
    image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop',
    isFeatured: true,
    excerpt: 'Discover the latest SEO techniques that are driving real results for small and medium enterprises. Learn how to outrank your competitors and increase organic traffic.',
    author: 'Sarah Chen',
    readTime: '8 min read',
    tags: ['SEO', 'SME', 'Organic Traffic']
  },
  {
    id: '2',
    title: 'How AI Automation Can Transform Your Customer Service',
    category: 'AI',
    date: 'Dec 12, 2024',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    isFeatured: true,
    excerpt: 'Learn how artificial intelligence is revolutionizing customer support and reducing operational costs. Discover practical AI tools you can implement today.',
    author: 'Marcus Wong',
    readTime: '12 min read',
    tags: ['AI', 'Automation', 'Customer Service']
  },
  {
    id: '3',
    title: 'Maximizing ROI from Paid Advertising Campaigns',
    category: 'PAID ADS',
    date: 'Dec 10, 2024',
    image: 'https://images.unsplash.com/photo-1557838433-441f9c7423f8?q=80&w=2036&auto=format&fit=crop',
    excerpt: 'Deep dive into performance marketing strategies that actually convert. From Meta ads to Google Search, learn how to optimize your ad spend.',
    author: 'David Kim',
    readTime: '10 min read',
    tags: ['PPC', 'ROI', 'Digital Marketing']
  },
  {
    id: '4',
    title: 'Modern Web Design Trends for Corporate Websites',
    category: 'WEBSITE DESIGN',
    date: 'Dec 08, 2024',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    excerpt: 'What makes a website stand out in 2024? We explore the intersection of aesthetics and functionality in current corporate web design.',
    author: 'Elena Rossi',
    readTime: '7 min read',
    tags: ['Web Design', 'UX', 'Corporate']
  },
  {
    id: '5',
    title: 'The Power of Content Marketing in Building Brand Authority',
    category: 'CONTENT MARKETING',
    date: 'Dec 05, 2024',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Content is king, but strategy is queen. Learn how to create a content engine that builds trust and establishes your brand as an industry leader.',
    author: 'Jessica Low',
    readTime: '9 min read',
    tags: ['Content Strategy', 'Branding', 'Authority']
  },
  {
    id: '6',
    title: 'Automation Workflows for E-Commerce Efficiency',
    category: 'AUTOMATION',
    date: 'Dec 01, 2024',
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1974&auto=format&fit=crop',
    excerpt: 'Scale your online store without scaling your workload. Discover the essential automations every e-commerce business needs to save time.',
    author: 'Michael Tan',
    readTime: '11 min read',
    tags: ['E-Commerce', 'Workflow', 'Scaling']
  }
];

export const PRICING_PLANS = {
  // Legacy object kept for temporary compatibility if needed, but data is now in SERVICES
  website: { category: '', tagline: '', plans: [] },
  professional: { category: '', tagline: '', plans: [] },
  seo: { category: '', tagline: '', plans: [] },
  social: { category: '', tagline: '', plans: [] },
  ads: { category: '', tagline: '', plans: [] },
  automation: { category: '', tagline: '', plans: [] }
};

export const CAREER_OPENINGS: CareerOpening[] = [
  {
    title: "Digital Marketing Executive",
    location: "Kuala Lumpur (Hybrid)",
    type: "Full time",
    hours: "09:00 am - 06:00 pm",
    description: "We help transform the world's most important businesses into vigorous, agile organizations that anticipate the unpredictable, adapt rapidly to disruption and outcompete their opposition.",
    responsibilities: [
      "Develop and execute end-to-end digital marketing campaigns across Meta, Google, and TikTok.",
      "Analyze campaign performance data to optimize ROI and lead generation metrics.",
      "Collaborate with the creative team to produce high-converting ad copies and visual assets.",
      "Manage client marketing budgets and provide transparent weekly reporting."
    ],
    requirements: [
      "2+ years of experience in performance marketing or digital strategy.",
      "Proven track record of managing monthly ad spend exceeding RM10k.",
      "Strong analytical skills and experience with Google Analytics 4.",
      "Excellent communication skills in English and Bahasa Melayu."
    ]
  },
  {
    title: "Platform Support Specialist",
    location: "Remote",
    type: "Full time",
    hours: "09:00 am - 06:00 pm",
    description: "Whatever your ambition may be from embracing new digital capabilities to reimagining how your business operates, we can help you set a new standard of excellence.",
    responsibilities: [
      "Provide second-tier technical support for our proprietary automation platforms.",
      "Troubleshoot API integrations and workflow errors for enterprise clients.",
      "Liaise with the development team to report bugs and suggest feature improvements.",
      "Maintain high client satisfaction scores through timely and effective communication."
    ],
    requirements: [
      "Experience with low-code/no-code tools (Zapier, Make.com) and API structures.",
      "Strong problem-solving mindset and ability to debug complex logical flows.",
      "Prior experience in B2B SaaS support is a major plus.",
      "Availability to work within the GMT+8 timezone."
    ]
  },
  {
    title: "React JS Developer",
    location: "Kuala Lumpur (Hybrid)",
    type: "Full time",
    hours: "09:00 am - 06:00 pm",
    description: "We are a global technology provider who assists businesses to accelerate their digital transformation journey while achieving efficiency, scalability, and lower cost of ownership.",
    responsibilities: [
      "Develop and maintain high-performance web applications using React and Tailwind CSS.",
      "Implement responsive UI components based on Figma designs.",
      "Optimize web applications for maximum speed and scalability.",
      "Collaborate with backend developers to integrate RESTful APIs."
    ],
    requirements: [
      "3+ years of professional experience with React.js and modern frontend ecosystems.",
      "Strong proficiency in TypeScript and state management (Zustand, Redux).",
      "Experience with Framer Motion and modern animation libraries.",
      "Deep understanding of responsive design and web performance optimization."
    ]
  },
  {
    title: "Cloud Ops Administrator",
    location: "Kuala Lumpur (On-site)",
    type: "Full time",
    hours: "09:00 am - 06:00 pm",
    description: "A preeminent provider of strategic marketing consulting services, driven by a fervent commitment to assisting businesses in unlocking their complete potential.",
    responsibilities: [
      "Manage and monitor AWS/GCP cloud environments for high availability.",
      "Configure and maintain CI/CD pipelines for automated deployment.",
      "Implement robust security protocols and regular infrastructure audits.",
      "Optimize cloud costs while maintaining peak system performance."
    ],
    requirements: [
      "Certified AWS SysOps or Solutions Architect Associate preferred.",
      "Experience with Docker, Kubernetes, and Infrastructure as Code (Terraform).",
      "Strong background in Linux server administration and networking.",
      "Proficiency in scripting languages like Python or Bash for automation."
    ]
  }
];

export const FAQS = {
  home: [
    { question: "What services does JXING offer?", answer: "We offer a comprehensive range of digital services including Web Design, Mobile App Development, Digital Marketing, SEO, and System Software solutions." },
    { question: "How do you handle project timelines?", answer: "We work in agile sprints, providing regular updates and milestones. A typical web project takes 6-10 weeks depending on complexity." },
    { question: "Do you work with startups?", answer: "Yes! We love helping startups grow. We have specific packages tailored for early-stage companies to get them to market quickly." },
  ],
  company: [
    { question: "Where are you located?", answer: "Our head office is in Santa Ana, Illinois, but we have a distributed team working globally." },
    { question: "Are you hiring?", answer: "We are always looking for talented individuals. Check out our Careers page for current openings." },
    { question: "What is your company culture like?", answer: "We value innovation, transparency, and work-life balance. We believe happy employees do the best work." },
  ],
  services: [
    { question: "What technologies do you use?", answer: "We specialize in React, Node.js, Python, and cloud infrastructure on AWS and Google Cloud." },
    { question: "Can you help with legacy system migration?", answer: "Absolutely. We have extensive experience modernizing legacy systems and migrating them to the cloud." },
    { question: "Do you offer post-launch support?", answer: "Yes, we offer various maintenance and support packages to ensure your digital products remain secure and up-to-date." },
  ],
  caseStudies: [
    { question: "Can I see more examples of your work?", answer: "This page highlights a selection of our best work. Contact us for a more specific portfolio related to your industry." },
    { question: "What was the ROI for these projects?", answer: "We focus on measurable results. For example, our work with Recon resulted in a 300% increase in lead generation." },
  ],
  news: [
    { question: "Do you accept guest posts?", answer: "We occasionally accept high-quality guest posts from industry experts. Contact our editorial team for guidelines." },
    { question: "How often do you publish?", answer: "We aim to publish new insights and industry news weekly." },
  ],
  contact: [
    { question: "What is the best way to contact you?", answer: "The contact form on this page is the quickest way to reach the right department. You can also email hello@diteck.com." },
    { question: "Do you offer free consultations?", answer: "Yes, we offer a free initial 30-minute consultation to discuss your project needs." },
  ],
  pricing: [
    { question: "Can I switch plans later?", answer: "Yes, you can upgrade or downgrade your plan at any time. The changes will be reflected in your next billing cycle." },
    { question: "Is there a long-term contract?", answer: "No, all our plans are month-to-month unless you choose an annual subscription for a discount." },
    { question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise clients." },
  ]
};

// Removed Awards
export const COMPANY_AWARDS = [];

// Removed Awards Stats
export const COMPANY_STATS = [
  { label: "years experience working", value: "25+" },
  { label: "qualified staff", value: "97+" },
  { label: "projects completed", value: "475+" },
];

export const COMPANY_VALUES = [
  { title: "Grow Every Day", description: "We learn, improve, and adapt continuously. Even small steps forward matter." },
  { title: "Own It", description: "We take responsibility for outcomes. Initiative is a key part of our culture." },
  { title: "Client First", description: "We put client results above everything else. Their success is our success." },
  { title: "Fast, Focused, Fearless", description: "We act quickly, stay focused on what matters, and improve through real world feedback." },
  { title: "Think Outcomes", description: "Meaningful results matter more than activity. We measure and optimise everything." },
  { title: "Simplify and Automate", description: "We remove unnecessary friction and use automation to create efficient systems." },
  { title: "Speak Openly, Respect Deeply", description: "We communicate with clarity and kindness. Feedback is encouraged and valued." },
  { title: "Celebrate Wins", description: "Every achievement counts. We appreciate progress, big and small." },
];
