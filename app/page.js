import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Servicios from "@/components/sections/Servicios";
import Catalogo from "@/components/sections/Catalogo";
import Proceso from "@/components/sections/Proceso";
import Galeria from "@/components/sections/Galeria";
import Equipos from "@/components/sections/Equipos";
import Ubicacion from "@/components/sections/Ubicacion";
import CTA from "@/components/sections/CTA";
import DemoBadge from "@/components/ui/DemoBadge";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Catalogo />
        <Proceso />
        <Galeria />
        <Equipos />
        <Ubicacion />
        <CTA />
      </main>
      <Footer />
      <DemoBadge />
      <FloatingWhatsApp />
    </>
  );
}
