"use client";
import { Mail, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative border-t py-10 px-6"
      style={{ borderColor: "rgba(255,255,255,0.06)", background: "#07080b" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <p
            className="text-xl font-extrabold tracking-[0.15em] uppercase"
            style={{ color: "#ffffff", textShadow: "0 0 24px rgba(77,125,255,0.35)" }}
          >
            Ankit Kumar
          </p>
          <p className="text-xs tracking-[0.2em] mt-1.5 uppercase font-medium" style={{ color: "#8b9ab8" }}>
            AR/VR Engineer &bull; Full-Stack Developer
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Ankit187Kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs hover:text-[#4d7dff] transition-colors"
            style={{ color: "#4a5568" }}
            aria-label="GitHub"
          >
            <Github size={14} /> GitHub <ArrowUpRight size={10} />
          </a>
          <a
            href="https://www.linkedin.com/in/ankit-chaudhary-351a73264/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs hover:text-[#4d7dff] transition-colors"
            style={{ color: "#4a5568" }}
            aria-label="LinkedIn"
          >
            <Linkedin size={14} /> LinkedIn <ArrowUpRight size={10} />
          </a>
          <a
            href="mailto:ankitchaudhary7114@gmail.com"
            className="flex items-center gap-2 text-xs hover:text-[#4d7dff] transition-colors"
            style={{ color: "#4a5568" }}
            aria-label="Email"
          >
            <Mail size={14} /> Email
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[0.65rem] tracking-widest uppercase" style={{ color: "#4a5568" }}>
          &copy; {year} ANKIT KUMAR
        </p>
      </div>
    </footer>
  );
}
