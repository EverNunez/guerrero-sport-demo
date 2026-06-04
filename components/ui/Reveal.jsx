"use client";

import { motion } from "framer-motion";

// Animacion de aparicion al hacer scroll (suave, premium).
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
  once = true,
  as = "div",
}) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
