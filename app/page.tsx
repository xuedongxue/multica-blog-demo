import { AboutSection } from "@/components/about/about-section";
import { SkillsSection } from "@/components/skills/skills-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-100 via-zinc-100 to-zinc-200/90 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900">
      <AboutSection />
      <SkillsSection />
    </main>
  );
}
