
export interface SubServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  price: string;
  priceType: string; // e.g. "Starting at", "Monthly", "One-time"
  benefits: string[];
  deliverables: string[];
  terms?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  offerings?: { title: string; description: string }[];
  subServices: SubServiceItem[];
  longDescription?: string;
  benefits?: string[];
  deliverables?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  isFeatured?: boolean;
  excerpt?: string;
  author?: string;
  readTime?: string;
  tags?: string[];
}
export interface CareerOpening {
  title: string;
  location: string;
  type: string;
  description: string;
  responsibilities?: string[];
  requirements?: string[];
  hours?: string;
}

export interface CaseStudyPainPoint {
  title: string;
  description: string;
}

export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  sublabel: string;
}

export interface CaseStudyContentPillar {
  title: string;
  percentage: number;
  description: string;
  color: string;
}

export interface CaseStudyTopPost {
  title: string;
  format: string;
  theme: string;
  views: number;
  likes: number;
}

export interface CaseStudyChartData {
  name: string;
  value: number;
}

export interface CaseStudyStrategicWin {
  title: string;
  description: string;
}

export interface CaseStudyExtendedData {
  handle?: string;
  overviewMetrics?: CaseStudyMetric[];
  contentPillars?: CaseStudyContentPillar[];
  topPosts?: CaseStudyTopPost[];
  growthChart?: CaseStudyChartData[];
  impressionsChart?: CaseStudyChartData[];
  strategicWins?: CaseStudyStrategicWin[];
  reportSummary?: {
    followerGrowth: string;
    avgEngagement: string;
    discoveryRate: string;
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  heroImage: string;
  beforeImage: string;
  afterImage: string;
  clientLogo?: string;
  industry: string;
  duration: string;
  year: string;
  struggle: {
    headline: string;
    description: string;
    painPoints: CaseStudyPainPoint[];
  };
  solution: {
    description: string;
    highlights: string[];
  };
  stats: CaseStudyStat[];
  verdict: {
    analogy: string;
    quote: string;
    tagline: string;
  };
  ctaText: string;
  services: string[];
  extendedData?: CaseStudyExtendedData;
}
