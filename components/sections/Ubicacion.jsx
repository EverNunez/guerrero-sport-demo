"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Reveal from "@/components/ui/Reveal";
import { Icon } from "@/components/icons";
import { useStore } from "@/lib/store";

export default function Ubicacion() {
  const { contacto: CONTACTO } = useStore();

  return (
    <section id="contacto" className="relative py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Visítanos"
          titulo="Ubicación y"
          destacado="horarios"
          descripcion="Estamos en Presidente Franco. Escribinos por WhatsApp y coordinamos tu pedido al instante."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Datos */}
          <Reveal className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-carbon-800/50 p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-spartan/15 text-spartan-400">
                <Icon name="pin" className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm uppercase tracking-wider text-white/45">
                  Dirección
                </p>
                <p className="text-lg font-semibold text-white">
                  {CONTACTO.direccion}
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-royal/15 text-royal-400">
                <Icon name="clock" className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <p className="text-sm uppercase tracking-wider text-white/45">
                  Horarios
                </p>
                <ul className="mt-2 space-y-1.5">
                  {CONTACTO.horarios.map((h) => (
                    <li
                      key={h.dia}
                      className="flex items-center justify-between text-white/85"
                    >
                      <span className="font-medium">{h.dia}</span>
                      <span className="text-white/60">{h.hora}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold/15 text-gold">
                <Icon name="whatsapp" className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm uppercase tracking-wider text-white/45">
                  WhatsApp
                </p>
                <p className="text-lg font-semibold text-white">
                  {CONTACTO.telefonoVisible}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <WhatsAppButton className="w-full">Contactar ahora</WhatsAppButton>
            </div>
          </Reveal>

          {/* Mapa estilizado (placeholder premium) */}
          <Reveal
            delay={0.1}
            className="relative min-h-[340px] overflow-hidden rounded-3xl border border-white/10 bg-carbon-900"
          >
            <div className="absolute inset-0 bg-grid-lines bg-[size:40px_40px] opacity-40" />
            {/* "Calles" decorativas */}
            <div className="absolute left-0 top-1/3 h-2 w-full -rotate-6 bg-white/[0.04]" />
            <div className="absolute left-1/4 top-0 h-full w-2 rotate-3 bg-white/[0.04]" />
            <div className="absolute right-1/4 top-0 h-full w-1.5 -rotate-2 bg-white/[0.04]" />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-transparent to-transparent" />

            {/* Pin */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="relative flex h-16 w-16 items-center justify-center">
                <span className="absolute h-full w-full animate-ping rounded-full bg-spartan/30" />
                <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-spartan to-spartan-600 text-white shadow-glow">
                  <Icon name="pin" className="h-7 w-7" />
                </span>
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="glass rounded-2xl px-5 py-4">
                <p className="text-sm font-semibold text-white">
                  Guerrero Sport
                </p>
                <p className="text-sm text-white/55">{CONTACTO.direccion}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
