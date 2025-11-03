"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Globe, ShieldCheck, Wrench, Sparkles } from "lucide-react";

import { fr } from "@/locales/fr";
import { en } from "@/locales/en";

type Lang = "fr" | "en";

export default function Skills() {
  const [lang, setLang] = useState<Lang>("fr");

  // Lire la langue au montage
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    const initial = saved === "en" || saved === "fr" ? saved : "fr";
    setLang(initial);
    if (typeof document !== "undefined") document.documentElement.lang = initial;
  }, []);

  // Écouter les changements envoyés par la Navbar
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

  // Mapping catégories -> icônes + libellés + items depuis les locales
  const categories = useMemo(
    () => [
      {
        title: t.skills.software,
        icon: Code2,
        items: t.skills.items.software,
      },
      {
        title: t.skills.fullStack,
        icon: Globe,
        items: t.skills.items.fullStack,
      },
      {
        title: t.skills.systems,
        icon: ShieldCheck,
        items: t.skills.items.systems,
      },
      {
        title: t.skills.tools,
        icon: Wrench,
        items: t.skills.items.tools,
      },
      {
        title: t.skills.softSkills,
        icon: Sparkles,
        items: t.skills.items.softSkills,
      },
    ],
    [t]
  );

  return (
    <section id="skills" className="container mx-auto py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">{t.skills.title}</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ title, icon: Icon, items }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.03 }}
            className="relative overflow-hidden rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl"
          >
            {/* halo décoratif */}
            <motion.div
              layoutId="halo"
              className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-indigo-700/30 blur-2xl"
            />

            <div className="relative z-10 flex items-center gap-3 mb-4">
              <Icon className="w-6 h-6 text-indigo-400" />
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>

            <ul className="relative z-10 ml-2 list-disc list-inside space-y-1 text-sm text-gray-300">
              {items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
