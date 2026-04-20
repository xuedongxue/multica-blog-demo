export const aboutContent = {
  sectionIndex: "01",
  title: "About Me",
  subtitle: "热爱构建美的东西",
  paragraphs: [
    "全栈开发者，专注产品与交互细节，让技术服务于清晰而优雅的体验。",
    "日常深耕 React 与 Next.js，也乐于探索动效与排版如何传递情绪。",
    "相信好的软件像苹果产品一样：克制、精准、令人愉悦。",
  ] as const,
  avatar: {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
    alt: "Portrait",
  },
  stats: [
    { label: "工作年限", value: "3+" },
    { label: "交付项目", value: "20+" },
    { label: "开源仓库", value: "5" },
    { label: "技术文章", value: "12+" },
  ] as const,
} as const;
