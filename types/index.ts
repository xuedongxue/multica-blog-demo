export interface Project {
  id: string;
  title: string;
  description: string;
  href?: string;
  tech: string[];
}

export interface Skill {
  id: string;
  name: string;
  level?: number;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
