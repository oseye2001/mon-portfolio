"use client";
import { useEffect, useMemo, useState } from "react";
import { fr } from "@/locales/fr";
import { en } from "@/locales/en";
import ProjectCard, { type Project } from "@/components/ProjectCard";

type Lang = "fr" | "en";

// Type pour les objets projets venant des locales
type LocalizedProject = {
  title: string;
  organization: string;
  tags?: string[];
  year: number;
  context: string;
  objective: string;
  solution: string;
  technologies?: string[];
  status?: string;
};

export default function Projects() {
  const [lang, setLang] = useState<Lang>("fr");

  // Lire langue au montage
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    const initial = saved === "en" || saved === "fr" ? saved : "fr";
    setLang(initial);
    if (typeof document !== "undefined") document.documentElement.lang = initial;
  }, []);

  // Écouter Navbar (événement global)
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as { lang?: Lang } | undefined;
      if (detail?.lang === "en" || detail?.lang === "fr") {
        setLang(detail.lang);
        if (typeof document !== "undefined") document.documentElement.lang = detail.lang;
      }
    };
    window.addEventListener("app:language-changed", handler as EventListener);
    return () => window.removeEventListener("app:language-changed", handler as EventListener);
  }, []);

  const t = useMemo(() => (lang === "en" ? en : fr), [lang]);
  const dict = t.projects;

  const projects: Project[] = useMemo(
    () =>
      (t.projects.projects || []).map((p: LocalizedProject) => ({
        title: p.title,
        organization: p.organization,
        tags: p.tags ?? [],
        year: p.year,
        context: p.context,
        objective: p.objective,
        solution: p.solution,
        technologies: p.technologies ?? [],
        status: p.status,
      })),
    [t]
  );

  return (
    <section id="projects" className="container mx-auto py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">{dict.title}</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <ProjectCard key={p.title + p.year + idx} p={p} dict={dict} />
        ))}
      </div>
    </section>
  );
}
