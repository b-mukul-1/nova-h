export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  tagline: string;
  overview: string;
  iconName: string;
  accentColor: string;
  deliverables: string[];
  useCases: string[];
  technologies: string[];
  approach: string[];
  image: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
  durationEstimate: string;
  focusArea: string;
}

export interface Principle {
  id: string;
  title: string;
  summary: string;
  details: string;
  tag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface CaseStudyData {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  implementation: string[];
  deliverables: string[];
  projectedOutcomes: string[];
  technologies: string[];
  image: string;
}

export interface ContactFormData {
  fullName: string;
  businessEmail: string;
  companyName: string;
  selectedService: string;
  estimatedTimeline: string;
  projectRequirements: string;
  consentAgreed: boolean;
}

export interface FormErrors {
  fullName?: string;
  businessEmail?: string;
  selectedService?: string;
  projectRequirements?: string;
  consentAgreed?: string;
}
