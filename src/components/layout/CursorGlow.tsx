"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    const move = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0 hidden md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(77,125,255,0.06) 0%, rgba(72,224,255,0.03) 40%, transparent 70%)",
        transition: "transform 0.15s ease-out",
        willChange: "transform",
      }}
    />
  );
}
