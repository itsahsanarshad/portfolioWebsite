export default function Skills() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-12">Technical Arsenal</h2>
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-on-surface text-lg">Python &amp; Backend</span>
                  <span className="text-primary font-mono font-bold">95%</span>
                </div>
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary transition-all duration-1000 ease-out" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-on-surface text-lg">Next.js &amp; React</span>
                  <span className="text-primary font-mono font-bold">90%</span>
                </div>
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary transition-all duration-1000 ease-out" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-on-surface text-lg">Automation &amp; Scraping</span>
                  <span className="text-primary font-mono font-bold">88%</span>
                </div>
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary transition-all duration-1000 ease-out" style={{ width: "88%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 gap-4 lg:gap-6">
            <div className="glass-card p-6 md:p-8 rounded-2xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-surface-variant/50 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
              </div>
              <h4 className="font-bold mb-2 md:text-lg">Linux</h4>
              <p className="text-sm text-on-surface-variant">System Admin</p>
            </div>
            <div className="glass-card p-6 md:p-8 rounded-2xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-surface-variant/50 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">data_object</span>
              </div>
              <h4 className="font-bold mb-2 md:text-lg">Docker</h4>
              <p className="text-sm text-on-surface-variant">Containerization</p>
            </div>
            <div className="glass-card p-6 md:p-8 rounded-2xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-surface-variant/50 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">source</span>
              </div>
              <h4 className="font-bold mb-2 md:text-lg">Git</h4>
              <p className="text-sm text-on-surface-variant">Version Control</p>
            </div>
            <div className="glass-card p-6 md:p-8 rounded-2xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-surface-variant/50 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
              </div>
              <h4 className="font-bold mb-2 md:text-lg">API</h4>
              <p className="text-sm text-on-surface-variant">FastAPI / Flask</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
