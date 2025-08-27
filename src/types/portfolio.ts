export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface Social {
  platform: string;
  url: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  achievements?: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  description: string;
  avatar: string;
  projects: Project[];
  skills: Skill[];
  socials: Social[];
  email: string;
  experience: Experience[];
  education: Education[];
}