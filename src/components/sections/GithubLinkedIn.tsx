"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any } },
};

export default function GithubLinkedIn() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 px-6 lg:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* GitHub */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="glass-card rounded-2xl p-8 space-y-5 group"
            style={{ border: "1px solid rgba(77,125,255,0.15)" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(77,125,255,0.1)", border: "1px solid rgba(77,125,255,0.2)" }}
              >
                <Github size={18} style={{ color: "#3d63d1" }} />
              </div>
              <div>
                <p className="text-base font-bold tracking-tight" style={{ color: "#0f172a" }}>
                  BUILT IN PUBLIC
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
              Explore my repositories — from gesture-controlled games to interactive kiosks and
              data engineering projects. All public work is available on GitHub.
            </p>

            <a
              href="https://github.com/Ankit187Kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wider w-fit transition-all duration-200"
              style={{
                background: "rgba(77,125,255,0.12)",
                border: "1px solid rgba(77,125,255,0.3)",
                color: "#3d63d1",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(77,125,255,0.2)";
                el.style.boxShadow = "0 0 20px rgba(77,125,255,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(77,125,255,0.12)";
                el.style.boxShadow = "none";
              }}
            >
              VIEW GITHUB
              <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>

            <p className="text-[0.6rem] tracking-wider" style={{ color: "#64748b" }}>
              github.com/Ankit187Kumar
            </p>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ delay: 0.12 }}
            className="glass-card rounded-2xl p-8 space-y-5"
            style={{ border: "1px solid rgba(157,107,255,0.15)" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(157,107,255,0.1)", border: "1px solid rgba(157,107,255,0.2)" }}
              >
                <Linkedin size={18} style={{ color: "#7c3aed" }} />
              </div>
              <div>
                <p className="text-base font-bold tracking-tight" style={{ color: "#0f172a" }}>
                  LET&apos;S CONNECT.
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
              Interested in immersive technology, software development or building interactive
              experiences? Let&apos;s connect on LinkedIn.
            </p>

            <a
              href="https://www.linkedin.com/in/ankit-chaudhary-351a73264/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wider w-fit transition-all duration-200"
              style={{
                background: "rgba(157,107,255,0.12)",
                border: "1px solid rgba(157,107,255,0.3)",
                color: "#7c3aed",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(157,107,255,0.2)";
                el.style.boxShadow = "0 0 20px rgba(157,107,255,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(157,107,255,0.12)";
                el.style.boxShadow = "none";
              }}
            >
              CONNECT ON LINKEDIN
              <ArrowRight size={13} />
            </a>

            <p className="text-[0.6rem] tracking-wider" style={{ color: "#64748b" }}>
              linkedin.com/in/ankit-chaudhary-351a73264
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
