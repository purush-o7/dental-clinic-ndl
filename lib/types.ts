export type ServiceCategory = "Cosmetic" | "Restorative" | "Preventive" | "Specialized";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  iconName: string;
  features: string[];
  category: ServiceCategory;
}

export interface Testimonial {
  id: number;
  name: string;
  treatment: string;
  rating: number;
  quote: string;
  avatar?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Award {
  title: string;
  organization: string;
  year: string;
}

export interface Publication {
  title: string;
  journal: string;
  year: string;
}

export interface DoctorProfile {
  name: string;
  title: string;
  qualifications: string[];
  bio: string;
  education: Education[];
  awards: Award[];
  publications: Publication[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FamilyCardBenefit {
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  iconName: string;
}
