export default function Experience() {
  return (
    <section className="py-24 md:py-32 bg-surface-container-low px-6" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-16 text-center">Journey &amp; Milestones</h2>
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outline-variant/30 before:to-transparent">
          {/* Item 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="material-symbols-outlined text-sm">school</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[45%] glass-card p-6 rounded-xl border border-outline-variant/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-3">
                <div className="font-bold text-on-surface text-lg">Bahria University</div>
                <time className="font-label w-fit text-xs text-primary bg-primary/10 px-2 py-1 rounded">Current</time>
              </div>
              <div className="text-on-surface-variant text-sm leading-relaxed">
                Bachelor&apos;s in Computer Science. Focusing on core algorithms, database management, and advanced programming paradigms.
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="material-symbols-outlined text-sm">work</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[45%] glass-card p-6 rounded-xl border border-outline-variant/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-3">
                <div className="font-bold text-on-surface text-lg">Freelance Full-Stack</div>
                <time className="font-label w-fit text-xs text-primary bg-primary/10 px-2 py-1 rounded">2022 - Present</time>
              </div>
              <div className="text-on-surface-variant text-sm leading-relaxed">
                Delivering bespoke automation scripts and modern web applications for clients worldwide on platforms like Fiverr and LinkedIn.
              </div>
            </div>
          </div>
          {/* Item 3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="material-symbols-outlined text-sm">terminal</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[45%] glass-card p-6 rounded-xl border border-outline-variant/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-3">
                <div className="font-bold text-on-surface text-lg">Open Source Contributor</div>
                <time className="font-label w-fit text-xs text-primary bg-primary/10 px-2 py-1 rounded">Ongoing</time>
              </div>
              <div className="text-on-surface-variant text-sm leading-relaxed">
                Actively maintaining Python-based scraping tools and contributing to the Next.js developer community.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
