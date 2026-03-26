import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-12 border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl mx-auto xl:max-w-screen-xl 2xl:max-w-screen-2xl gap-6 md:gap-0">
        <div className="text-on-surface-variant font-medium font-body text-sm tracking-wide">
          Ahsan.dev &mdash; 2024
        </div>
        <div className="text-on-surface-variant/70 font-body text-sm tracking-wide text-center">
          Built with precision by Muhammad Ahsan
        </div>
        <div className="flex space-x-8">
          <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors font-body text-sm tracking-wide">
            Github
          </Link>
          <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors font-body text-sm tracking-wide">
            Linkedin
          </Link>
          <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors font-body text-sm tracking-wide">
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
}
