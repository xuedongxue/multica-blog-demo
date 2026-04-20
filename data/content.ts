import type { NavItem, Project, Skill } from "@/types";

export const navItems: NavItem[] = [
  { id: "hero", label: "首页", href: "#hero" },
  { id: "about", label: "关于", href: "#about" },
  { id: "skills", label: "技能", href: "#skills" },
  { id: "projects", label: "项目", href: "#projects" },
  { id: "contact", label: "联系", href: "#contact" },
];

export const skills: Skill[] = [
  { id: "ts", name: "TypeScript", level: 90 },
  { id: "next", name: "Next.js", level: 88 },
  { id: "react", name: "React", level: 90 },
];

export const projects: Project[] = [
  {
    id: "demo-1",
    title: "示例项目 A",
    description: "占位描述：后续替换为真实项目简介与链接。",
    href: "https://example.com",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    id: "demo-2",
    title: "示例项目 B",
    description: "占位描述：可在此展示开源、产品或设计作品。",
    tech: ["TypeScript", "Framer Motion"],
  },
];

export const heroCopy = {
  eyebrow: "Hello",
  title: "极简留白，清晰表达。",
  subtitle:
    "个人介绍与作品展示的占位数据，可在正式开发中接入 CMS 或数据源。",
};
