"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/data/content";

type Stat = (typeof aboutContent.stats)[number];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const viewport = {
  once: true,
  amount: 0.5 as const,
  margin: "-100px" as const,
};

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
      viewport={viewport}
    >
      {stats.map((stat) => (
        <motion.li key={stat.label} variants={staggerItem} className="text-left">
          <p className="text-3xl font-semibold tracking-tight text-neutral-900">
            {stat.value}
          </p>
          <p className="mt-1 text-sm text-apple-gray-500">{stat.label}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
}
