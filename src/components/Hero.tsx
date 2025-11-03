"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import Link from "next/link";

import { fr } from "@/locales/fr";
import { en } from "@/locales/en";

type Lang = "fr" | "en";

export default function Hero() {
  const [lang, setLang] = useState<Lang>("fr");

  // 1) Lire la langue au montage depuis localStorage
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    const initial = saved === "en" || saved === "fr" ? saved : "fr";
    setLang(initial);
    if (typeof document !== "undefined") document.documentElement.lang = initial;
  }, []);

  // 2) Écouter les changements envoyés par la Navbar
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

  const isEN = lang === "en";

  // Locales disponibles (si besoin pour d'autres sections)
  const t = useMemo(() => (isEN ? en : fr), [isEN]);

  // ✅ TES textes EXACTS conservés pour le Hero
  const texts = isEN
    ? {
        title: "El Hadji Ousmane Seye",
        subtitle: "Junior Full-Stack Developer",
        description:
          "Junior Full-Stack Developer, motivated and passionate about web development, I am building my first projects to strengthen my skills from Front-End to Back-End.",
        ctaProjects: "Projects",
        ctaContact: "Email me",
        ariaProjects: "Projects – scroll to the projects section",
        ariaContact: "Contact – open the contact section",
        ariaScroll: "Scroll to projects",
      }
    : {
        title: "El hadji ousmane seye",
        subtitle: "Developpeur full stack",
        description:
          "Développeur Full-Stack débutant, motivé et passionné par le développement web, je conçois mes premiers projets afin de renforcer mes compétences du Front-End au Back-End.",
        ctaProjects: "Projets",
        ctaContact: "Écrivez-moi",
        ariaProjects: "Projets – défiler jusqu'à la section projets",
        ariaContact: "Contact – ouvrir la section contact",
        ariaScroll: "Aller aux projets",
      };

  return (
    <section
      id="hero"
      className="relative h-[100svh] flex flex-col justify-center items-center text-center overflow-hidden px-6"
      aria-label="Hero / introduction"
    >
      {/* Fond subtil en dégradé */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-indigo-50/40 to-white"
      />

      {/* Halo radial dynamique (couleur + translation si EN) */}
      <motion.div
        aria-hidden
        initial={{ x: 0, y: 0 }}
        animate={isEN ? { x: 60, y: -60 } : { x: 0, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`pointer-events-none absolute -z-10 size-[60rem] rounded-full blur-3xl opacity-60 ${
          isEN
            ? "bg-gradient-to-tr from-blue-200/40 to-emerald-200/30"
            : "bg-gradient-to-tr from-fuchsia-200/40 to-indigo-200/30"
        }`}
      />

      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent tracking-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {texts.title}
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl font-semibold text-slate-700 mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        {texts.subtitle}
      </motion.h2>

      <motion.p
        className="max-w-2xl text-base md:text-lg text-slate-600 mb-10 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {texts.description}
      </motion.p>

      {/* CTA principaux */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.45, duration: 0.5 }}
      >
        <Link
          href="#projects"
          className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm ring-1 ring-indigo-200 hover:ring-indigo-300 bg-indigo-600 text-white hover:brightness-110 transition"
          aria-label={texts.ariaProjects}
        >
          {texts.ctaProjects}
        </Link>

        <Link
          href="#contact"
          className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm ring-1 ring-slate-200 hover:ring-slate-300 bg-white text-slate-700 hover:text-slate-900 transition"
          aria-label={texts.ariaContact}
        >
          {texts.ctaContact}
        </Link>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        className="mt-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Link href="#projects" aria-label={texts.ariaScroll}>
          <ArrowDownCircle className="w-10 h-10 text-indigo-500 hover:text-pink-500 transition-colors cursor-pointer" />
        </Link>
      </motion.div>
    </section>
  );
}
