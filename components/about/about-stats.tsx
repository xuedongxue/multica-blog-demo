"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/data/content";
import {
  fadeInUp,
  scrollRevealViewport,
  staggerContainer,
} from "@/lib/animations";

type Stat = (typeof aboutContent.stats)[number];

type AboutStatsProps = {
  stats: readonly Stat[];
};

export function AboutStats({ stats }: AboutStatsProps) {
  return (
    <motion.ul
      className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={scrollRevealViewport}
    >
      {stats.map((stat) => (
        <motion.li key={stat.label} variants={fadeInUp} className="text-left">
          <p className="text-3xl font-semibold tracking-tight text-neutral-900">
            {stat.value}
          </p>
          <p className="mt-1 text-sm text-apple-gray-500">{stat.label}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
}
