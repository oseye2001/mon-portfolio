"use client";
import { useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { fr } from "@/locales/fr";
import { en } from "@/locales/en";

type Lang = "fr" | "en";

export default function Contact() {
  const [lang, setLang] = useState<Lang>("fr");

  // 1) Lire la langue au montage
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    const initial = saved === "en" || saved === "fr" ? saved : "fr";
    setLang(initial);
    if (typeof document !== "undefined") document.documentElement.lang = initial;
  }, []);

  // 2) Écouter les changements depuis la Navbar
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

  return (
    <section id="contact" className="container mx-auto py-20 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">{t.contact.title}</h2>
      <p className="mb-6 text-gray-300 text-center max-w-xl">{t.contact.description}</p>

      <Button
        asChild
        className="px-8 py-4 text-lg rounded-2xl shadow-lg hover:scale-105 transition-transform"
      >
        <a href="mailto:nemasou@gmail.com">{t.contact.cta}</a>
      </Button>
    </section>
  );
}
