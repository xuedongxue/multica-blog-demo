import { AboutSection } from "@/components/about/about-section";
import { ContactSection } from "@/components/contact/contact-section";
import { HeroSection } from "@/components/hero/hero-section";
import { Navbar } from "@/components/nav/navbar";
import { ProjectsSection } from "@/components/projects/projects-section";
import { SkillsSection } from "@/components/skills/skills-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-zinc-100 via-zinc-100 to-zinc-200/90 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <div className="mx-auto flex flex-col items-center bg-zinc-50 dark:bg-zinc-950">
          <ProjectsSection />
        </div>
        <ContactSection />
      </main>
    </>
  );
}
