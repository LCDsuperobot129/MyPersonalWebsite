"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function SkillsGrid() {
  // Filter to only show Languages category
  const languages = skills.find(category => category.category === "Languages");

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-red to-accent-rose">
              Languages
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Programming languages I work with
          </p>
        </motion.div>

        {languages && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <ul className="space-y-3">
              {languages.items.map((language, index) => (
                <motion.li
                  key={language}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-2xl font-medium text-gray-300 hover:text-accent-red transition-colors"
                >
                  {language}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
}
