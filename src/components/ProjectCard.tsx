"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageProvider";

type Project = {
  title: string;
  year: number;
  tags: string[];
  description?: string;
  organization?: string;
  context?: string;
  objective?: string;
  solution?: string;
  status?: string;
  technologies?: string[];
  link?: string;
  confidential?: boolean;
};

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  const isConfidential = project.confidential ||
    (project.organization &&
     !project.organization.toLowerCase().includes("personal") &&
     !project.organization.toLowerCase().includes("personnel") &&
     !project.link);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <Card className="bg-white border border-slate-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 group">
        <CardContent>
          <motion.div
            className="flex items-start justify-between mb-2"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold text-slate-900 flex-1 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            {isConfidential && (
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.3 }}
              >
                <Lock className="w-4 h-4 text-slate-400 ml-2 flex-shrink-0" />
              </motion.div>
            )}
          </motion.div>
          {project.organization && (
            <p className="text-xs italic text-slate-500 mb-2">{project.organization}</p>
          )}
          {project.description && (
            <p className="text-sm mb-4 text-slate-700">{project.description}</p>
          )}

          {project.context && (
            <p className="text-sm mb-2 text-slate-700"><strong>{t.projects.context}&nbsp;:</strong> {project.context}</p>
          )}

          {project.objective && (
            <p className="text-sm mb-2 text-slate-700"><strong>{t.projects.objective}&nbsp;:</strong> {project.objective}</p>
          )}

          {project.solution && (
            <p className="text-sm mb-4 text-slate-700"><strong>{t.projects.solution}&nbsp;:</strong> {project.solution}</p>
          )}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string, i: number) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.1 }}
              className="text-xs px-2 py-1 rounded-full bg-violet-100 text-violet-700 border border-violet-200 cursor-default"
            >
              {project.year}
            </motion.span>
            {project.status && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200 cursor-default"
              >
                {project.status}
              </motion.span>
            )}
            {isConfidential && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-300 flex items-center gap-1 cursor-default"
              >
                <Lock className="w-3 h-3" />
                {t.projects.confidential}
              </motion.span>
            )}
          </div>
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech: string, i: number) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.02 }}
                  whileHover={{ y: -2, backgroundColor: "#e0e7ff" }}
                  className="text-[10px] px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          )}
          {project.link && (
            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
                whileHover={{ x: 5 }}
              >
                {t.projects.viewProject}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
