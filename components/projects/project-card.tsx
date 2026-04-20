"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/content";

const layoutIdFor = (id: string) => `project-shell-${id}`;

type ProjectCardProps = {
  project: Project;
  isHidden: boolean;
  onSelect: () => void;
};

export function ProjectCard({
  project,
  isHidden,
  onSelect,
}: ProjectCardProps) {
  return (
    <motion.article
      layoutId={layoutIdFor(project.id)}
      className={[
        "group relative h-80 cursor-pointer overflow-hidden rounded-3xl shadow-lg shadow-black/25 md:h-96",
        "transition-[box-shadow] duration-300 ease-out",
        "hover:shadow-2xl hover:shadow-black/40",
        isHidden ? "pointer-events-none opacity-0" : "opacity-100",
      ].join(" ")}
      onClick={onSelect}
    >
      <div className="absolute inset-0 scale-100 transition-transform duration-300 ease-out group-hover:scale-[1.02]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />
      </div>
      <div
        className={[
          "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent",
          "transition-opacity duration-300 group-hover:from-black/80 group-hover:via-black/30",
        ].join(" ")}
      />
      <div className="absolute bottom-0 left-0 p-8 text-white">
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 max-w-xl text-sm text-white/85 md:text-base">
          {project.desc}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/25 bg-black/20 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-white/90"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
