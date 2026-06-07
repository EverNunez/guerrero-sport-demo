"use client";

import { motion } from "framer-motion";

// Marca de agua premium "GUERRERO SPORT" animada en el fondo.
// Movimiento muy suave, sin molestar la lectura. 100% decorativa.
export default function BrandWatermark({
  className = "",
  word = "GUERRERO",
  word2 = "SPORT",
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 flex flex-col items-center justify-center overflow-hidden ${className}`}
    >
      {/* Línea 1 — deriva lenta hacia la izquierda */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: [0, -28, 0] }}
        transition={{
          opacity: { duration: 1.2 },
          x: { duration: 18, repeat: Infinity, ease: "easeInOut" },
        }}
        className="select-none whitespace-nowrap font-display font-bold uppercase leading-none tracking-tighter text-transparent"
        style={{
          fontSize: "clamp(5rem, 22vw, 20rem)",
          WebkitTextStroke: "1.5px rgba(255,255,255,0.06)",
        }}
      >
        {word}
      </motion.span>

      {/* Línea 2 — deriva opuesta, con leve degradado rojo */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: [0, 28, 0] }}
        transition={{
          opacity: { duration: 1.2, delay: 0.2 },
          x: { duration: 22, repeat: Infinity, ease: "easeInOut" },
        }}
        className="-mt-[0.12em] select-none whitespace-nowrap bg-gradient-to-r from-spartan/[0.08] via-white/[0.05] to-spartan/[0.08] bg-clip-text font-display font-bold uppercase leading-none tracking-tighter text-transparent"
        style={{ fontSize: "clamp(5rem, 22vw, 20rem)" }}
      >
        {word2}
      </motion.span>
    </div>
  );
}
