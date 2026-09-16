"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    label: "LANGUAGES",
    color: "#3d63d1",
    skills: ["Python", "C#", "JavaScript", "Java", "SQL"],
  },
  {
    label: "WEB / BACKEND",
    color: "#0891b2",
    skills: ["Node.js", "REST APIs", "React", "Express.js", "Web Apps"],
  },
  {
    label: "AR / VR",
    color: "#7c3aed",
    skills: ["Unity", "8th Wall", "A-Frame", "WebAR", "MediaPipe"],
  },
  {
    label: "DATABASE",
    color: "#3d63d1",
    skills: ["MongoDB", "MySQL"],
  },
  {
    label: "DATA",
    color: "#0891b2",
    skills: ["Azure Data Factory", "Databricks", "PySpark", "Delta Lake", "ETL"],
  },
  {
    label: "AI",
    color: "#7c3aed",
    skills: ["TensorFlow", "CNN", "OCR", "LLM Fundamentals", "Prompt Engineering", "OpenAI APIs", "RAG Concepts"],
  },
  {
    label: "DEVOPS",
    color: "#3d63d1",
    skills: ["Git", "GitHub", "Vercel"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-28 px-6 lg:px-12" ref={ref}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(72,224,255,0.25), transparent)" }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="heading-lg" style={{ color: "#0f172a" }}>
            The tools of
            <span className="gradient-text-blue"> the craft.</span>
          </h2>
          <p className="mt-3 text-sm" style={{ color: "#475569" }}>
            Hover over a category to highlight — click to filter.
          </p>
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.07 }}
              className="flex flex-col md:flex-row md:items-center gap-4"
            >
              {/* Category label */}
              <button
                className="text-[0.6rem] font-bold tracking-[0.2em] uppercase w-32 text-left flex-shrink-0 transition-all duration-200"
                style={{
                  color: activeCategory === cat.label ? cat.color : "#64748b",
                  textShadow: activeCategory === cat.label ? `0 0 15px ${cat.color}60` : "none",
                }}
                onClick={() =>
                  setActiveCategory(activeCategory === cat.label ? null : cat.label)
                }
              >
                {cat.label}
              </button>

              {/* Divider */}
              <div
                className="hidden md:block w-8 h-[1px] flex-shrink-0"
                style={{ background: "rgba(15,23,42,0.08)" }}
              />

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => {
                  const isActive =
                    activeCategory === null || activeCategory === cat.label;
                  return (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: ci * 0.07 + si * 0.04 }}
                      className="px-3 py-1.5 rounded-full text-[0.65rem] font-medium tracking-wider transition-all duration-300 cursor-default select-none"
                      style={{
                        background: isActive
                          ? `${cat.color}12`
                          : "rgba(15,23,42,0.03)",
                        border: `1px solid ${isActive ? cat.color + "35" : "rgba(15,23,42,0.05)"}`,
                        color: isActive ? cat.color : "#94a3b8",
                        boxShadow: isActive && activeCategory === cat.label
                          ? `0 0 12px ${cat.color}20`
                          : "none",
                        transform: isActive && activeCategory === cat.label ? "scale(1.05)" : "scale(1)",
                      }}
                    >
                      {skill}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reset */}
        {activeCategory && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setActiveCategory(null)}
            className="mt-8 text-xs tracking-widest uppercase hover:text-[#3d63d1] transition-colors"
            style={{ color: "#64748b" }}
          >
            CLEAR FILTER ×
          </motion.button>
        )}
      </div>
    </section>
  );
}
