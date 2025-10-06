"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageProvider";
import { useState, useEffect } from "react";

export default function Hero() {
  const { t } = useLanguage();
  const [displayedText, setDisplayedText] = useState("");
  const fullText = t.hero.subtitle;

  useEffect(() => {
    let currentIndex = 0;
    setDisplayedText("");

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative z-10">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t.hero.title}
      </motion.h1>

      <motion.h3
        className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Ingénieur IA  |  Data Scientist
      </motion.h3>
      <motion.p
        className="max-w-2xl text-xl md:text-2xl text-slate-700 mb-4 font-medium min-h-[2em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {displayedText}
        <span className="animate-pulse">|</span>
      </motion.p>
      <motion.p
        className="max-w-2xl text-lg text-slate-600 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        {t.hero.description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.6 },
          y: { repeat: Infinity, duration: 2, delay: 2 }
        }}
      >
        <Link href="#projects">
          <ArrowDownCircle className="w-10 h-10 text-blue-600" />
        </Link>
      </motion.div>
    </section>
  );
}
