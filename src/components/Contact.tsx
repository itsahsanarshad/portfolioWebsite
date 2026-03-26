import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-24 md:py-32 px-6" id="contact">
      <div className="max-w-7xl mx-auto xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-8">Let&apos;s Connect</h2>
            <p className="text-lg md:text-xl text-on-surface-variant mb-12 font-body max-w-lg">
              Have a project in mind or just want to chat about AI? Drop me a message and I&apos;ll get back to you within 24 hours.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-lg">Email</h4>
                  <p className="text-on-surface-variant">hello@ahsan.dev</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">link</span>
                </div>
                <div className="flex gap-4">
                  <Link href="#" className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary-container transition-colors group">
                    <Image
                      width={24}
                      height={24}
                      alt="Github"
                      className="group-hover:brightness-0 group-hover:invert opacity-80 group-hover:opacity-100 transition-all"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbSf4WObHoPMdVe3CzQlMGRnl94Js4HMGDFyRkkeEr_wDgDF1-lIPwDQNijNFdAUT_rLPaH9ofJoQonhATv_87zRky-JfJ8xqN8_EzVUR-hpuX3Cicf95YHirCooP52bEIXwqj7kgZMuuO4TcBoUOTZccwDpC0wp67QXVzKWiuapnfKBhWcUKJ7LCLGR0MbjaK4TkJBAfpQ_Bbx7tt8NoH4SE3SrNYXpQCTl-pWLIAT15cX2HgUPqUSX6AwYT7xc3GmODC5vVG0SR7"
                      unoptimized
                    />
                  </Link>
                  <Link href="#" className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary-container transition-colors group">
                    <Image
                      width={24}
                      height={24}
                      alt="LinkedIn"
                      className="group-hover:brightness-0 group-hover:invert opacity-80 group-hover:opacity-100 transition-all"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmhVOFebjg_TrnWRiiA1KyIXMt1v76HSp5cn0IPHwo6qjvCeZzGaTRF4_HqOnaC2LeKEMlZKt1r8TVBqv0JgSxa4pY9frLM19s7aUbHEdraOTkvTOQmNj2lw3ppQzIKnZ4o8uUbPs4bZM8XMiaLOqSs22tva-fhNbtSopvB3VmcdE7FsJiLVvUGEvIqgtJvvaEBLZt_jXqdxAcYTic1FKMNmwN83zxvecJc4Y5Y3rA_L3ouM3tzwkeASW_x4eV7CAE4sTu0rgBnl-r"
                      unoptimized
                    />
                  </Link>
                  <Link href="#" className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary-container transition-colors group">
                    <Image
                      width={24}
                      height={24}
                      alt="Fiverr"
                      className="group-hover:brightness-0 opacity-80 group-hover:opacity-100 transition-all"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbuTHE2R3-sht4v2wWpLHU_aTGGVUaepHu4tbZe4TvnV0ejMQnP5RokVIvzISQBqnf2RVH_vPbYUw9GRVZG8l3hfRVM3svCJvJMmuj71Zsl4EKmsPZAyqHug14uNB3JSV9lexko24Qp_yS9AOOzrQu5O3Y3n8jw2Tm9dffku6ZRGk3Le-PELm0N24WJuJhgw_AFkxo8SG-JQkG4sFJEho8yoWBmkesBLHU9RHKU-vzU8h8JQ3ttlKqXQ1xA45wmlrRhbOuu4B4prIt"
                      unoptimized
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card p-8 md:p-10 lg:p-12 rounded-3xl border border-outline-variant/10 shadow-2xl">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Full Name</label>
                <input
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-on-surface transition-all font-body"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Email Address</label>
                <input
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-on-surface transition-all font-body"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Message</label>
                <textarea
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-on-surface transition-all font-body min-h-[120px]"
                  placeholder="How can I help you?"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed-variant font-bold rounded-lg shadow-lg hover:shadow-primary/20 transition-all active:scale-95 text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
