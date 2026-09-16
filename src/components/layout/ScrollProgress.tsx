"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[200] h-[2px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #4d7dff 0%, #48e0ff 50%, #9d6bff 100%)",
        boxShadow: "0 0 10px rgba(72,224,255,0.5)",
      }}
    />
  );
}
