// src/components/Contact.tsx
"use client";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { fr } from "@/locales/fr";
import { en } from "@/locales/en";
import { getLang, onLangChange } from "../lib/lang"; // <-- NEW

type Lang = "fr" | "en";

export default function Contact() {
  const [lang, setLang] = useState<Lang>(getLang()); // <-- lire source unique

  useEffect(() => {
    // sync <html lang="">
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    // écouter les changements globaux sans réécrire la logique
    const off = onLangChange((next) => setLang(next));
    return () => off();
  }, []);

  const t = useMemo(() => (lang === "en" ? en : fr), [lang]);

  return (
    <section id="contact" className="container mx-auto py-20 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">{t.contact.title}</h2>
      <p className="mb-6 text-gray-300 text-center max-w-xl">{t.contact.description}</p>
      <Button asChild className="px-8 py-4 text-lg rounded-2xl shadow-lg hover:scale-105 transition-transform">
        <a href="mailto:nemasou@gmail.com">{t.contact.cta}</a>
      </Button>
    </section>
  );
}
