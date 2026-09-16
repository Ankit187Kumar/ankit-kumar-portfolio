"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowRight } from "lucide-react";
import { Github } from "@/components/ui/Icons";

export type Project = {
  id: string;
  num: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  userFlow: string[];
  architecture: string[];
  techStack: string[];
  contribution: string;
  challenges: string;
  result: string;
  liveDemo?: string;
  github?: string;
  color: string;
  tags: string[];
  previewImage?: string;
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[500] cursor-pointer"
            style={{ background: "rgba(15,23,42,0.45)", backdropFilter: "blur(6px)" }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as any }}
            className="fixed inset-4 md:inset-8 z-[501] overflow-y-auto rounded-2xl"
            style={{
              background: "#ffffff",
              border: `1px solid ${project.color}30`,
              boxShadow: `0 40px 100px rgba(15,23,42,0.2), 0 0 60px ${project.color}10`,
            }}
          >
            {/* Header */}
            <div
              className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-10 py-5 border-b"
              style={{
                borderColor: "rgba(15,23,42,0.08)",
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div>
                <p className="text-[0.6rem] tracking-[0.2em] uppercase mb-1" style={{ color: project.color }}>
                  {project.num} — CASE STUDY
                </p>
                <h2 className="text-lg font-bold tracking-tight" style={{ color: "#0f172a" }}>
                  {project.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors hover:bg-black/5"
                style={{ color: "#475569", border: "1px solid rgba(15,23,42,0.08)" }}
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 md:px-10 py-8 space-y-10">
              {/* Overview */}
              <div className="space-y-3">
                <SectionLabel color={project.color}>01 — OVERVIEW</SectionLabel>
                <p style={{ color: "#475569" }} className="text-sm leading-relaxed">
                  {project.longDescription}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>

              <Divider color={project.color} />

              {/* Problem + Solution */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <SectionLabel color={project.color}>02 — PROBLEM</SectionLabel>
                  <p style={{ color: "#475569" }} className="text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div className="space-y-3">
                  <SectionLabel color={project.color}>03 — SOLUTION</SectionLabel>
                  <p style={{ color: "#475569" }} className="text-sm leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <Divider color={project.color} />

              {/* User Flow */}
              <div className="space-y-4">
                <SectionLabel color={project.color}>04 — USER FLOW</SectionLabel>
                <div className="flex flex-wrap items-center gap-2">
                  {project.userFlow.map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <div
                        className="px-4 py-2 rounded-full text-xs font-medium tracking-wider"
                        style={{
                          background: `${project.color}12`,
                          border: `1px solid ${project.color}30`,
                          color: project.color,
                        }}
                      >
                        {step}
                      </div>
                      {i < project.userFlow.length - 1 && (
                        <ArrowRight size={12} style={{ color: "#64748b" }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <Divider color={project.color} />

              {/* Architecture */}
              <div className="space-y-4">
                <SectionLabel color={project.color}>07 — TECHNICAL ARCHITECTURE</SectionLabel>
                <div className="flex flex-col gap-2 w-fit">
                  {project.architecture.map((step, i) => (
                    <div key={step} className="flex flex-col items-start">
                      <div
                        className="px-4 py-2 rounded-lg text-xs font-mono tracking-wider"
                        style={{
                          background: "rgba(15,23,42,0.04)",
                          border: "1px solid rgba(15,23,42,0.08)",
                          color: "#0f172a",
                        }}
                      >
                        {step}
                      </div>
                      {i < project.architecture.length - 1 && (
                        <div className="ml-4 mt-1 mb-1 flex flex-col gap-[2px]">
                          <div className="w-[1px] h-3 bg-[rgba(77,125,255,0.3)] mx-auto" />
                          <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px]" style={{ borderTopColor: "rgba(77,125,255,0.4)" }} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <Divider color={project.color} />

              {/* Contribution + Challenges + Result */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <SectionLabel color={project.color}>06 — MY CONTRIBUTION</SectionLabel>
                  <p style={{ color: "#475569" }} className="text-sm leading-relaxed">{project.contribution}</p>
                </div>
                <div className="space-y-3">
                  <SectionLabel color={project.color}>08 — CHALLENGES</SectionLabel>
                  <p style={{ color: "#475569" }} className="text-sm leading-relaxed">{project.challenges}</p>
                </div>
                <div className="space-y-3">
                  <SectionLabel color={project.color}>09 — RESULT</SectionLabel>
                  <p style={{ color: project.color }} className="text-sm leading-relaxed font-medium">{project.result}</p>
                </div>
              </div>

              {/* CTA Links */}
              {(project.liveDemo || project.github) && (
                <div className="flex gap-4 pt-4">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-200 hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${project.color} 0%, #0891b2 100%)`,
                        color: "#07080b",
                        boxShadow: `0 0 25px ${project.color}30`,
                      }}
                    >
                      <ExternalLink size={14} /> LIVE DEMO
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium tracking-wider border hover:border-[rgba(77,125,255,0.4)] transition-colors"
                      style={{ color: "#0f172a", borderColor: "rgba(15,23,42,0.12)", background: "rgba(15,23,42,0.03)" }}
                    >
                      <Github size={14} /> GITHUB
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function SectionLabel({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <p className="text-[0.6rem] font-bold tracking-[0.2em] uppercase" style={{ color }}>
      {children}
    </p>
  );
}

function Divider({ color }: { color: string }) {
  return (
    <div
      className="h-px"
      style={{ background: `linear-gradient(90deg, ${color}20, transparent)` }}
    />
  );
}
