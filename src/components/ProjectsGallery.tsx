import Image from "next/image";
import Link from "next/link";

export default function ProjectsGallery() {
  return (
    <section className="py-24 md:py-32 bg-surface-container-low px-6" id="projects">
      <div className="max-w-7xl mx-auto xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Project Gallery</h2>
            <p className="text-on-surface-variant text-lg">A collection of technical experiments and commercial solutions.</p>
          </div>
          <Link href="#" className="text-primary font-bold flex items-center gap-2 group whitespace-nowrap">
            All Projects <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="sm:col-span-2 md:col-span-2 group relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden bg-surface-container">
            <Image
              fill
              className="object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
              alt="Cybersec"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWTKXl7uMtdSBznMmqNNNuTCAcnZdaxpI7gv5otUbQa6vemLIOtF1IG1EN6GFqSvac8JcljQUHkxn1evfcrc_cgSJEAX_tM88N21vcG7qkXnx6hTIp-_p59GHWwptNpXp5vvjRyXd37f_-5EO46GkqkoY-lMG9sBNE3Zjyt6lt2e0jDeNF-7xpW3smpacOl9SqaCxqVu1eYrwiHhHi9pPESqZY5cSGKUJhz3aRloP37Hdrrk3RuNeChoSWqNOIBd_thGhCfguFAwbc"
              unoptimized
            />
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-surface-container-lowest via-transparent">
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 bg-surface-variant text-[10px] font-bold uppercase rounded text-on-surface">Cybersec</span>
                <span className="px-2 py-1 bg-surface-variant text-[10px] font-bold uppercase rounded text-on-surface">Python</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">SecurProbe</h3>
              <p className="text-on-surface-variant text-sm md:text-base max-w-md">Advanced network vulnerability scanner with automated reporting and real-time alerts.</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="group relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden bg-surface-container">
            <Image
              fill
              className="object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
              alt="E-Commerce"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWbjSddzpRT1BUBZqPO150kmFJbhG6ScX8k878OYYSbCy1q6q4BXEWMbXLyQAh_dJLQ2gWPfFu8s_MPgv5F_0FQ2cOsOU0DyoBBUOEM9NH-U-JjGA7YyhPxgH-biiAzNf98JT02AiS_wriYNzjOObwoOlwXXgvbjmf9sVEZ2egtY2QaJqTfeSQ36ygVUpOIpz4-vDPGGg0S4_gmdgLoL_lrgjQBhh4mvH03qmD-qAgdvzuzgjoWFctWtyunyiU1mBlw1P_tzA8xsmZ"
              unoptimized
            />
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-surface-container-lowest via-transparent">
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 bg-surface-variant text-[10px] font-bold uppercase rounded text-on-surface">E-Commerce</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">AlabamaMart</h3>
              <p className="text-on-surface-variant text-sm">Full-scale marketplace solution with real-time inventory management.</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="group relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden bg-surface-container">
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col bg-surface-container-high transition-colors group-hover:bg-surface-variant">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">integration_instructions</span>
              <h3 className="text-2xl font-bold mb-4">Python Scripts</h3>
              <p className="text-on-surface-variant text-sm mb-6">A suite of automation tools for data scraping, mass file processing, and system optimization.</p>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="text-[10px] text-primary/70 font-mono">#webscraping</span>
                <span className="text-[10px] text-primary/70 font-mono">#automation</span>
                <span className="text-[10px] text-primary/70 font-mono">#devops</span>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="sm:col-span-2 md:col-span-2 group relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden bg-surface-container">
            <Image
              fill
              className="object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
              alt="Architecture"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuADyTdorOirY9BOanHUKFA94gxCdOy2bjjObyWNRmeu6LKsMpRMWeniFSubgtJXBcZzPNrNZl1MG1-JW25HJe-59mozn_WMK3yuLDHaHV5KNLh-KFdbQ9CvBZ0DptW82ZDgQPkeSPLDUIdD5pEJrZj6OL3JIH6CRvuWJ8fuH0bKyKPlQJEVYNwTeAEr6-lfN6O-CDp5jvjgUOn3wTpBX_xkZyaO2CenEZt1oe58HESsXiq4wwkcubUWEKTUvdizJ46T7a4FiInHpQsZ"
              unoptimized
            />
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-surface-container-lowest via-transparent">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Architecting Scale</h3>
              <p className="text-on-surface-variant text-sm md:text-base max-w-md">Internal infrastructure tooling designed for microservices monitoring and logs aggregation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
