"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutContent } from "@/data/content";
import { AboutStats } from "./about-stats";

const viewport = {
  once: true,
  amount: 0.5 as const,
  margin: "-100px" as const,
};

const slideInLeft = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const watermark = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.1,
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function AboutSection() {
  const { sectionIndex, title, subtitle, paragraphs, avatar, stats } =
    aboutContent;

  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 md:grid-cols-2 md:items-center md:gap-16">
        <motion.div
          className="relative z-10"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="relative">
            <motion.span
              className="pointer-events-none absolute -left-2 -top-8 select-none text-8xl font-bold text-apple-gray-100/20 md:-left-4 md:-top-10"
              variants={watermark}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              aria-hidden
            >
              {sectionIndex}
            </motion.span>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.p
                variants={staggerItem}
                className="relative text-sm font-medium uppercase tracking-[0.2em] text-apple-gray-400"
              >
                {sectionIndex}
              </motion.p>
              <motion.h2
                variants={staggerItem}
                className="relative mt-3 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl"
              >
                {title}
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="relative mt-4 text-lg text-apple-gray-500 md:text-xl"
              >
                {subtitle}
              </motion.p>
              {paragraphs.map((text) => (
                <motion.p
                  key={text}
                  variants={staggerItem}
                  className="relative mt-6 max-w-xl text-base leading-relaxed text-neutral-700"
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </div>

          <div
            className="mt-10 h-px w-full bg-apple-gray-300 opacity-10"
            role="presentation"
          />

          <AboutStats stats={stats} />
        </motion.div>

        <motion.div
          className="relative flex justify-center md:justify-end"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="relative flex h-[min(420px,70vw)] w-[min(420px,70vw)] max-w-full items-center justify-center rounded-full bg-apple-blue-gradient p-10 shadow-2xl md:h-[380px] md:w-[380px]">
            <div className="relative h-[300px] w-[300px] shrink-0 overflow-hidden rounded-full border-4 border-white shadow-2xl">
              <Image
                src={avatar.src}
                alt={avatar.alt}
                width={300}
                height={300}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
