import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/portfolio";

export const metadata = {
  title: "Projects | Muhammad Ahsan",
  description: "A collection of full-stack applications, security tools, and automation scripts — crafted with precision.",
};

export default function ProjectsPage() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      <Navbar />

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="ambient-orb w-150 h-150 bg-primary/5 top-[-5%] right-[-5%]" />
        <div className="ambient-orb w-96 h-96 bg-tertiary/5 bottom-0 left-[-5%]" />
      </div>

      <main className="pt-20">
        {/* ── Header ───────────────────────────────────────────── */}
        <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-surface-container mb-6">
            <span className="text-[0.6875rem] uppercase tracking-widest font-label text-primary font-bold">
              Portfolio Gallery
            </span>
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-on-surface mb-6 leading-none">
            Crafting{" "}
            <span className="gradient-text">Digital Architectures.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            A selection of software solutions, ranging from full-stack web applications to complex e-commerce
            ecosystems, built with precision and intent.
          </p>
        </section>

        {/* ── Featured project ─────────────────────────────────── */}
        {featured && (
          <section className="pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="group bg-surface-container-low rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-500 border border-outline-variant/10">
              {/* Image placeholder */}
              <div className="h-56 sm:h-72 lg:h-96 w-full bg-surface-container flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent" />
                <div className="relative z-10 text-center">
                  <span className="material-symbols-outlined text-primary text-[80px] opacity-20">lock</span>
                  <p className="text-on-surface-variant text-sm font-label mt-2 opacity-40">{featured.title}</p>
                </div>
              </div>

              <div className="p-8 lg:p-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-6">
                  <div>
                    <h2 className="font-headline text-3xl font-bold text-on-surface tracking-tight mb-3">
                      {featured.title}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {featured.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant text-[0.6875rem] font-label font-bold uppercase tracking-tighter flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    {featured.links?.live && (
                      <a
                        href={featured.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-surface-container-highest text-primary hover:gradient-bg hover:text-on-primary-fixed transition-all"
                        aria-label="Live site"
                      >
                        <span className="material-symbols-outlined text-[20px]">link</span>
                      </a>
                    )}
                    {featured.links?.code && (
                      <a
                        href={featured.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-surface-container-highest text-primary hover:gradient-bg hover:text-on-primary-fixed transition-all"
                        aria-label="Source code"
                      >
                        <span className="material-symbols-outlined text-[20px]">code</span>
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-on-surface-variant leading-relaxed">{featured.description}</p>
              </div>
            </div>
          </section>
        )}

        {/* ── Rest of projects grid ─────────────────────────────── */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((project) => (
              <div
                key={project.id}
                className="group bg-surface-container-low rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-500 border border-outline-variant/10 flex flex-col"
              >
                {/* Card header with icon */}
                <div className="h-36 sm:h-44 bg-surface-container flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="material-symbols-outlined text-primary text-[48px] opacity-30 group-hover:opacity-50 transition-opacity">
                    {project.icon || "folder"}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-headline font-bold text-on-surface text-xl tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-surface-variant text-on-surface-variant text-[0.625rem] font-label font-bold uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-primary font-headline font-semibold hover:underline"
                      >
                        <span className="material-symbols-outlined text-base">open_in_new</span>
                        Live
                      </a>
                    )}
                    {project.links?.code && (
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-primary font-headline font-semibold transition-colors"
                      >
                        <span className="material-symbols-outlined text-base">terminal</span>
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Footer CTA ───────────────────────────────────────── */}
        <section className="bg-surface-container-low mt-16 py-24 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tighter mb-4">
              Have a vision in mind?
            </h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              Let&apos;s build something extraordinary together. I&apos;m currently available for freelance
              opportunities and innovative partnerships.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg gradient-bg text-on-primary-fixed font-headline font-bold text-sm neon-glow hover:opacity-90 transition-all"
            >
              Start a Conversation
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
