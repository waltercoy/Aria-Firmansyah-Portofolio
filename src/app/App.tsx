import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Education } from "./components/Education";
import { Certifications } from "./components/Certifications";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <Hero />
      <Education />
      <Certifications />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}