"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Icon } from "@/components/icons";
import { BENEFICIOS } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

export default function Equipos() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-carbon-800/50 p-8 sm:p-12 lg:p-14">
          {/* Fondo decorativo */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-spartan/20 blur-[100px]" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-royal/20 blur-[100px]" />
            <div className="absolute inset-0 bg-grid-lines bg-[size:50px_50px] opacity-20" />
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Texto + beneficios */}
            <div>
              <Reveal>
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-royal-400" />
                  Equipos y clubes
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">
                  Uniformes con{" "}
                  <span className="text-gradient-spartan">identidad propia</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
                  Creamos uniformes deportivos personalizados para equipos
                  amateurs, clubes, torneos barriales, academias y empresas.
                </p>
              </Reveal>

              <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
                className="mt-7 grid gap-3 sm:grid-cols-2"
              >
                {BENEFICIOS.map((b) => (
                  <motion.li
                    key={b}
                    variants={{
                      hidden: { opacity: 0, x: 16 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 transition-colors hover:border-white/20"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-spartan to-spartan-600 text-white shadow-glow">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-white/85">{b}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <Reveal delay={0.2}>
                <div className="mt-8">
                  <WhatsAppButton mensaje="Hola Guerrero Sport, somos un equipo/club y queremos cotizar uniformes personalizados.">
                    Cotizar para mi equipo
                  </WhatsAppButton>
                </div>
              </Reveal>
            </div>

            {/* Foto real del trabajo */}
            <Reveal delay={0.1} className="order-first lg:order-last">
              <div className="group relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-white/10 shadow-card">
                <Image
                  src="/images/guerrero-sport/galeria/galeria-franco-conjunto.webp"
                  alt="Uniforme completo personalizado para club"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="eyebrow !border-white/20 !bg-black/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    Trabajo realizado
                  </span>
                  <p className="mt-3 text-lg font-bold text-white">
                    Uniforme completo para club
                  </p>
                  <p className="text-sm text-white/70">
                    Diseño, confección y entrega coordinada.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
