import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectsGallery from "@/components/ProjectsGallery";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <FeaturedProject />
        <ProjectsGallery />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
