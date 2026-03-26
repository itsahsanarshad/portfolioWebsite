import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-900/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(153,247,255,0.08)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <Link
          href="#"
          className="text-xl font-bold bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent font-headline tracking-tight"
        >
          Ahsan.dev
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#home"
            className="text-primary font-bold border-b-2 border-primary pb-1 font-headline tracking-tight"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-on-surface-variant hover:text-on-surface transition-colors font-headline tracking-tight"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-on-surface-variant hover:text-on-surface transition-colors font-headline tracking-tight"
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="text-on-surface-variant hover:text-on-surface transition-colors font-headline tracking-tight"
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="text-on-surface-variant hover:text-on-surface transition-colors font-headline tracking-tight"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 transition-all duration-300 ease-in-out rounded-full scale-95 active:scale-90" aria-label="Toggle dark mode">
            <span className="material-symbols-outlined text-primary">dark_mode</span>
          </button>
          <button className="md:hidden p-2 text-on-surface-variant" aria-label="Open Menu">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
