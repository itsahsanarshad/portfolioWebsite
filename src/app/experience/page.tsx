import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { experience, education, competencies } from "@/data/portfolio";

export const metadata = {
  title: "Experience | Muhammad Ahsan",
  description: "Professional journey and academic background of Muhammad Ahsan — Software Developer.",
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="ambient-orb w-150 h-150 bg-primary/5 top-[-5%] right-[5%]" />
        <div className="ambient-orb w-96 h-96 bg-tertiary/5 bottom-0 left-[5%]" />
      </div>

      <main className="pt-20">
        {/* ── Header ───────────────────────────────────────────── */}
        <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-surface-container mb-6">
            <span className="text-[0.6875rem] uppercase tracking-widest font-label text-primary font-bold">
              Experience Journey
            </span>
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-on-surface mb-6 leading-none">
            Engineering digital ecosystems with{" "}
            <span className="gradient-text">focus and precision.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            A focus on high-performance frontends and scalable software architecture.
          </p>
        </section>

        {/* ── Professional Pulse ───────────────────────────────── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-surface-container mb-8">
            <span className="text-[0.6875rem] uppercase tracking-widest font-label text-primary font-bold">
              Professional Pulse
            </span>
          </div>

          <div className="relative">
            {/* Vertical accent line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/10 to-transparent hidden sm:block" />

            <div className="flex flex-col gap-6">
              {experience.map((job, i) => (
                <div
                  key={i}
                  className="sm:pl-20 relative group"
                >
                  {/* Dot indicator */}
                  <div className="hidden sm:flex absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-primary bg-surface items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-on-primary transition-colors" />
                  </div>

                  <div className="bg-surface-container-low rounded-xl p-6 sm:p-8 hover:bg-surface-container transition-colors duration-300 border border-outline-variant/10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-headline text-xl font-bold text-on-surface tracking-tight">
                          {job.role}
                        </h3>
                        <p className="text-primary font-semibold text-sm font-headline mt-1">
                          {job.company}
                        </p>
                      </div>
                      <span className="inline-flex shrink-0 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-xs font-label font-semibold uppercase tracking-wider">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Academic Base ─────────────────────────────────────── */}
        <section className="bg-surface-container-low py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-surface-container mb-8">
              <span className="text-[0.6875rem] uppercase tracking-widest font-label text-tertiary font-bold">
                Academic Base
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="bg-surface-container rounded-xl p-6 sm:p-8 hover:bg-surface-container-high transition-colors duration-300 border border-outline-variant/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-tertiary text-2xl">school</span>
                  </div>
                  <div className="flex flex-col gap-1 mb-4">
                    <span className="text-xs font-label text-outline">{edu.period}</span>
                    <h3 className="font-headline text-xl font-bold text-on-surface tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-primary font-semibold font-headline">{edu.school}</p>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{edu.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Core Competencies ────────────────────────────────── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-surface-container mb-8">
              <span className="text-[0.6875rem] uppercase tracking-widest font-label text-on-surface-variant font-bold">
                Core Competencies
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {competencies.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-surface-container-low text-on-surface-variant text-sm font-label font-semibold hover:text-primary hover:bg-surface-container-high transition-colors duration-200 border border-outline-variant/10 cursor-default flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="bg-surface-container-low py-24 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tighter mb-4">
              Let&apos;s work{" "}
              <span className="gradient-text">together</span>
            </h2>
            <p className="text-on-surface-variant mb-8">
              Open to collaborations, consulting, and interesting engineering challenges.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg gradient-bg text-on-primary-fixed font-headline font-bold text-sm neon-glow hover:opacity-90 transition-all"
            >
              Get In Touch
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
