import Image from "next/image";
import Jersey from "@/components/ui/Jersey";

// Muestra una FOTO real si existe `imagen`; si no, cae al mockup SVG (Jersey).
// Se posiciona de forma absoluta dentro del contenedor relativo padre.
// - fit="cover": cubre todo el espacio (puede recortar). Ideal para galería.
// - fit="contain": muestra la prenda COMPLETA sin recortar. Ideal para catálogo.
// Rutas normales (/images/...) usan next/image; imágenes subidas (data URL) usan <img>.
export default function ProductMedia({
  imagen,
  alt,
  base = "spartan",
  numero = "10",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  jerseyClassName = "",
  jerseyPadding = "p-6",
  fit = "cover",
}) {
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";

  if (imagen) {
    const esDataUrl = imagen.startsWith("data:");
    if (esDataUrl) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imagen}
          alt={alt}
          className={`absolute inset-0 h-full w-full ${fitClass} transition-transform duration-700 group-hover:scale-105`}
        />
      );
    }
    return (
      <Image
        src={imagen}
        alt={alt}
        fill
        sizes={sizes}
        className={`${fitClass} transition-transform duration-700 group-hover:scale-105`}
      />
    );
  }
  return (
    <div className={`absolute inset-0 flex items-center justify-center ${jerseyPadding}`}>
      <Jersey base={base} numero={numero} className={jerseyClassName} />
    </div>
  );
}
