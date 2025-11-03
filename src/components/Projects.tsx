"use client";
import { useEffect, useMemo, useState } from "react";
import { fr } from "@/locales/fr";
import { en } from "@/locales/en";
import ProjectCard, { Project, ProjectsDict } from "./ProjectCard";

type Lang = "fr" | "en";

type ProjectLocale = {
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

type ProjectsSection = ProjectsDict & { projects: ProjectLocale[] };

export default function Projects() {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    const initial = saved === "en" || saved === "fr" ? saved : "fr";
    setLang(initial);
    if (typeof document !== "undefined") document.documentElement.lang = initial;
  }, []);

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

  // ✅ ICI on utilise bien `t`, donc plus d’erreur "assigned but never used"
  const t = useMemo(() => (lang === "en" ? en : fr), [lang]);
  const dict = t.projects as ProjectsSection;

  const projects: Project[] = useMemo(
    () =>
      (dict.projects || []).map((p: ProjectLocale) => ({
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
    [dict]
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
