"use client";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, ChevronDown } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any } },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Full-bleed video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/ankit-vr2.jpg"
          className="h-full w-full object-cover"
          style={{ objectPosition: "60% 38%" }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,10,16,0.55) 0%, rgba(8,10,16,0.25) 35%, rgba(8,10,16,0.55) 70%, rgba(8,10,16,0.92) 100%)",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 pt-40"
      >
        {/* Availability badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="glass-dark inline-flex items-center gap-2 rounded-full px-3 py-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "#4ade80", boxShadow: "0 0 10px rgba(74,222,128,0.8)" }}
            />
            <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-white/85">
              Open to opportunities
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div variants={itemVariants}>
          <p className="text-sm md:text-base tracking-[0.15em] uppercase text-white/70 mb-1">
            Hi, I&apos;m
          </p>
          <h1 className="heading-xl text-white">
            Ankit Kumar<span className="text-white/50">.</span>
          </h1>
          <p className="mt-2 text-xl md:text-2xl font-light text-white/85" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
            AR/VR Engineer <span className="text-white/40">&amp;</span> Full-Stack Developer.
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-5 max-w-lg text-sm md:text-base leading-relaxed text-white/70"
        >
          I build immersive AR/VR experiences, interactive applications, computer-vision
          systems, and scalable web solutions — from exhibition kiosks to production APIs.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={() => scrollTo("work")}
            className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 active:scale-95 hover:shadow-[0_0_24px_rgba(244,241,235,0.35)]"
            style={{ background: "#f4f1eb", color: "#0f172a" }}
          >
            View my work
            <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-medium tracking-wide text-white transition-colors hover:border-white/45 hover:bg-white/10 active:scale-95"
          >
            Get in touch
            <ArrowUpRight size={14} />
          </button>

          <div className="mx-1 hidden h-6 w-px bg-white/20 sm:block" />

          <a
            href="https://github.com/Ankit187Kumar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
          >
            <Github size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/ankit-chaudhary-351a73264/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
          >
            <Linkedin size={15} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 right-6 lg:right-12 z-10 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white/50">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={16} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
