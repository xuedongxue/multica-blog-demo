import { ProjectsSection } from "@/components/projects/projects-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto flex min-h-screen flex-col items-center">
        <ProjectsSection />
      </div>
    </main>
  );
}
