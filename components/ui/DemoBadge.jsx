"use client";

import { motion } from "framer-motion";

// Etiqueta flotante "Demo visual" visible en todo el sitio.
export default function DemoBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="pointer-events-none fixed bottom-4 left-4 z-40"
    >
      <span className="glass flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
        </span>
        Demo visual
      </span>
    </motion.div>
  );
}
