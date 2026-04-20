"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is active using IntersectionObserver (threshold 0.5).
 */
export function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState<string | null>(
    sectionIds[0] ?? null
  );

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const candidates = entries
          .filter(
            (e) => e.isIntersecting && e.intersectionRatio >= 0.5
          )
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = candidates[0];
        if (top) setActiveId(top.target.id);
      },
      { threshold: 0.5 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
