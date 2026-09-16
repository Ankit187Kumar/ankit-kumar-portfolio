"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function HoverPreview({
  active,
  children,
}: {
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] as any }}
          className="fixed inset-0 z-[400] hidden lg:flex items-center justify-center p-10"
          style={{ pointerEvents: "none", background: "rgba(7,8,11,0.65)" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
