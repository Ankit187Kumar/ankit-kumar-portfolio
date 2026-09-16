"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar } from "lucide-react";
import HoverPreview from "@/components/ui/HoverPreview";

const experiences = [
  {
    role: "SOFTWARE DEVELOPER",
    company: "Metaverse911™ | AXRVerse Global Pvt. Ltd.",
    period: "May 2025 – Present · Noida, India",
    color: "#3d63d1",
    highlights: [
      "Design and develop immersive AR/VR applications using Unity and C#",
      "Implement game mechanics, physics systems, animations, scene management, and interactive 3D environments",
      "Develop interactive features and spatial experiences for real-time XR applications",
      "Work with 3D assets, spatial interactions, and XR development workflows to build immersive digital experiences",
      "Troubleshoot, debug, and optimize applications to improve performance, stability, and functionality",
      "Apply modern software engineering practices including API integration, version control, debugging, and application architecture",
    ],
  },
  {
    role: "SOFTWARE ENGINEER INTERN",
    company: "Metaverse911™ | AXRVerse Global Pvt. Ltd.",
    period: "February 2025 – April 2025 · Noida, India",
    color: "#7c3aed",
    highlights: [
      "Gained hands-on experience in software development, Unity, C#, and application design",
      "Developed game mechanics, scene management, C# scripts, and interactive 3D components using Unity",
      "Supported software implementation, testing, debugging, and application optimization",
      "Worked with C#, Python, HTML, and CSS for development and prototyping",
      "Applied software development best practices, debugging techniques, and Git-based version control",
      "Collaborated with development teams to implement project requirements and deliver interactive experiences",
    ],
  },
  {
    role: "DATA ENGINEERING INTERN",
    company: "Celebal Technologies",
    period: "September 2023 – October 2024",
    color: "#0891b2",
    highlights: [
      "Built continuous data ingestion and ETL pipelines using Azure Data Factory and Databricks",
      "Developed PySpark transformation jobs for processing large-scale datasets",
      "Implemented data workflows using Delta Lake with ACID transaction support",
      "Wrote SQL queries and Python scripts for ETL automation and data validation",
      "Automated repetitive data-processing workflows to improve operational efficiency",
      "Collaborated with data teams to develop analytics-ready data models",
    ],
  },
  {
    role: "WEBSITE DEVELOPMENT INTERN",
    company: "Zetpeak",
    period: "July 2023 – October 2023 · 3 Months",
    color: "#059669",
    highlights: [
      "Developed and enhanced responsive web pages using HTML, CSS, and JavaScript",
      "Built user-friendly website interfaces with a focus on responsive design and usability",
      "Assisted in implementing website features based on project requirements",
      "Performed testing and debugging to identify and resolve UI and functionality issues",
      "Applied web development fundamentals to build and refine interactive web components",
      "Collaborated with team members throughout the website development lifecycle",
    ],
  },
  {
    role: "PYTHON DEVELOPER INTERN",
    company: "Bharat Internship",
    period: "2022 · 3 Months",
    color: "#db2777",
    highlights: [
      "Developed web-based applications using Python, HTML, CSS, and JavaScript",
      "Built a responsive personal portfolio website showcasing technical skills and projects",
      "Developed a Celsius-to-Fahrenheit temperature converter with dynamic input handling",
      "Created a Netflix-inspired homepage with responsive layouts and structured UI components",
      "Applied Python programming fundamentals, including variables, functions, conditional logic, and problem-solving",
      "Used GitHub for source-code management and project versioning",
    ],
  },
  {
    role: "MACHINE LEARNING CODING INTERN",
    company: "Suven Consultants & Technology Pvt. Ltd.",
    period: "November 2022 · 2 Weeks / 70 Hours",
    color: "#d97706",
    highlights: [
      "Completed a 70-hour Machine Learning Coding Internship focused on practical AI and chatbot development",
      "Developed a chatbot for online food ordering to simulate automated customer interactions",
      "Built a diagnostic-center chatbot designed to emulate a laboratory coordinator",
      "Applied machine learning and coding concepts to develop conversational application workflows",
      "Gained practical exposure to AI automation, chatbot development, problem-solving, and software implementation",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<(typeof experiences)[number] | null>(null);

  return (
    <section id="experience" className="relative py-28 px-6 lg:px-12" ref={ref}>
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
            <span className="gradient-text"> worked.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-[1px] hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, #3d63d140, #7c3aed40, #0891b240, #05966940, #db277740, #d9770640, transparent)",
            }}
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                onMouseEnter={() => setHovered(exp)}
                onMouseLeave={() => setHovered(null)}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-2 top-2 w-4 h-4 rounded-full border-2 hidden md:block -translate-x-1/2"
                  style={{
                    borderColor: exp.color,
                    background: "#f8fafc",
                    boxShadow: `0 0 12px ${exp.color}40`,
                  }}
                />

                <div
                  className="glass-card rounded-2xl p-7 space-y-5"
                  style={{ border: `1px solid ${exp.color}20` }}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold tracking-wider uppercase" style={{ color: "#0f172a" }}>
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium mt-0.5" style={{ color: exp.color }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs" style={{ color: "#64748b" }}>
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm" style={{ color: "#475569" }}>
                        <div
                          className="w-1 h-1 rounded-full flex-shrink-0 mt-2"
                          style={{ background: exp.color }}
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
                  {hovered.role}
                </h3>
                <p className="text-base font-medium mt-1" style={{ color: hovered.color }}>
                  {hovered.company}
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
