"use client";

import { useState } from "react";
import { LayoutGroup } from "framer-motion";
import { AnimateIn } from "@/components/ui/animate-in";
import { projects } from "@/data/content";
import type { Project } from "@/data/content";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <LayoutGroup>
      <section
        id="projects"
        className="w-full max-w-6xl scroll-mt-12 px-4 py-16 md:px-6 md:py-24"
      >
        <AnimateIn variant="fadeInUp">
          <div className="mb-10 md:mb-14">
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Selected work
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
              项目展示
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">
              仿 App Store Today 大卡片布局，点击查看详情与外链。
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHidden={selected?.id === project.id}
              onSelect={() => setSelected(project)}
            />
          ))}
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </LayoutGroup>
  );
}
