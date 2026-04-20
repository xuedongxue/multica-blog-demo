"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/types";

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 420, damping: 28 },
  },
};

type SkillCardProps = {
  skill: Skill;
};

export function SkillCard({ skill }: SkillCardProps) {
  const fill =
    Math.min(100, Math.max(0, skill.proficiency)) / 100;

  return (
    <motion.article
      layout
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 26 }}
      className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/60 p-6 shadow-sm backdrop-blur-xl hover:shadow-xl dark:bg-white/5"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(600px_circle_at_50%_0%,rgba(0,113,227,0.28),transparent_55%)] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
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
              className="h-full origin-left rounded-full bg-gradient-to-r from-apple-blue to-sky-400"
              style={{ transform: `scaleX(${fill})` }}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
