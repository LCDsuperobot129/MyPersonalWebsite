"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";
import { experiences } from "@/data/experience";

export default function ExperienceTimeline() {
  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="w-5 h-5" />;
      case "education":
        return <GraduationCap className="w-5 h-5" />;
      case "hackathon":
        return <Trophy className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case "work":
        return "accent-red";
      case "education":
        return "accent-rose";
      case "hackathon":
        return "accent-orange";
      default:
        return "accent-red";
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient from-accent-red to-accent-rose">Achievements</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A record of my journey. More things may arrive.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-red via-accent-rose to-accent-orange" />

          {/* Timeline items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-20"
              >
                {/* Icon */}
                <div className={`absolute left-5 top-0 p-2 bg-${getColor(exp.type)} rounded-full text-white border-4 border-background`}>
                  {getIcon(exp.type)}
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="bg-surface border border-border rounded-xl p-6 hover:border-accent-red/50 transition-all"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-sm text-accent-red font-semibold">{exp.period}</span>
                  </div>

                  <p className="text-lg text-accent-rose font-semibold mb-2">{exp.company}</p>
                  <p className="text-gray-400 mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <span className="text-accent-red mt-1.5 text-xs">▸</span>
                        <span className="text-sm leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
