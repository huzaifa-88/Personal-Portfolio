import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Experience } from "@/components/experience/experience";
import { Projects } from "@/components/projects/projects";
import { Skills } from "@/components/skills/skills";
import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
