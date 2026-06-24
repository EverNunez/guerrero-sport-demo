"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductMedia from "@/components/ui/ProductMedia";
import Lightbox from "@/components/ui/Lightbox";
import { Icon } from "@/components/icons";
import { useStore } from "@/lib/store";

export default function Galeria() {
  const { galeria } = useStore();
  const visibles = galeria.filter((g) => g.visible !== false);

  // Items para el lightbox (sólo con foto), normalizados.
  const items = visibles
    .filter((g) => g.imagen)
    .map((g) => ({
      id: g.id,
      imagen: g.imagen,
      nombre: g.titulo,
      descripcion: g.tipo,
      etiqueta: g.tipo,
      waMensaje: `Hola Guerrero Sport, me gustó este diseño: ${g.titulo}. Quiero algo similar para mi equipo.`,
    }));
  const [lightbox, setLightbox] = useState(null);
  const abrir = (g) => {
    const idx = items.findIndex((x) => x.id === g.id);
    if (idx >= 0) setLightbox(idx);
  };

  return (
    <section id="galeria" className="cv-section relative py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Nuestros trabajos"
          titulo="Galería de"
          destacado="diseños"
          descripcion="Una muestra del estilo Guerrero Sport: identidad fuerte, colores vivos y acabado profesional. Tocá cualquier imagen para verla en grande."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[230px] lg:grid-cols-4"
        >
          {visibles.map((g) => {
            const ampliable = Boolean(g.imagen);
            return (
              <motion.figure
                key={g.id || g.titulo}
                variants={{
                  hidden: { opacity: 0, scale: 0.94 },
                  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-carbon-700/60 to-carbon-900 ${g.span}`}
              >
                <div className="absolute inset-0 bg-grid-lines bg-[size:28px_28px] opacity-25" />
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl" />

                <ProductMedia
                  imagen={g.imagen}
                  alt={`${g.titulo} — ${g.tipo}`}
                  base={g.base}
                  numero={g.numero}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  jerseyClassName="h-full w-auto drop-shadow-2xl transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3"
                />

                {/* Botón de ampliación que cubre la tarjeta */}
                {ampliable && (
                  <button
                    type="button"
                    onClick={() => abrir(g)}
                    aria-label={`Ampliar ${g.titulo}`}
                    className="absolute inset-0 z-10 cursor-zoom-in"
                  >
                    <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-carbon-950/60 text-white/80 opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                      <Icon name="expand" className="h-4 w-4" />
                    </span>
                  </button>
                )}

                {/* Overlay info */}
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-carbon-950 via-carbon-950/70 to-transparent p-5 opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-spartan-400">
                    {g.tipo}
                  </p>
                  <p className="text-base font-bold text-white">{g.titulo}</p>
                </figcaption>
              </motion.figure>
            );
          })}
        </motion.div>
      </div>

      <Lightbox
        items={items}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onIndex={setLightbox}
      />
    </section>
  );
}
