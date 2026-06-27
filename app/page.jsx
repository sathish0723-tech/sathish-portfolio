import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import Impact from "./components/Impact";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative bg-[#f4f1ea]">
      <Navbar />

      {/* Hero scroll zone: the person stays static while scrolling through this
          zone (the height limit), then releases and scrolls away with the page */}
      <section className="relative h-[160vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <Hero />
        </div>
      </section>

      {/* Remaining sections scroll normally */}
      <div className="relative z-10 bg-[#f4f1ea]">
        <TechMarquee />
        <Impact />
        <Experience />
        <Works />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
