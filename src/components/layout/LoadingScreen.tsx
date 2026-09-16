"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 600);
          }, 200);
          return 100;
        }
        return prev + Math.random() * 18 + 8;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "#07080b" }}
        >
          {/* Subtle radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(77,125,255,0.08) 0%, transparent 70%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-12 h-12 border border-[rgba(77,125,255,0.4)] rounded-full flex items-center justify-center"
              style={{ boxShadow: "0 0 30px rgba(77,125,255,0.25)" }}
            >
              <div className="w-5 h-5 border border-[rgba(72,224,255,0.6)] rounded-full" />
            </motion.div>

            {/* Name */}
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, letterSpacing: "0.5em" }}
                animate={{ opacity: 1, letterSpacing: "0.25em" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl font-bold tracking-[0.25em] uppercase"
                style={{ color: "#f0f2f8" }}
              >
                ANKIT KUMAR
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="text-[0.65rem] tracking-[0.3em] uppercase mt-2"
                style={{ color: "#4d7dff" }}
              >
                AR / VR &bull; SOFTWARE &bull; WEB
              </motion.p>
            </div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-48 h-[1px] rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${Math.min(progress, 100)}%`,
                  background:
                    "linear-gradient(90deg, #4d7dff 0%, #48e0ff 100%)",
                  boxShadow: "0 0 12px rgba(72,224,255,0.5)",
                  transition: "width 0.08s linear",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
