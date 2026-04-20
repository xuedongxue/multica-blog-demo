export const NAV_SECTIONS = [
  { id: "hero", label: "首页" },
  { id: "about", label: "关于" },
  { id: "skills", label: "技能" },
  { id: "projects", label: "项目" },
  { id: "contact", label: "联系" },
] as const;

export type NavSectionId = (typeof NAV_SECTIONS)[number]["id"];

export const NAV_SECTION_IDS: readonly NavSectionId[] = NAV_SECTIONS.map(
  (s) => s.id
);
