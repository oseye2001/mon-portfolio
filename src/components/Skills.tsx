"use client";
import { motion } from "framer-motion";
import { Code2, Globe2, ShieldCheck, Wrench, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageProvider";

type SkillCategory = {
  titleKey: "software" | "fullStack" | "systems" | "tools" | "softSkills";
  icon: React.ElementType;
  itemsKey: "software" | "fullStack" | "systems" | "tools" | "softSkills";
};

const categories: SkillCategory[] = [
  {
    titleKey: "software",
    icon: Code2,
    itemsKey: "software",
  },
  {
    titleKey: "fullStack",
    icon: Globe2,
    itemsKey: "fullStack",
  },
  {
    titleKey: "systems",
    icon: ShieldCheck,
    itemsKey: "systems",
  },
  {
    titleKey: "tools",
    icon: Wrench,
    itemsKey: "tools",
  },
  {
    titleKey: "softSkills",
    icon: Sparkles,
    itemsKey: "softSkills",
  },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="container mx-auto py-20 bg-slate-50 relative z-10">
      <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
        {t.skills.title}
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {categories.map(({ titleKey, icon: Icon, itemsKey }, index) => (
          <motion.div
            key={titleKey}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{
              scale: 1.03,
              rotate: [0, -1, 1, 0],
              transition: { duration: 0.3 },
            }}
            className="relative overflow-hidden rounded-2xl p-6 border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition-all group"
          >
            {/* halo décoratif */}
            <motion.div
              className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-100/50 blur-2xl group-hover:bg-violet-100/50 transition-colors duration-300"
            />
            <motion.div
              className="relative z-10 flex items-center gap-3 mb-4"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <Icon className="w-6 h-6 text-blue-600 group-hover:text-violet-600 transition-colors" />
              </motion.div>
              <h3 className="text-lg font-semibold text-slate-900">
                {t.skills[titleKey]}
              </h3>
            </motion.div>

            <ul className="relative z-10 ml-2 list-disc list-inside space-y-1 text-sm text-slate-700">
              {t.skills.items[itemsKey].map((item: string, i: number) => (
                <motion.li
                  key={`${titleKey}-${item}-${i}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  whileHover={{ x: 5, color: "#2563eb" }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
