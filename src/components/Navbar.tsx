"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Lang = "fr" | "en";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    const initial = saved === "en" || saved === "fr" ? saved : "fr";
    setLang(initial);
    if (typeof document !== "undefined") document.documentElement.lang = initial;
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
      document.documentElement.lang = lang;
      window.dispatchEvent(new CustomEvent("app:language-changed", { detail: { lang } }));
    }
  }, [lang]);

  const isEN = lang === "en";

  const T = useMemo(
    () =>
      isEN
        ? {
            brand: "El hadji Ousmane",
            links: [
              { href: "#hero", label: "Home" },
              { href: "#skills", label: "Skills" },
              { href: "#formations", label: "Education" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ],
            switchAria: "Switch to French",
            left: "FR",
            right: "EN",
          }
        : {
            brand: "El hadji Ousmane",
            links: [
              { href: "#hero", label: "Accueil" },
              { href: "#skills", label: "Compétences" },
              { href: "#formations", label: "Formations" },
              { href: "#projects", label: "Projets" },
              { href: "#contact", label: "Contact" },
            ],
            switchAria: "Basculer en anglais",
            left: "FR",
            right: "EN",
          },
    [isEN]
  );

  const toggleLang = () => setLang(isEN ? "fr" : "en");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-slate-900/70 border-b border-white/10">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#hero" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          {T.brand}
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            {T.links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-sm text-gray-300 hover:text-indigo-400 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleLang}
            aria-label={T.switchAria}
            className="inline-flex items-center rounded-full p-1 text-xs font-semibold transition shadow ring-1
                       bg-white/90 text-slate-800 ring-slate-200 hover:bg-white"
          >
            <span className={`px-2.5 py-1 rounded-full ${!isEN ? "bg-indigo-600 text-white" : "text-slate-700"}`}>
              {T.left}
            </span>
            <span className="px-1">/</span>
            <span className={`px-2.5 py-1 rounded-full ${isEN ? "bg-indigo-600 text-white" : "text-slate-700"}`}>
              {T.right}
            </span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-lg p-2 hover:bg-white/10 transition-colors"
          aria-label="Menu mobile"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="h-6 w-6 text-indigo-400" /> : <Menu className="h-6 w-6 text-indigo-400" />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-slate-900/95 px-6 pb-6 pt-2 flex flex-col gap-4"
          >
            {T.links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                {label}
              </Link>
            ))}

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  toggleLang();
                  setOpen(false);
                }}
                aria-label={T.switchAria}
                className="inline-flex items-center rounded-full p-1 text-xs font-semibold transition shadow ring-1
                           bg-white/90 text-slate-800 ring-slate-200 hover:bg-white"
              >
                <span className={`px-2.5 py-1 rounded-full ${!isEN ? "bg-indigo-600 text-white" : "text-slate-700"}`}>FR</span>
                <span className="px-1">/</span>
                <span className={`px-2.5 py-1 rounded-full ${isEN ? "bg-indigo-600 text-white" : "text-slate-700"}`}>EN</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
