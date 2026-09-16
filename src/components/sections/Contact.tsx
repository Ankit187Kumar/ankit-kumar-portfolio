"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any } },
};

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      // Fallback while no email service is configured yet
      const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
      const body = encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      );
      window.location.href = `mailto:ankitchaudhary7114@gmail.com?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio contact from ${formState.name}`,
          from_name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });
      const result = await res.json();
      setStatus(result.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[rgba(15,23,42,0.04)] border border-[rgba(15,23,42,0.1)] rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-[#94a3b8]";
  const inputStyle = { color: "#0f172a" };
  const inputFocus = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.target.style.borderColor = "rgba(77,125,255,0.4)";
      e.target.style.boxShadow = "0 0 0 1px rgba(77,125,255,0.15)";
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.target.style.borderColor = "rgba(15,23,42,0.1)";
      e.target.style.boxShadow = "none";
    },
  };

  return (
    <section id="contact" className="relative py-32 px-6 lg:px-12 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(77,125,255,0.3), transparent)" }}
      />

      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(77,125,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Cinematic heading */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mb-16"
        >
          <h2 className="heading-xl" style={{ color: "#0f172a", lineHeight: 0.9 }}>
            LET&apos;S BUILD
            <br />
            <span className="gradient-text-blue">SOMETHING</span>
            <br />
            INTERACTIVE.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="space-y-8"
          >
            <motion.p variants={fadeUp} className="text-base leading-relaxed" style={{ color: "#475569" }}>
              Looking to build an immersive AR/VR experience, an interactive exhibition,
              a scalable web application, or a data engineering solution? Let&apos;s talk.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-4">
              <a
                href="mailto:ankitchaudhary7114@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(77,125,255,0.1)", border: "1px solid rgba(77,125,255,0.2)" }}
                >
                  <Mail size={16} style={{ color: "#3d63d1" }} />
                </div>
                <div>
                  <p className="text-[0.6rem] tracking-widest uppercase mb-0.5" style={{ color: "#64748b" }}>
                    EMAIL
                  </p>
                  <p
                    className="text-sm group-hover:text-[#3d63d1] transition-colors"
                    style={{ color: "#0f172a" }}
                  >
                    ankitchaudhary7114@gmail.com
                  </p>
                </div>
              </a>

              <a href="tel:+917618227114" className="flex items-center gap-4 group">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(5,150,105,0.1)", border: "1px solid rgba(5,150,105,0.2)" }}
                >
                  <Phone size={16} style={{ color: "#059669" }} />
                </div>
                <div>
                  <p className="text-[0.6rem] tracking-widest uppercase mb-0.5" style={{ color: "#64748b" }}>
                    PHONE
                  </p>
                  <p
                    className="text-sm group-hover:text-[#059669] transition-colors"
                    style={{ color: "#0f172a" }}
                  >
                    +91 76182 27114
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/ankit-chaudhary-351a73264/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(157,107,255,0.1)", border: "1px solid rgba(157,107,255,0.2)" }}
                >
                  <Linkedin size={16} style={{ color: "#7c3aed" }} />
                </div>
                <div>
                  <p className="text-[0.6rem] tracking-widest uppercase mb-0.5" style={{ color: "#64748b" }}>
                    LINKEDIN
                  </p>
                  <p
                    className="text-sm group-hover:text-[#7c3aed] transition-colors"
                    style={{ color: "#0f172a" }}
                  >
                    ankit-chaudhary-351a73264
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/Ankit187Kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(72,224,255,0.08)", border: "1px solid rgba(72,224,255,0.2)" }}
                >
                  <Github size={16} style={{ color: "#0891b2" }} />
                </div>
                <div>
                  <p className="text-[0.6rem] tracking-widest uppercase mb-0.5" style={{ color: "#64748b" }}>
                    GITHUB
                  </p>
                  <p
                    className="text-sm group-hover:text-[#0891b2] transition-colors"
                    style={{ color: "#0f172a" }}
                  >
                    Ankit187Kumar
                  </p>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="glass-card rounded-2xl p-7"
              style={{ border: "1px solid rgba(77,125,255,0.15)" }}
            >
              {status !== "sent" ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[0.6rem] tracking-[0.2em] uppercase mb-2 block" style={{ color: "#64748b" }}>
                      NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className={inputClass}
                      style={inputStyle}
                      value={formState.name}
                      onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                      {...inputFocus}
                    />
                  </div>
                  <div>
                    <label className="text-[0.6rem] tracking-[0.2em] uppercase mb-2 block" style={{ color: "#64748b" }}>
                      EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className={inputClass}
                      style={inputStyle}
                      value={formState.email}
                      onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                      {...inputFocus}
                    />
                  </div>
                  <div>
                    <label className="text-[0.6rem] tracking-[0.2em] uppercase mb-2 block" style={{ color: "#64748b" }}>
                      MESSAGE
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project or idea..."
                      className={`${inputClass} resize-none`}
                      style={inputStyle}
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      {...(inputFocus as unknown as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-[0.7rem]" style={{ color: "#dc2626" }}>
                      Something went wrong sending your message — please try again, or email me directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold tracking-wider transition-all duration-300 hover:scale-[1.01] disabled:opacity-60 disabled:hover:scale-100"
                    style={{
                      background: "linear-gradient(135deg, #3d63d1 0%, #0891b2 100%)",
                      color: "#07080b",
                      boxShadow: "0 0 25px rgba(77,125,255,0.3)",
                    }}
                  >
                    <Send size={14} />
                    {status === "sending" ? "SENDING…" : "SEND MESSAGE →"}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-3">
                  <div className="text-3xl">✓</div>
                  <p className="text-sm font-medium" style={{ color: "#0f172a" }}>
                    Message sent — thank you!
                  </p>
                  <p className="text-xs" style={{ color: "#475569" }}>
                    I&apos;ll get back to you soon. You can also reach me directly at ankitchaudhary7114@gmail.com
                  </p>
                  <button
                    onClick={() => {
                      setFormState({ name: "", email: "", message: "" });
                      setStatus("idle");
                    }}
                    className="text-xs hover:text-[#3d63d1] transition-colors"
                    style={{ color: "#64748b" }}
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
