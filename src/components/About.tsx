export default function About() {
  return (
    <section className="py-32 bg-surface-container-low px-6" id="about">
      <div className="max-w-7xl mx-auto xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-headline font-bold mb-8 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-primary"></span>
              The Professional Summary
            </h2>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed font-body">
              <p>
                I am a dedicated Software Developer with a passion for architecting clean, efficient, and user-centric digital experiences. My approach blends technical rigor with a keen eye for architectural elegance.
              </p>
              <p>
                Currently, I&apos;m deeply immersed in exploring the frontiers of <span className="text-primary">Artificial Intelligence</span> and machine learning integration within web ecosystems, aiming to bridge the gap between static applications and intelligent systems.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/5">
                <h4 className="text-primary font-bold text-3xl font-headline mb-2">3+</h4>
                <p className="text-sm text-on-surface-variant uppercase tracking-widest font-label">Years Coding</p>
              </div>
              <div className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/5">
                <h4 className="text-primary font-bold text-3xl font-headline mb-2">15+</h4>
                <p className="text-sm text-on-surface-variant uppercase tracking-widest font-label">Projects Completed</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-4 sm:pt-12">
              <div className="glass-card p-6 rounded-2xl border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary mb-4">developer_mode_tv</span>
                <h3 className="font-bold mb-2 text-xl">Web Architecture</h3>
                <p className="text-sm text-on-surface-variant">Modern stack development with Next.js and Flask.</p>
              </div>
              <div className="glass-card p-6 rounded-2xl border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary mb-4">robot_2</span>
                <h3 className="font-bold mb-2 text-xl">Automation</h3>
                <p className="text-sm text-on-surface-variant">Streamlining workflows with Python and custom scripts.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="glass-card p-6 rounded-2xl border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary mb-4">database</span>
                <h3 className="font-bold mb-2 text-xl">Scalable Backend</h3>
                <p className="text-sm text-on-surface-variant">Robust data handling and API management.</p>
              </div>
              <div className="glass-card p-6 rounded-2xl border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary mb-4">terminal</span>
                <h3 className="font-bold mb-2 text-xl">DevOps</h3>
                <p className="text-sm text-on-surface-variant">Efficient deployment and environment orchestration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
