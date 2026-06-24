"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Icon } from "@/components/icons";
import { SERVICIOS } from "@/lib/site";

const ringColor = {
  spartan: "from-spartan/30 text-spartan-400",
  royal: "from-royal/30 text-royal-400",
  gold: "from-gold/30 text-gold",
};

export default function Servicios() {
  return (
    <section id="servicios" className="cv-section relative py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Lo que hacemos"
          titulo="Servicios"
          destacado="a tu medida"
          descripcion="Todo lo que tu equipo necesita para verse profesional, en un solo lugar y con atención directa."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICIOS.map((s) => (
            <motion.article
              key={s.titulo}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-carbon-800/60 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-card"
            >
              {/* Resplandor en hover */}
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${
                  ringColor[s.color].split(" ")[0]
                } to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
              />

              <span
                className={`relative grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br ${ringColor[s.color]} to-transparent`}
              >
                <Icon name={s.icon} className="h-7 w-7" />
              </span>

              <h3 className="relative mt-6 text-xl font-bold text-white">
                {s.titulo}
              </h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-white/55">
                {s.descripcion}
              </p>

              <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white/40 transition-colors group-hover:text-spartan-400">
                Consultar
                <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
