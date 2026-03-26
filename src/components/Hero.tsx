import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center px-6 overflow-hidden" id="home">
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-tertiary/10 rounded-full blur-[120px]"></div>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 z-10">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] mb-6 font-label uppercase">
            Available for freelance
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-headline font-bold leading-none mb-8 tracking-tighter">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
              Muhammad Ahsan
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-body max-w-2xl mb-12 leading-relaxed">
            Software Developer building web applications, automation tools, and scalable solutions for the modern web.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link
              href="#projects"
              className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed-variant font-bold rounded-md hover:scale-105 transition-transform flex items-center gap-2 neon-glow"
            >
              View Projects
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 bg-surface-container-highest/50 backdrop-blur-md border border-outline-variant/20 text-on-surface font-bold rounded-md hover:bg-surface-container-highest transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="lg:col-span-4 hidden lg:block">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-outline-variant/10 shadow-2xl">
            <Image
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Professional portrait"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGctWNDjwh5ouGlvXgTk4YNyrI9gcMYELKqN-cx_hYYE8V6B3evCI7Kruexo-muEd40P-vpDiDCuq5buMDQxnQpup2-NA6m8vZRZ-cHYZ6MB2kyeRyqqprqWr6nUHEdw8SyM5ejtm9t4dqGPB9nU9S9el7MCAKAZxykmiwKgOWoOjIGzxr_canTKLLVOQazF0Hqz8inb0Dh1OQPECeMyoUzs11xyenRnB9vH7oREqIBNZC9kqr6oXDSOrTyK6zJZujLkuNn0D4T1tN"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
