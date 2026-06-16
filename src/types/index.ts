export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory[];
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
  impact: string;
  achievement?: string;
  problem?: string;
  solution?: string;
  challenges?: string[];
  featured?: boolean;
}

export type ProjectCategory = "Full-Stack" | "AI/ML" | "Hackathon" | "Open Source" | "Mobile" | "Web3";

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  logo?: string;
  type: "work" | "education" | "hackathon";
}

export interface Skill {
  category: string;
  items: string[];
  icon?: string;
}
