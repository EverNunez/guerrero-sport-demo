"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

// Slider premium automático para el Hero.
// - Avance automático (pausa al pasar el mouse, al salir de pantalla y con reduced-motion).
// - Transición suave con Framer Motion (crossfade + zoom sutil).
// - Indicadores (dots) clickeables.
export default function HeroSlider({ slides, interval = 4500 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const reduce = useReducedMotion();
  const ref = useRef(null);

  // Sólo reproduce mientras el slider está en pantalla (ahorra batería/CPU en móvil).
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (paused || reduce || !visible || slides.length <= 1) return;
    const t = setInterval(
      () => setIndex((v) => (v + 1) % slides.length),
      interval
    );
    return () => clearInterval(t);
  }, [paused, reduce, visible, slides.length, interval]);

  const slide = slides[index];

  return (
    <div
      ref={ref}
      className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/15 shadow-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Imágenes apiladas: crossfade por opacidad (sin montar/desmontar nodos) */}
      {slides.map((s, i) => (
        <motion.div
          key={s.src}
          aria-hidden={i !== index}
          initial={false}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-0"
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="(max-width: 1024px) 80vw, 380px"
            className="object-cover"
          />
        </motion.div>
      ))}

      {/* Degradado para contraste */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carbon-950/80 via-transparent to-carbon-950/10" />

      {/* Etiqueta del slide */}
      <div className="absolute inset-x-0 top-0 p-4">
        <motion.span
          key={slide.etiqueta}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="eyebrow !border-white/20 !bg-black/40"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {slide.etiqueta}
        </motion.span>
      </div>

      {/* Indicadores */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 p-5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Ver imagen ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-7 bg-spartan" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
