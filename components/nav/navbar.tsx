"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { MobileDrawer } from "@/components/nav/mobile-drawer";
import { NAV_SECTIONS, NAV_SECTION_IDS } from "@/lib/nav-sections";
import { scrollToSection } from "@/lib/scroll-to-section";
import { fadeInUp } from "@/lib/animations";

const NAV_HEIGHT_PX = 48;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(NAV_SECTION_IDS);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const onNavClick = useCallback((id: string) => {
    scrollToSection(id);
  }, []);

  const navInner = (
    <nav className="relative flex h-12 items-center px-4 md:px-8">
      <motion.div
        aria-hidden
        className={`pointer-events-none absolute inset-0 -z-10 transition-colors duration-300 ${
          scrolled ? "bg-white/70 dark:bg-[#1d1d1f]/70" : "bg-transparent"
        }`}
        initial={false}
        animate={{
          backdropFilter: scrolled ? "blur(24px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <div
        className={`absolute bottom-0 left-0 right-0 border-b transition-colors duration-300 ${
          scrolled ? "border-white/10" : "border-transparent"
        }`}
      />

      <span className="relative z-10 font-display text-sm font-bold tracking-tight">
        Blog
      </span>

      <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:flex md:gap-8">
        {NAV_SECTIONS.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className={`text-sm font-medium transition-colors ${
                isActive
                  ? "text-apple-blue"
                  : "text-neutral-800 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-white"
              }`}
              onClick={() => onNavClick(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="ml-auto flex items-center md:ml-0 md:flex-1 md:justify-end">
        <button
          type="button"
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-md md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className="sr-only">菜单</span>
          <span className="flex w-5 flex-col gap-1.5">
            <motion.span
              className="block h-0.5 w-full bg-neutral-900 dark:bg-white"
              animate={
                mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-full bg-neutral-900 dark:bg-white"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block h-0.5 w-full bg-neutral-900 dark:bg-white"
              animate={
                mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
            />
          </span>
        </button>
      </div>
    </nav>
  );

  return (
    <>
      <AnimatePresence>
        {prefersReduced ? (
          <header
            key="site-navbar-static"
            className="fixed top-0 left-0 right-0 z-50 h-12"
          >
            {navInner}
          </header>
        ) : (
          <motion.header
            key="site-navbar"
            className="fixed top-0 left-0 right-0 z-50 h-12"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {navInner}
          </motion.header>
        )}
      </AnimatePresence>
      <div style={{ height: NAV_HEIGHT_PX }} aria-hidden className="shrink-0" />
      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={NAV_SECTIONS}
        activeId={activeId}
      />
    </>
  );
}
