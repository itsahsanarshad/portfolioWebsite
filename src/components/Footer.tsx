import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-lg font-bold gradient-text font-headline tracking-tight">
              Ahsan.dev
            </span>
            <p className="text-xs text-on-surface-variant font-label">
              Built with ❤️ by Muhammad Ahsan
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/projects", label: "Projects" },
              { href: "/experience", label: "Experience" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-on-surface-variant hover:text-primary transition-colors font-label"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/itsahsanarshad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[20px]">code</span>
            </a>
            <a
              href="https://linkedin.com/in/itsahsanarshad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[20px]">group</span>
            </a>
            <a
              href="#"
              aria-label="Fiverr"
              className="p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[20px]">payments</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-outline-variant/10 text-center">
          <p className="text-xs text-on-surface-variant font-label">
            © {new Date().getFullYear()} Muhammad Ahsan. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
