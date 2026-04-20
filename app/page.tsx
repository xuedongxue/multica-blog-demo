import { AboutSection } from "@/components/about/about-section";
import { ContactSection } from "@/components/contact/contact-section";
import { ProjectsSection } from "@/components/projects/projects-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <AboutSection />
      <div className="mx-auto flex flex-col items-center bg-zinc-50 dark:bg-zinc-950">
        <ProjectsSection />
      </div>
      <ContactSection />
    </main>
  );
}
