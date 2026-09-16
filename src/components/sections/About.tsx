"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6 lg:px-12" ref={ref}>
      {/* Section divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(77,125,255,0.3), transparent)" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mb-16"
        >
          <h2 className="heading-lg" style={{ color: "#0f172a" }}>
            From immersive worlds
            <br />
            <span className="gradient-text-blue">to real-world software.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
            className="relative h-[500px] hidden lg:block"
          >
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(61,99,209,0.2)",
                boxShadow: "0 24px 60px rgba(15,23,42,0.16)",
              }}
            >
              <Image
                src="/ankit-vr1.jpg"
                alt="Ankit Kumar experiencing VR with Meta Quest"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(7,8,11,0.55) 0%, transparent 45%)" }}
              />

              {/* Location badge */}
              <div className="absolute bottom-5 left-5 glass-dark px-4 py-2.5 rounded-xl flex items-center gap-2">
                <MapPin size={16} className="text-white" />
                <span className="text-sm font-bold tracking-wide text-white whitespace-nowrap">
                  Greater Noida, India
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Text + Metrics */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeUp} className="space-y-4">
              <p className="text-base leading-relaxed" style={{ color: "#475569" }}>
                I'm Ankit Kumar — a software developer and AR/VR engineer who bridges the gap
                between immersive spatial computing and practical engineering. From gesture-controlled
                interactive installations to enterprise-grade web applications, I build things
                that people actually experience.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#475569" }}>
                My work spans Unity/C# development, WebAR with 8th Wall and A-Frame,
                full-stack systems using React + Node.js, backend REST APIs, OCR and
                computer-vision pipelines, and large-scale data engineering with Azure
                and Databricks. I also leverage AI and LLM-assisted workflows to accelerate
                development.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#475569" }}>
                Whether it's a real-time hand-tracking game, a kiosk for a live exhibition,
                or a data pipeline processing millions of records — I approach each project
                with equal attention to technical depth and user experience.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
