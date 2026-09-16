"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Glasses, Globe, Zap, Code2, Brain, ArrowRight } from "lucide-react";
import HoverPreview from "@/components/ui/HoverPreview";

const capabilities = [
  {
    num: "01",
    icon: Glasses,
    title: "AR / WEBAR",
    description: "Immersive browser-based augmented reality experiences using image targets, SLAM tracking and WebGL.",
    tags: ["A-Frame", "8th Wall", "WebGL", "Image Tracking"],
    color: "#3d63d1",
  },
  {
    num: "02",
    icon: Globe,
    title: "VR",
    description: "Interactive virtual environments and immersive applications built with Unity and spatial computing platforms.",
    tags: ["Unity", "C#", "Meta Quest", "6-DoF"],
    color: "#7c3aed",
  },
  {
    num: "03",
    icon: Zap,
    title: "INTERACTIVE EXPERIENCES",
    description: "Touchscreen, camera and gesture-based interactive applications for exhibitions, kiosks and live events.",
    tags: ["MediaPipe", "OpenCV", "Kiosk", "Gesture Control"],
    color: "#0891b2",
  },
  {
    num: "04",
    icon: Code2,
    title: "FULL-STACK",
    description: "Web applications, dashboards, REST APIs and backend systems built for scale and reliability.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    color: "#3d63d1",
  },
  {
    num: "05",
    icon: Brain,
    title: "AI / DATA",
    description: "Computer vision systems, OCR pipelines, ETL data engineering and AI-assisted development workflows.",
    tags: ["TensorFlow", "PySpark", "OCR", "Azure"],
    color: "#7c3aed",
  },
];

export default function Capabilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative py-28 px-6 lg:px-12" ref={ref}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(157,107,255,0.3), transparent)" }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="heading-lg" style={{ color: "#0f172a" }}>
            One mind.
            <br />
            <span className="gradient-text">Multiple technologies.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            const isHovered = hovered === cap.num;
            return (
              <motion.div
                key={cap.num}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                onMouseEnter={() => setHovered(cap.num)}
                onMouseLeave={() => setHovered(null)}
                className="group relative glass-card rounded-2xl p-6 cursor-pointer overflow-hidden"
                style={{
                  border: `1px solid ${isHovered ? cap.color + "40" : "rgba(15,23,42,0.08)"}`,
                  transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                  boxShadow: isHovered ? `0 20px 60px rgba(15,23,42,0.1), 0 0 30px ${cap.color}15` : "none",
                  transform: isHovered ? "translateY(-4px)" : "none",
                }}
              >
                {/* Background gradient on hover */}
                <div
                  className="absolute inset-0 rounded-2xl transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${cap.color}08 0%, transparent 60%)`,
                    opacity: isHovered ? 1 : 0,
                  }}
                />

                <div className="relative z-10 flex flex-col gap-4 h-full">
                  {/* Number + Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-[0.6rem] font-bold tracking-[0.2em]" style={{ color: cap.color }}>
                      {cap.num}
                    </span>
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{
                        background: isHovered ? `${cap.color}20` : "rgba(15,23,42,0.05)",
                        border: `1px solid ${isHovered ? cap.color + "40" : "rgba(15,23,42,0.08)"}`,
                      }}
                    >
                      <Icon size={16} style={{ color: cap.color }} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-sm font-bold tracking-wider uppercase"
                    style={{ color: "#0f172a" }}
                  >
                    {cap.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "#475569" }}>
                    {cap.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cap.tags.map((tag) => (
                      <span key={tag} className="tech-tag" style={{ fontSize: "0.6rem" }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Explore link */}
                  <div
                    className="flex items-center gap-1 text-[0.65rem] font-medium tracking-wider transition-all duration-200"
                    style={{
                      color: isHovered ? cap.color : "#64748b",
                    }}
                  >
                    EXPLORE
                    <ArrowRight
                      size={11}
                      className="transition-transform duration-200"
                      style={{ transform: isHovered ? "translateX(4px)" : "none" }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Hover preview popup */}
      <HoverPreview active={!!hovered}>
        {(() => {
          const cap = capabilities.find((c) => c.num === hovered);
          if (!cap) return null;
          const Icon = cap.icon;
          return (
            <div
              className="relative w-full max-w-lg rounded-2xl p-10 flex flex-col items-center text-center gap-5 bg-white"
              style={{
                border: `1px solid ${cap.color}45`,
                boxShadow: `0 40px 100px rgba(0,0,0,0.5), 0 0 60px ${cap.color}20`,
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: `${cap.color}14`, border: `1px solid ${cap.color}40` }}
              >
                <Icon size={28} style={{ color: cap.color }} />
              </div>
              <span className="text-[0.65rem] font-bold tracking-[0.25em]" style={{ color: cap.color }}>
                {cap.num}
              </span>
              <h3 className="text-2xl font-bold tracking-tight" style={{ color: "#0f172a" }}>
                {cap.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "#475569" }}>
                {cap.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {cap.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })()}
      </HoverPreview>
    </section>
  );
}
