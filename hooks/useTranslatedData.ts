
import { useTranslation } from 'react-i18next';
import { SERVICES, FAQS, CAREER_OPENINGS, TEAM, PROJECTS, BLOG_POSTS, COMPANY_STATS, COMPANY_VALUES, PRICING_PLANS } from '../constants';

const TESTIMONIALS_DATA = [
  { id: 1, quote: "JXING transformed our marketing completely. We saw a 250% increase in qualified leads within 3 months.", author: "Sarah Johnson", role: "TechStart Inc.", metric: "Over 250% increase in organic traffic" },
  { id: 2, quote: "The automation solutions saved us countless hours. Our team can now focus on what matters most.", author: "Mike Chen", role: "GrowthCo", metric: "Generated 400+ qualified leads" },
  { id: 3, quote: "Their subscription model made enterprise-level digital marketing accessible for our small business.", author: "Jennifer Liu", role: "LocalBiz Solutions", metric: "300% ROI increase in 6 months" }
];

export const useTranslatedData = () => {
  const { t } = useTranslation();

  const services = SERVICES.map(service => ({
    ...service,
    title: t(`data.services.${service.id}.title`, service.title),
    description: t(`data.services.${service.id}.description`, service.description),
    longDescription: t(`data.services.${service.id}.longDescription`, service.longDescription),
    tags: service.tags.map((tag, i) => t(`data.services.${service.id}.tags.${i}`, tag)),
    benefits: service.benefits?.map((benefit, i) => 
      t(`data.services.${service.id}.benefits.${i}`, benefit)
    ),
    subServices: service.subServices.map((sub, i) => ({
      ...sub,
      title: t(`data.services.${service.id}.subServices.${sub.id}.title`, sub.title),
      tagline: t(`data.services.${service.id}.subServices.${sub.id}.tagline`, sub.tagline),
      description: t(`data.services.${service.id}.subServices.${sub.id}.description`, sub.description),
      priceType: t(`data.services.${service.id}.subServices.${sub.id}.priceType`, sub.priceType),
      terms: t(`data.services.${service.id}.subServices.${sub.id}.terms`, sub.terms || ''),
      benefits: sub.benefits.map((b, j) => t(`data.services.${service.id}.subServices.${sub.id}.benefits.${j}`, b)),
      deliverables: sub.deliverables.map((d, j) => t(`data.services.${service.id}.subServices.${sub.id}.deliverables.${j}`, d)),
    }))
  }));

  // Keep legacy pricing hook for Pricing page if needed, but updated to use defaults to avoid crash
  // In a real scenario, we would refactor Pricing page to read from services as well.
  const pricing = PRICING_PLANS; 

  const faqs = {
    home: FAQS.home.map((f, i) => ({
      question: t(`data.faqs.home.${i}.question`, f.question),
      answer: t(`data.faqs.home.${i}.answer`, f.answer)
    })),
    company: FAQS.company.map((f, i) => ({
      question: t(`data.faqs.company.${i}.question`, f.question),
      answer: t(`data.faqs.company.${i}.answer`, f.answer)
    })),
    services: FAQS.services.map((f, i) => ({
      question: t(`data.faqs.services.${i}.question`, f.question),
      answer: t(`data.faqs.services.${i}.answer`, f.answer)
    })),
    caseStudies: FAQS.caseStudies.map((f, i) => ({
      question: t(`data.faqs.caseStudies.${i}.question`, f.question),
      answer: t(`data.faqs.caseStudies.${i}.answer`, f.answer)
    })),
    news: FAQS.news.map((f, i) => ({
      question: t(`data.faqs.news.${i}.question`, f.question),
      answer: t(`data.faqs.news.${i}.answer`, f.answer)
    })),
    contact: FAQS.contact.map((f, i) => ({
      question: t(`data.faqs.contact.${i}.question`, f.question),
      answer: t(`data.faqs.contact.${i}.answer`, f.answer)
    })),
    pricing: FAQS.pricing.map((f, i) => ({
      question: t(`data.faqs.pricing.${i}.question`, f.question),
      answer: t(`data.faqs.pricing.${i}.answer`, f.answer)
    })),
  };

  const careerOpenings = CAREER_OPENINGS.map((job, i) => ({
    ...job,
    title: t(`data.career.${i}.title`, job.title),
    location: t(`data.career.${i}.location`, job.location),
    type: t(`data.career.${i}.type`, job.type),
    description: t(`data.career.${i}.description`, job.description),
  }));

  const team = TEAM.map((member, i) => ({
    ...member,
    role: t(`data.team.${i}.role`, member.role)
  }));
  
  const projects = PROJECTS.map((proj, i) => ({
    ...proj,
    title: t(`data.projects.${i}.title`, proj.title),
    category: t(`data.projects.${i}.category`, proj.category),
  }));
  
  const blogPosts = BLOG_POSTS.map((post, i) => ({
    ...post,
    title: t(`data.blog.${i}.title`, post.title),
    category: t(`data.blog.${i}.category`, post.category),
  }));

  const testimonials = TESTIMONIALS_DATA.map((item, i) => ({
    ...item,
    quote: t(`data.testimonials.${i}.quote`, item.quote),
    role: t(`data.testimonials.${i}.role`, item.role),
    metric: t(`data.testimonials.${i}.metric`, item.metric),
  }));

  const companyStats = COMPANY_STATS.map((stat, i) => ({
    ...stat,
    label: t(`data.companyStats.${i}.label`, stat.label)
  }));

  const companyValues = COMPANY_VALUES.map((val, i) => ({
    ...val,
    title: t(`data.companyValues.${i}.title`, val.title),
    description: t(`data.companyValues.${i}.description`, val.description)
  }));

  return { services, pricing, faqs, careerOpenings, team, projects, blogPosts, testimonials, companyStats, companyValues };
};
