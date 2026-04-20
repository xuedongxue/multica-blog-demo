import { cn } from "@/lib/utils";

const sectionClass = cn(
  "mx-auto w-full max-w-5xl px-6 py-24 md:px-10 md:py-32",
  "border-b border-black/[0.06] dark:border-white/[0.08] last:border-b-0",
);

const placeholderClass = cn(
  "rounded-2xl border border-dashed border-black/[0.08] bg-white/40 p-12 text-center",
  "dark:border-white/[0.12] dark:bg-white/[0.04]",
  "font-mono text-sm text-[#1d1d1f]/50 dark:text-[#f5f5f7]/50",
);

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-black/[0.06] bg-[#f5f5f7]/80 backdrop-blur-md dark:border-white/[0.08] dark:bg-[#1d1d1f]/80">
        <nav
          className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-10"
          aria-label="主导航"
        >
          <span className="text-sm font-medium tracking-tight">Portfolio</span>
          <ul className="flex gap-8 text-sm text-[#1d1d1f]/70 dark:text-[#f5f5f7]/70">
            <li>
              <a className="hover:text-apple-blue" href="#hero">
                首页
              </a>
            </li>
            <li>
              <a className="hover:text-apple-blue" href="#about">
                关于
              </a>
            </li>
            <li>
              <a className="hover:text-apple-blue" href="#skills">
                技能
              </a>
            </li>
            <li>
              <a className="hover:text-apple-blue" href="#projects">
                项目
              </a>
            </li>
            <li>
              <a className="hover:text-apple-blue" href="#contact">
                联系
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className={sectionClass}>
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-apple-blue">
              Hello
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
              极简留白，清晰表达。
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[#1d1d1f]/70 dark:text-[#f5f5f7]/70">
              个人介绍与作品展示的占位骨架，后续可在此填充真实内容与动效。
            </p>
          </div>
          <div className={cn(placeholderClass, "mt-12")}>Hero 内容区占位</div>
        </section>

        <section id="about" className={sectionClass}>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight">关于</h2>
          <div className={placeholderClass}>About 内容区占位</div>
        </section>

        <section id="skills" className={sectionClass}>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight">技能</h2>
          <div className={placeholderClass}>Skills 内容区占位</div>
        </section>

        <section id="projects" className={sectionClass}>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight">项目</h2>
          <div className={placeholderClass}>Projects 内容区占位</div>
        </section>

        <section id="contact" className={sectionClass}>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight">联系</h2>
          <div className={placeholderClass}>Contact 内容区占位</div>
        </section>
      </main>

      <footer className="border-t border-black/[0.06] py-10 text-center text-sm text-[#1d1d1f]/50 dark:border-white/[0.08] dark:text-[#f5f5f7]/50">
        © {new Date().getFullYear()} · 占位页脚
      </footer>
    </div>
  );
}
