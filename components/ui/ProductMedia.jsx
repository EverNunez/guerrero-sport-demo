import Image from "next/image";
import Jersey from "@/components/ui/Jersey";

// Muestra una FOTO real si existe `imagen`; si no, cae al mockup SVG (Jersey).
// Se posiciona de forma absoluta dentro del contenedor relativo padre:
// - Foto: cubre todo el espacio (borde a borde, object-cover).
// - Mockup: centrado con margen.
// Rutas normales (/images/...) usan next/image; imágenes subidas (data URL) usan <img>.
export default function ProductMedia({
  imagen,
  alt,
  base = "spartan",
  numero = "10",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  jerseyClassName = "",
  jerseyPadding = "p-6",
}) {
  if (imagen) {
    const esDataUrl = imagen.startsWith("data:");
    if (esDataUrl) {
      // eslint-disable-next-line @next/next/no-img-element
      return (
        <img
          src={imagen}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      );
    }
    return (
      <Image
        src={imagen}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    );
  }
  return (
    <div className={`absolute inset-0 flex items-center justify-center ${jerseyPadding}`}>
      <Jersey base={base} numero={numero} className={jerseyClassName} />
    </div>
  );
}
