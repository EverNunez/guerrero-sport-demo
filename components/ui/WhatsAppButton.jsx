import { waLink } from "@/lib/site";
import { Icon } from "@/components/icons";

// Boton de WhatsApp reutilizable. variant: "primary" | "secondary"
export default function WhatsAppButton({
  children = "Pedir presupuesto por WhatsApp",
  mensaje,
  variant = "primary",
  className = "",
}) {
  const cls = variant === "secondary" ? "btn-secondary" : "btn-primary sheen";
  return (
    <a
      href={waLink(mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cls} ${className}`}
    >
      <Icon name="whatsapp" className="h-5 w-5" />
      {children}
    </a>
  );
}
