
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
