"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar } from "lucide-react";
import HoverPreview from "@/components/ui/HoverPreview";

const education = [
  {
    degree: "Master of Business Administration",
    field: "Business Administration and Management, General",
    institution: "Narsee Monjee Institute of Management Studies (NMIMS) Navi Mumbai",
    period: "Jul 2026 – Jun 2028",
    color: "#3d63d1",
    highlights: [
      "Pursuing an MBA with a focus on business administration, management, leadership, strategy, and professional development",
      "Activities: Business & Management Activities, Case Study Competitions, Entrepreneurship & Leadership Activities, Professional Development",
    ],
  },
  {
    degree: "Bachelor of Technology",
    field: "Artificial Intelligence",
    institution: "Noida Institute of Engineering & Technology",
    period: "Jul 2021 – Jun 2025",
    grade: "8.2 CGPA",
    color: "#7c3aed",
    highlights: [
      "Completed a Bachelor of Technology in Computer Science and Engineering, building strong foundations in software development, programming, databases, web technologies, and emerging technologies",
      "Activities: Technical Events, Coding Competitions, Hackathons, Workshops, Sports & College Events",
    ],
  },
  {
    degree: "Intermediate (12th)",
    field: "Mathematics",
    institution: "SSVMIC Bulandshahr",
    period: "Apr 2019 – Mar 2021",
    grade: "85%",
    color: "#0891b2",
    highlights: [
      "Completed Intermediate (Class 12) with a focus on Mathematics, achieving 85%",
      "Activities: Academic Activities, Science Events, Sports & Cultural Activities",
    ],
  },
  {
    degree: "High School",
    field: "Mathematics",
    institution: "SSVMIC Bulandshahr",
    period: "Apr 2017 – Mar 2019",
    grade: "85%",
    color: "#059669",
    highlights: [
      "Completed High School (Class 10) with a focus on Mathematics, achieving 85%",
      "Activities: Academic Activities, Science Events, Sports & Cultural Activities",
    ],
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<(typeof education)[number] | null>(null);

  return (
    <section id="education" className="relative py-28 px-6 lg:px-12" ref={ref}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(77,125,255,0.3), transparent)" }}
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="heading-lg" style={{ color: "#0f172a" }}>
            Where I&apos;ve
            <span className="gradient-text"> studied.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-[1px] hidden md:block"
            style={{
              background: "linear-gradient(to bottom, #3d63d140, #7c3aed40, #0891b240, #05966940, transparent)",
            }}
          />

          <div className="flex flex-col gap-12">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                onMouseEnter={() => setHovered(edu)}
                onMouseLeave={() => setHovered(null)}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-2 top-2 w-4 h-4 rounded-full border-2 hidden md:block -translate-x-1/2"
                  style={{
                    borderColor: edu.color,
                    background: "#f8fafc",
                    boxShadow: `0 0 12px ${edu.color}40`,
                  }}
                />

                <div
                  className="glass-card rounded-2xl p-7 space-y-5"
                  style={{ border: `1px solid ${edu.color}20` }}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold tracking-wider uppercase" style={{ color: "#0f172a" }}>
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-medium mt-0.5" style={{ color: edu.color }}>
                        {edu.institution}
                      </p>
                      <p className="text-xs mt-1" style={{ color: "#64748b" }}>
                        {edu.field}
                        {edu.grade ? ` · ${edu.grade}` : ""}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs" style={{ color: "#64748b" }}>
                      <Calendar size={12} />
                      {edu.period}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {edu.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm" style={{ color: "#475569" }}>
                        <div
                          className="w-1 h-1 rounded-full flex-shrink-0 mt-2"
                          style={{ background: edu.color }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Hover preview popup */}
      <HoverPreview active={!!hovered}>
        {hovered && (
          <div
            className="relative w-full max-w-2xl rounded-2xl p-9 space-y-6 bg-white max-h-[85vh] overflow-y-auto"
            style={{
              border: `1px solid ${hovered.color}45`,
              boxShadow: `0 40px 100px rgba(0,0,0,0.5), 0 0 60px ${hovered.color}20`,
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold tracking-wide uppercase" style={{ color: "#0f172a" }}>
                  {hovered.degree}
                </h3>
                <p className="text-base font-medium mt-1" style={{ color: hovered.color }}>
                  {hovered.institution}
                </p>
                <p className="text-sm mt-1" style={{ color: "#64748b" }}>
                  {hovered.field}
                  {hovered.grade ? ` · ${hovered.grade}` : ""}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "#64748b" }}>
                <Calendar size={14} />
                {hovered.period}
              </div>
            </div>
            <ul className="space-y-3">
              {hovered.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-base" style={{ color: "#475569" }}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: hovered.color }} />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}
      </HoverPreview>
    </section>
  );
}
