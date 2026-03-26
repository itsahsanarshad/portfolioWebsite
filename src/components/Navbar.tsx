"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-[0_8px_32px_0_rgba(114,220,255,0.06)]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold gradient-text font-headline tracking-tight select-none"
        >
          Ahsan.dev
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-headline tracking-tight transition-colors duration-200 ${
                  isActive
                    ? "text-primary border-b-2 border-primary pb-0.5"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Right: Social icons + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/itsahsanarshad"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden sm:flex p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200"
          >
            <span className="material-symbols-outlined text-[20px]">code</span>
          </a>
          <a
            href="https://linkedin.com/in/itsahsanarshad"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden sm:flex p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200"
          >
            <span className="material-symbols-outlined text-[20px]">group</span>
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all duration-200"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden glass-nav border-t border-outline-variant/20 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-3 rounded-lg font-headline text-sm tracking-tight transition-colors duration-200 ${
                  isActive
                    ? "bg-surface-container-high text-primary font-semibold"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <div className="flex gap-2 mt-3 pt-3 border-t border-outline-variant/20">
            <a
              href="https://github.com/itsahsanarshad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary text-sm transition-colors"
            >
              <span className="material-symbols-outlined text-base">code</span>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/itsahsanarshad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary text-sm transition-colors"
            >
              <span className="material-symbols-outlined text-base">group</span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
