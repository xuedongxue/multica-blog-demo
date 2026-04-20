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
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
