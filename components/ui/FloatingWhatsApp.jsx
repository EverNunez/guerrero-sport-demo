"use client";

import { motion } from "framer-motion";
import { waLink } from "@/lib/site";
import { Icon } from "@/components/icons";

// Boton flotante de WhatsApp siempre visible.
export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 16 }}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] p-3.5 text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] transition-transform duration-300 hover:scale-105"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
      <Icon name="whatsapp" className="h-7 w-7" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-300 group-hover:max-w-[180px] sm:block">
        Escribinos
      </span>
    </motion.a>
  );
}
