"use client";

import { AnimatePresence, motion } from "framer-motion";
import { scrollToSection } from "@/lib/scroll-to-section";

export type NavItem = { id: string; label: string };

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
  items: readonly NavItem[];
  activeId: string | null;
};

export function MobileDrawer({
  open,
  onClose,
  items,
  activeId,
}: MobileDrawerProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="关闭菜单"
            className="absolute inset-0 bg-black"
            onClick={onClose}
          />
          <motion.aside
            className="absolute right-0 top-0 flex h-full w-full flex-col bg-black px-8 py-16"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-6">
              {items.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`text-left text-lg font-medium transition-colors ${
                      isActive ? "text-apple-blue" : "text-white/90"
                    }`}
                    onClick={() => {
                      scrollToSection(item.id);
                      onClose();
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
