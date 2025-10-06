"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageProvider";

type Formation = {
  degree: string;
  institution: string;
  years: string;
  focus: string;
  courses?: string[];
};

function FormationCard({ formation }: { formation: Formation }) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
      className="border border-slate-200 rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow"
    >
      <h3 className="text-lg font-semibold mb-1 text-slate-900">{formation.degree}</h3>
      <p className="text-sm text-slate-600 italic mb-1">
        {formation.institution}
      </p>
      <p className="text-xs text-blue-600 mb-4 font-medium">{formation.years}</p>

      <p className="text-sm text-slate-700 mb-2">
        <strong>{t.formations.focus}&nbsp;:</strong> {formation.focus}
      </p>

      {formation.courses && (
        <div className="flex flex-wrap gap-2 mt-2">
          {formation.courses.map((c) => (
            <span
              key={c}
              className="text-[10px] px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200"
            >
              {c}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function Formations() {
  const { t } = useLanguage();

  return (
    <section
      id="formations"
      className="relative container mx-auto py-20 bg-white"
    >
      {/* Decorative dot grid background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-10 bg-repeat"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='%230066FF' fill-opacity='0.3'%3e%3ccircle cx='2' cy='2' r='2'/%3e%3c/svg%3e\")",
        }}
      />
      <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">{t.formations.title}</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {t.formations.formations.map((f) => (
          <FormationCard key={f.degree + f.years} formation={f} />
        ))}
      </div>
    </section>
  );
}
