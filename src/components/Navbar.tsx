"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const links = [
    { href: "#hero", label: t.nav.home },
    { href: "#skills", label: t.nav.skills },
    { href: "#formations", label: t.nav.formations },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200 shadow-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo / nom */}
        <Link
          href="#hero"
          className="text-xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
        >
          El hadji Ousmane 
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop links */}
          <ul className="hidden gap-6 md:flex">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language selector */}
          <button
            onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors text-sm font-medium text-slate-700"
            aria-label="Change language"
          >
            <Globe className="w-4 h-4" />
            <span className="uppercase">{language}</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-lg p-2 hover:bg-slate-100 transition-colors"
            aria-label="Menu mobile"
          >
            {open ? <X className="h-6 w-6 text-blue-600" /> : <Menu className="h-6 w-6 text-blue-600" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden flex flex-col gap-4 px-6 pb-6 pt-2 bg-white border-b border-slate-200"
        >
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="block text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                {label}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}
