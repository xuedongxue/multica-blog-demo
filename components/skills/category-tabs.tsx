"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES, type SkillCategory } from "@/types";

type CategoryTabsProps = {
  active: SkillCategory;
  onChange: (category: SkillCategory) => void;
};

export function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div
      className="flex flex-wrap gap-1 border-b border-zinc-200/80 pb-px dark:border-white/10"
      role="tablist"
      aria-label="技能分类"
    >
      {SKILL_CATEGORIES.map((category) => {
        const isActive = active === category;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category)}
            className="relative px-4 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <span
              className={
                isActive
                  ? "font-semibold text-apple-blue"
                  : "text-inherit"
              }
            >
              {category}
            </span>
            {isActive ? (
              <motion.div
                layoutId="skills-category-underline"
                className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-apple-blue"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
