import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div class="container mt-24 mx-auto px-12 py-4">
        <Navbar />
        <HeroSection />
        <About id="about" />
        <Projects id="projects" />
        <ContactSection id="contact" />
      </div>
    </main>
  );
}
