export type SkillCategory = "Frontend" | "Backend" | "DevOps" | "Design";

export interface Skill {
  id: string;
  name: string;
  /** Emoji or short text label used as icon */
  icon: string;
  category: SkillCategory;
  /** 0–100 */
  proficiency: number;
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  "Frontend",
  "Backend",
  "DevOps",
  "Design",
];

export const SKILLS: Skill[] = [
  {
    id: "react",
    name: "React",
    icon: "⚛️",
    category: "Frontend",
    proficiency: 92,
  },
  {
    id: "next",
    name: "Next.js",
    icon: "▲",
    category: "Frontend",
    proficiency: 88,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "🎨",
    category: "Frontend",
    proficiency: 90,
  },
  {
    id: "ts",
    name: "TypeScript",
    icon: "📘",
    category: "Frontend",
    proficiency: 91,
  },
  {
    id: "node",
    name: "Node.js",
    icon: "🟢",
    category: "Backend",
    proficiency: 85,
  },
  {
    id: "go",
    name: "Go",
    icon: "🐹",
    category: "Backend",
    proficiency: 78,
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    icon: "🐘",
    category: "Backend",
    proficiency: 82,
  },
  {
    id: "docker",
    name: "Docker",
    icon: "🐳",
    category: "DevOps",
    proficiency: 86,
  },
  {
    id: "k8s",
    name: "Kubernetes",
    icon: "☸️",
    category: "DevOps",
    proficiency: 72,
  },
  {
    id: "ci",
    name: "GitHub Actions",
    icon: "⚙️",
    category: "DevOps",
    proficiency: 80,
  },
  {
    id: "figma",
    name: "Figma",
    icon: "🎯",
    category: "Design",
    proficiency: 75,
  },
  {
    id: "motion",
    name: "Framer Motion",
    icon: "✨",
    category: "Design",
    proficiency: 83,
  },
  {
    id: "a11y",
    name: "Accessibility",
    icon: "♿",
    category: "Design",
    proficiency: 79,
  },
];
