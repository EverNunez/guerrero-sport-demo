import Image from "next/image";
import Jersey from "@/components/ui/Jersey";

// Muestra una FOTO real si existe `imagen`; si no, cae al mockup SVG (Jersey).
// Asi el demo funciona con o sin fotos, y agregar una foto es trivial.
export default function ProductMedia({
  imagen,
  alt,
  base = "spartan",
  numero = "10",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  jerseyClassName = "",
}) {
  if (imagen) {
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
