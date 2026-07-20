// ============================================================================
// Portfolio Type Definitions
// Naveen R — Robotics AI Engineer
// ============================================================================

export interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  category: string;
  featured: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerLogo?: string;
  date?: string;
  credentialUrl?: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  topic: string;
  date: string;
  readTime: string;
  url?: string;
  tags: string[];
}

export interface Experience {
  id: string;
  title: string;
  organization?: string;
  period: string;
  description: string;
  highlights: string[];
  icon: string;
  color: string;
}

export interface CounterStat {
  label: string;
  value: number;
  suffix: string;
}
