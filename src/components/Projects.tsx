"use client";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="container mx-auto py-20 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">{t.projects.title}</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {t.projects.projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
