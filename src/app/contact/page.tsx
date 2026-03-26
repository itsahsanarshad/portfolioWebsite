import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Muhammad Ahsan",
  description: "Get in touch with Muhammad Ahsan — Software Developer based in Karachi, Pakistan.",
};

export default function ContactPage() {
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
              Contact Me
            </span>
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-on-surface mb-6 leading-none">
            Let&apos;s build the{" "}
            <span className="gradient-text">future together.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            Have a project in mind or just want to say hi? Feel free to reach out. I&apos;m always open to
            discussing new opportunities and technical challenges.
          </p>
        </section>

        {/* ── Contact grid ─────────────────────────────────────── */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: contact info */}
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: "location_on",
                  label: "Location",
                  value: "Karachi, Pakistan",
                  href: undefined,
                },
                {
                  icon: "mail",
                  label: "Email me",
                  value: "mahammadahsan@gmail.com",
                  href: "mailto:mahammadahsan@gmail.com",
                },
                {
                  icon: "call",
                  label: "Call me",
                  value: "+92-317-7766007",
                  href: "tel:+923177766007",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-5 bg-surface-container-low rounded-xl p-6 border border-outline-variant/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[22px]">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-headline font-semibold text-on-surface hover:text-primary transition-colors text-base"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-headline font-semibold text-on-surface text-base">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: social CTAs */}
            <div className="flex flex-col gap-5">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/itsahsanarshad"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-surface-container-low rounded-xl p-6 border border-outline-variant/10 hover:bg-surface-container hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#0077B5]/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#0077B5] text-[22px]">group</span>
                  </div>
                  <div>
                    <p className="font-headline font-bold text-on-surface tracking-tight">LinkedIn</p>
                    <p className="text-sm text-on-surface-variant">in/itsahsanarshad</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary font-headline font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                  Connect
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/itsahsanarshad"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-surface-container-low rounded-xl p-6 border border-outline-variant/10 hover:bg-surface-container hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[22px]">code</span>
                  </div>
                  <div>
                    <p className="font-headline font-bold text-on-surface tracking-tight">GitHub</p>
                    <p className="text-sm text-on-surface-variant">github.com/itsahsanarshad</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary font-headline font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                  Follow
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </a>

              {/* Fiverr */}
              <a
                href="#"
                className="group flex items-center justify-between bg-surface-container-low rounded-xl p-6 border border-outline-variant/10 hover:bg-surface-container hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#1DBF73]/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#1DBF73] text-[22px]">payments</span>
                  </div>
                  <div>
                    <p className="font-headline font-bold text-on-surface tracking-tight">Fiverr</p>
                    <p className="text-sm text-on-surface-variant">Hire me for freelance work</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary font-headline font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                  View
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ── Map / decorative strip ───────────────────────────── */}
        <section className="bg-surface-container-low mt-16 py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
              <span className="font-headline text-xl font-bold text-on-surface">Karachi, Pakistan</span>
            </div>
            <p className="text-on-surface-variant text-sm">
              Available for remote work worldwide · UTC+5
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
