import Hero from "@/components/Hero";
import PageLoader from "@/components/PageLoader";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WritingsSection from "@/components/WritingsSection";
import ExperienceSkills from "@/components/ExperienceSkills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <PageLoader />
      <Hero />
      <Projects />
      <Services />
      <ExperienceSkills />
      <About />
      <WritingsSection />
      <Contact />
      <Footer />
    </main>
  );
}
