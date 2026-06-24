"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { PROCESO } from "@/lib/site";

export default function Proceso() {
  return (
    <section id="disenos" className="cv-section relative py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          titulo="Diseñamos"
          destacado="tu camiseta"
          descripcion="Un proceso simple y directo, de tu idea a la cancha, siempre con tu aprobación en cada paso."
        />

        <div className="relative mt-16">
          {/* Linea timeline (desktop) */}
          <div className="absolute left-0 right-0 top-[34px] hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />

          <motion.ol
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="grid gap-8 lg:grid-cols-4"
          >
            {PROCESO.map((p, i) => (
              <motion.li
                key={p.paso}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="group relative"
              >
                {/* Numero */}
                <div className="relative z-10 mb-6 flex justify-center lg:justify-start">
                  <span className="relative grid h-[68px] w-[68px] place-items-center rounded-2xl border border-white/10 bg-carbon-800 font-display text-2xl font-bold text-white shadow-card transition-all duration-500 group-hover:border-spartan/50 group-hover:shadow-glow">
                    <span className="bg-gradient-to-br from-spartan-400 to-gold bg-clip-text text-transparent">
                      {p.paso}
                    </span>
                  </span>
                </div>

                <div className="rounded-3xl border border-white/10 bg-carbon-800/40 p-6 text-center transition-all duration-500 group-hover:-translate-y-1 group-hover:border-white/20 lg:text-left">
                  <h3 className="text-lg font-bold text-white">{p.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {p.descripcion}
                  </p>
                </div>

                {/* Conector flecha desktop */}
                {i < PROCESO.length - 1 && (
                  <span className="absolute -right-4 top-[26px] hidden text-white/20 lg:block">
                    ▸
                  </span>
                )}
              </motion.li>
            ))}
          </motion.ol>
        </div>

        <div className="mt-14 flex justify-center">
          <WhatsAppButton mensaje="Hola Guerrero Sport, quiero empezar el diseño de mi camiseta personalizada.">
            Empezar mi diseño
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
