"use client";

import { motion } from "framer-motion";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function CTA() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-carbon-800 to-carbon-950 px-6 py-16 text-center sm:px-12 sm:py-20"
        >
          {/* Fondo dinamico */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-72 w-[80%] -translate-x-1/2 rounded-full bg-spartan/25 blur-[120px]" />
            <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-royal/20 blur-[110px]" />
            <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-gold/15 blur-[110px]" />
            <div className="absolute inset-0 bg-grid-lines bg-[size:48px_48px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          </div>

          <h2 className="mx-auto max-w-3xl text-3xl font-bold uppercase leading-[1.05] text-white sm:text-5xl">
            ¿Querés que tu equipo tenga una{" "}
            <span className="text-gradient-spartan">identidad única</span>?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/60 sm:text-lg">
            Convertimos tu idea en una camiseta lista para la cancha. Escribinos
            y recibí tu presupuesto sin compromiso.
          </p>
          <div className="mt-9 flex justify-center">
            <WhatsAppButton className="!px-9 !py-4 !text-base">
              Solicitar presupuesto por WhatsApp
            </WhatsAppButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
