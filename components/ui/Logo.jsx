import Image from "next/image";

// Logo oficial Guerrero Sport.
// Emblema = casco espartano real (public/marca/casco.png).
// Wordmark = "Guerrero Sport" real en versión blanca (public/marca/logo-guerrero-white.png).
export default function Logo({ className = "", showText = true, emblemSize = 40 }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span
        className="relative grid shrink-0 place-items-center"
        style={{ width: emblemSize, height: emblemSize }}
      >
        <span className="absolute inset-0 rounded-full bg-spartan/25 blur-md" />
        <Image
          src="/marca/casco.png"
          alt="Emblema Guerrero Sport"
          width={emblemSize}
          height={emblemSize}
          priority
          className="relative h-full w-full object-contain drop-shadow-[0_2px_8px_rgba(226,16,42,0.45)]"
        />
      </span>
      {showText && (
        <Image
          src="/marca/logo-guerrero-white.png"
          alt="Guerrero Sport"
          width={150}
          height={51}
          priority
          className="h-7 w-auto sm:h-8"
        />
      )}
    </div>
  );
}
