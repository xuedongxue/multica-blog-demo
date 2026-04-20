"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { heroContent } from "@/data/content";
import { fadeInUp, scrollRevealViewport, staggerContainer } from "@/lib/animations";
import { HeroCta } from "./hero-cta";

function ScrollParallaxTitle({
  titleY,
  children,
}: {
  titleY: MotionValue<number>;
  children: React.ReactNode;
}) {
  return (
    <motion.div style={{ y: titleY }} className="will-change-transform">
      {children}
    </motion.div>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.65, 1],
    [1, 0.75, 0],
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen scroll-mt-12 flex-col items-center justify-center overflow-x-hidden bg-[#f5f5f7] px-4 pb-16 pt-24 dark:bg-black sm:px-6"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[40%] h-[min(72vw,540px)] w-[min(92vw,760px)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(0,113,227,0.3),transparent_72%)] blur-[120px]"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1.2, bounce: 0.22 }}
      />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center"
        style={{ opacity: contentOpacity }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollRevealViewport}
          className="flex flex-col items-center gap-6 md:gap-8"
        >
          <ScrollParallaxTitle titleY={titleY}>
            <motion.h1
              variants={fadeInUp}
              className="max-w-[min(100%,18ch)] break-words font-display text-6xl font-bold leading-[1.05] tracking-tightest text-black dark:text-white md:max-w-[min(100%,22ch)] md:text-8xl"
            >
              {heroContent.title}
            </motion.h1>
          </ScrollParallaxTitle>
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl text-pretty px-2 text-xl font-light text-apple-gray-200 dark:text-neutral-400 md:text-2xl"
          >
            {heroContent.subtitle}
          </motion.p>
          <motion.div variants={fadeInUp} className="w-full pt-1 md:pt-2">
            <HeroCta />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
