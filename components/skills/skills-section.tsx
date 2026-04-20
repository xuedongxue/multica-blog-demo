"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CategoryTabs } from "./category-tabs";
import { SkillCard } from "./skill-card";
import { SKILLS, type SkillCategory } from "@/types";

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export function SkillsSection() {
  const [active, setActive] = useState<SkillCategory>("Frontend");

  const filtered = useMemo(
    () => SKILLS.filter((s) => s.category === active),
    [active],
  );

  return (
    <motion.section
      className="mx-auto max-w-6xl px-4 py-16 font-[family-name:var(--font-geist-sans)]"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <header className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          技能
        </h2>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          玻璃拟态卡片矩阵 · 按分类浏览
        </p>
      </header>

      <CategoryTabs active={active} onChange={setActive} />

      <motion.div
        key={active}
        className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {filtered.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </motion.div>
    </motion.section>
  );
}
