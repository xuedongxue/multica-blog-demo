"use client";

import Image from "next/image";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/content";

const layoutIdFor = (id: string) => `project-shell-${id}`;

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          key={project.id}
          className="fixed inset-0 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.button
            type="button"
            aria-label="关闭"
            className="absolute inset-0 cursor-default backdrop-blur-lg bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-4 md:p-8">
            <motion.div
              layoutId={layoutIdFor(project.id)}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`project-title-${project.id}`}
              className="pointer-events-auto relative flex max-h-[min(90vh,880px)] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-neutral-950 shadow-2xl shadow-black/60"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48 shrink-0 md:h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, min(1024px, 90vw)"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-white/30"
                  aria-label="关闭"
                >
                  <span className="text-lg leading-none">×</span>
                </button>
              </div>

              <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto p-6 text-white md:p-10">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <h2
                    id={`project-title-${project.id}`}
                    className="text-3xl font-semibold tracking-tight md:text-4xl"
                  >
                    {project.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
                    {project.desc}
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/50">
                    技术栈
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-medium text-white/95"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 transition-opacity hover:opacity-90"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
