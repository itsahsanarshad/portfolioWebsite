import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, experience, education, skills } from "@/data/portfolio";

export default function Home() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured).slice(0, 4);
  const latestJob = experience[0];
  const latestEdu = education[0];

  return (
    <>
      <Navbar />

      {/* ── Background ambient orbs ─────────────────────────── */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="ambient-orb w-150 h-150 bg-primary/5 top-[-10%] right-[-10%]" />
        <div className="ambient-orb w-100 h-100 bg-tertiary/5 bottom-[10%] left-[-5%]" />
      </div>

      <main>
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[0.6875rem] uppercase tracking-[0.12em] font-label text-on-surface-variant font-semibold">
                Available for new opportunities
              </span>
            </div>

            <h1 className="font-headline font-bold tracking-tighter leading-none mb-6">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] text-on-surface">
                Hi, I&apos;m Muhammad Ahsan
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] mt-2">
                <span className="gradient-text">— Software Engineer</span>
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed font-body">
              I build web applications, automation tools, and scalable solutions
              with editorial precision and technical excellence.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg gradient-bg text-on-primary-fixed font-headline font-bold text-sm tracking-tight hover:opacity-90 transition-all duration-200 neon-glow-sm"
              >
                View Projects
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-outline-variant/40 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-headline font-semibold text-sm tracking-tight transition-all duration-200"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-on-surface-variant animate-bounce">
            <span className="text-[0.625rem] uppercase tracking-widest font-label">Scroll</span>
            <span className="material-symbols-outlined text-base">keyboard_arrow_down</span>
          </div>
        </section>

        {/* ── ABOUT + SKILLS ────────────────────────────────────── */}
        <section className="bg-surface-container-low py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-surface-container mb-5">
                <span className="text-[0.6875rem] uppercase tracking-widest font-label text-primary font-bold">
                  Specializing in Next.js &amp; Scalable Architecture
                </span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-on-surface mb-6 leading-tight">
                Engineering with Precision &amp; Atmospheric Depth
              </h2>
              <p className="text-on-surface-variant text-base leading-relaxed mb-4">
                Currently pursuing an MS in Computer Science at Bahria University, I focus on the
                intersection of high-performance frontend systems and robust backend automation.
              </p>
              <p className="text-on-surface-variant text-base leading-relaxed">
                My approach to software is defined by precision and atmospheric depth. Whether it&apos;s crafting
                seamless user experiences in React or architecting cloud-native solutions, I treat every
                codebase as a digital installation.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-primary font-headline font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                Read more about me
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-10">
              {skills.map((group) => (
                <div key={group.category}>
                  <h3 className="text-[0.6875rem] uppercase tracking-widest font-label text-on-surface-variant font-bold mb-5">
                    {group.category}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {group.items.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-headline text-on-surface tracking-tight">
                            {skill.name}
                          </span>
                          <span className="text-xs font-label text-primary">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
                          <div
                            className="h-full rounded-full progress-fill"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED PROJECT ──────────────────────────────────── */}
        {featuredProject && (
          <section className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="inline-block px-3 py-1 rounded-full bg-surface-container mb-6">
                <span className="text-[0.6875rem] uppercase tracking-widest font-label text-primary font-bold">
                  Featured Project
                </span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tighter text-on-surface mb-12">
                {featuredProject.title}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start bg-surface-container-low rounded-2xl p-8 lg:p-12 neon-glow">
                {/* Details */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[0.6875rem] font-label font-bold uppercase tracking-tighter flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-on-surface-variant leading-relaxed mb-8">
                    {featuredProject.description}
                  </p>
                  <ul className="flex flex-col gap-4 mb-8">
                    {[
                      { icon: "check_circle", title: "Edge-First Performance", desc: "Optimized Vercel deployment with regional data residency." },
                      { icon: "check_circle", title: "Encrypted Architecture", desc: "End-to-end encryption for all sensitive user data blocks." },
                    ].map((item) => (
                      <li key={item.title} className="flex gap-3">
                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                          {item.icon}
                        </span>
                        <div>
                          <p className="text-sm font-headline font-semibold text-on-surface">
                            {item.title}
                          </p>
                          <p className="text-sm text-on-surface-variant">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    {featuredProject.links?.live && (
                      <a
                        href={featuredProject.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-bg text-on-primary-fixed font-headline font-bold text-sm"
                      >
                        <span className="material-symbols-outlined text-base">open_in_new</span>
                        Live Site
                      </a>
                    )}
                    {featuredProject.links?.code && (
                      <a
                        href={featuredProject.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-container-highest text-on-surface hover:text-primary font-headline font-semibold text-sm transition-colors"
                      >
                        <span className="material-symbols-outlined text-base">terminal</span>
                        View Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Visual */}
                <div className="aspect-video w-full rounded-xl bg-surface-container-highest overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-primary text-[64px] opacity-30">
                      lock
                    </span>
                    <p className="text-on-surface-variant text-sm font-label mt-2 opacity-50">
                      SerenityVault
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── OTHER PROJECTS GRID ───────────────────────────────── */}
        <section className="bg-surface-container-low py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tighter text-on-surface">
                Other Digital Installations
              </h2>
              <Link
                href="/projects"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm text-primary font-headline font-semibold hover:gap-2.5 transition-all duration-200"
              >
                View all
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative bg-surface-container rounded-xl p-6 hover:bg-surface-container-high transition-all duration-300 hover:-translate-y-1 border border-outline-variant/10"
                >
                  <div className="mb-4 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      {project.icon || "folder"}
                    </span>
                  </div>
                  <h3 className="font-headline font-bold text-on-surface text-lg mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-surface-variant text-on-surface-variant text-[0.625rem] font-label font-bold uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="sm:hidden flex justify-center mt-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm text-primary font-headline font-semibold"
              >
                View all projects
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE STRIP ──────────────────────────────────── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tighter text-on-surface">
                Professional Journey
              </h2>
              <Link
                href="/experience"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm text-primary font-headline font-semibold hover:gap-2.5 transition-all duration-200"
              >
                Full history
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Latest work */}
              {latestJob && (
                <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/10">
                  <span className="text-[0.6875rem] uppercase tracking-widest font-label text-primary font-bold">
                    Work
                  </span>
                  <h3 className="font-headline font-bold text-on-surface text-lg mt-2 mb-1 tracking-tight">
                    {latestJob.role}
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-1">{latestJob.company}</p>
                  <p className="text-xs font-label text-outline">{latestJob.period}</p>
                </div>
              )}
              {/* Latest education */}
              {latestEdu && (
                <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/10">
                  <span className="text-[0.6875rem] uppercase tracking-widest font-label text-tertiary font-bold">
                    Education
                  </span>
                  <h3 className="font-headline font-bold text-on-surface text-lg mt-2 mb-1 tracking-tight">
                    {latestEdu.degree}
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-1">{latestEdu.school}</p>
                  <p className="text-xs font-label text-outline">{latestEdu.period}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── FOOTER CTA ────────────────────────────────────────── */}
        <section className="bg-surface-container-low py-24 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Let&apos;s Build{" "}
              <span className="gradient-text">Something Iconic</span>
            </h2>
            <p className="text-on-surface-variant text-base mb-10 leading-relaxed">
              Whether it&apos;s a new product or a complex automation challenge, I&apos;m ready to architect the solution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-on-primary-fixed font-headline font-bold text-base neon-glow hover:opacity-90 transition-all duration-200"
            >
              Get In Touch
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

