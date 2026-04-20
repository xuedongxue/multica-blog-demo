"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/types";
import { fadeInUp } from "@/lib/animations";

type SkillCardProps = {
  skill: Skill;
};

export function SkillCard({ skill }: SkillCardProps) {
  const width = `${Math.min(100, Math.max(0, skill.proficiency))}%`;

  return (
    <motion.article
      layout
      variants={fadeInUp}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 26 }}
      className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/60 p-6 shadow-sm backdrop-blur-xl hover:shadow-xl dark:bg-white/5"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at 50% 0%, rgba(0, 113, 227, 0.28), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="relative flex flex-col gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/40 text-xl shadow-inner dark:bg-white/10"
          aria-hidden
        >
          {skill.icon}
        </div>
        <h3 className="font-display text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {skill.name}
        </h3>
        <div className="mt-1">
          <div className="h-1 w-full overflow-hidden rounded-full bg-zinc-200/80 dark:bg-white/15">
            <div
              className="h-full rounded-full bg-gradient-to-r from-apple-blue to-sky-400"
              style={{ width }}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
