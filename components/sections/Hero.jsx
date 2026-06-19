"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BrandWatermark from "@/components/ui/BrandWatermark";
import { Icon } from "@/components/icons";

const stats = [
  { valor: "+1000", label: "Seguidores" },
  { valor: "+120", label: "Diseños creados" },
  { valor: "100%", label: "Personalizado" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      {/* ===== Fondo tipo estadio ===== */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-carbon-950" />
        <div className="absolute inset-0 bg-radial-spotlight" />
        {/* Grilla de cancha en perspectiva */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-grid-lines bg-[size:46px_46px] [mask-image:linear-gradient(to_top,black,transparent)] opacity-60" />
        {/* Halos de color */}
        <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-spartan/25 blur-[110px] animate-pulse-beam" />
        <div className="absolute -right-24 top-40 h-96 w-96 rounded-full bg-royal/25 blur-[120px] animate-pulse-beam" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[60%] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
        {/* Haces de luz de reflectores */}
        <div className="absolute left-1/4 top-0 h-[60%] w-40 -translate-x-1/2 rotate-[18deg] bg-gradient-to-b from-white/10 to-transparent blur-2xl" />
        <div className="absolute right-1/4 top-0 h-[60%] w-40 translate-x-1/2 -rotate-[18deg] bg-gradient-to-b from-white/10 to-transparent blur-2xl" />
        <div className="noise absolute inset-0 opacity-[0.05] mix-blend-overlay" />
      </div>

      {/* ===== Marca de agua animada "GUERRERO SPORT" ===== */}
      <BrandWatermark className="-z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="container-px grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ===== Texto ===== */}
        <div className="text-center lg:text-left">
          {/* Logo oficial Guerrero Sport */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex justify-center lg:justify-start"
          >
            <Image
              src="/marca/logo-guerrero-white.png"
              alt="Guerrero Sport"
              width={300}
              height={102}
              priority
              className="h-12 w-auto drop-shadow-[0_4px_16px_rgba(226,16,42,0.45)] sm:h-14"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="eyebrow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Presidente Franco · Barrio Santa Rosa
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl font-bold uppercase leading-[0.98] text-white sm:text-5xl md:text-6xl lg:text-[4rem]"
          >
            Indumentaria deportiva{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-spartan-400 via-spartan to-gold bg-clip-text text-transparent">
                personalizada
              </span>
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-spartan to-gold/0" />
            </span>{" "}
            para equipos con identidad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg lg:mx-0"
          >
            Diseñamos y confeccionamos camisetas, uniformes y prendas deportivas
            para clubes, equipos, torneos y empresas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <WhatsAppButton className="w-full sm:w-auto">
              Pedir presupuesto
            </WhatsAppButton>
            <a href="#catalogo" className="btn-secondary w-full sm:w-auto">
              Ver diseños
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex items-center justify-center gap-8 lg:justify-start"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="font-display text-3xl font-bold text-white">
                  {s.valor}
                </div>
                <div className="text-xs uppercase tracking-wider text-white/45">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ===== Camisetas reales destacadas ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          {/* Plataforma luminosa giratoria */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_0deg,rgba(226,16,42,0.25),transparent_30%,rgba(30,91,255,0.18)_55%,transparent_75%,rgba(233,185,73,0.22))] blur-2xl"
          />
          {/* Camisetas reales protagonistas (collage) */}
          <div className="relative animate-float-slow pb-4 pl-4">
            {/* Camiseta principal */}
            <div className="relative ml-auto aspect-[4/5] w-[80%] overflow-hidden rounded-[2rem] border border-white/15 shadow-card">
              <Image
                src="/images/guerrero-sport/hero/camiseta-principal.webp"
                alt="Camiseta deportiva personalizada Guerrero Sport"
                fill
                sizes="(max-width: 1024px) 70vw, 360px"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="eyebrow !border-white/20 !bg-black/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Diseño exclusivo
                </span>
              </div>
            </div>
            {/* Camiseta secundaria superpuesta */}
            <div className="absolute bottom-0 left-0 aspect-[4/5] w-[44%] overflow-hidden rounded-2xl border border-white/15 shadow-card ring-4 ring-carbon-950">
              <Image
                src="/images/guerrero-sport/hero/camiseta-secundaria.webp"
                alt="Camiseta deportiva Paraguay personalizada"
                fill
                sizes="(max-width: 1024px) 40vw, 180px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Tarjetas flotantes */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="glass absolute -left-2 top-6 rounded-2xl px-4 py-3 sm:-left-4"
          >
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-spartan/20 text-spartan-400">
                <Icon name="design" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Tu escudo</p>
                <p className="text-xs text-white/50">Listo para producir</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.05, duration: 0.7 }}
            className="glass absolute -right-2 bottom-8 rounded-2xl px-4 py-3 sm:-right-4"
          >
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold/20 text-gold">
                <Icon name="trophy" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Para torneos</p>
                <p className="text-xs text-white/50">Equipos y clubes</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Ticker inferior */}
      <div className="absolute inset-x-0 bottom-0 border-y border-white/10 bg-carbon-950/60 py-3 backdrop-blur">
        <div className="flex w-max animate-ticker gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10">
              {[
                "Camisetas personalizadas",
                "Uniformes para equipos",
                "Diseño a medida",
                "Clubes y torneos",
                "Indumentaria para empresas",
                "Asesoría de diseño",
              ].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-white/40"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-spartan" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
