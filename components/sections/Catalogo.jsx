"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductMedia from "@/components/ui/ProductMedia";
import Lightbox from "@/components/ui/Lightbox";
import { Icon } from "@/components/icons";
import { waLink } from "@/lib/site";
import { useStore } from "@/lib/store";

export default function Catalogo() {
  const { productos, categorias } = useStore();
  const visibles = productos.filter((p) => p.visible !== false);
  const nombreCategoria = (slug) =>
    categorias.find((c) => c.slug === slug)?.nombre || "";

  // Lightbox: navega sólo entre productos que tienen foto real.
  const conImagen = visibles.filter((p) => p.imagen);
  const lightboxItems = conImagen.map((p) => ({
    id: p.id,
    imagen: p.imagen,
    nombre: p.nombre,
    descripcion: p.descripcion,
    etiqueta: p.etiqueta,
    categoria: nombreCategoria(p.categoria),
    precio: p.precio,
    waMensaje: `Hola Guerrero Sport, me interesa: ${p.nombre}. Quiero más información.`,
  }));
  const [lightbox, setLightbox] = useState(null);
  const abrir = (p) => {
    const idx = conImagen.findIndex((x) => x.id === p.id);
    if (idx >= 0) setLightbox(idx);
  };

  return (
    <section id="catalogo" className="relative py-24 sm:py-28">
      {/* Fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-lines bg-[size:60px_60px] opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="absolute left-1/2 top-1/3 h-80 w-[70%] -translate-x-1/2 rounded-full bg-royal/10 blur-[130px]" />
      </div>

      <div className="container-px">
        <SectionHeading
          eyebrow="Catálogo"
          titulo="Diseños que"
          destacado="inspiran"
          descripcion="Ejemplos de lo que podemos crear para tu equipo. Tocá una prenda para verla en grande. Cada diseño se personaliza con tus colores, escudo y nombres."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibles.map((p) => {
            const ampliable = Boolean(p.imagen);
            return (
              <motion.article
                key={p.id || p.nombre}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-carbon-800/50 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-card"
              >
                {/* Imagen (prenda completa, sin recorte) */}
                <button
                  type="button"
                  onClick={() => abrir(p)}
                  disabled={!ampliable}
                  aria-label={ampliable ? `Ampliar ${p.nombre}` : p.nombre}
                  className={`relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-carbon-700/50 to-carbon-900 ${
                    ampliable ? "cursor-zoom-in" : "cursor-default"
                  }`}
                >
                  <div className="absolute inset-0 bg-grid-lines bg-[size:30px_30px] opacity-20" />
                  <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl transition-all duration-500 group-hover:bg-white/10" />
                  <ProductMedia
                    imagen={p.imagen}
                    alt={p.nombre}
                    base={p.base}
                    numero={p.numero}
                    fit="contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    jerseyClassName="h-full w-auto drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2"
                  />

                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-carbon-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
                    {p.etiqueta}
                  </span>

                  {/* Botón ampliar (aparece en hover) */}
                  {ampliable && (
                    <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-carbon-950/60 text-white/80 opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                      <Icon name="expand" className="h-4.5 w-4.5" />
                    </span>
                  )}
                </button>

                {/* Info */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-white">{p.nombre}</h3>
                    {p.precio ? (
                      <span className="shrink-0 rounded-lg bg-gold/15 px-2.5 py-1 text-xs font-bold text-gold">
                        {p.precio}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
                    {p.descripcion}
                  </p>
                  <a
                    href={waLink(`Hola Guerrero Sport, me interesa: ${p.nombre}. Quiero más información.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-spartan/40 bg-spartan/10 px-5 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-spartan hover:shadow-glow"
                  >
                    <Icon name="whatsapp" className="h-5 w-5" />
                    Consultar por WhatsApp
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {visibles.length === 0 && (
          <p className="mt-14 text-center text-white/50">
            Pronto cargaremos nuevos diseños. Escribinos por WhatsApp para ver
            todo el catálogo.
          </p>
        )}
      </div>

      <Lightbox
        items={lightboxItems}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onIndex={setLightbox}
      />
    </section>
  );
}
