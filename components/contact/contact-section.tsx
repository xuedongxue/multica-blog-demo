"use client";

import { motion } from "framer-motion";
import { SocialLinks } from "./social-links";

const MAILTO = "mailto:hello@example.com";

export function ContactSection() {
  const year = new Date().getFullYear();

  return (
    <section
      className="w-full bg-[#1d1d1f] py-24 text-white"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.h2
          id="contact-heading"
          className="text-5xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        >
          Let&apos;s work together.
        </motion.h2>

        <p className="mt-4 max-w-xl text-lg text-white/50">
          有项目想法或合作机会？欢迎发邮件，或在下方找到我。
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <motion.a
            href={MAILTO}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#0071e3] px-8 text-sm font-medium text-white transition-colors hover:bg-[#0077ed]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            发送邮件
          </motion.a>
          <a
            href="/resume.pdf"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 bg-transparent px-8 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            查看简历
          </a>
        </div>

        <div className="mt-14 w-full">
          <SocialLinks />
        </div>

        <p className="mt-16 text-sm text-white/30">
          © {year} Multica Blog Demo. All rights reserved.
        </p>
      </div>
    </section>
  );
}
