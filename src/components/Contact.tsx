// src/components/Contact.tsx
"use client";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { fr } from "@/locales/fr";
import { en } from "@/locales/en";
import { getLang, onLangChange } from "../lib/lang";
import { Mail, Linkedin } from "lucide-react";

type Lang = "fr" | "en";

export default function Contact() {
  const [lang, setLang] = useState<Lang>(getLang());

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const off = onLangChange((next) => setLang(next));
    return () => off();
  }, []);

  const t = useMemo(() => (lang === "en" ? en : fr), [lang]);

  return (
    <section
      id="contact"
      className="
        relative w-full overflow-hidden
        pt-20 pb-10
        bg-gradient-to-b from-indigo-600/20 via-indigo-600/10 to-slate-900/40
        flex flex-col items-center
      "
    >
      <h2 className="text-3xl font-bold mb-6">{t.contact.title}</h2>
      <p className="mb-6 text-gray-300 text-center max-w-xl">{t.contact.description}</p>

      <Button asChild className="px-8 py-4 text-lg rounded-2xl shadow-lg hover:scale-105 transition-transform">
        <a href="mailto:nemasou@gmail.com">{t.contact.cta}</a>
      </Button>

      {/* --- Social Icons + Copyright --- */}
      <div className="flex flex-col items-center gap-4 mt-10 text-gray-300">
        {/* Social icons */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/el-hadji-ousmane-seye-84b95133b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-400 transition"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:nemasou@gmail.com"
            className="flex items-center gap-2 hover:text-indigo-400 transition"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400 mt-2">
          © {new Date().getFullYear()} El Hadji Ousmane Seye. {lang === "fr" ? "Tous droits réservés." : "All rights reserved."}
        </p>
      </div>

      {/* Halo fusion footer */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute left-1/2 -translate-x-1/2
          -bottom-8 h-28 w-[80%] md:w-[60%]
          blur-3xl opacity-90
          [background:radial-gradient(60%_120%_at_50%_0%,rgba(99,102,241,0.45)_0%,rgba(99,102,241,0.18)_40%,rgba(15,23,42,0)_100%)]
        "
      />
    </section>
  );
}
