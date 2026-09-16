"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", ...navLinks.map((l) => l.href.replace("#", ""))];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-3xl"
      >
        <div className="glass-dark flex items-center justify-between gap-1 rounded-full p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
          <button
            onClick={() => scrollTo("#hero")}
            className="ml-3 mr-1 text-[0.72rem] font-bold tracking-[0.08em] uppercase text-white whitespace-nowrap hover:text-white/80 transition-colors"
          >
            Ankit Kumar
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="relative rounded-full px-3 py-1.5 text-[0.7rem] font-medium tracking-wide transition-colors"
                  style={{ color: isActive ? "#ffffff" : "rgba(255,255,255,0.65)" }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href="https://github.com/Ankit187Kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-chaudhary-351a73264/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full py-1.5 pl-3.5 pr-1.5 text-[0.7rem] font-semibold tracking-wide transition-all hover:shadow-[0_0_18px_rgba(244,241,235,0.3)]"
              style={{ background: "#f4f1eb", color: "#0f172a" }}
            >
              Contact
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[#f4f1eb]">
                <ArrowUpRight size={11} />
              </span>
            </button>
            <button
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full text-white/80"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass-dark fixed top-20 left-4 right-4 z-[99] rounded-2xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-medium tracking-wide text-left py-2 border-b border-white/10 last:border-0 text-white/75 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/Ankit187Kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-white/75"
                >
                  <Github size={14} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ankit-chaudhary-351a73264/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-white/75"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
