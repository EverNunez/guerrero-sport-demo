"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/icons";
import { waLink } from "@/lib/site";

// Lightbox premium para ampliar imágenes del catálogo / galería.
// - Fondo oscuro con blur, animación suave, imagen en alta calidad (object-contain).
// - Cierra con ESC, con clic fuera y con el botón X.
// - Navegación con flechas (teclado y botones).
// items: [{ imagen, nombre, descripcion, etiqueta }]
export default function Lightbox({ items, index, onClose, onIndex }) {
  const open = index !== null && index >= 0;
  const item = open ? items[index] : null;

  const goPrev = useCallback(
    (e) => {
      e?.stopPropagation();
      onIndex((index - 1 + items.length) % items.length);
    },
    [index, items.length, onIndex]
  );
  const goNext = useCallback(
    (e) => {
      e?.stopPropagation();
      onIndex((index + 1) % items.length);
    },
    [index, items.length, onIndex]
  );

  // Teclado: ESC / flechas. Bloquea el scroll del fondo.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, goPrev, goNext]);

  const esDataUrl = item?.imagen?.startsWith("data:");

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-carbon-950/90 p-4 backdrop-blur-xl sm:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item?.nombre || "Imagen ampliada"}
        >
          {/* Botón cerrar */}
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-white/80 backdrop-blur transition-colors hover:bg-white/15 hover:text-white sm:right-6 sm:top-6"
          >
            <Icon name="x" className="h-6 w-6" />
          </button>

          {/* Flecha anterior */}
          {items.length > 1 && (
            <button
              onClick={goPrev}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-white/80 backdrop-blur transition-colors hover:bg-white/15 hover:text-white sm:left-6"
            >
              <Icon name="arrow" className="h-6 w-6 rotate-180" />
            </button>
          )}

          {/* Contenido */}
          <motion.div
            key={item.imagen}
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-full w-full max-w-3xl flex-col items-center"
          >
            <div className="relative h-[68vh] w-full">
              {esDataUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="absolute inset-0 h-full w-full object-contain drop-shadow-2xl"
                />
              ) : (
                <Image
                  src={item.imagen}
                  alt={item.nombre}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-contain drop-shadow-2xl"
                />
              )}
            </div>

            {/* Pie de foto */}
            {(item.nombre || item.descripcion) && (
              <div className="mt-4 max-w-xl text-center">
                {/* Etiqueta + categoría */}
                <div className="mb-2 flex flex-wrap items-center justify-center gap-2">
                  {item.etiqueta && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70">
                      {item.etiqueta}
                    </span>
                  )}
                  {item.categoria && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-spartan/30 bg-spartan/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-spartan-400">
                      <Icon name="tag" className="h-3.5 w-3.5" />
                      {item.categoria}
                    </span>
                  )}
                </div>

                {item.nombre && (
                  <h3 className="text-xl font-bold text-white">{item.nombre}</h3>
                )}

                {item.precio && (
                  <p className="mt-1.5 text-lg font-bold text-gold">{item.precio}</p>
                )}

                {item.descripcion && (
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {item.descripcion}
                  </p>
                )}

                {/* Botón WhatsApp para consultar por este producto */}
                {item.nombre && (
                  <a
                    href={waLink(
                      item.waMensaje ||
                        `Hola Guerrero Sport, me interesa: ${item.nombre}. Quiero más información.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="btn-primary sheen mt-5 !py-3 !text-xs"
                  >
                    <Icon name="whatsapp" className="h-5 w-5" />
                    Consultar por WhatsApp
                  </a>
                )}

                {items.length > 1 && (
                  <p className="mt-4 text-xs font-medium tracking-wider text-white/40">
                    {index + 1} / {items.length}
                  </p>
                )}
              </div>
            )}
          </motion.div>

          {/* Flecha siguiente */}
          {items.length > 1 && (
            <button
              onClick={goNext}
              aria-label="Siguiente"
              className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-white/80 backdrop-blur transition-colors hover:bg-white/15 hover:text-white sm:right-6"
            >
              <Icon name="arrow" className="h-6 w-6" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
