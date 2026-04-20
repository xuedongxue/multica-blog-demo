"use client";

import { heroContent } from "@/data/content";

export function HeroCta() {
  return (
    <div className="flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
      <a
        href="#projects"
        className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-apple-blue px-8 py-3 text-center text-base font-medium text-white transition-[filter] hover:brightness-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
      >
        {heroContent.ctaPrimary}
      </a>
      <a
        href="#contact"
        className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-black/12 bg-white/70 px-8 py-3 text-center text-base font-medium text-black/85 backdrop-blur-sm transition-colors hover:bg-white/90 dark:border-white/18 dark:bg-white/[0.06] dark:text-white/90 dark:hover:bg-white/10"
      >
        {heroContent.ctaSecondary}
      </a>
    </div>
  );
}
