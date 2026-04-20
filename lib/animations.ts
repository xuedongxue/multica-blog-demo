import type { Variants } from "framer-motion";

const easeStandard: [number, number, number, number] = [
  0.25, 0.46, 0.45, 0.94,
];

const transitionBase = {
  duration: 0.6,
  ease: easeStandard,
} as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionBase,
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionBase,
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionBase,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitionBase,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: transitionBase,
  },
};

export const animationVariants = {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  blurIn,
} as const;

export type AnimationVariantKey = keyof typeof animationVariants;

/** Shared scroll-trigger viewport for section reveals (matches AnimateIn). */
export const scrollRevealViewport = {
  once: true,
  margin: "-80px",
} as const;
