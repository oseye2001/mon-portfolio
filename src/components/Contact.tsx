"use client";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="container mx-auto py-20 flex flex-col items-center bg-slate-50">
      <h2 className="text-3xl font-bold mb-6 text-slate-900">{t.contact.title}</h2>
      <p className="mb-6 text-slate-600">
        {t.contact.description}
      </p>
      <Button
        asChild
        className="px-8 py-4 text-lg rounded-2xl shadow-lg hover:scale-105 transition-transform bg-blue-600 hover:bg-blue-700 text-white"
      >
        <a href="mailto:e.b.seye@gmail.com">{t.contact.cta}</a>
      </Button>
    </section>
  );
}
