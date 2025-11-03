"use client";
import { motion } from "framer-motion";

export type Project = {
  title: string;
  organization: string;
  tags: string[];
  year: number;
  context: string;
  objective: string;
  solution: string;
  technologies: string[];
  status?: string;
};

export default function ProjectCard({ p, dict }: { p: Project; dict: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg p-6 flex flex-col gap-3"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <span className="text-xs text-indigo-300 shrink-0">{p.year}</span>
      </div>

      <p className="text-sm text-gray-300 italic">{p.organization}</p>

      <div className="flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-slate-700 text-slate-200">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-2 space-y-1 text-sm text-gray-300">
        <p><strong className="text-slate-200">{dict.context} :</strong> {p.context}</p>
        <p><strong className="text-slate-200">{dict.objective} :</strong> {p.objective}</p>
        <p><strong className="text-slate-200">{dict.solution} :</strong> {p.solution}</p>
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        {p.technologies.map((tech) => (
          <span key={tech} className="text-[10px] px-2 py-1 rounded-full bg-slate-800 text-slate-200">
            {tech}
          </span>
        ))}
      </div>

      {p.status && <div className="mt-2 text-xs text-amber-300">{p.status}</div>}
    </motion.div>
  );
}
