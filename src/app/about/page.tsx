import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { skills } from "@/data/portfolio";

export const metadata = {
  title: "About | Muhammad Ahsan",
  description: "Software architect. MS Computer Science student at Bahria University. Specializing in Next.js, React, and scalable backend systems.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="ambient-orb w-150 h-150 bg-primary/5 top-[-10%] left-[-5%]" />
        <div className="ambient-orb w-96 h-96 bg-tertiary/5 bottom-[5%] right-[-5%]" />
      </div>

      <main className="pt-20">
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-surface-container mb-6">
            <span className="text-[0.6875rem] uppercase tracking-widest font-label text-primary font-bold">
              About Me
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-on-surface leading-none mb-8">
                Muhammad Ahsan{" "}
                <span className="gradient-text">Arshad Manzoor</span>
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-3xl">
                A dedicated software architect currently pursuing an MS in Computer Science at Bahria University,
                Karachi. I specialize in crafting high-performance digital experiences using Next.js and React,
                backed by robust API ecosystems.
              </p>
            </div>

            {/* Quick stats */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-4">
              {[
                { label: "Years Experience", value: "2+" },
                { label: "Projects Shipped", value: "10+" },
                { label: "MS Progress", value: "Year 1" },
              ].map((stat) => (
                <div key={stat.label} className="flex-1 bg-surface-container-low rounded-xl p-5 border border-outline-variant/10 text-center">
                  <p className="font-headline text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-on-surface-variant font-label mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECHNICAL ARSENAL ────────────────────────────────── */}
        <section className="bg-surface-container-low py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-surface-container mb-5">
                <span className="text-[0.6875rem] uppercase tracking-widest font-label text-primary font-bold">
                  Technical Arsenal
                </span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tighter text-on-surface">
                A curated stack of technologies I use to build the future.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {skills.map((group) => (
                <div key={group.category}>
                  <h3 className="text-[0.6875rem] uppercase tracking-widest font-label text-on-surface-variant font-bold mb-5">
                    {group.category}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {group.items.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-headline text-on-surface tracking-tight">{skill.name}</span>
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

        {/* ── BEYOND THE CODE ───────────────────────────────────── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-surface-container mb-5">
                <span className="text-[0.6875rem] uppercase tracking-widest font-label text-primary font-bold">
                  Beyond the Code
                </span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tighter text-on-surface">
                What drives me
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "psychology",
                  title: "Problem Solving",
                  desc: "Deconstructing complex bottlenecks into elegant, scalable solutions. I treat every bug as a puzzle waiting to be solved.",
                },
                {
                  icon: "hub",
                  title: "Critical Thinking",
                  desc: "Analyzing system architecture from multiple perspectives to ensure long-term stability and optimal user experience.",
                },
                {
                  icon: "autorenew",
                  title: "Adaptive Mindset",
                  desc: "Thriving in dynamic environments. I rapidly pivot to new frameworks and tools as the tech landscape evolves.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-surface-container-low rounded-xl p-8 hover:bg-surface-container-high transition-all duration-300 group border border-outline-variant/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary text-2xl">{card.icon}</span>
                  </div>
                  <h3 className="font-headline font-bold text-on-surface text-xl mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="bg-surface-container-low py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tighter mb-4">
              Let&apos;s build something{" "}
              <span className="gradient-text">exceptional</span> together.
            </h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              Currently open to freelance collaborations and architectural consulting.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg gradient-bg text-on-primary-fixed font-headline font-bold text-sm neon-glow hover:opacity-90 transition-all"
              >
                Get In Touch
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-outline-variant/40 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-headline font-semibold text-sm transition-all"
              >
                <span className="material-symbols-outlined text-base">description</span>
                Download Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
