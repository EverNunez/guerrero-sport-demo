import Image from "next/image";
import Jersey from "@/components/ui/Jersey";

// Muestra una FOTO real si existe `imagen`; si no, cae al mockup SVG (Jersey).
// - Rutas normales (/catalogo/foto.jpg) usan next/image optimizado.
// - Imágenes subidas desde el panel (data URLs) usan <img> directo.
export default function ProductMedia({
  imagen,
  alt,
  base = "spartan",
  numero = "10",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  jerseyClassName = "",
}) {
  if (imagen) {
    const esDataUrl = imagen.startsWith("data:");
    if (esDataUrl) {
      // eslint-disable-next-line @next/next/no-img-element
      return (
        <img
          src={imagen}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      );
    }
    return (
      <Image
        src={imagen}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }
  return <Jersey base={base} numero={numero} className={jerseyClassName} />;
}
