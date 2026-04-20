"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  animationVariants,
  scrollRevealViewport,
  type AnimationVariantKey,
} from "@/lib/animations";

export type AnimateInProps = {
  children: React.ReactNode;
  variant?: Exclude<AnimationVariantKey, "staggerContainer">;
  delay?: number;
  className?: string;
};

export function AnimateIn({
  children,
  variant = "fadeInUp",
  delay = 0,
  className,
}: AnimateInProps) {
  const prefersReduced = useReducedMotion();
  const variants = animationVariants[variant];

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={scrollRevealViewport}
      transition={delay > 0 ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}
