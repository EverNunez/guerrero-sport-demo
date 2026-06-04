import Reveal from "@/components/ui/Reveal";

// Encabezado de seccion reutilizable.
export default function SectionHeading({
  eyebrow,
  titulo,
  destacado,
  descripcion,
  centrado = true,
}) {
  return (
    <div className={centrado ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-spartan" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-5 text-3xl font-bold uppercase leading-[1.05] text-white sm:text-4xl md:text-5xl">
          {titulo}{" "}
          {destacado && (
            <span className="text-gradient-spartan">{destacado}</span>
          )}
        </h2>
      </Reveal>
      {descripcion && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
            {descripcion}
          </p>
        </Reveal>
      )}
    </div>
  );
}
