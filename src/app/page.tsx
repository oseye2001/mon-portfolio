"use client";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Formations from "@/components/Formations";
import FloatingMenu from "@/components/FloatingMenu";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import FloatingParticles from "@/components/FloatingParticles";

export default function Home() {
  return (
    <main className="bg-white text-slate-900 relative">
  <FloatingParticles />
  <Navbar />
  <Hero />
  <Skills />
  <Formations />
  <Projects />
  <Contact />

  {/* Menu flottant */}
  <FloatingMenu />
    </main>
  );
}
