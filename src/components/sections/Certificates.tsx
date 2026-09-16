"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";
import HoverPreview from "@/components/ui/HoverPreview";

const certificates = [
  {
    title: "Data Engineering Internship",
    issuer: "Celebal Technologies",
    period: "Jun 2024 – Aug 2024",
    color: "#3d63d1",
    certUrl: "/certificates/celebal-data-engineering.jpg",
  },
  {
    title: "Associate Cloud Engineer Track",
    issuer: "Google Cloud",
    period: "Issued May 2024 · ID KPndsB27",
    color: "#7c3aed",
    certUrl: "/certificates/google-cloud-ace.jpg",
  },
  {
    title: "Website Development Internship",
    issuer: "Zetpeak",
    period: "Jul 2023 – Oct 2023",
    color: "#0891b2",
    certUrl: "/certificates/zetpeak-website-development.jpg",
  },
  {
    title: "Web Development — Virtual Internship",
    issuer: "Bharat Intern",
    period: "Jul 2023 – Aug 2023",
    color: "#059669",
    certUrl: "/certificates/bharat-intern-web-development.jpg",
  },
  {
    title: "Machine Learning Coding Internship",
    issuer: "Suven Consultants & Technology",
    period: "Nov 2022 · 70 hrs",
    color: "#3d63d1",
    certUrl: "/certificates/suven-machine-learning.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any } },
};

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<(typeof certificates)[number] | null>(null);

  return (
    <section id="certificates" className="relative py-28 px-6 lg:px-12" ref={ref}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(77,125,255,0.3), transparent)" }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="heading-lg" style={{ color: "#0f172a" }}>
            Certifications
            <span className="gradient-text-blue"> &amp; internships.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              onMouseEnter={() => setHovered(cert)}
              onMouseLeave={() => setHovered(null)}
              className="glass-card rounded-2xl p-6 space-y-4"
              style={{ border: `1px solid ${cert.color}20` }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${cert.color}12`, border: `1px solid ${cert.color}30` }}
              >
                <Award size={18} style={{ color: cert.color }} />
              </div>

              <div>
                <h3 className="text-sm font-bold tracking-tight leading-snug" style={{ color: "#0f172a" }}>
                  {cert.title}
                </h3>
                <p className="text-sm font-medium mt-1" style={{ color: cert.color }}>
                  {cert.issuer}
                </p>
              </div>

              <p className="text-xs tracking-wide" style={{ color: "#64748b" }}>
                {cert.period}
              </p>

              <a
                href={cert.certUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide transition-colors"
                style={{ color: cert.color }}
              >
                View certificate
                <ExternalLink size={11} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hover preview popup */}
      <HoverPreview active={!!hovered}>
        {hovered && (
          <div
            className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
            style={{
              border: `1px solid ${hovered.color}45`,
              boxShadow: `0 40px 100px rgba(0,0,0,0.5), 0 0 60px ${hovered.color}20`,
            }}
          >
            <Image
              src={hovered.certUrl}
              alt={`${hovered.title} certificate`}
              width={1000}
              height={750}
              className="w-full h-auto object-contain bg-white"
            />
            <div
              className="absolute top-0 left-0 right-0 p-4"
              style={{ background: "linear-gradient(to bottom, rgba(7,8,11,0.75), transparent)" }}
            >
              <p className="text-sm font-bold tracking-wide text-white">{hovered.title}</p>
              <p className="text-xs text-white/70">{hovered.issuer}</p>
            </div>
          </div>
        )}
      </HoverPreview>
    </section>
  );
}
