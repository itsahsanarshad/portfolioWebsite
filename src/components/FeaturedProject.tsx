import Image from "next/image";
import Link from "next/link";

export default function FeaturedProject() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="mb-12 md:mb-16">
          <span className="text-primary uppercase tracking-[0.3em] font-label text-sm mb-4 block">Selected Work</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold">Featured Spotlight</h2>
        </div>
        <div className="group relative bg-surface-container rounded-3xl overflow-hidden border border-outline-variant/10 hover:border-primary/20 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-20 flex flex-col justify-center">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded">Next.js</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded">High Perf</span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold mb-6">SerenityVault</h3>
              <p className="text-on-surface-variant text-base md:text-lg mb-8 md:mb-10 leading-relaxed font-body">
                A performance-focused Next.js application designed for ultimate speed and security. Built with a clean architecture principle to ensure long-term maintainability and scalability.
              </p>
              <ul className="space-y-4 mb-8 md:mb-10">
                <li className="flex items-center gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  Fast, Responsive UI/UX
                </li>
                <li className="flex items-center gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  Encrypted Data Storage
                </li>
              </ul>
              <div className="flex flex-wrap gap-4 md:gap-6">
                <button className="px-6 py-3 bg-primary text-on-primary font-bold rounded hover:scale-105 transition-transform flex items-center gap-2">
                  Live Site <span className="material-symbols-outlined text-sm">open_in_new</span>
                </button>
                <button className="px-6 py-3 border border-outline-variant text-on-surface font-bold rounded hover:bg-surface-variant transition-colors flex items-center gap-2">
                  View Code <span className="material-symbols-outlined text-sm">code</span>
                </button>
              </div>
            </div>
            <div className="relative bg-surface-container-high h-[300px] sm:h-[400px] lg:h-auto overflow-hidden">
              <Image
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60"
                alt="Modern abstract software dashboard interface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASX5LsZ18BSweLkNjUEuR9Jp3PG4XEJkyetvpZpFx0cSYog_s7SP35S4ZW-i90uE9XMWAD5SXAKfkj70LfTghLgx9vVe73ulKuZ24FNK-0SCzmTueO_w-lWyljpo2IWvXZMDDUiIt2IZnc9qwA385tMLj79PRxD46SYUSlEHM0u73q6TFe7QS7ozwAzaAkMecpelLfAGhf1QSsYY9abRm-4IIdu1WYd4iZ3jmiM-UzxhZNu_pM5FRZg5mnwMmTi73rNCF860qRwhkD"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
