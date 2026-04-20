export type Project = {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  image: string;
  tech: string[];
  githubUrl: string;
  demoUrl: string;
};

export const projects: Project[] = [
  {
    id: "aurora-dashboard",
    title: "Aurora Analytics",
    desc: "实时业务指标与漏斗分析面板，支持自定义看板与团队协作。采用边缘缓存与流式聚合，保证大屏刷新顺滑。",
    tags: ["SaaS", "数据可视化", "B2B"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    tech: ["Next.js", "TypeScript", "Tailwind", "TRPC"],
    githubUrl: "https://github.com/vercel/next.js",
    demoUrl: "https://nextjs.org",
  },
  {
    id: "loom-notes",
    title: "Loom Notes",
    desc: "离线优先的灵感速记应用，块编辑器、双向链接与全文检索，让碎片想法连成知识网络。",
    tags: ["生产力", "编辑器", "本地优先"],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
    tech: ["React", "IndexedDB", "ProseMirror"],
    githubUrl: "https://github.com/facebook/react",
    demoUrl: "https://react.dev",
  },
  {
    id: "nimbus-pay",
    title: "Nimbus Pay",
    desc: "多币种结算与风控工作台，为跨境商户提供对账、拒付预警与合规报表的一站式入口。",
    tags: ["FinTech", "支付", "合规"],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
    tech: ["Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/nodejs/node",
    demoUrl: "https://nodejs.org",
  },
  {
    id: "pixel-atelier",
    title: "Pixel Atelier",
    desc: "设计系统与组件文档站，内置主题实验室与无障碍检查，帮助团队在一致性与创意之间取得平衡。",
    tags: ["设计系统", "文档", "A11y"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
    tech: ["Storybook", "Vite", "React Aria"],
    githubUrl: "https://github.com/storybookjs/storybook",
    demoUrl: "https://storybook.js.org",
  },
];
